import ApplicationsDashboard from "./ApplicationsDashboard";
import PostedJobsTable from "./PostedJobsTable";
function ManageJobsPage(){
    return(
        <div className="mt-24">
            <PostedJobsTable />
        </div>
    )
}
export default ManageJobsPage;