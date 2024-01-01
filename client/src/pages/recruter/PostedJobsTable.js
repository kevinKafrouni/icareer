import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function PostedJobsTable() {

  const [jobs,setJobs] = useState([]);
  useEffect(()=>{
    const fetchJobs = async ()=>{
      try{
        const res = await axios.get('http://localhost:8000/jobsposted');
        setJobs(res.data)
      }
      catch(err){
        console.log(err);
      } 
    }
    fetchJobs();
  },[])

  console.log(jobs);
  return (
<div className="overflow-x-auto sm:rounded-lg">
    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">Date Posted</th>
                <th scope="col" className="px-6 py-3">Closing Date</th>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Specialization</th>
                <th scope="col" className="px-6 py-3">View Applications</th>
            </tr>
        </thead>
        <tbody>
          {jobs.map(job=>(
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {job.post_date}
            </th>
            <td scope="row" className="px-6 py-4 font-medium ">
                {job.close_date}
            </td>
            <td scope="row" className="px-6 py-4 font-medium ">
                {job.job_title}
            </td>
            <td scope="row" className="px-6 py-4 font-medium ">
                {job.spec_name}
            </td>
            <td scope="row" className="px-6 py-4 font-medium text-blue-700">
            <Link to={`/Board/${job.job_id}`}>
                View
                </Link>
            </td>
        </tr>
          ))}
        </tbody>
    </table>
</div>
  )
}
