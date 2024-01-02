import React, { useState,useEffect } from 'react';
import JobsCard from '../components/JobsCard';
import axios from 'axios';
function SearchJob(){

    

    const [jobs,setJobs] = useState([]);

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




    return(
        <>
            <div className='w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col'>
                <h1 className='px-4 mx-2 py-2 uppercase tracking-wider border-b-2 border-b-indigo-600 text-3xl font-semibold'>Available Jobs</h1>
                <div className='w-full h-full py-4 flex  overflow-y-auto  items-center justify-center flex-wrap'>
                    {
                        jobs.map((job) => {
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