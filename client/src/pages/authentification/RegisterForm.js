import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect} from "react";
import FormInput from "../../components/ui/FormInput";
import axios from 'axios'
function RegisterForm(){
  const navigate = useNavigate();

  const [type,setType] = useState('user');
  const [locations,setLocations] = useState([]);
  useEffect(()=>{
    const fetchLocations = async ()=>{
        try{
            const res = await axios.get("http://localhost:8000/locations");
            setLocations(res.data);
        }catch(err){
            console.log(err);
        }
    }
    fetchLocations();
  },[])

  const changeType = (type)=>{
    setType(type);
  }

  const [values,setValues] = useState({
      first_name:"",
      last_name:"",
      birthday:"",
      email:"",
      pdf_cv:"",
      location_id:"1",
      password:""
  })

  const [recVal,setRecVal] = useState({
    company_name:"",
    company_description:"",
    company_logo:"",
    company_email:"",
    company_password:"",
    phone_number:"",
    clocation_id:"1"
  })

console.log(recVal);
const inputs =[
    {
        id:1,
        name:"first_name",
        type:"text",
        errmsg:"name should be 3-16 character long",
        placeholder:"first name",
        pattern:"^[A-Za-z0-9]{3,16}$",
        required:true
    },
    {
        id:2,
        name:"last_name",
        type:"text",
        errmsg:"name should be 3-16 character long",
        placeholder:"last name",
        pattern:"^[A-Za-z0-9]{3,16}$",
        required:true
    },
    {
        id:3,
        name:"birthday",
        type:"date",
        placeholder:"birthday",
    },
    {
        id:4,
        name:"email",
        type:"email",
        errmsg:"invalid email",
        placeholder:"email",
        required:true
    },
    {
        id:5,
        name:"password",
        type:"password",
        errmsg:"password should be 6-20 characters",
        placeholder:"password",
        pattern:"^[A-Za-z0-9]{6,20}$",
        required:true
    },
    {
        id:6,
        name:"location_id",
        type:"select",
        placeholder:"Your Location",
        options:locations  
      }
]

const recruterInputs =[
  {
    id:1,
    name:"company_name",
    type:"text",
    errmsg:"name should be 3-16 character long",
    placeholder:"Company Name",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required:true
  },{
    id:2,
    name:"company_logo",
    type:"text",
    placeholder:"Company Logo url",
  },{
    id:3,
    name:"company_email",
    type:"email",
    errmsg:"invalid email",
    placeholder:"email",
    required:true
  },{
    id:4,
    name:"company_password",
    type:"password",
    errmsg:"password should be 6-20 characters",
    placeholder:"password",
    pattern:"^[A-Za-z0-9]{6,20}$",
    required:true
  },{
    id:5,
    name:"phone_number",
    type:"text",
    errmsg:"invalid phone_number",
    placeholder:"phone number",
    required:true
  },{
    id:6,
    name:"clocation_id",
    type:"select",
    placeholder:"Your Location",
    options:locations
  }
  ]

  const handleChange = (e)=>{
    if(type==="company"){
        setRecVal({...recVal,[e.target.name]: e.target.value })
    }else{
      setValues({...values,[e.target.name]: e.target.value })
    }

  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(type==="user"){    
      try{
        const res = await axios.post('http://localhost:8000/register/user',values);
        navigate("/auth/login?suc=true")
      }catch(err){
        console.log(err);
      }
  }else{
    try{
      const res = await axios.post('http://localhost:8000/register/company',recVal);
      navigate("/auth/login?suc=true")
    }catch(err){
      console.log(err);
    }
  }
  }

  
    return(
        
        <div className="md:w-1/3 max-w-sm ">
          <h1 className="text-3xl mt-24">Register As </h1>
          <div className="flex gap-4">
            <button className={`mt-4 ${type==="user"?"bg-blue-600 text-white":"bg-gray-100"} hover:bg-blue-600 px-4 py-2 uppercase rounded text-xs tracking-wider font-semibold`}
                    onClick={()=>changeType('user')}
            >Job Seeker</button>
            <button className={`mt-4 ${type==="company"?"bg-blue-600 text-white":"bg-gray-100"} hover:bg-blue-600 px-4 py-2 uppercase rounded text-xs tracking-wider font-semibold`}
                    onClick={()=>changeType('company')}
            >Recruter</button>
          </div>
            <div className="text-center md:text-left">
                <label className="mr-1">Create an account</label>
            </div>
        <form onSubmit={handleSubmit}>
          
            {type==="company"? recruterInputs.map(input=>(
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange}/>
          ))
              :
            inputs.map(input=>(
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange}/>
            ))}

          <div className="mt-4 flex justify-between font-semibold text-sm">
          </div>
          <div className="text-center md:text-left">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" 
                    type="submit"
                    >Register</button>
          </div>
          </form>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account? <Link to="/auth/login" className="text-red-600 hover:underline hover:underline-offset-4">Login</Link>
          </div>
        </div>
    );

}
export default RegisterForm;
