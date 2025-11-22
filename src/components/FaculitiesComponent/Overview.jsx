"use client"; // لازم لو Component يستخدم useTranslation أو أي Hooks

import { Trans, useTranslation } from "react-i18next";
import { FaEye, FaFlag } from 'react-icons/fa';
import { BookOpen } from "lucide-react";
import {
    FaHeartbeat,
} from "react-icons/fa"
import { motion } from "framer-motion";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Image from "next/image";

export default function Overview({
    title,
    para1,
    para2,


    overviewImage
}) {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { t } = useTranslation();

    return (
        <section className="bg-gray-0 dark:bg-gray-900 transition-colors duration-300" data-aos="fade-top">
            <div className="
            max-w-[590px] md:max-w-[738px] lg:max-w-[994px] xl:max-w-[1250px] 2xl:max-w-7xl 
            p-home-section-padding my-home-section-margin
             mx-auto 
             ">

                <div className="flex flex-col justify-center items-center">
                    {/* Header */}
                    <div className="text-center flex items-center flex-col gap-3">
                        <div className="flex items-center gap-2 font-Playwrite text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
                            <HiOutlineBuildingLibrary className="w-6 h-6" />
                            <span className="text-sm tracking-widest uppercase">{t('toverview')}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            <Trans i18nKey="overview" components={{ highlight: <span className="text-mainColor" /> }} />
                        </h2>
                    </div>

              

                        {/* content 1 */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-semibold text-mainColor flex gap-2 items-center mb-1">
                                        <BookOpen size={24} />
                                        <span>{title[lang]}</span>
                                    </h4>
                                    <div>
                                        <p className="text-gray-600 text-lg leading-relaxed">{para1[lang]}</p>
                                        <p className="text-gray-600 text-lg leading-relaxed mt-4">{para2[lang]}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full h-64 md:h-80 lg:h-96">
                                <Image
                                    src={overviewImage}
                                    alt=""
                                    fill
                                    className="object-cover rounded-xl shadow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
     
        </section>
    );
}




