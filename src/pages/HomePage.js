import '../App.css';
import IndustryList from '../components/IndustryList';
function HomePage(){

    return(
        <main>
        <div className="w-full bg-cover bg-center custom-main-bg" >
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
                <h1 className="text-white text-3xl font-semibold uppercase md:text-3xl">Start your carrer</h1>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Create Profile</button>
            </div>
        </div>
    </div>
        <div>
            <h1 className="text-4xl font-semibold ml-24 mt-12">Find a Career Path</h1>
            <IndustryList />
        </div>
        <div>
            <h1 className="text-4xl font-semibold ml-24 mt-12">Browse Jobs</h1>
        </div>
        <div>
            <h1 className="text-4xl font-semibold ml-24 mt-12">Recruting?</h1>
        </div>
    </main>
    );

}

export default HomePage;