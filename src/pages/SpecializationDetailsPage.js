import { useParams } from "react-router-dom";
import SkillsList from "../components/SkillsList";
import Roadmap from "../components/Roadmap";
import CompaniesList from "../components/CompaniesList";
function SpecializationDetailsPage(){
    const { spec } = useParams();
    return(
        <div>
            <header className="w-2/3  ml-24 mt-24 mb-24">
                <h1 className="text-4xl font-semibold">{spec}</h1>
                <p className="mt-8">filling a paragraph filling a paragraph filling a paragraph filling a paragraph filling a paragraph filling a paragraph filling a paragraph filling a paragraph filling a paragraph filling a paragraph</p>
           </header>
           <div className="ml-24 mr-24">
                <h1 className="text-3xl font-semibold mb-8">Skills Needed to succeed in this career Path</h1>
                <SkillsList />
           </div>
           <div className="ml-24 mr-24 mt-24">
                <h1 className="text-3xl font-semibold mb-8">Become an expert With our Learning Path</h1>
           </div>
           <div className="ml-24 mr-24 mt-24">
                <h1 className="text-3xl font-semibold mb-8">Top Companies</h1>
                <CompaniesList />
           </div>
           <div className="ml-24 mr-24 mt-24">
                <h1 className="text-3xl font-semibold mb-8">Latest Jobs</h1>
           </div>
           
        </div>
    );
}
export default SpecializationDetailsPage;