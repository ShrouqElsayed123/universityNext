"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const timelineData = [
    {
        label: { en: "University Approval", ar: "موافقة إنشاء الجامعة" },

        date: {
            en: "27/1/2021",
            ar: "٢٧/١/٢٠٢١",
        },
        title: {
            en: "Supreme Council Approves Establishment",
            ar: "الموافقة على إنشاء جامعة المنوفية الأهلية"
        },
        content: {
            en: "the President of Menoufia University announced the approval of the Supreme Council of Universities to establish the Menoufia Community University at the animal production farm, and legal procedures are being taken to obtain the approval of the President of the Republic and include it among the private universities being established to provide distinguished educational services to the people of the governorate.",
            ar: "أعلن رئيس جامعة المنوفية موافقة المجلس الأعلى للجامعات على إنشاء جامعة المنوفية الأهلية بمزرعة الإنتاج الحيواني وجارى اتخاذ الإجراءات القانونية لاستصدار ملاستصوافقة رئيس الجمهورية وإدراجها ضمن الجامعات الأهلية الجارى إنشائها لتقديم خدمة تعليمية متميزة لأبناء المحافظة.",
        },
    },
    {
        label: { en: "Project Planning", ar: "تخطيط المشروع" },
        date: {
            en: "16/2/2021",
            ar: "١٦/٢/٢٠٢١",
        },
        title: {
            en: "Formation of Higher Committee for Implementation",
            ar: "تشكيل لجنة عليا لمتابعة الإجراءات"
        },
        content: {
            en: "the President of Menoufia University announced that its establishment will start after taking the necessary legal procedures in accordance with the latest educational systems and the general perception of private universities at the state level, indicating that a higher committee will be formed to follow up the procedures and implementation mechanisms, wishing success in achieving this huge project and the new challenge to prove the ability of the university team to achieve all achievements.",
            ar: " أعلن رئيس جامعة المنوفية أنه سيتم البدء في إنشائها عقب اتخاذ الإجراءات القانونية اللازمة  طبقا لأحدث النظم التعليمية والتصور العام للجامعات الأهلية على مستوى الدولة  مشيرا إلى أنه سيتم تشكيل لجنة عليا لمتابعة الإجراءات وآليات التنفيذ، متمنيا التوفيق في تحقيق هذا المشروع الضخم والتحدى الجديد لاثبات قدرة فريق عمل الجامعة على تحقيق جميع الإنجازات.",
        },
    },
    {
        label: { en: "Site Inspection", ar: "تفقد الموقع" },

        date: {
            en: "9/8/2021",
            ar: "٩/٨/٢٠٢١",
        },
        title: {
            en: "Inspection of Menoufia Private University Site",
            ar: "تفقد موقع جامعة المنوفية الأهلية"
        },
        content: {
            en: "The President of Menoufia University inspected the general site of Menoufia Private University in Toukh Tanbesha, which is spread over an area of ​​18 acres and costs more than 2.5 billion pounds. It is designed according to the latest architectural standards to follow up on the progress of work in the facilities, which include an administration building, a medical sciences building, an engineering sciences building, a humanities building, and a four-story laboratory building that includes all medical, engineering, and humanities laboratories, in addition to a recreational area and a cafeteria. The university's capacity is expected to be 9,500 students.",
            ar: "تفقد رئيس جامعة المنوفية، الموقع العام لجامعة المنوفية الأهلية بطوخ طنبشا على مساحة 18 فدانا وبتكلفة أكثر من 2 ونصف مليار جنيه، ومصممة على أحدث مستوى معمارى لمتابعة سير العمل بالمنشآت التي تضم مبنى إدارة، مبنى العلوم الطبية، مبنى العلوم الهندسية، مبنى العلوم الإنسانية، ومبنى المعامل أربع أداور يضم جميع المعامل الطبية والهندسية والإنسانية، بالإضافة إلى منطقة ترفيهية وكافتريا، ومن المتوقع أن القدرة الاستيعابية للجامعة 9500 طالب",
        },
    },
    {
        label: { en: "Progress Review", ar: "مراجعة التقدم" },

        date: {
            en: "16/11/2021",
            ar: "١٦/١١/٢٠٢١",
        },
        title: {
            en: "University Council Inspection Tour",
            ar: "جولة تفقدية لمجلس الجامعة"
        },
        content: {
            en: "he President of Menoufia University took the members of the University Council on an inspection tour of Menoufia Community University in Toukh Tanbasha to see the amount of work done on the general site so far, and to inspect the buildings that include an administration building, a building Medical sciences ، building Engineering sciences humanities building, and lab building.",
            ar: "قام رئيس جامعة المنوفية باصطحاب أعضاء مجلس الجامعة في جولة تفقدية لجامعة المنوفية الأهلية لمشاهدة حجم العمل الذي تم بالموقع العام حتى الآن، وتفقد المبانى التي تشمل مبنى إدارة، مبنى  العلوم الطبية ، مبنى  العلوم الهندسية ، مبنى العلوم الإنسانية، ومبنى المعامل.",
        },
    },
    {
        label: { en: "University Opening", ar: "بدء الدراسة" },


        date: {
            en: "1/10/2022",
            ar: "١/١٠/٢٠٢٢",
        },
        title: {
            en: "National University Begins Classes",
            ar: "بدء الدراسة بالجامعة الأهلية"
        },
        content: {
            en: "National University will begin classes in October 2022",
            ar: "  بدأ الدراسة بالجامعةالأهلية  فى أكتوبر ٢٠٢٢",
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
                    {item.date[lang]}
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
            <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto gap-8">

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

                {/* Images */}
                <div className="md:w-1/3 w-full flex flex-col justify-between items-center gap-16">
                    {/* هنا استخدمنا gap-16 علشان المسافة بين الصور تكون طويلة */}
                    <Image
                        src="/images/timeline2.jpg"
                        width={700} // زودنا الحجم شوية
                        height={700}
                        alt="Timeline Illustration"
                        className="w-full h-auto object-cover rounded-full"
                    />
                    <Image
                        src="/images/timeline3.jpg"
                        width={700}
                        height={700}
                        alt="Timeline Illustration"
                        className="w-full h-auto object-cover rounded-full"
                    />
                    <Image
                        src="/images/slider-image-3.jfif"
                        width={700}
                        height={700}
                        alt="Timeline Illustration"
                        className="w-full h-auto object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
