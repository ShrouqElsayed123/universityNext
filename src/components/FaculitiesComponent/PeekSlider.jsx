"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Image from "next/image";

export default function PeekSlider({ images }) {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const { t } = useTranslation();

    // Auto slide every 3s
    useEffect(() => {
        const interval = setInterval(() => handleNext(), 3000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setFlipped(true);
        setTimeout(() => {
            setIndex((prev) => (prev + 1) % images.length);
            setFlipped(false);
        }, 300); // half flip duration
    };

    return (
        <section className="w-full min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-start bg-gray-50 py-10 px-4 md:px-8">
            {/* Header */}
            <div className="text-center flex flex-col items-center gap-3 mb-8">
                <div className="flex items-center font-Playwrite gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
                    <HiOutlineBuildingLibrary className="w-5 md:w-6 h-5 md:h-6" />
                    <span className="text-xs md:text-sm tracking-widest uppercase">{t('tgallery')}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    <Trans i18nKey="fgallery" components={{ highlight: <span className="text-mainColor" /> }} />
                </h2>
            </div>

            {/* Slider */}
            <div className="relative w-full max-w-4xl h-[250px] sm:h-[300px] md:h-[450px] lg:h-[600px] overflow-visible perspective-1000">
                {images.map((img, i) => {
                    const offset = (i - index + images.length) % images.length;

                    // responsive xOffset
                    const xOffset =
                        offset === 0
                            ? 0
                            : offset * (offset === 1 ? 30 : 50); // أصغر مسافة للأقرب، أكبر للأبعد
                    const scale = offset === 0 ? 1 : 0.8 - offset * 0.05;
                    const rotateY = offset === 0 ? (flipped ? 180 : 0) : offset * 10;
                    const zIndex = images.length - offset;
                    const opacity = offset > 2 ? 0 : 1;

                    return (
                        <motion.div
                            key={i}
                            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl overflow-hidden [backface-visibility:hidden]"
                            style={{ zIndex }}
                            animate={{
                                x: xOffset,
                                scale,
                                rotateY,
                                opacity,
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <Image
                                src={img}
                                alt={`Gallery Image ${i + 1}`}
                                fill
                                className="object-cover rounded-xl"
                                style={{ transformStyle: "preserve-3d" }}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
