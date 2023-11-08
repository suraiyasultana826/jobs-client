import { useEffect, useState } from "react";
import JobTable from "./JobTable";

const JobCircular = () => {
    const [jobs, setJobs] = useState([]);
    useEffect( () => {
        fetch('https://assignment-eleven-server-gold.vercel.app/webdev')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="lg:grid lg:grid-cols-2 gap-5 mt-8">
            {
                jobs.map(job => <JobTable key={job._id} job={job}></JobTable>)
            }
            
        </div>
    );
};

export default JobCircular;