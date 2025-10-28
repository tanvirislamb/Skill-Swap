import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function Carts({ eachData }) {

    const { skillName, image, price, rating, skillId } = eachData;

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-101 duration-300">
            <img src={image} alt="" className="w-full h-55 object-cover" />
            <div className="px-4 pt-2 pb-4 space-y-2">
                <p className="font-medium">{skillName}</p>
                <div className="flex justify-between items-center text-sm text-teal-600">
                    <p>${price}</p>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500"></FaStar>
                        <p>{rating}</p>
                    </div>
                </div>
                <Link to={`/details/${skillId}`}
                    className="bg-teal-600 hover:bg-teal-700 duration-300 block text-white py-1 text-center w-full rounded-md font-medium"
                >View Details
                </Link>
            </div>
        </div>
    )
}