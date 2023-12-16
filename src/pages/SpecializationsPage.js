import { useParams } from "react-router-dom";
import SpecializationGrid from "../components/SpecializationsGrid";
function SpecializationPage(){

    const { industry } = useParams();
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
        <div className="mt-24 ml-24">
            <h1 className="text-center mt-12 mb-12">testinggggg {industry}</h1>
            <SpecializationGrid />
        </div>
        </main>
    );
}
export default SpecializationPage;