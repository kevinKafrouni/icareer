import { useParams } from "react-router-dom";
import SpecializationGrid from "./SpecializationsGrid";
import { useEffect, useState } from "react";
import axios from "axios";
function SpecializationPage(){

    const { industry } = useParams();
    const [industryData,setIndustryData] = useState([])
    const ind = industryData[0]; 
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
        {ind && <div className="w-full bg-cover bg-center h-96" style={{ backgroundImage: `url('${ind.industry_img}')`}} >
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    {ind && <h1 className="text-white text-4xl font-semibold uppercase md:text-3xl">{ind.industry_name}</h1>}
                    {ind && <p className="text-center text-white mt-8 mb-8 w-2/4 m-auto">{ind.industry_description}</p>}
                </div>
            </div>
        </div>}
        <div className="mt-24 ml-24">
            <h1 className="text-center text-3xl mb-12">Possible specializations</h1>
            <SpecializationGrid 
                industryId={industry}
            />
        </div>
        </main>
    );
}
export default SpecializationPage;