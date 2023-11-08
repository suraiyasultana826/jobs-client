import { useLoaderData } from "react-router-dom";
import PostedCard from "./PostedCard";
import { useState } from "react";
import Swal from "sweetalert2";

const MyPostedJob = () => {

    const myJobs = useLoaderData()
    const [jobs, setJobs] = useState(myJobs);
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
    
            fetch(`https://assignment-eleven-server-gold.vercel.app/postedJob/${_id}`, {
              method: 'Delete'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your job has been deleted.",
                    icon: "success"
                  });
                  const remaining = jobs?.filter(job => job._id !== _id);
                  setJobs(remaining);
                  console.log(remaining);
    
                }
              })
          }
        });
    
      }
    return (
        <div>
            <h1 className="lg:text-5xl font-bold text-center mb-20">My Posted Jobs</h1>
          
           <div className="lg:grid lg:grid-cols-2">
           {
                jobs.map(myJob => <PostedCard key={myJob._id} myJob={myJob} setJobs={setJobs} handleDelete={handleDelete}></PostedCard>)
            }
           </div>
            
        </div>
    );
};

export default MyPostedJob;