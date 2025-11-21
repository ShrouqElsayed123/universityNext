"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { image: "/images/slider-image-1.jfif", text: "مرحبا بكم في جامعه المنوفية الاهلية" },
  { image: "/images/slider-image-2.jfif", text: "مرحبا بكم في جامعه المنوفية الاهلية" },
  { image: "/images/slider-image-3.jfif", text: "مرحبا بكم في جامعه المنوفية الاهلية" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out
            ${index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4 bg-black/40 rounded-xl py-4">
          {slides[current].text}
        </h2>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-30"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-30"
      >
        &#8250;
      </button>
    </div>
  );
}
