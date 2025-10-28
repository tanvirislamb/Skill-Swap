import { FaStar } from "react-icons/fa";

const providers = [
    {
        name: "Alex Martin",
        title: "Guitar Lessons",
        rating: 4.8,
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sara Hossain",
        title: "Spoken English",
        rating: 4.9,
        img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "David Chen",
        title: "React.js Help",
        rating: 5.0,
        img: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
        name: "Luca Rossi",
        title: "Gourmet Cooking",
        rating: 4.9,
        img: "https://randomuser.me/api/portraits/men/51.jpg",
    },
];

export default function TopRatedProviders() {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    Top Rated Providers
                </h2>
                <p className="text-gray-600 mb-4">
                    Meet our community's most-loved teachers and experts.
                </p>
                <div className="w-24 h-1 bg-teal-600 mx-auto rounded"></div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {providers.map((p, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative mb-6">
                            <img
                                src={p.img}
                                alt={p.name}
                                className="w-28 h-28 rounded-full border-4 border-teal-600 object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                        <p className="text-gray-500">{p.title}</p>
                        <div className="flex items-center justify-center mt-3 text-yellow-500">
                            <FaStar className="mr-1" /> <span className="font-medium">{p.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
