import axios from "axios";
import { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";

function LoginForm(){
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const successmsg = searchParam.get('suc');

  const navigate = useNavigate();

  const [values,setValues] = useState({
    email:"",
    password:""
  })
  const [error,setError] = useState(false) 

  const handleChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value});
    console.log(values);
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
      const res = await axios.post("http://localhost:8000/login",values);
      setValues({
        email:"",
        password:""
      })
      console.log(res.data);
      if(res.data){
        navigate("/");
      }else{
        setError(true);
      }
    }catch(err){
      console.log(err);
    }
  }
    return(
        <div className="md:w-1/3 max-w-sm">
          {successmsg==="true" &&<p className="text-center text-sm text-green-700 bg-green-100 mb-12 rounded-lg">Account created Login to continue</p>}
          {error  &&<p className="text-center text-sm text-red-700 bg-red-100 mb-12 rounded-lg">Invalid Credentials</p>}
          <h1 className="text-2xl mb-12">Login</h1>
          <form onSubmit={handleSubmit}>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="email" name="email" placeholder="Email Address"  onChange={handleChange}/>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" name="password" placeholder="Password" onChange={handleChange} />
          
          <div className="text-center md:text-left">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
          </div>
          </form>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account? <Link to="/auth/register" className="text-red-600 hover:underline hover:underline-offset-4">Register</Link>
          </div>
        </div>
    );

}
export default LoginForm;
