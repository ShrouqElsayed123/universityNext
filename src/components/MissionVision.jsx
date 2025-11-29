// components/MissionVision.jsx
"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const missionVisionData = [
    {
        title: { en: "Mission", ar: "الرسالة" },
        description: {
            en: "Preparing qualified and trained human cadres, compatible with the needs of the local, regional and international labor market by providing distinguished academic and professional programs, encouraging innovation and creativity, conducting scientific and applied research, and linking with the productive and service sectors in a flexible framework that allows for continuous improvement by keeping pace with scientific and technological development and maintaining community values and ethics.",
            ar: "اعداد الكوادر البشرية المؤهلة والمدربة، المتوافقة مع احتياجات سوق العمل المحلي والاقليمي والدولي من خلال تقديم برامج أكاديمية ومهنية متميزة، وتشجيع الابتكار والابداع والقيام بالأبحاث العلمية والتطبيقية، والربط مع القطاعات الانتاجية والخدمية في اطار مرن يسمح بالتحسين المستمر من خلال مواكبة التطور العلمي والتكنولوجي والحفاظ علي القيم والأخلاقيات المجتمعية.",
        },
        image: "/images/mission.jpg",
        reverse: false,
    },
    {
        title: { en: "Vision", ar: "الرؤية" },
        description: {
            en: "A smart university with an advanced global ranking, offering teaching and learning that balances the skills and knowledge of graduates, distinguished scientific research that is reflected in improving the competitiveness of Egyptian products globally, and being a house of expertise for community service and business development.",
            ar: "جامعة ذكية ذات ترتيب عالمي متقدم، تقدم تعليم وتعلم يوازن بين مهارات ومعارف الخريج، وبحث علمي متميز ينعكس في الارتقاء بتنافسية المنتجات المصرية عالميًا، وأن تكون بيت خبرة لخدمة المجتمع وتطوير الأعمال.",
        },
        image: "/images/vision.jpg",
        reverse: true,
    },
];

export default function MissionVision() {
    const { i18n } = useTranslation();
    const lang = i18n.language; // "en" أو "ar"

    return (
        <section
            className="max-w-7xl mx-auto px-4 py-12 space-y-12"
            dir={lang === "ar" ? "rtl" : "ltr"} // تغيير اتجاه النص حسب اللغة
        >
            {/* Heading */}
            <div className={`text-center md:text-left ${lang === "ar" ? "md:text-right" : ""}`}>
                <h2 className="text-4xl font-bold mb-2">
                    {lang === "ar" ? "رسالتنا ورؤيتنا" : "Our Mission & Vision"}
                </h2>
                <div className={`w-24 h-1 bg-green-600 mx-auto md:mx-0 ${lang === "ar" ? "md:ml-auto" : ""}`}></div>
            </div>

            {/* Mission & Vision Items */}
            {missionVisionData.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""
                        } items-center md:items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-md`}
                >
                    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative">
                        <Image
                            src={item.image}
                            alt={item.title[lang]}
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className={`text-center md:text-left ${item.reverse ? "md:text-right" : ""}`}>
                        <h3 className="text-2xl font-semibold mb-2">{item.title[lang]}</h3>
                        <p className="text-gray-600">{item.description[lang]}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
