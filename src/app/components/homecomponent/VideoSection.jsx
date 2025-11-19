"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ArrowRight, Video, ArrowLeft } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
// import coverImg from "../../../public/images/slider-image-3.jfif";

export default function VideoSection({ content }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const { t, i18n } = useTranslation();

    return (
        <section className="bg-gray-50 transition-colors duration-300 my-home-section-margin p-home-section-padding" data-aos="fade-right">
            <div className="mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 text-secondaryColorLight1 font-semibold text-sm uppercase tracking-wider animate-fade-in-up">
                            <Video className="w-5 h-5" />
                            <span>{t("video")}</span>
                        </div>

                        <div className="space-y-4 animate-fade-in-up animation-delay-200">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                <Trans
                                    i18nKey="videotitle"
                                    components={{ highlight: <span className="text-mainColor" /> }}
                                />
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg animate-fade-in-up animation-delay-400">
                            {t("videobody")}
                        </p>

                        <div className="animate-fade-in-up animation-delay-600">
                            <button className="bg-mainColor hover:bg-secondaryColor text-white btn-filled2 flex items-center gap-2 group">
                                {t("more")}
                                {i18n.language === "ar" ? (
                                    <ArrowLeft className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />
                                ) : (
                                    <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative animate-fade-in-left animation-delay-300">
                        <div
                            className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {isPlaying ? (
                                <iframe
                                    src="https://www.youtube.com/embed/U0_thfqT0Fg?autoplay=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full aspect-video rounded-3xl"
                                ></iframe>
                            ) : (
                                <>
                                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
                                        <Image
                                            src="/images/slider-image-3.jfif"
                                            alt="Video cover"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className={`absolute inset-0 bg-black dark:bg-white transition-opacity duration-300 ${isHovered ? "bg-opacity-20" : "bg-opacity-10"} dark:bg-opacity-10`}></div>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button
                                            onClick={() => setIsPlaying(true)}
                                            className={`group relative w-20 h-20 bg-mainColor rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform ${isHovered ? "scale-110" : "scale-100"} hover:bg-secondaryColor`}
                                        >
                                            <div className="absolute inset-0 rounded-full bg-mainColor animate-ping opacity-20"></div>
                                            <div className="absolute inset-0 rounded-full bg-mainColor animate-pulse opacity-30 animation-delay-500"></div>
                                            <Play className="w-8 h-8 text-white ml-1 transition-transform duration-300 group-hover:scale-110" fill="currentColor" />
                                        </button>
                                    </div>

                                    <div className="absolute top-6 right-6 w-4 h-4 bg-mainColor dark:bg-secondaryColor rounded-full animate-bounce animation-delay-1000"></div>
                                    <div className="absolute bottom-6 left-6 w-3 h-3 bg-orange-300 rounded-full animate-bounce animation-delay-1500"></div>
                                </>
                            )}
                        </div>

                        {/* Background Shapes */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-100 rounded-full opacity-50 animate-float"></div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-float animation-delay-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
