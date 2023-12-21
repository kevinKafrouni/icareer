import { useEffect, useState } from "react";
import SpecializationCard from "./SpecializationCard";
import axios from "axios";
function SpecializationGrid(props){
    const industryId = props.industryId;
    const [specs,setSpecs] = useState([]);

    useEffect(()=>{
        const fetchSpecs = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8000/specs?industryId=${industryId}`);
                setSpecs(res.data);
            }catch (err){
                console.log(err);
            }
        }
        fetchSpecs();
    },[])
    return(
        <div className="flex flex-wrap gap-4 justify-center">
            {specs.map(spec =>(
                <SpecializationCard
                title={spec.spec_name}
                description={spec.spec_description}
                image={spec.spec_image}
                nbjobs="22"
                />
            ))}
        </div>
    );
}
export default SpecializationGrid;