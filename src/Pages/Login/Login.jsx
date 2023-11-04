
import { Link } from 'react-router-dom';
import login from '../../assets/login.avif'
const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
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
                            <input type="email" placeholder="email" name='email'  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-blue-500" type='submit' value='Login'>Login</button>
                        </div>
                    </form>
                    <p className='my-4 text-center'>New here? <Link className='text-blue-600 font-bold' to='/signup'> Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;