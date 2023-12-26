import React, { useEffect, useState } from 'react'
import Task from './Task'
import axios from 'axios';


export default function ApplicationsDashboard() {

    const [tasks,setTasks] = useState([
        {
            application_id: 1,
            email: "admin@gmail.com",
            first_name: "kek",
            last_name: "skjbf",
            pdf_cv: "",
            status: "new application"
        },
        {
            application_id: 2,
            email: "admin@gmail.com",
            first_name: "kek",
            last_name: "skjbf",
            pdf_cv: "",
            status: "new application"
        },
        {
            application_id: 3,
            email: "admin@gmail.com",
            first_name: "kek",
            last_name: "skjbf",
            pdf_cv: "",
            status: "new application"
        },{
            application_id: 4,
            email: "admin@gmail.com",
            first_name: "kek",
            last_name: "skjbf",
            pdf_cv: "",
            status: "under review"
        }
    ]);

    const [statuses,setStatuses] = useState([]);
    useEffect(()=>{
        const fetchStatusList = async ()=>{
            const res = await axios.get("http://localhost:8000/statuslist");
            const stlist = res.data.map(arr =>(arr.title))
            setStatuses(stlist);
        }
        fetchStatusList();
    },[])

    useEffect(()=>{
        const fetchApplications = async ()=>{
            const res = await axios.get("http://localhost:8000/jobapplications");
            
        }
        fetchApplications();
    },[])

    const columns = statuses.map(status =>{
        const taskInColumn = tasks.filter(task=> task.status===status);
        return {
            title: status,
            tasks: taskInColumn

        }
    })
    

    const handleDrop = (e, targetStatus) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        const updatedTasks = tasks.map(task => {
          if (task.application_id == id) {
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
    
    <div className='flex divide-x gap-4'>
        {columns.map(column=>(
            <div onDrop={(e)=>handleDrop(e,column.title)} onDragOver={(e)=>e.preventDefault()}>
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
