import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const myJob = useLoaderData();
    const { _id, email, jobTitle, deadline, description, category, img, minPrice, maxPrice } = myJob;


    const handleUpdateJob = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const img = form.img.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const updatedJob = {email, jobTitle, deadline, description, category, img, minPrice, maxPrice}
        console.log(updatedJob);

        //send data to server
        fetch(`http://localhost:5300/postedJob/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedJob)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Job updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }

        })

    }




    return (
        <div>
        <h1 className="text-5xl font-bold text-center"> Update Your Job</h1>
        
        <form onSubmit={handleUpdateJob} className="card-body">
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" defaultValue={email} className="input input-bordered" required name="email" disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" placeholder="Job Title" defaultValue={jobTitle} className="input input-bordered" required name="jobTitle" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" placeholder="" defaultValue={deadline} className="input input-bordered" required name="deadline" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="description" defaultValue={description} className="input input-bordered" required name="description" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    {/* <input type="email" placeholder="email" className="input input-bordered" required /> */}
                    <select name="category" id="category" defaultValue={category}>
                        <option value="webDev">Web Development</option>
                        <option value="digitalMarketing">Digital Marketing</option>
                        <option value="graphicsDesign">Graphics Design</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input type="url" placeholder="Image Url" defaultValue={img} className="input input-bordered" required name="img" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Minimum Price</span>
                    </label>
                    <input type="number" placeholder="Minimum Price" defaultValue={minPrice} className="input input-bordered" required name="minPrice" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Maximum Price</span>
                    </label>
                    <input type="number" placeholder="Maximum Price" defaultValue={maxPrice} className="input input-bordered" required name="maxPrice" />

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-blue-500 text-white">Update Job</button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default Update;