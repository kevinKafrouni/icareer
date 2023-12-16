function JobsGrid(props){

    const list = props.list;
    return(
        <div className="grid grid-cols-4 gap-4 dark:text-white">
            {
                list.map(item=>{
                    return(
                        <div>{item}</div>
                    )
                })
            }
        </div>
    );

}
export default JobsGrid;