import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

export default function Profile() {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="min-h-screen bg-gray-50  flex items-center justify-center py-20 px-4">
            <title>Skills Swap | Profile</title>
            <div className="bg-white max-w-3xl w-full shadow-xl rounded-xl p-10 flex flex-col sm:flex-row items-center gap-8 border border-gray-100">
                <div className="bg-teal-600 p-1 rounded-full">
                    <img src={user && user?.photoURL} className="w-25 h-25 rounded-full object-cover bg-white border-3 border-white" alt={user && user.displayName} />
                </div>
                <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        {user?.displayName || "User Name"}
                    </h2>
                    <p className="text-gray-500 mb-4">{user?.email || "user@email.com"}</p>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3">
                        <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                            Verified Member
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                            Joined: 2025
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}