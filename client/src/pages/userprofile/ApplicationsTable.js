import { useState,useEffect } from "react";
import axios from "axios";
function ApplicationsTable(){

    
  const [applications,setApplications] = useState([]);

  useEffect(()=>{
    const fetchApplications = async ()=>{
      try{
        const res = await axios.get('http://localhost:8000/uapplications');
        setApplications(res.data)
      }
      catch(err){
        console.log(err);
      } 
    }
    fetchApplications();
  },[])

  console.log(applications);
    return(
        <div className="overflow-x-auto sm:rounded-lg">
            {applications.length > 0 ?
    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">Date Applied</th>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Status</th>
            </tr>
        </thead>
        <tbody>
        {applications.map(appl=>(
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                {appl.application_day}
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {appl.job_title}
            </th>
            <td scope="row" className="px-6 py-4 font-medium ">
                {appl.status}
            </td>
        </tr>
          ))
        }
        </tbody>
    </table>
            :
            <div>
                <h1>No Applications Yet </h1>
            </div>
    }
</div>

    )
}
export default ApplicationsTable;