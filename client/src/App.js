import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home/HomePage';
import SearchJob from './pages/SearchJob';
import SpecializationsPage from './pages/Specializations/SpecializationsPage';
import SpecializationDetailsPage from './pages/SpecializationDetailsPage';
import LoginRegister from './pages/authentification/LoginRegister';
import ManageJobsPage from './pages/recruter/ManageJobsPage';
import ApplicationsDashboard from './pages/recruter/ApplicationsDashboard';
import UserProfile from './pages/userprofile/UserProfile';
import PostJob from './pages/recruter/PostJob';
import JobDetails from './pages/JobDetails';
function App() {

  axios.defaults.withCredentials=true;
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '',logo:'' });
  const [userType,setUserType] = useState('')
  useEffect(() => {
      const checkLoginStatus = async () => {
        try {
          const res = await axios.get('http://localhost:8000/checklogin');
          if (res.data.isLoggedIn) {
            setIsLoggedin(true);
            if(res.data.type==="user"){ 
              setUserType("user");
            setUserInfo({ name: res.data.name,email: res.data.email ,logo:"" });
          }else if(res.data.type==="company"){
            setUserType("company")
            setUserInfo({name:res.data.name,email:res.data.email,logo:res.data.logo})
          }
            
          } else {
              setIsLoggedin(false);
          }
        } catch (error) {
          console.error('Error checking login status:', error);
        }
      };
      
      checkLoginStatus();
    }, []);
  
  
  return (
    <div className="App">
      <Navbar 
        isLoggedin={isLoggedin}
        userInfo={userInfo}
        userType={userType}
      />
      <div className='mt-12'></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchjob" element={<SearchJob />} />
        <Route path="/specializations/:industry" element={<SpecializationsPage />} />
        <Route path="/specializationdetails/:specid" element={<SpecializationDetailsPage />} />
        <Route path="/auth/:type" element={<LoginRegister />} />
        <Route path="/postedjobs" element={<ManageJobsPage />}/>
        <Route path='/board/:jobid' element={<ApplicationsDashboard/>}/>
        <Route path="/profile" element={<UserProfile  isLoggedin={isLoggedin} userType={userType}/>}/>
        <Route path="/postJob" element={<PostJob/>}/>
        <Route path="/jobdetails/:jobId" element={<JobDetails         
                                                              isLoggedin={isLoggedin}
                                                              userType={userType}
                                                                    />}/>
      </Routes>
      
    </div>
  );
}

export default App;
