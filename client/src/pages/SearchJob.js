import React, { useState,useEffect } from 'react';
import JobsCard from '../components/JobsCard';
import axios from 'axios';
function SearchJob(){

    

    const [jobs,setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        const fetchJobs = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8000/getJobs`);
                setJobs(res.data);
                console.log(jobs);
            }catch (err){
                console.log(err);
            }
        }
        fetchJobs();
    },[])


    const filteredJobs = jobs.filter(job => {
        return job.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               job.spec_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               job.company_name.toLowerCase().includes(searchTerm.toLowerCase());
    });



    return(
        <>
            <div className='w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col'>
                <h1 className='px-4 mx-2 py-2 uppercase tracking-wider border-b-2 border-b-indigo-600 text-3xl font-semibold'>Available Jobs</h1>
                    <div class="relative w-1/2 mt-12">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search by title or specialization"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                
                <div className='w-full h-full py-4 flex  overflow-y-auto  items-center justify-center flex-wrap'>
                    {
                        filteredJobs.map((job) => {
                            return (
                                <JobsCard  
                                        key={job.job_id} 
                                        id={job.job_id}
                                        title = {job.job_title}
                                        company={job.company_name}
                                        logo={job.company_logo}
                                        minsal = {job.min_salary}
                                        maxsal = {job.max_salary}
                                        closedate = {job.close_date}
                                        postdate = {job.posted_date}
                                        location = {job.location_name}
                                        spec = {job.spec_name}
                                />
                            )
                        }) 
                    }
                </div>
            </div>
        </>
    );
}

export default SearchJob;