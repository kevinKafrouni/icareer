import { Link } from "react-router-dom";

function SpecializationCard(props){
    return(    
        <Link to={`/specializationdetails/${props.id}`} className="h-auto flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={props.image}/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">{props.description}</p>
                <div className="flex flex-row justify-center gap-12 p-4 leading-normal">
                    <div className="font-normal text-gray-700 dark:text-gray-400">
                        <p>average growth</p>
                        <p className="text-center text-green-700">+8%</p>
                    </div>
                    <div className=" font-normal text-gray-700 dark:text-gray-400">
                        <p>number of Jobs</p>
                        <p className="text-center">{props.nbjobs}</p>
                    </div>
                </div>
            </div>
            
        </Link>

    );
}

export default SpecializationCard;

