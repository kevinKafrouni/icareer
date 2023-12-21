
import { useEffect, useState } from "react";
import IndustryCard from "./IndustryCard";
import axios from "axios";
function IndustryList(){
    const [industries,setIndustries] = useState([]);

    useEffect(()=>{
        const fetchIndustries = async ()=>{
            try{
                const res = await axios.get("http://localhost:8000/industries")
                setIndustries(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchIndustries();
    },[])
    return(
        <div className="flex flex-col bg-white m-auto p-auto mt-12">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                {industries.map(industry=>(
                    <div className="inline-block px-3 ">
                        <IndustryCard
                            key={industry.industry_id}
                            id={industry.industry_id}
                            image={industry.industry_img}
                            title={industry.industry_name}
                            description={industry.industry_description}
                        />
                    </div>
                ))}
                
                </div>
            </div>
        </div>
    );
}
export default IndustryList;
