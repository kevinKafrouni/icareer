import { Link } from "react-router-dom";
import { useState} from "react";
import FormInput from "./ui/FormInput";

function RegisterForm(){
const [values,setValues] = useState({
    fname:"",
    lname:"",
    birthday:"",
    email:"",
    password:""
})

const inputs =[
    {
        id:1,
        name:"fname",
        type:"text",
        placeholder:"first name",
    },
    {
        id:2,
        name:"lname",
        type:"text",
        placeholder:"last name",
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
        type:"text",
        placeholder:"email",
    },
    {
        id:5,
        name:"password",
        type:"password",
        placeholder:"password",
    }
]
  const [type,setType] = useState('user');
  const changeType = (type)=>{
    setType(type);
  }

  const handleChange = (e)=>{
    setValues({...values,[e.target.name]: e.target.value })
  }
    return(
        
        <div className="md:w-1/3 max-w-sm">
          <h1 className="text-3xl ">Register As </h1>
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
            <p ref={errorRef} className={success?"hidden":""} >{errorMsg}</p>
        <form>
            {inputs.map(input=>(
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
