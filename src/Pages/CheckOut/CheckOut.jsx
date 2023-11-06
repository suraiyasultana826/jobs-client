import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const CheckOut = () => {
    const webdev = useLoaderData();
    const {_id,category, job_title, deadline, price_range,short_description, img} = webdev;
    const {user} = useContext(AuthContext)
    const handleWebdev = event => {
        event.preventDefault();
        const form = event.target;
        const email= user?.email;
        const price = form.price.value;
        const date = form.date.value;
        const bid = {
            email,
            date,
            img,
            webdev:job_title,
            webdev_id: _id,
            price: price
        }

        console.log(bid);
        fetch('http://localhost:5300/bidWebdev', {
            method:'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(bid)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Bid on project successful!')

        })
    }
    return (
      <div>
          <div className="card w-3/4 mx-auto bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{short_description}</p>
          <p className="font-bold">price-Range: {price_range}</p>
          <p className="font-bold">Deadline: {deadline}</p>
          {/* <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}><button className="btn bg-blue-500 text-white">Bid Now</button></Link>
          </div> */}
        </div>
      </div>
     
      <form onSubmit={handleWebdev} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" defaultValue={user?.email} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="price" className="input input-bordered" required name="price" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input type="date" placeholder="date" defaultValue={deadline} className="input input-bordered" name="date" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500 text-white" value='order confirm'>Bid on the Project</button>
          
        </div>
      </form>

    </div>

  
    );
};

export default CheckOut;