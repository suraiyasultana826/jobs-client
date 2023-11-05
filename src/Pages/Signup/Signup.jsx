
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signup from '../../assets/signup.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const [regError, setRegError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        console.log(name, email, password, url);
        if (password.length < 6) {
            setRegError('Password should be at least 6 characters or longer');
            return;

        }

        else if (!/[A-Z]/.test(password)) {
            setRegError('Your Password should have at least a capital character');
            return;
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            setRegError('Your Password should have at least a special  character');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('SignUp successful')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="text-center lg:text-left">
                        <img className='' src={signup} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center pt-5 font-bold">Sign Up now!</h1>
                        <form onSubmit={handleSignup} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="url" placeholder="photo url" name='url' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />

                            </div>
                            {
                                regError && <p className="text-red-700">{regError}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn  bg-blue-500" type='submit' value='Sign Up'>Sign Up</button>
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an account? <Link className='text-blue-600 font-bold' to='/login'> Login</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;