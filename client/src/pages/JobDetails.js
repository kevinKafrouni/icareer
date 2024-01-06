import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function JobDetails(props){
    const {isLoggedin,userType} = props
    const {jobId} = useParams();
    const [job,setJob] = useState([]);
    
    const jobdetail = job[0];
    useEffect(()=>{
        const fetchJob = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8000/getJobs?jobId=${jobId}`);
                setJob(res.data);
            }catch (err){
                console.log(err);
            }
        }
        fetchJob();
    },[])

    const handleApply = ()=>{
        if(!isLoggedin){
            window.alert("please login to apply");
        }else if(userType !== "user"){
            window.alert("please login as a job seeker to apply");
        }else{    
            const postApplication = async ()=>{
                try{
                const res =  await axios.post(`http://localhost:8000/sendapplication`,{jobId});
                }catch(err){
                    console.log(err);
                }
                window.alert("application sent");
            }
            postApplication();
        }
        }
    return(
        <>
            <div className='w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col  '>
                <div className='w-full h-40 bg-gray-50 text-indigo-600 font-bold flex items-center justify-center flex-col'>
                    {jobdetail&&<h1 className='text-3xl'>{jobdetail.job_title}</h1>}
                </div>
                <div className='flex items-center  justify-center w-full py-10'>
                    <div className='flex w-full px-8 md:px-20 items-start md:flex-row flex-col md:justify-between justify-center'>
                        <div className='flex mb-1 items-center justify-center'>
                        {jobdetail&&<img src={jobdetail.company_logo} alt="no-image" className='rounded-full mb-2' width={100} height={100} />}
                            <div className='px-4 mx-2 flex flex-col items-start justify-center'>
                            {jobdetail&& <p className='font-semibold text-base mb-1' >{jobdetail.company_name}</p>}
                            {jobdetail&&<p className=' text-sm text-gray-800 mb-1'>{jobdetail.email}</p>}
                            </div>

                        </div>
                        <div className='md:px-4 mb-1 px-2 md:mx-2 flex flex-col items-start justify-center'>
                            <div className='flex items-center justify-center mb-1'>
                                <p className='font-semibold text-base mx-1'>Location : </p>
                                {jobdetail&&<p className=' text-sm text-gray-800 mx-1'>{jobdetail.location_name}</p>}
                            </div>
                            <div className='flex items-center justify-center mb-1'>
                                <p className='font-semibold text-base mx-1'>Specialization : </p>
                                {jobdetail&&<p className=' text-sm text-gray-800 mx-1'>{jobdetail.spec_name}</p>}
                            </div>
                        </div>
                        <div className='md:px-4 mb-1 px-2 md:mx-2 flex flex-col items-start justify-center'>
                            <div className='flex items-center justify-center mb-1'>
                                <p className='font-semibold text-base mx-1'>Job Type </p>
                                {jobdetail&&<p className='text-sm text-gray-800 mx-1'>{jobdetail.job_type_name}</p>}
                            </div>
                            <div className='flex items-center justify-center mb-1'>
                                <p className='font-semibold text-base mx-1'>Salary range :  </p>
                                {jobdetail&&<p className=' text-sm text-gray-800 mx-1'>{jobdetail.min_salary}$ - {jobdetail.max_salary}$ </p>}
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button onClick={handleApply} className='md:px-6 md:py-3 px-3 py-2 mt-2 md:mt-0 bg-indigo-500 rounded text-base tracking-widest uppercase transition-all duration-700 hover:bg-indigo-900 text-white  '>Apply Position</button>
                        </div>
                    </div>
                </div>
                <div className='w-full md:px-4 py-2 flex items-center md:items-start md:flex-row flex-col justify-start md:justify-center'>
                    <div className='md:w-8/12 w-full md:px-4 py-8 flex flex-col items-center content-start justify-center '>
                        <h1 className='text-center lg:text-2xl font-semibold text-xl mb-4 uppercase border-b-2 border-indigo-600 py-2'>Job Description</h1>
                        {jobdetail&&<p className='px-4'>{jobdetail.job_description}</p>}
                    </div>
                    <div className='md:w-4/12 w-full py-8 px-4 md:px-10'>
                        <h1 className=' text-2xl font-semibold mb-2'>Job Summary</h1>
                        <div className='flex items-center justify-start mb-3'>
                            <p className='font-semibold text-base mx-1'>Posted Date</p>
                            {jobdetail&&<p className=' text-sm text-gray-800 mx-1'>{jobdetail.posted_date}</p>}
                        </div>
                        <div className='flex items-center justify-start mb-3'>
                            <p className='font-semibold text-base mx-1'>Deadline</p>
                            {jobdetail&&<p className=' text-sm text-gray-800 mx-1'>{jobdetail.close_date}</p>}
                        </div>
                    </div>
                </div>
                <div className='w-full px-2 md:px-8 mb-2 flex flex-col'>
                    <h1 className='text-xl font-semibold lg:text-2xl '>Related Jobs</h1>
                    <div className='md:px-8 px-2 md:mx-4 flex flex-wrap items-center justify-center'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDetails;