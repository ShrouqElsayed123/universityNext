"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Image from "next/image";

export default function FacultyLevels({ facultyData }) {
    const { i18n, t } = useTranslation();
    const lang = i18n.language;

    const [activeLevel, setActiveLevel] = useState(facultyData.facultyLevels[0]?.id);
    const [expandedTerms, setExpandedTerms] = useState({});

    const activeFaculty = facultyData.facultyLevels.find(
        (level) => level.id === activeLevel
    );

    const toggleTerm = (termId) => {
        setExpandedTerms((prev) => ({
            ...prev,
            [termId]: !prev[termId],
        }));
    };

    return (
        <div className="max-w-[590px] md:max-w-[738px] lg:max-w-[994px] xl:max-w-[1250px] 2xl:max-w-7xl 
            p-home-section-padding my-home-section-margin
             mx-auto">
            <div className=" p-6 shadow-lg rounded-2xl bg-white">

                {/* Section Header */}
                <div className="text-center flex flex-col items-center gap-3 mb-8">
                    <div className="flex items-center gap-2 font-Playwrite text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
                        <HiOutlineBuildingLibrary className="w-6 h-6" />
                        <span className="text-sm tracking-widest uppercase">
                            {t("tcourses")}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        <Trans
                            i18nKey="courses"
                            components={{ highlight: <span className="text-mainColor" /> }}
                        />
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">

                    {/* Left Illustration */}
                    <div className="w-full lg:w-1/3 flex justify-center items-center">
                        <Image
                            src="/images/courses4.svg"
                            alt={t("facultyIllustration")}
                            width={400}
                            height={400}
                            className="w-full max-w-md object-contain"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-2/3">
                        <h1 className="text-3xl font-bold mb-6">{facultyData.name}</h1>

                        {/* Tabs */}
                        <div className="flex bg-gray-100 rounded-xl p-1 mb-6 space-x-2">
                            {facultyData.facultyLevels.map((level) => {
                                const isActive = activeLevel === level.id;
                                return (
                                    <button
                                        key={level.id}
                                        onClick={() => {
                                            setActiveLevel(level.id);
                                            setExpandedTerms({});
                                        }}
                                        className={`flex-1 text-center py-2 font-medium rounded-lg transition-all duration-300 ${isActive
                                            ? "bg-white text-mainColor font-semibold shadow-md"
                                            : "text-gray-600 hover:text-mainColor hover:bg-gray-200"
                                            }`}
                                    >
                                        {level.name[lang]}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Terms Accordion */}
                        <div className="space-y-4">
                            {activeFaculty?.semesters.map((term) => {
                                const isExpanded = !!expandedTerms[term.id];
                                const visibleCourses = isExpanded
                                    ? term.courses
                                    : term.courses.slice(0, 4);

                                return (
                                    <div
                                        key={term.id}
                                        className="border rounded-xl overflow-hidden shadow-sm transition-all"
                                    >
                                        <button
                                            onClick={() => toggleTerm(term.id)}
                                            className={`w-full text-left px-5 py-4 font-semibold flex justify-between items-center transition-all duration-300 ${isExpanded
                                                ? "bg-gradient-to-r from-green-50 to-green-100 text-mainColor"
                                                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                                                }`}
                                        >
                                            {term.name[lang]}
                                            <motion.span
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                className="ml-2 text-lg transition-transform duration-300"
                                            >
                                                ▼
                                            </motion.span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isExpanded && (
                                                <motion.div
                                                    key="content"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="p-4 bg-white"
                                                >
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-36 overflow-y-auto">
                                                        {visibleCourses.map((course, index) => (
                                                            <div
                                                                key={`${course.id}-${index}`}
                                                                className="p-3 text-sm bg-gray-50 rounded-lg shadow hover:shadow-md transition flex items-center justify-center font-medium"
                                                            >
                                                                {course.name[lang]}
                                                            </div>
                                                        ))}

                                                    </div>

                                                    {term.courses.length > 4 && (
                                                        <button
                                                            onClick={() => toggleTerm(term.id)}
                                                            className="text-green-700 font-medium mt-2"
                                                        >
                                                            {isExpanded ? t("showLess") : t("readMore")}
                                                        </button>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
