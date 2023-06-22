import { NavLink, Outlet } from "react-router-dom";
import {FaWallet, FaCalendarAlt, FaHome, FaBook, FaUsers, FaChalkboardTeacher, FaChalkboard, FaTh } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {

    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-violet-800">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/admin">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageclasses">
                                    <FaChalkboardTeacher/>Manage Classes
                                    
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers">
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                        </>
                    ) : isInstructor ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/instructorhome">
                                    <FaHome /> Instructor Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/instructorsclasses">
                                    <FaBook /> My Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addclass">
                                <FaChalkboard/> Create Class
                                     
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard">
                                    <FaHome /> User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookedclass">
                                    <FaCalendarAlt /> Booked Class
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymenthistory">
                                    <FaWallet /> Payment History
                                </NavLink>
                            </li>
                        </>
                    )}
                
                <div className="divider"></div>
                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                <li><NavLink to="/dashboard/allclasses"> <FaTh/> All Classes</NavLink></li>

            </ul>

        </div>
        </div >
    );
};

export default Dashboard;