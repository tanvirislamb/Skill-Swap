import { Outlet } from "react-router";
import Navber from "../Component/Navber";

export default function Home() {
    return (
        <div>
            <title>Home</title>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    )
}