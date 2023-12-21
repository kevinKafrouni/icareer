import { Link } from "react-router-dom";
import { useState,useRef,useEffect } from "react";

const USER_REGEX = /^[a-zA-Z ]+$/;
const PASS_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function RegisterForm(){

  const userRef = useRef();
  const errorRef = useRef();

  const [firstName,setFirstName] = useState('');
  const [validFname,setValidFname] = useState(false);

  const [lastName,setLastName] = useState('');
  const [validLname,setValidLname] = useState(false);

  const [birthDate,setBirthDate] = useState('');
  const [validBdate,setValidBdate] = useState(false);

  const [email,setemail] = useState('');
  const [validEmail,setValidEmail] = useState(false);

  const [password,setPassword] = useState('');
  const [validPassword,setValidPassword] = useState(false);

  const [matchPass,setMatchPass] = useState('');
  const [validMatchPass,setValidMatchPass] = useState(false);

  const [errorMsg,setErrorMsg] = useState('');
  const [success,setSuccess] = useState(false);

  useEffect(()=>{
    const result = USER_REGEX.test(firstName);
    console.log(result);
    console.log(firstName);
    setValidFname(result);
  },[firstName]);

  useEffect(()=>{
    const result = PASS_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password ===matchPass
    setValidMatchPass(match)
  },[password,matchPass]);

  useEffect(()=>{
    setErrorMsg('');
  },[firstName,password,matchPass]);
    return(
        
        <div className="md:w-1/3 max-w-sm">
            <div className="text-center md:text-left">
                <label className="mr-1">Create an account</label>
            </div>
            <p ref={errorRef} className={success?"hidden":""} >{errorMsg}</p>
            <form>
          <input 
                 id="firstname"
                 ref={userRef}
                 autoComplete="off"
                 onChange={(e)=>setFirstName(e.target.value)}
                 className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" 
                 type="text" 
                 placeholder="Fist Name"
           />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Last Name" />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="date" placeholder="Birth Date"/>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Email Address" />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Verify Password" />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            
          </div>
          <div className="text-center md:text-left">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" 
                    type="submit"
                    disabled={!validFname || !validPassword || !validEmail? true:false}
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
