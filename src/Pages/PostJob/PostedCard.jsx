import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PostedCard = ({ myJob,  setJobs, handleDelete }) => {
  const { _id, jobTitle, deadline, description, category, img, minPrice, maxPrice } = myJob;

 
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{jobTitle}</h2>
        <p>{description}</p>
        <p>Price Range : ${minPrice} - ${maxPrice}</p>
        <div className="card-actions justify-end">
         <Link to={`/update/${_id}`}> <button className="btn bg-blue-500 text-white ">Update</button></Link>
          <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white ">Delete</button>
          <button disabled className="btn btn-ghost"> Bid Now</button>
        </div>
      </div>
    </div>
  );
};

export default PostedCard;