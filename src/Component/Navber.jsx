import { useContext } from "react";
import { IoLogoBuffer } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { IoPersonCircle } from "react-icons/io5";
import '../index.css'

export default function Navber() {

    const { user, letUserSignOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        letUserSignOut()
            .then(() => {
                alert("you logged out")
                navigate('/')
            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <div className="flex justify-between items-center px-5 md:px-15 py-2 shadow bg-white/40 backdrop-blur-2xl sticky top-0 z-30">
            <Link to='/'>
                <p className="md:text-xl font-semibold flex items-center gap-1"><IoLogoBuffer className="text-xl md:text-2xl text-teal-600" />Skills <span className="text-teal-600">Swap</span></p>
            </Link>
            <div className="flex items-center gap-4 text-sm">
                <NavLink to='/' className={({ isActive }) => `hidden md:block duration-300 relative ${isActive ? "font-bold" : ''}`}
                >Home</NavLink>
                {
                    user ? <div className="flex items-center gap-6">
                        <NavLink to='/profile' className={({ isActive }) => `hidden md:block duration-300 relative ${isActive ? "font-bold" : ''}`}>
                            Profile</NavLink>
                        <div className="flex items-center gap-4">
                            {
                                user && user.photoURL
                                    ? (
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName || "User"}
                                            className="w-9 h-9 rounded-full object-cover border border-teal-600"
                                        />
                                    )
                                    : (
                                        <IoPersonCircle className="text-4xl text-teal-600" />
                                    )
                            }

                            <button onClick={handleLogout} className="hidden md:block bg-teal-600 rounded-md px-3 py-[4px] text-white font-medium cursor-pointer">Log Out</button>
                        </div>
                    </div> :
                        <div className="hidden md:flex items-center gap-3 text-white font-medium">
                            <Link to='/signin' className="bg-teal-600 rounded-md px-3 py-[4px]">Sign In</Link>
                            <Link to='/signup' className="bg-teal-600 rounded-md px-3 py-[4px]">Sign Up</Link>
                        </div>
                }
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 right-0 w-52 p-2 shadow">
                        <NavLink to='/' className={({ isActive }) => `duration-300 relative ${isActive ? "font-bold" : ''}`}>
                            <li><a>Home</a></li>
                        </NavLink>
                        {
                            user ?
                                (
                                    <div>
                                        <NavLink to='/profile' className={({ isActive }) => `duration-300 relative ${isActive ? "font-bold" : ''}`}>
                                            <li><a>Profile</a></li>
                                        </NavLink>
                                        <button onClick={handleLogout}>
                                            <li><a>Log Out</a></li>
                                        </button>
                                    </div>
                                ) :
                                <div>
                                    <Link to='/signin' ><li><a>Sign In</a></li></Link>
                                    <Link to='/signup'><li><a>Sign Up</a></li></Link>
                                </div>

                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}