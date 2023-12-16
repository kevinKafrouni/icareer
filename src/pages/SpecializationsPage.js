import { useParams } from "react-router-dom";

function SpecializationPage(){

    const { industry } = useParams();
    return(

        <div className="mt-24 ml-24">
            <h1 className="text-center mt-12">testinggggg {industry}</h1>
        </div>
    );
}
export default SpecializationPage;