"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const timelineData = [
    {
        label: {
            en: "The origin",
            ar: "البداية",
        },
        date: "May, 2020",
        title: {
            en: "Acme was founded in Milan, Italy",
            ar: "تأسست شركة Acme في ميلانو بإيطاليا",
        },
        content: {
            en: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.",
            ar: "تم تأسيس الشركة بهدف تقديم حلول مبتكرة وخدمات عالية الجودة.",
        },
    },
    {
        label: {
            en: "The milestone",
            ar: "مرحلة مهمة",
        },
        date: "May, 2021",
        title: {
            en: "Reached 5K customers",
            ar: "الوصول إلى 5000 عميل",
        },
        content: {
            en: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.",
            ar: "نجحت الشركة في توسيع قاعدة عملائها بشكل ملحوظ.",
        },
    },
    {
        label: {
            en: "The acquisitions",
            ar: "الاستحواذات",
        },
        date: "May, 2022",
        title: {
            en: "Acquired various companies, including Technology Inc.",
            ar: "الاستحواذ على عدة شركات منها Technology Inc.",
        },
        content: {
            en: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.",
            ar: "واصلت الشركة توسعها من خلال الاستحواذ على شركات تقنية متعددة.",
        },
    },
    {
        label: {
            en: "The IPO",
            ar: "الاكتتاب العام",
        },
        date: "May, 2023",
        title: {
            en: "Acme went public at the New York Stock Exchange",
            ar: "طرحت Acme أسهمها في بورصة نيويورك",
        },
        content: {
            en: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.",
            ar: "أصبحت الشركة متداولة رسمياً في سوق الأسهم.",
        },
    },
];

const TimelineItem = ({ item, isLast }) => {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <motion.div
            className="relative pl-8 sm:pl-32 py-6 group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="font-caveat font-medium text-2xl text-mainColor font-header mb-1 sm:mb-0">
                {item.label[lang]}
            </div>

            <div
                className={`flex flex-col sm:flex-row items-start mb-1 
                before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 
                sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 
                after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-mainColor
                after:border-4 after:box-content after:border-slate-50 after:rounded-full 
                sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 
                ${isLast ? "group-last:before:hidden" : ""}`}
            >
                <time className="sm:absolute font-Playwrite left-0 translate-y-0.5 inline-flex items-center justify-center text-[8px] font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    {item.date}
                </time>

                <div className="text-xl font-bold text-slate-900">
                    {item.title[lang]}
                </div>
            </div>

            <div className="text-slate-500">
                {item.content[lang]}
            </div>

        </motion.div>
    );
};

export default function Timeline() {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <div className="bg-white py-12" dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8">

                {/* Timeline List */}
                <div className="md:w-2/3 w-full">
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            item={item}
                            isLast={index === timelineData.length - 1}
                        />
                    ))}
                </div>

                {/* Image */}
                <div className="md:w-1/3 w-full flex justify-center">
                    <Image
                        src="/images/timeline2.jpg"
                        width={600}
                        height={600}
                        alt="Timeline Illustration"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
