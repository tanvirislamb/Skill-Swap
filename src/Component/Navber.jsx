import { IoLogoBuffer } from "react-icons/io";
import { Link, NavLink } from "react-router";

export default function Navber() {
    return (
        <div className="flex justify-between items-center px-15 py-2 shadow bg-white/40 backdrop-blur-2xl sticky top-0 z-30">
            <Link to='/'>
                <p className="text-xl font-semibold flex items-center gap-1"><IoLogoBuffer className="text-2xl text-teal-600" />Skills <span className="text-teal-600">Swap</span></p>
            </Link>
            <div className="flex items-center gap-4 text-sm">
                <NavLink className={`font-medium`}>Home</NavLink>
                <div className="flex items-center gap-3 text-white font-medium">
                    <Link to='/signin' className="bg-teal-600 rounded-md px-3 py-[4px]">Sign In</Link>
                    <Link to='/signup' className="bg-teal-600 rounded-md px-3 py-[4px]">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}