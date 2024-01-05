import ProfileInfo from './ProfileInfo';
import ApplicationsTable from './ApplicationsTable';
import { useNavigate } from "react-router-dom";

function UserProfile(){
    const navigate = useNavigate ();
    useEffect(() => {
        const checkLoginStatus = async () => {
          try {
            const res = await axios.get('http://localhost:8000/checklogin');
            if (res.data.isLoggedIn) {
              setIsLoggedin(true);
              if(!res.data.type==="user"){ 
                  navigate('LoginRegister');
              }
            }
          } catch (error) {
            console.error('Error checking login status:', error);
          }
        };
        
        checkLoginStatus();
      }, []);



    return(
        <>
            <ProfileInfo />
            <h1 className='text-center text-2xl mt-12 mb-8'>Job Applications : </h1>
            <ApplicationsTable />
        </>
    )
};


export default UserProfile;