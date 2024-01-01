import { useEffect, useState } from "react";
import FormInput from "../../components/ui/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function PostJob(){
  const navigate = useNavigate()
  const [values,setValues] = useState({
    job_title:"",
    min_salary:"",
    max_salary:"",
    job_close_date:"",
    job_type_id:"1",
    spec_id:"1",
    job_description:""
})

const [jobTypes,setJobTypes] = useState([]);
const [specs,setSpecs ] = useState([]);

useEffect(()=>{
  const fetchJobTypes = async()=>{
    try{
      const res = await axios.get("http://localhost:8000/jobtypes");
      setJobTypes(res.data);
    }catch(err){
      console.log(err);
    }
  }
  fetchJobTypes();
},[])

useEffect(()=>{
  const fetchSpecs = async()=>{
    try{
      const res = await axios.get("http://localhost:8000/getAllSpecs");
      setSpecs(res.data);
    }catch(err){
      console.log(err);
    }
  }
  fetchSpecs();
},[])


const inputs =[
  {
      id:1,
      name:"job_title",
      type:"text",
      placeholder:"Job Title",
      required:true
  },
  {
      id:2,
      name:"min_salary",
      type:"number",
      placeholder:"Minimum salary",
  },
  
  {
      id:3,
      name:"max_salary",
      type:"number",
      placeholder:"Maximum salary"
  },
  {
    id:4,
    name:"job_close_date",
    type:"date",
    placeholder:"Job Posting Close Date",
},
  {
      id:5,
      name:"job_type_id",
      type:"select",
      placeholder:"Job Type",
      options: jobTypes
    },{
      id:6,
      name:"spec_id",
      type:"select",
      placeholder:"Specialization",
      options:specs
    },
]



  const handleChange = (e)=>{
    setValues({...values,[e.target.name]: e.target.value })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
    const res = await axios.post("http://localhost:8000/postjob",values);
    if(res.status === 200){
      navigate("/postedjobs")
    }
    }catch(err){
      console.log(err);
    }
  }

  console.log(values)
  return(
  <main className="main bg-white px-6 md:px-16 py-6">
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl mb-2">Post new job</h1>
        <div className="job-info border-b-2 py-2 mb-5">
          {inputs.map(input => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange}/>
          ))}
        <div className="p-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job-description">Job Description</label>
          <textarea id="job-description" className="w-full h-32 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:border-blue-500" placeholder="Enter job description here" onChange={handleChange} name="job_description" value={values["job_description"]}></textarea>
        </div>

        </div> 
        <div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit">Create job</button>
        </div>
      </form>
    </div>
  </main>
  


    )
}

export default PostJob;