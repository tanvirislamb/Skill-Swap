import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import photo3 from "../assets/3.jpg";

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

export default function Homepage() {
    return (
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
    );
}
