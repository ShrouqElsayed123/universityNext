"use client";
// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Contact, University } from 'lucide-react';

const resources = {
    en: {
        translation: {
            home: "Home",
            about: "About University",
            establishment: "Establishment of the university",
            vision: "Vision ",
            moodle: "E-learning platform",
            ibnelhetham: "Student Portal Platform",
            partner: "Our  <highlight>partners</highlight>",
            statistics: "Numbers and  <highlight>statistics</highlight>",
            stats: "Our Stats",
            gallery: "Our Gallery <highlight>Photo</highlight>",
            tgallery: "Our Gallery",
            fgallery: "Faculty <highlight>Gallery</highlight>",

            new: "Latest News and <highlight>Articles</highlight>",
            tnew: "Our News",
            more: "Read More",
            faculty: "University <highlight>Faculties</highlight>",
            tfaculty: "Faculties",
            view: "View All",
            video: "Latest Video",
            videotitle: "Let's Check Our <highlight>Latest</highlight> Video",
            videobody: "The university includes (10) colleges, which are (Medicine and Surgery - Dentistry and Oral Surgery - Physiotherapy - Pharmacy - Health Sciences Technology - Nursing - Engineering - Computer and Artificial Intelligence - Veterinary Medicine - Humanities and Social Sciences -) with a university capacity of approximately 9,500 students.",
            universityname: "Menoufia National University",
            platform: "Electronic platforms",
            Sustainable: "Sustainable Development​",

            building: "Facilities and <highlight>buildings</highlight>",
            contact: "Contact <highlight>Us</highlight>",
            feedback: " Our Students <highlight>Feedback</highlight>",
            toverview: " Overview",
            overview: "Faculty  <highlight>Overview</highlight>",
            tfaq: "FAQS",
            faq: "Frequently Asked <highlight>Questions</highlight> ",

            tdoctors: "Professors",
            doctors: "Our Professional  <highlight>Professors</highlight>",
            tcourse: "Faculty&Courses",
            course: "Faculty levels and  <highlight>courses</highlight>",
            tgoal: "Goals",
            goal: "Faculty  <highlight>objectives</highlight>",
        }
    },
    ar: {
        translation: {
            home: "الرئيسية",
            about: "عن الجامعه",
            establishment: "نشأة الجامعة",
            vision: "الرؤية ",
            mission: "الرسالة ",
            moodle: "منصة التعليم الإلكتروني",
            ibnelhetham: "منصة بورتال الطالب ",
            partner: "شركائنا",
            statistics: "أرقام و <highlight> أحصائيات</highlight>",
            stats: "إحصائياتنا",
            gallery: "  معرض <highlight>الصور</highlight> لدينا",
            tgallery: "معرضنا ",
            fgallery: "الكلية <highlight>معرض</highlight>",

            new: "آخر الأخبار و <highlight>المقالات</highlight>",
            tnew: "اخبارنا",
            more: "اقرأ المزيد",
            faculty: "كليات <highlight>الجامعة</highlight>",
            tfaculty: "كليات ",
            view: "عرض الكل",
            video: "أحدث فيديو",
            videotitle: " دعونا نلقي نظرة على <highlight>أحدث</highlight> فيديو لدينا",
            videobody: "الجامعة تضم (10) كليات هي (الطب والجراحة - طب وجراحة الأسنان - العلاج الطبيعي –الصيدلة –تكنولوجيا العلوم الصحية – التمريض – الهندسة –الحاسوب والذكاء الاصطناعي – الطب البيطري – العلوم الإنسانيةوالاجتماعية –) بقدرة استيعابية للجامعة تصل إلى 9500 طالب تقريبًا.  ",
            universityname: "جامعة المنوفية الأهلية",
            apply: "التقديم الان",
            platform: "المنصات الإلكترونية",
            Sustainable: "التنمية المستدامة",

            building: " المرافق و <highlight>المباني </highlight>",
            contact: "تواصل  <highlight>معنا</highlight>",
            feedback: " أراء  <highlight>طلابنا</highlight>",
            toverview: "نظرة عامة",
            overview: "نظرة عامة عن الكلية",
            tgoal: "الأهداف",
            goal: "أهداف   <highlight>الكلية</highlight>",

        }
    }
};
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng:
            typeof window !== "undefined"
                ? localStorage.getItem("i18nextLng") || "en"
                : "en", // ← تأكد إن الكود بيتنفذ بس في browser
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;