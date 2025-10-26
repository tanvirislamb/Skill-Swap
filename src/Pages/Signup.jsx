import { use, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

export default function SignUp() {

    const { createUser, setUser } = useContext(AuthContext)
    const handlesignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });

    }


    return (
        <div>
            <title>Skills Swap | Sign Up</title>
            <div className="max-w-md mx-auto bg-white mt-20 px-10 py-15 rounded-xl shadow-lg">
                <p className="text-teal-600 font-semibold text-center text-2xl pb-4">Sign Up</p>
                <form onSubmit={handlesignup} className="flex justify-center items-center flex-col gap-4">
                    <input type="text" name="name" placeholder="Your Name" className="py-2 px-2 border-teal-600 border-1 rounded-xl w-full"></input>
                    <input type="text" name="image" placeholder="Your Photo URL" className="py-2 px-2 border-teal-600 border-1 rounded-xl w-full"></input>
                    <input type="email" name="email" required placeholder="Email" className="py-2 px-2 border-teal-600 border-1 rounded-xl w-full"></input>
                    <input type="Password" name="password" required placeholder="Password" className="py-2 px-2 border-teal-600 border-1 rounded-xl w-full"></input>
                    <input type="submit" value="Sign In" className="py-2 px-2 bg-teal-600 rounded-xl text-white font-medium w-full" />
                </form>
                <div className="flex items-center gap-1 text-sm pt-4"><p>Already have an account?</p><Link to='/signin' className="text-teal-600">Sign In</Link></div>
            </div>
        </div>
    )
}