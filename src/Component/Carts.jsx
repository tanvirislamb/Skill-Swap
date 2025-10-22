export default function Carts({ eachData }) {

    const { skillName, image, price, rating } = eachData;

    return (
        <div className="bg-white rounded-md overflow-hidden shadow-md">
            <img src={image} alt="" className="w-full h-55 object-cover" />
            <div className="px-4 pt-2 pb-4 space-y-2">
                <p className="font-medium">{skillName}</p>
                <div className="flex justify-between items-center text-sm">
                    <p>${price}</p>
                    <p>{rating}</p>
                </div>
                <button className="bg-teal-600 text-white py-1 w-full rounded-md font-medium">View Details</button>
            </div>
        </div>
    )
}