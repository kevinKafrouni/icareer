function CompanyCard(props) {
  return (
        <li className="flex py-6 w-2/4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={props.logo}
                        className="h-full w-full object-cover object-center"
                    />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="">{props.name}</a>
                        </h3>
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-base font-medium text-gray-900">Jobs : {props.jobs}</p>
                    </div>
                    </div>
                </li>
  )
}


export default CompanyCard;