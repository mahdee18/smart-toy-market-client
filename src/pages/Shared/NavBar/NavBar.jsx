import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItem = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allToys'>All Toys</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <div className="flex items-center ml-2">
                        <img src="https://netl.doe.gov/sites/default/files/inline-images/SMART%20Logo_official_rgb.png" className="w-16 h-16 lg:w-2/5 lg:h-24" alt="" />
                        <a className="btn btn-ghost normal-case font-semibold text-2xl lg:text-4xl">Toy Market</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
