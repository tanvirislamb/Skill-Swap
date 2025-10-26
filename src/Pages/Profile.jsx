import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

export default function Profile() {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <title>Skills Swap | Profile</title>
            <div className="bg-white max-w-3xl mx-auto mt-20 shadow-lg rounded-md px-8 py-10 flex items-center gap-2">
                <div className="bg-teal-600 p-1 rounded-full">
                    <img src={user && user?.photoURL} className="w-25 h-25 rounded-full object-cover bg-white border-3 border-white" alt={user && user.displayName} />
                </div>
                <div>
                    <p className="font-medium">{user && user.email}</p>
                    <p>{user && user.displayName}</p>
                </div>
            </div>
        </div>
    )
}