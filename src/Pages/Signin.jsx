import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

export default function SignIn() {

    const { letuserlogin, setUser } = useContext(AuthContext);

    const handlesignin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.Password.value;
        letuserlogin(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
            })
            .catch((error) => {
                console.error(error.message)
            })
    }

    return (
        <div>
            <title>Skills Swap | Sign In</title>
            <div className="max-w-md mx-auto bg-white mt-20 px-10 py-15 rounded-xl shadow-lg">
                <p className="text-teal-600 font-semibold text-center text-2xl pb-4">Sign In</p>
                <form onSubmit={handlesignin} className="flex justify-center items-center flex-col gap-4">
                    <input type="email" name="email" placeholder="Email" className="py-2 px-2 border-teal-600 border-1 rounded-xl w-full"></input>
                    <input type="Password" name="Password" placeholder="Password" className="py-2 px-2 border-teal-600 border-1 rounded-xl w-full"></input>
                    <input type="submit" value="Sign In" className="py-2 px-2 bg-teal-600 rounded-xl text-white font-medium w-full" />
                </form>
                <div className="flex items-center gap-1 text-sm pt-4"><p>Don't have an account?</p><Link to='/signup' className="text-teal-600">Sign Up</Link></div>
            </div>
        </div>
    )
}