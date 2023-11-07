import Swal from "sweetalert2";

const PostedCard = ({ myJob }) => {
  const { _id, jobTitle, deadline, description, category, img, minPrice, maxPrice } = myJob;

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

        fetch(`http://localhost:5300/postedJob/${_id}`, {
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

            }
          })
      }
    });

  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{jobTitle}</h2>
        <p>{description}</p>
        <p>Price Range : ${minPrice} - ${maxPrice}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-blue-500 text-white ">Update</button>
          <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white ">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostedCard;