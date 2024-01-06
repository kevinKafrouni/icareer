import ProfileInfo from './ProfileInfo';
import ApplicationsTable from './ApplicationsTable';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function UserProfile(props){
  const {isLoggedin,userType} = props
    const navigate = useNavigate ();
    useEffect(() => {
      if (!isLoggedin) {
        console.log('not logged in');
        navigate('/auth/login');
      }
    }, [isLoggedin, navigate]);
    return(
        <>
            <ProfileInfo />
            {userType==="user" &&<h1 className='text-center text-2xl mt-12 mb-8'>Job Applications : </h1>&&
            <ApplicationsTable />}
        </>
    )
};


export default UserProfile;