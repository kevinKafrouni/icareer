import { Link } from "react-router-dom";

function RegisterForm(){
    return(
        
        <div className="md:w-1/3 max-w-sm">
            <div className="text-center md:text-left">
                <label className="mr-1">Create an account</label>
            </div>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Fist Name" />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Last Name" />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="date" placeholder="Birth Date"/>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Email Address" />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            
          </div>
          <div className="text-center md:text-left">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Register</button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account? <Link to="/auth/login" className="text-red-600 hover:underline hover:underline-offset-4">Login</Link>
          </div>
        </div>
    );

}
export default RegisterForm;
