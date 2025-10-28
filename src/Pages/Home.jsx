import { Outlet } from "react-router";
import Navber from "../Component/Navber";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingPage from "../Component/Loading";
import Footer from "../Component/Footer";


export default function Home() {

    const { loading } = useContext(AuthContext)

    return (
        <div>
            <title>Skills Swap</title>
            {
                loading ? <LoadingPage></LoadingPage> :
                    <div>
                        <Navber></Navber>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
            }
        </div>
    )
}