import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import logoimg from '../Assets/icon/ux.png';

const Navbar = () => {

    const [user] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/myPortfolio'>Portfolio</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{
            user ?
                <button onClick={handleSignOut} dashboard-sidebar className="btn btn-ghost">Sign Out</button>

                :
                <Link to='/login'>Login</Link>
        }</li>

    </>

    return (
        <div dashboard-sidebar className="navbar bg-indigo-900 text-white lg:px-20 " >
            < div dashboard-sidebar className="navbar-start" >
                <div dashboard-sidebar className="dropdown" >
                    <label tabIndex="0" dashboard-sidebar className="btn btn-ghost lg:hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" dashboard-sidebar className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg >
                    </label >
                    <ul tabIndex="0" dashboard-sidebar className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-indigo-900 text-white rounded-box w-52" >
                        {menuItems}
                    </ul >
                </div >
                <img width="50" src={logoimg} alt="" />
                <a href="/" dashboard-sidebar className="btn btn-ghost normal-case text-xl" > PC - Constructor</a >
            </div >
            <div dashboard-sidebar className="navbar-end hidden lg:flex" >
                <ul dashboard-sidebar className="menu menu-horizontal p-0" >
                    {menuItems}
                </ul >
            </div >
            <div dashboard-sidebar className='navbar-end lg:hidden' >
                <label htmlFor="dashboard-sidebar" className="btn btn-square btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div >
        </div >
    );
};

export default Navbar;