import { useEffect, useState } from "react"
import Carts from "./Carts";

export default function Allcart() {

    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                setCartData(data)
            })
    }, [])

    return (
        <div>
            <p className="text-3xl font-bold text-center pb-10">Popular Skills</p>
            <div className="grid grid-cols-4 gap-5 mx-25">
                {
                    cartData.map((eachData, index) => <Carts key={index} eachData={eachData}></Carts>)
                }
            </div>
        </div>
    )
}