import { useContext } from "react";
import { IoLogoBuffer } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { IoPersonCircle } from "react-icons/io5";


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
        <div className="flex justify-between items-center px-15 py-2 shadow bg-white/40 backdrop-blur-2xl sticky top-0 z-30">
            <Link to='/'>
                <p className="text-xl font-semibold flex items-center gap-1"><IoLogoBuffer className="text-2xl text-teal-600" />Skills <span className="text-teal-600">Swap</span></p>
            </Link>
            <div className="flex items-center gap-4 text-sm">
                <NavLink to='/' className={`font-medium`}>Home</NavLink>
                {
                    user ? <div className="flex items-center gap-6">
                        <NavLink to='/profile' className={`font-medium`}>Profile</NavLink>
                        <div className="flex items-center gap-4">
                            <IoPersonCircle className="text-4xl text-teal-600"></IoPersonCircle>
                            <button onClick={handleLogout} className="bg-teal-600 rounded-md px-3 py-[4px] text-white font-medium cursor-pointer">Log Out</button>
                        </div>
                    </div> :
                        <div className="flex items-center gap-3 text-white font-medium">
                            <Link to='/signin' className="bg-teal-600 rounded-md px-3 py-[4px]">Sign In</Link>
                            <Link to='/signup' className="bg-teal-600 rounded-md px-3 py-[4px]">Sign Up</Link>
                        </div>
                }
            </div>
        </div>
    )
}