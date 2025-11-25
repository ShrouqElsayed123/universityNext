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

export default function FacultyOverview({
    title,
    para1,
    para2,
    programTitle,
    programPara,
    visionPara,
    missionPara,
    images,
    overviewImage,
    overviewImages
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

                    <div className="space-y-10">

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

                        {/* content 2 */}
                        <div className="p-4 rounded-lg border">
                            <h4 className="text-2xl mb-3 font-semibold inline-block text-mainColor">
                                <FaHeartbeat size={24} className="text-mainColor mr-2 inline-block" />
                                <span>{programTitle[lang]}</span>
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {overviewImages.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        className="relative h-32 w-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Image src={img} alt="" fill className="object-cover" />
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">{programPara[lang]}</p>
                        </div>

                        {/* content 3 */}
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-10">

                            {/* Vision */}
                            <div className="relative group bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-mainColor text-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                                    <FaEye size={32} />
                                </div>
                                <div className="pt-10 text-center">
                                    <h4 className="text-2xl font-semibold text-mainColor mb-3">{t('vision')}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">{visionPara[lang]}</p>
                                </div>
                            </div>

                            {/* Center Image */}
                            <div className="flex justify-center items-center">
                                <div className="relative w-64 h-64">
                                    <Image src="/images/goal.jpg" alt="goal" fill className="object-cover rounded-3xl" />
                                </div>
                            </div>

                            {/* Mission */}
                            <div className="relative group bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-mainColor text-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                                    <FaFlag size={32} />
                                </div>
                                <div className="pt-10 text-center">
                                    <h4 className="text-2xl font-semibold text-mainColor mb-3">{t('mission')}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">{missionPara[lang]}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}




// return (
//     <div className="p-6 bg-gray-100 flex flex-col items-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🎯 {goals.title}</h2>
//         <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center">🎯 {goals.subtitle}</h2>

//         <div className="grid gap-4 w-full max-w-4xl sm:grid-cols-2 md:grid-cols-3">
//             {goals.desc.map((goal, index) => {
//                 // تحقق إذا العنصر هو كائن وله title
//                 const isObject = typeof goal === "object" && goal !== null && "title" in goal;

//                 return (
//                     <div
//                         key={isObject ? goal.id : index}
//                         className="bg-white shadow-md rounded-2xl p-4 text-center border-l-4 border-mainColor"
//                     >
//                         <div className="text-2xl mb-2">🎯</div>
//                         {isObject ? (
//                             <>
//                                 <h3 className="font-semibold mb-1">{goal.title}</h3>
//                                 <p className="text-gray-700">{goal.description}</p>
//                             </>
//                         ) : (
//                             <p className="text-gray-700">{goal}</p>
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     </div>
// );