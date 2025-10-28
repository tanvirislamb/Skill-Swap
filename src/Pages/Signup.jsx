import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function SignUp() {

    const { createUser, setUser, updateUser, gglesignin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const [passwordError, setPasswordError] = useState("");
    const [password, setPassword] = useState("");


    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (value.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
        } else if (!/[A-Z]/.test(value)) {
            setPasswordError("Password must contain at least one uppercase letter.");
        } else if (!/[a-z]/.test(value)) {
            setPasswordError("Password must contain at least one lowercase letter.");
        } else {
            setPasswordError(""); 
        }
    };

    const handlesignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (passwordError || !password) return;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({
                    displayName: name,
                    photoURL: image
                })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: image });
                        navigate(`${location.state ? location.state : '/'}`)
                    }).catch((error) => {
                        setUser(user)
                    })
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });

    }

    const siggnUpwithGgle = () => {
        gglesignin()
            .then((userData) => {
                setUser(userData.user)
                navigate("/")
            })
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white md:bg-gray-50">
            <title>Skills Swap | Sign Up</title>

            <div className="w-full max-w-md bg-white rounded-2xl md:shadow-xl p-8 sm:p-10">
                <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
                    Create an Account
                </h2>
                <p className="text-gray-500 text-center mb-8">
                    Join Skills Swap and start sharing your expertise today
                </p>

                <form onSubmit={handlesignup} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Enter image link"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                            />

                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-teal-600"
                            >
                                {showPassword ? (
                                    <IoEyeOff className="text-xl" />
                                ) : (
                                    <IoEye className="text-xl" />
                                )}
                            </button>
                        </div>
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={passwordError !== ""}
                        className="w-full py-2 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition duration-200 shadow-md"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-3 text-gray-500 text-sm">Or continue with</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <button
                    onClick={siggnUpwithGgle}
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
                    Already have an account?{" "}
                    <Link to="/signin" className="text-teal-600 font-medium hover:underline">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>

    )
}