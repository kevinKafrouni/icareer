import React, { useEffect, useState } from 'react'
import Task from './Task'
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function ApplicationsDashboard() {

    const {jobid} = useParams();
    const [tasks,setTasks] = useState([]);

    const [statuses,setStatuses] = useState([]);
    useEffect(()=>{
        const fetchStatusList = async ()=>{
            const res = await axios.get("http://localhost:8000/statuslist");
            setStatuses(res.data);
        }
        fetchStatusList();
    },[])

    useEffect(()=>{
        const fetchApplications = async ()=>{
            const res = await axios.get(`http://localhost:8000/jobapplications?jobid=${jobid}`);
            setTasks(res.data);
        }
        fetchApplications();
    },[])

    const columns = statuses.map(status =>{
        const taskInColumn = tasks.filter(task=> task.status===status.title);
        return {
            statid:status.id,
            title: status.title,
            tasks: taskInColumn

        }
    })
    const handleDrop = (e, targetStatus,statid) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        const updatedTasks = tasks.map(task => {
          if (task.application_id == id) {
            const res = axios.post("http://localhost:8000/jobapp/changestatus",{id,statid})
            task.status=targetStatus;
            return task;
          }
          console.log(task);
          return task;
        });
        console.log(updatedTasks);
        setTasks(updatedTasks);
      };
      
  return (
    
    <div className='flex divide-x gap-4 mt-24'>
        <div className='bg-red-300' onDrop={(e)=>handleDrop(e,"rejected",5)} onDragOver={(e)=>e.preventDefault()}>
            <h1 className='text-3xl p-2 capitalize font-bold text-red-800'>Reject Application</h1>
        </div>
        {columns.map(column=>(
            <div onDrop={(e)=>handleDrop(e,column.title,column.statid)} onDragOver={(e)=>e.preventDefault()}>
                <h1 className='text-3xl p-2 capitalize font-bold'>{column.title} {column.tasks.length}</h1>
                {column.tasks.map(task=>(
                    <Task key={task.application_id}
                          first_name={task.first_name}
                          last_name={task.last_name}
                          email={task.email}
                          id={task.application_id} />
                ))}
            </div>
        ))}
        
    </div>
  )
}
