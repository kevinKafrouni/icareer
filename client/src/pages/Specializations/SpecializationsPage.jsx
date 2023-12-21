import { useParams } from "react-router-dom";
import SpecializationGrid from "./SpecializationsGrid";
import { useEffect, useState } from "react";
import axios from "axios";
function SpecializationPage(){

    const { industry } = useParams();
    const [industryData,setIndustryData] = useState([])
    const ind = industryData[0]; 
    console.log(industry)
    useEffect(()=>{
        const fetchIndustyData = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8000/industries?industryId=${industry}`);
                setIndustryData(res.data);
            }catch(err){
                console.log(err)
            }   
        }
        fetchIndustyData();
    },[])
    
    return(
    <main>
        <div className="w-full bg-cover bg-center custom-main-bg" >
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-white text-3xl font-semibold uppercase md:text-3xl">Start your carrer</h1>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Create Profile</button>
                </div>
            </div>
        </div>
        <div className="mt-24 ml-24">
            {ind && <h1 className="text-center text-3xl font-semibold uppercase mt-12 mb-12">{ind.industry_name}</h1>}
            {ind && <p className="text-center mt-8 mb-8 w-2/4 m-auto">{ind.industry_description}</p>}
            
            <SpecializationGrid 
                industryId={industry}
            />
        </div>
        </main>
    );
}
export default SpecializationPage;