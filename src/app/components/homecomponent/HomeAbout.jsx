"use client";

import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, School } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image"; // لو حابة تحسين الأداء
import { useEffect, useState } from "react";


export default function HomeAbout() {
    const { t, i18n } = useTranslation();
    const { language } = i18n;
    const [content, setContent] = useState([])
    useEffect(() => {
        let isMounted = true;

        fetch("/data/home/about.json", { cache: "no-store" })
            .then((res) => res.json())
            .then((data) => {
                if (isMounted) setContent(data);
            })
            .catch((err) => console.error("Failed to load navbar data:", err));

        return () => (isMounted = false);
    }, []);
    return (
        <section
            className="transition-colors duration-300 "
            data-aos="fade-up"
        >
            <div className=" mx-auto flex justify-center items-center flex-col gap-home-section-gap">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* العمود الأول - الصور */}
                    {/* العمود الأول - الصور */}
                    <div className="space-y-4">
                        {content.images?.[0] && (
                            <Image
                                src={content.images[0]}
                                alt="Main"
                                width={600}
                                height={400}
                                className="w-full rounded-xl shadow-md object-cover"
                                unoptimized
                            />
                        )}
                        <div className="grid grid-cols-2 gap-4">
                            {content.images?.slice(1, 3).map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    alt={`Sub ${index + 1}`}
                                    width={300}
                                    height={200}
                                    className="w-full h-full md:h-[200px] rounded-xl shadow-md object-cover"
                                    unoptimized
                                />
                            ))}
                        </div>
                    </div>


                    {/* العمود الثاني - النص */}
                    <div className="text-gray-800 dark:text-gray-200 space-y-4">
                        <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b border-secondaryColorLight1 w-fit">
                            <BookOpen className="w-6 h-6" />
                            <span className="text-sm tracking-widest uppercase">
                                {content.title?.[language] || t('about')}
                            </span>
                        </div>

                        <h1 className="text-2xl font-semibold">{t('universityname')}</h1>

                        <p className="text-base text-gray-400">{content.para1?.[language]}</p>
                        <p className="text-base text-gray-400">{content.para2?.[language]}</p>

                        <div className="flex w-full gap-3 justify-center flex-col md:flex-row items-center">
                            <div className="border border-mainColor rounded-md p-6 flex items-center gap-4 w-full">
                                <GraduationCap className="w-10 h-10 text-mainColor" />
                                <div className="text-mainColor">
                                    <h3 className="text-lg font-semibold">{t('message')}</h3>
                                    <p className="text-base">{content.message?.[language]}</p>
                                </div>
                            </div>

                            <div className="border border-mainColor rounded-md p-6 flex items-center gap-4 w-full">
                                <School className="w-10 h-10 text-mainColor" />
                                <div className="text-mainColor">
                                    <h3 className="text-lg font-semibold">{t('vision')}</h3>
                                    <p className="text-base">{content.vision?.[language]}</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/about"
                            className="bg-mainColor w-fit hover:bg-secondaryColor text-white btn-filled2 flex items-center gap-2 group px-4 py-2 rounded"
                        >
                            {t('more')}
                            {language === "ar" ? (
                                <ArrowLeft className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />
                            ) : (
                                <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
