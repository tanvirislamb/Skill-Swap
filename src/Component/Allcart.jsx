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
        <div className="py-10">
            <p className="text-3xl font-bold text-center pb-4">Popular Skills</p>
            <div className="flex justify-center pb-8">
                <div className="h-1 w-40 bg-teal-600"></div>
            </div>
            <div className="grid grid-cols-4 gap-10 mx-25">
                {
                    cartData.map((eachData, index) => <Carts key={index} eachData={eachData}></Carts>)
                }
            </div>
        </div>
    )
}