import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Providers/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';

const NavBar = () => {
    const { user, logOut } = useContext(authContext);
    const [isAdmin] = useAdmin();
    // const [isInstructor] = useInstructor();
    const isInstructor = true;
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/allinstructors">Instructors</Link></li>
                            <li><Link to="/allclasses">All Classes</Link></li>
                            {
                                isAdmin ? <>
                                    <li><Link to="/dashboard/admin">Dashboard</Link></li> </> :
                                    isInstructor ?
                                        (<li><Link to="/dashboard/instructorshome">Dashboard</Link></li>) :
                                        user && (<li><Link to="/dashboard">Dashboard</Link></li>)
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-black text-xl">Defend Yourself</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-black font-bold">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/allinstructors">Instructors</Link></li>
                        <li><Link to="/allclasses">All Classes</Link></li>
                        {
                            (isAdmin && user) ? (
                                <li><Link to="/dashboard/admin">Dashboard</Link></li>
                            ) : (
                                (isInstructor && user) ? (
                                    <li><Link to="/dashboard/instructorshome">Dashboard</Link></li>
                                ) : (
                                    (user && !isAdmin && !isInstructor) && <li><Link to="/dashboard">Dashboard</Link></li>
                                )
                            )
                        }


                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user &&
                        <img className='rounded-full pe-2'
                            style={{ width: "50px", height: "50px" }}
                            src={user?.photoURL} alt="" />
                    }

                    {
                        user ?
                            <button className="btn btn-link" onClick={handleLogOut} >Logout</button> :

                            <div>
                                <Link to="/signUp">
                                    <button className="btn btn-active btn-link text-black font-bold py-2 px-4" >sign Up</button>
                                </Link>

                                <Link to="/login">
                                    <button className="btn btn-active btn-link text-black font-bold py-2 px-4" >Login</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;