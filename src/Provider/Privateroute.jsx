import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Navigate } from "react-router"

export default function Private({ children }) {

    const { user } = useContext(AuthContext)

    if (user && user?.email) {
        return children
    } else {
        return <Navigate to='/signin'></Navigate>
    }
}