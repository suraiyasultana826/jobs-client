import { useLoaderData } from "react-router-dom";
import PostedCard from "./PostedCard";
import { useState } from "react";

const MyPostedJob = () => {
    const myJobs = useLoaderData()
    const [jobs, setJobs] = useState(myJobs);
    return (
        <div>
            <h1 className="lg:text-5xl font-bold text-center mb-20">My Posted Jobs</h1>
          
           <div className="lg:grid lg:grid-cols-2">
           {
                myJobs.map(myJob => <PostedCard key={myJob._id} myJob={myJob} jobs={jobs} setJobs={setJobs}></PostedCard>)
            }
           </div>
            
        </div>
    );
};

export default MyPostedJob;