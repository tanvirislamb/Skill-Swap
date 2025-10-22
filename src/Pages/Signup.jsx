import { Link } from "react-router";

export default function SignUp() {
    return (
       <div>
        <title>Skills Swap | Sign Up</title>
         <div className="max-w-md mx-auto bg-white mt-20 p-5 rounded-xl border-1 border-teal-600">
            <p className="text-teal-600 font-semibold text-center text-2xl pb-4">Sign Up</p>
            <form className="flex justify-center items-center flex-col gap-4">
                <input type="text" placeholder="Your Name" className="py-2 px-2 border-teal-600 border-1 rounded-xl w-full"></input>
                <input type="text" placeholder="Your Photo URL" className="py-2 px-2 border-teal-600 border-1 rounded-xl w-full"></input>
                <input type="email" placeholder="Email" className="py-2 px-2 border-teal-600 border-1 rounded-xl w-full"></input>
                <input type="Password" placeholder="Password" className="py-2 px-2 border-teal-600 border-1 rounded-xl w-full"></input>
                <input type="submit" value="Sign In" className="py-2 px-2 bg-teal-600 rounded-xl text-white font-medium w-full" />
            </form>
            <div className="flex items-center gap-1 text-sm pt-4"><p>Already have an account?</p><Link to='/signin' className="text-teal-600">Sign In</Link></div>
        </div>
       </div>
    )
}