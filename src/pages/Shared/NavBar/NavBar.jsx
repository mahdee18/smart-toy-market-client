import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const navItem = (
        <>
            <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/allToys" className={location.pathname === '/allToys' ? 'active' : ''}>
                    All Toys
                </Link>
            </li>
            <li>
                <Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>
                    Blogs
                </Link>
            </li>
        </>
    );

    const conditionalNavItem = (
        <>
            <li>
                <Link to="/myToys" className={location.pathname === '/myToys' ? 'active' : ''}>
                    My Toys
                </Link>
            </li>
            <li>
                <Link to="/addAtoy" className={location.pathname === '/addAtoy' ? 'active' : ''}>
                    Add A Toy
                </Link>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 w-[90%] mx-auto">
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 font-semibold bg-base-200"
                        >
                            {navItem}
                            {user && conditionalNavItem}
                        </ul>
                    </div>
                    <div className="flex md:flex-col items-center ml-2v">
                        <Link to={'/'}>
                            <img
                                src="https://cdn11.bigcommerce.com/s-sl6fnsa/product_images/uploaded_images/stm-logo.png"
                                className="w-16 h-16 lg:w-24 lg:h-18"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navItem}
                        {user && conditionalNavItem}
                    </ul>
                </div>
                <div className="navbar-end mr-3">
                    <div>
                        {user ? (
                            <div className="flex items-center justify-center gap-6">
                                <img title={user.displayName} className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                                <button
                                    onClick={handleLogOut}
                                    className="btn border-0 text-white bg-[#ff6e13]  px-4 py-2 font-bold rounded-md flex items-center gap-1"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to="/login">
                                <button className="btn border-0 text-white bg-[#ff6e13] px-4 py-2 font-bold rounded-md flex items-center gap-1">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
