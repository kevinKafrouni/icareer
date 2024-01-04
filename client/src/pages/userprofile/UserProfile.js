import ProfileInfo from './ProfileInfo';
import ApplicationsTable from './ApplicationsTable';
function UserProfile(){
    return(
        <>
            <ProfileInfo />
            <h1 className='text-center text-2xl mt-12 mb-8'>Job Applications : </h1>
            <ApplicationsTable />
        </>
    )
};


export default UserProfile;