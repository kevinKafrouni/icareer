import axios from "axios";
import { useEffect, useState } from "react";
function SkillsList(props){
    const specId = props.specId
    const [skills,setSkills] = useState([]);
    let count=0;
    useEffect(()=>{
        const fetchSkills = async ()=>{
            try{
            const res = await axios.get(`http://localhost:8000/skills?specId=${specId}`);
            setSkills(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchSkills();
    },[])
    const [activeAccordion,setActiveAccordion] = useState(null);
    const handleAccordionClick = (id) =>{
        setActiveAccordion(activeAccordion==id?null:id);
      }
    return(
        <div id="accordion" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
            {skills.map((skill,index)=>(
                <div key={index}>
                    <h2 id={`accordion-heading-${index}`}>
            <button type="button" 
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200  focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" 
                    data-accordion-target="#accordion-color-body-1" 
                    aria-expanded="true" 
                    aria-controls="accordion-color-body-1"
                    onClick={()=>handleAccordionClick(`accordion-body-${index}`)}
                    >
            <span>{skill.skill_name}</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
            </button>
        </h2>
        <div id={`accordion-body-${index}`}className={activeAccordion===`accordion-body-${index}`?"":"hidden"} aria-labelledby="accordion-color-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">{skill.skill_description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">

            Add To Profile</button>
            </div>
        </div>

                </div>
            ))}
        </div>

    );
}
export default SkillsList;