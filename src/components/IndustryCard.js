function IndustryCard(props){
    return(    
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-w-400">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={props.image}/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                <div className="flex flex-row justify-center gap-12 p-4 leading-normal">
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <p>average growth</p>
                        <p className="text-center text-green-700">+8%</p>
                    </div>
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <p>number of experts</p>
                        <p className="text-center">25000</p>
                    </div>
                </div>
            </div>
            
        </a>

    );
}

export default IndustryCard;

