import Swal from "sweetalert2";

const PostJob = () => {
    const handleAddJob = event => {
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
        const newJob = {email, jobTitle, deadline, description, category, img, minPrice, maxPrice}
        console.log(newJob);

        //send data to server
        fetch('http://localhost:5300/postedJob', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newJob)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Job added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }

        })

    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center"> Post A Job</h1>
            
            <form onSubmit={handleAddJob} className="card-body">
                <div className="lg:grid lg:grid-cols-2 lg:gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" placeholder="Job Title" className="input input-bordered" required name="jobTitle" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" placeholder="" className="input input-bordered" required name="deadline" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="description" className="input input-bordered" required name="description" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        {/* <input type="email" placeholder="email" className="input input-bordered" required /> */}
                        <select name="category" id="category">
                            <option value="webDev">Web Development</option>
                            <option value="digitalMarketing">Digital Marketing</option>
                            <option value="graphicsDesign">Graphics Design</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="url" placeholder="Image Url" className="input input-bordered" required name="img" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Price</span>
                        </label>
                        <input type="number" placeholder="Minimum Price" className="input input-bordered" required name="minPrice" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Maximum Price</span>
                        </label>
                        <input type="number" placeholder="Maximum Price" className="input input-bordered" required name="maxPrice" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-500 text-white">Add Job</button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default PostJob;