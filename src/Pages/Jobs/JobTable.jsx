
const JobTable = ({job}) => {
    const {category, job_title, deadline, price_range,short_description} = job
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{price_range}</p>
          <p>{deadline}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default JobTable;