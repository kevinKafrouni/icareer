import { Link } from "react-router-dom";

function JobsGrid(props){

    const list = props.list;
    return(
        <div className="grid grid-cols-4 gap-4 dark:text-white">
            {
                list.map(item=>{
                    return(
                        <Link to={item.path}>{item.name}</Link>
                    )
                })
            }
        </div>
    );

}
export default JobsGrid;