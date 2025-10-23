import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

export default function Profile() {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <title>Skills Swap | Profile</title>
            <div className="bg-white max-w-3xl mx-auto mt-20 shadow-lg rounded-md px-8 py-10">
                <p>{user && user.email}</p>
            </div>
        </div>
    )
}