import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useLocation } from "react-router";

export default function PasswordReset() {
    const location = useLocation();
    const resetEmail = location.state?.emailforpass || ""
    const [email, setEmail] = useState(resetEmail);
    const [newPassword, setNewPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setNewPassword(value);

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

    const handleReset = (e) => {
        e.preventDefault();
        if (!email) return;
        if (passwordError || !newPassword) return;
        window.location.href = "https://mail.google.com/";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">
                <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
                    Reset Password
                </h2>

                <form onSubmit={handleReset} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            New Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={handlePasswordChange}
                                placeholder="Enter new password"
                                required
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-teal-600"
                            >
                                {showPassword ? <IoEyeOff className="text-xl" /> : <IoEye className="text-xl" />}
                            </button>
                        </div>
                        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={passwordError !== ""}
                        className={`w-full py-2 text-white font-semibold rounded-xl transition duration-200 shadow-md ${passwordError ? "bg-gray-400 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"
                            }`}
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}
