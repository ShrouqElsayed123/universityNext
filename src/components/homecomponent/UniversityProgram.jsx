// components/UniversityProgram.jsx
"use client"; // مهم لو انتِ في app directory مع Next.js 13+

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
    { icon: "✱", label: 'Data Sciences' },
    { icon: "✱", label: 'Machine Intelligence' },
    { icon: "✱", label: 'Internet of Things and Big Data Analytics ' },
    { icon: "✱", label: 'Medical Laboratory Technology ' },
    { icon: "✱", label: ' Radiology and Medical Imaging Technology' },
    { icon: "✱", label: 'Smart Cities Planning and Construction ' },
    { icon: "✱", label: 'Materials Engineering and Manufacturing  ' },
    { icon: "✱", label: 'Computer Engineering ' },
];

export default function UniversityProgram() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
    };

    return (
        <div className="bg-mainColor py-3">
            <Slider {...settings} className="flex items-center">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <div className="flex items-center gap-2 text-white text-xl font-medium px-4">
                            <span className="text-secondaryColorDark1 text-2xl">{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
