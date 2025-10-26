import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Navigate, useLocation } from "react-router"
import LoadingPage from "../Component/Loading"

export default function Private({ children }) {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    if (user && user?.email) {
        return children
    } else {
        return <Navigate state={location.pathname} to='/signin'></Navigate>
    }
}