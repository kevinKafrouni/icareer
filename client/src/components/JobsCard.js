import { Link } from "react-router-dom";
function JobsCard(props){
    return(
        <div key={props.id} className='w-full cursor-pointer  transition-all duration-1000  md:w-5/12 m-4 border hover:shadow-xl rounded px-4 md:flex md:flex-wrap'>
        <div className='mb-4 flex  items-center justify-center py-2 '>
            <img width={70} height={70} className="flex rounded-full " src={props.logo} alt="no image" />
            <div className='flex flex-col mx-2 px-2'>
                <h1 className='text-xl md:text-xl font-semibold'>{props.title}</h1>
                <p className='text-xl font-semibold'>{props.company}</p>
                <p className='text-xs sm:text-sm md:text-base text-gray-800'>{props.location}</p>
            </div>
        </div>
        <div className='mb-4 flex   items-start justify-center py-2 flex-col'>
            <div className='flex  px-2 py-2 items-center justify-center '>
                <h1 className='text-lg text-gray-900'>Salary :</h1>
                <p className='text-base  font-semibold'>{props.minsal}$ - {props.maxsal}$ / month</p>
            </div>
            <div className='flex px-2 py-2 items-center  justify-center'>
                <h1 className='text-lg text-gray-900'>Posted at :</h1>
                <p className='text-base  font-semibold'>{props.postdate}</p>
            </div>
            <div className='flex px-2 py-2 items-center  justify-center'>
                <h1 className='text-lg text-gray-900'>Deadline :</h1>
                <p className='text-base  font-semibold'>{props.closedate}</p>
            </div>
        </div>
        <div className='mb-4 flex flex-col md:flex-wrap md:flex-row w-full justify-between  items-center '>

            <div className='mb-4 flex  items-start justify-center py-2 flex-col'>
                <div className='flex px-6 rounded-2xl py-1 items-center justify-center bg-indigo-200 text-indigo-900  '>
                    <p>{props.spec} </p>
                </div>
            </div>
            <Link to={`/jobdetails/${props.id}`}>
                    <button className='my-2 py-2 px-4  border border-indigo-600   rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-indigo-600 font-semibold'>View Detail </button>
            </Link>
            
        </div>
</div>
    )
}

export default JobsCard;