import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useParams } from "react-router";
import Swal from "sweetalert2";

export default function Details() {
    const [detailsData, setDetailsData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const { id } = useParams();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data.find((dataofcart) => dataofcart.skillId == id)
                setDetailsData(filterData)
            })
    }, [id])

    const handleBookClick = () => {
        setIsModalOpen(true);
    };
    const handleModalSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            Swal.fire({
                icon: "warning",
                title: "Missing information",
                text: "Please enter both name and email.",
            });
            return;
        }

        setIsModalOpen(false);
        setName("");
        setEmail("");

        Swal.fire({
            icon: "success",
            title: "Session Booked!",
            text: `Your booking for ${detailsData.skillName} has been confirmed.`,
            confirmButtonColor: "#0d9488",
        });
    };

    return (
        <div>
            <title>Skills Swap | Details</title>
            <div className="max-w-6xl mx-auto lg:my-20 flex flex-col lg:flex-row justify-center items-center bg-white lg:rounded-2xl lg:shadow-lg overflow-hidden">
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
                    <button
                        onClick={handleBookClick}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg mt-4 font-semibold transition-all duration-300">
                        Book Session
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-white/10 backdrop-blur-md flex justify-center items-center z-50">
                    <div className="bg-white w-96 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4 text-center">
                            Book Session
                        </h3>
                        <form onSubmit={handleModalSubmit} className="space-y-4">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            />
                            <div className="flex justify-end gap-3 pt-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                                >
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    )
}