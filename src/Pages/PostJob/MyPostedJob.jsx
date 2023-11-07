import { useLoaderData } from "react-router-dom";
import PostJob from "./PostJob";
import PostedCard from "./PostedCard";

const MyPostedJob = () => {
    const myJobs = useLoaderData()
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">My Posted Jobs</h1>
          
           <div className="lg:grid lg:grid-cols-2">
           {
                myJobs.map(myJob => <PostedCard key={myJob._id} myJob={myJob}></PostedCard>)
            }
           </div>
            
        </div>
    );
};

export default MyPostedJob;