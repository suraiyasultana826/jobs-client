import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { RiComputerLine} from 'react-icons/ri';
import {  BiSolidUserCircle } from 'react-icons/bi';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleSignOut = () => {
      logOut()
      .then(
        toast.success('Successfully Sign Out!')
      )
      .catch()
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        {
            user ?
              
                    <li> <button onClick={handleSignOut} className="">Sign Out</button></li>
                   
               
                : <Link to='/login'>
                    <li className="mt-2">Login</li></Link>
        }
        <li><Link to='/findJob'>Find A Job</Link></li>
        <li><Link to='/postJob'>Post A Job</Link></li>
        {/* <li><Link to='/login'>My bids</Link></li> */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><Link to='/'><RiComputerLine className="lg:w-7 lg:h-7"></RiComputerLine>JOBS</Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                   {
                    user ? <div className="lg:flex justify-center items-center lg:gap-3">
                        <p className="font-bold w-1/2 lg:w-full">{user.displayName}</p>
                        <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                    </div> : <BiSolidUserCircle className="w-10 h-10"></BiSolidUserCircle>
                   }
                </div>
            </div>

        </div>
    );
};

export default Navbar;