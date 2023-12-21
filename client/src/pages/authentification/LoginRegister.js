
import { useParams } from "react-router-dom";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
function LoginRegister(){
    
    const { type } = useParams();

    return(
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image" />
        </div>
        
        {type==="register" && <RegisterForm />}
        {type==="login" && <LoginForm />}
    </section>
    );
}
export default LoginRegister;