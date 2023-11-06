
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.avif'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    
    const [loginError, setLoginError] = useState('');
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
             
                toast.success('Successfully Logged In!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                setLoginError('Invalid Email or password');
            })
    }


    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                toast.success('Successfully Logged In!')
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='h-2/4 w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center pt-5 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">

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
                        <div className="form-control mt-6">
                            {
                                loginError && <p className="text-red-700 mb-2"> {loginError}</p>
                            }
                            <button className="btn  bg-blue-500 text-white " type='submit' value='Login'>Login</button>
                        </div>
                    </form>
                    <button onClick={handleGoogle} className='btn w-3/4  mx-auto bg-pink-500 text-white'>Continue with Google</button>
                    <p className='my-4 text-center'>New here? <Link className='text-blue-600 font-bold' to='/signup'> Sign up</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;