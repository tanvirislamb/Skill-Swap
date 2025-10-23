import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useParams } from "react-router";
export default function Details() {
    const [detailsData, setDetailsData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data.find((dataofcart) => dataofcart.skillId == id)
                setDetailsData(filterData)
            })
    }, [id])

    console.log(detailsData.skillName);

    return (
        <div>
            <title>Skills Swap | Details</title>
            <div className="max-w-7xl mx-auto my-20 flex justify-center items-center bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-full w-full overflow-hidden">
                    <img
                        src={detailsData.image}
                        alt={detailsData.skillName}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            {detailsData.skillName}
                        </h2>
                        <span className="bg-teal-600 text-white text-sm px-3 py-1 rounded-full">
                            {detailsData.category}
                        </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{detailsData.description}</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                        <IoPersonCircleSharp className="text-5xl text-teal-600" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">{detailsData.providerName}</p>
                            <p className="text-[12px] text-gray-500">{detailsData.providerEmail}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                        <p className="text-lg font-semibold text-teal-700">
                            ${detailsData.price} / session
                        </p>
                        <div className="flex items-center gap-1 text-yellow-500">
                            <FaStar className="text-lg" />
                            <span className="text-gray-800 font-medium">
                                {detailsData.rating} <span className="text-sm text-gray-500">/ 5</span>
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">
                        Slots Available:{" "}
                        <span className="font-semibold text-gray-800">
                            {detailsData.slotsAvailable}
                        </span>
                    </p>
                    <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg mt-4 font-semibold transition-all duration-300">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    )
}