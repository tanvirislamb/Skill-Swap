import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import photo3 from "../assets/3.jpg";
import Allcart from "../Component/Allcart";

const slides = [
    {
        title: "Learn a New Skill Today",
        subtitle: "Explore thousands of skills offered by passionate locals in your community.",
        image: photo1
    },
    {
        title: "Share Your Passion",
        subtitle: "Turn your hobby into a teaching opportunity and connect with eager learners.",
        image: photo2
    },
    {
        title: "Grow Together",
        subtitle: "Join a vibrant community dedicated to personal and professional growth.",
        image: photo3
    }
];
const Step = ({ icon, title, description }) => (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mx-auto text-3xl">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mt-6">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
    </div>
);

export default function Homepage() {
    return (
        <div>
            <div className="py-10 px-15 bg">
                <Swiper
                    className="custom-swiper"
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    effect="fade"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#0000006e]  flex flex-col items-center justify-center text-center p-4">
                                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
                                        {slide.subtitle}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex justify-center  max-w-[1800px] mx-auto">
                <Allcart></Allcart>
            </div>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">How It Works</h2>
                        <p className="mt-2 text-lg text-gray-600">Start your skill-sharing journey in three simple steps.</p>
                        <div className="mt-4 w-24 h-1 bg-teal-500 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Step
                            icon="🔍"
                            title="Find a Skill"
                            description="Browse our diverse categories or search for a specific skill you want to learn."
                        />
                        <Step
                            icon="📅"
                            title="Book a Session"
                            description="Choose a provider, pick a suitable time, and book your session in just a few clicks."
                        />
                        <Step
                            icon="🎓"
                            title="Learn & Grow"
                            description="Attend your session, learn from an expert, and expand your horizons. It's that simple!"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
