import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import UserIcon from './ui/UserIcon';
function Navbar(){

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: '', email: '',logo:'' });
    useEffect(() => {
        const checkLoginStatus = async () => {
          try {
            const res = await axios.get('http://localhost:8000/checklogin');
            if (res.data.isLoggedIn) {
              setIsLoggedin(true);
              setUserInfo({ name: res.data.name, email: res.data.email ,logo:'' });
            } else {
                setIsLoggedin(false);
            }
          } catch (error) {
            console.error('Error checking login status:', error);
          }
        };
    
        checkLoginStatus();
      }, []);
    
    return(
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Icareer</span>
    </Link>

    {!isLoggedin? 
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse font-medium">
    <Link to="/auth/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
    </div>
    :
    <UserIcon 
        name={userInfo.name}
        email={userInfo.email}
        image="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    }
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <Link to="" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
        </li>
        <li>
            <Link to="/searchjob" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Search Jobs</Link>
        </li>
        <li>
            <Link to="" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Carrer Path</Link>
        </li>
        </ul>
    </div>
    </div>
    </nav>

    );
}

export default Navbar;