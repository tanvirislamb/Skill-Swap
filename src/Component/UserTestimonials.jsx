const testimonials = [
    {
        text: `"SkillSwap completely changed how I learn new hobbies. The guitar lessons were fantastic, and my instructor was so patient!"`,
        name: "Jessica P.",
        location: "New York",
        img: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
        text: `"As a developer, getting 1-on-1 help for my React project was a lifesaver. Highly recommend this platform for coders."`,
        name: "Michael B.",
        location: "San Francisco",
        img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        text: `"I've always wanted to make fresh pasta, and Luca's class was incredible! It was fun, informative, and delicious."`,
        name: "Emily R.",
        location: "Chicago",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

export default function UserTestimonials() {
    return (
        <section className="bg-teal-50 py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    What Our Users Say
                </h2>
                <p className="text-gray-600 mb-4">
                    Real stories from our growing community.
                </p>
                <div className="w-24 h-1 bg-teal-600 mx-auto rounded"></div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <p className="text-gray-700 italic mb-6">{t.text}</p>
                        <div className="flex items-center space-x-3">
                            <img
                                src={t.img}
                                alt={t.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="text-left">
                                <p className="font-bold text-gray-900">{t.name}</p>
                                <p className="text-gray-500 text-sm">{t.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
