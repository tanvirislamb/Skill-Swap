import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

export default function SignIn() {

    const { letuserlogin, setUser, gglesignin } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const handlesignin = (e) => {
        e.preventDefault()


        const email = e.target.email.value;
        const password = e.target.password.value;
        letuserlogin(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                console.error(error.message)
            })
    }

    const signInwithGgle = () => {
        gglesignin()
            .then((userData) => {
                setUser(userData.user)
                navigate(`${location.state ? location.state : "/"}`)
            })

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white md:bg-gray-50">
            <title>Skills Swap | Sign In</title>

            <div className="w-full max-w-md bg-white rounded-2xl md:shadow-xl p-8 sm:p-10">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
                    Sign in to your account
                </h2>

                <form onSubmit={handlesignin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <Link
                            to="/forgot-password"
                            className="text-teal-600 hover:underline font-medium"
                        >
                            Forgot your password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200"
                    >
                        Sign in
                    </button>
                </form>


                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-3 text-gray-500 text-sm">Or continue with</span>
                    <hr className="flex-grow border-gray-300" />
                </div>


                <button
                    onClick={signInwithGgle}

                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-50 transition duration-200"
                >
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google logo"
                        className="w-5 h-5"
                    />
                    <span className="font-medium">Sign in with Google</span>
                </button>

                <div className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-teal-600 font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </div>

    )
}