import { useParams } from "react-router-dom";
import SkillsList from "../components/SkillsList";
import Roadmap from "../components/Roadmap";
import CompanyCard from "../components/CompanyCard";
import { useEffect, useState } from "react";
import axios from "axios";
import JobsCard from "../components/JobsCard";
function SpecializationDetailsPage(){
    const { specid } = useParams();

    const [specData,setSpecData] = useState([]);
    const spec = specData[0];

    const [topCompanies,setTopCompanies] = useState([]);
    const [latestJobs,setLatestJobs] = useState([]);
    useEffect(()=>{
          const fetchSpecData = async ()=>{
               try{
               const res = await axios.get(`http://localhost:8000/spec?specId=${specid}`)
               setSpecData(res.data);
               }catch(err){
                    console.log(err);
               }
          }
          fetchSpecData();
    },[]);

    useEffect(()=>{
     const fetchTopCompanies = async ()=>{
          try{
               const res = await axios.get(`http://localhost:8000/topcompanies?specId=${specid}`)
               setTopCompanies(res.data);
          }catch(err){
               console.log(err);
          }
     }
     fetchTopCompanies();
    },[]);

    useEffect(()=>{
     const fetchLatestJobs = async ()=>{
          try{
               const res = await axios.get(`http://localhost:8000/latestjobs?specId=${specid}`)
               setLatestJobs(res.data);
          }catch(err){
               console.log(err);
          }
     }
     fetchLatestJobs();
    },[]);
    console.log(latestJobs);
    return(
        <div>
            <header className="w-2/3  ml-24 mt-24 mb-24">
                {spec && <h1 className="text-4xl font-semibold">{spec.spec_name}</h1>}
                {spec && <p className="mt-8">{spec.spec_description}</p>}
           </header>
           <div className="ml-24 mr-24">
                <h1 className="text-3xl font-semibold mb-8">Skills Needed to succeed in this career Path</h1>
                <SkillsList 
                    specId={specid}
                />
           </div>
           <div className="ml-24 mr-24 mt-24">
                <h1 className="text-3xl font-semibold mb-8">Become an expert With our Learning Path</h1>
                <div className="h-96 truncate relative">
                    <button className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  mt-4 px-8 py-4 text-2xl bg-blue-600 text-white  uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Visit roadmap</button>
                    <div className="h-full w-full  blur-[3px]">
                    <Roadmap />
                    </div>
                </div>
           </div>
           <div className="ml-24 mr-24 mt-24">
                <h1 className="text-3xl font-semibold mb-8">Top Companies</h1>
                <div className="mt-8">
                          <div className="flow-root ">
                            <ul role="list" className="-my-6 divide-y divide-gray-200 flex items-center flex-wrap">
                              {topCompanies.map((company)=>(
                                   <CompanyCard 
                                   logo={company.company_logo}
                                   name={company.company_name}
                                   jobs={company.nbJobs}
                                   />
                              ))}

                            </ul>
                          </div>
                        </div>
           </div>
           <div className="ml-24 mr-24 mt-24">
                <h1 className="text-3xl font-semibold mb-8">Latest Jobs</h1>
                <div className="flex items-center flex-wrap">
                {latestJobs.map((job)=>(
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
                ))

                }
                </div>
           </div>
           
        </div>
    );
}
export default SpecializationDetailsPage;