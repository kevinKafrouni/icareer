
import BrowseJobsTab from './BrowseJobsTab';
import IndustryList from './IndustryList';
import { Link } from 'react-router-dom';
function HomePage(){

    return(
        <main>
        <div className="w-full bg-cover bg-center custom-main-bg" >
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
                <h1 className="text-white text-3xl font-semibold uppercase md:text-3xl">Start your carrer</h1>
                <Link to="/profile">
                <button Link to="/auth/login" className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Create Profile</button>
                </Link>
            </div>
        </div>
    </div>
        <div>
            <h1 className="text-4xl font-semibold ml-24 mt-12">Find a Career Path</h1>
            <IndustryList />
        </div>
        <div className="ml-24 mt-12">
            <h1 className="text-4xl font-semibold ">Browse Jobs</h1>
            <BrowseJobsTab />
        </div>
        <div className="flex items-center gap-10 mb-16">
            <div className="ml-24 mt-12 w-2/3 ">
            <h1 className="text-4xl font-semibold">Recruting?</h1>
            <p className="mt-8">Our robust recruitment platform simplifies job posting and streamlines application tracking, offering a user-friendly experience for employers and applicants alike.</p>
            </div>
            <button className="h-fit mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start Recruting</button>
        </div>
    </main>
    );

}

export default HomePage;