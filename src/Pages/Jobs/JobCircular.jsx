import { useEffect, useState } from "react";
import JobTable from "./JobTable";

const JobCircular = () => {
    const [jobs, setJobs] = useState([]);
    useEffect( () => {
        fetch('job.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="lg:grid lg:grid-cols-2 gap-5 mt-8">
            {
                jobs.map(job => <JobTable key={job.deadline} job={job}></JobTable>)
            }
            
        </div>
    );
};

export default JobCircular;