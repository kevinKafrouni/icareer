import SpecializationCard from "./SpecializationCard";
function SpecializationGrid(){
    return(
        <div className="flex flex-wrap gap-4 justify-center">
            <SpecializationCard
                title="web dev"
                description="this is webdevelopper description"
                image="https://watermark.lovepik.com/photo/50036/0163.jpg_wh1200.jpg"
                nbjobs="22"
                />
                <SpecializationCard
                title="web dev"
                description="this is webdevelopper description"
                image="https://watermark.lovepik.com/photo/50036/0163.jpg_wh1200.jpg"
                nbjobs="22"
                />
                <SpecializationCard
                title="web dev"
                description="this is webdevelopper description"
                image="https://watermark.lovepik.com/photo/50036/0163.jpg_wh1200.jpg"
                nbjobs="22"
                />
                <SpecializationCard
                title="web dev"
                description="this is webdevelopper description"
                image="https://watermark.lovepik.com/photo/50036/0163.jpg_wh1200.jpg"
                nbjobs="22"
                />
        </div>
    );
}
export default SpecializationGrid;