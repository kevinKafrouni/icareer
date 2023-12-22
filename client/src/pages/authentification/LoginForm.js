import { Link, useLocation } from "react-router-dom";

function LoginForm(){
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const successmsg = searchParam.get('suc');

    return(
        <div className="md:w-1/3 max-w-sm">
          {successmsg==="true" &&<p className="text-center text-sm text-green-700 bg-green-100 mb-12 rounded-lg">Account created Login to continue</p>}
          <h1 className="text-2xl mb-12">Login</h1>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
          
          <div className="text-center md:text-left">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account? <Link to="/auth/register" className="text-red-600 hover:underline hover:underline-offset-4">Register</Link>
          </div>
        </div>
    );

}
export default LoginForm;
