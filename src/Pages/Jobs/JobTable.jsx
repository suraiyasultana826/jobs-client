import { Link } from "react-router-dom";

const JobTable = ({job}) => {
    const {_id,category, job_title, deadline, price_range,short_description, img} = job
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{short_description}</p>
          <p className="font-bold">price-Range: {price_range}</p>
          <p className="font-bold">Deadline: {deadline}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}><button className="btn bg-blue-500 text-white">Bid Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default JobTable;