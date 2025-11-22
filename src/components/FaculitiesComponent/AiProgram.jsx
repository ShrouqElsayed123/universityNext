"use client";
import ProgramCards from './ProgramCards'
import { useTranslation } from 'react-i18next';
// const data = [
//     {
//         id: 1,
//         img: "/images/ai/dsprogram2.jpg",
//         path: "/faculties/ai/program/ds",
//         title: {
//             en: "Data Sciences Program",
//             ar: "برنامج علوم البيانات"
//         }
//     },
//     {
//         id: 2,
//         img: "/images/ai/mlprogram.jpg",
//         path: "/faculties/ai/program/ml",
//         title: {
//             en: "Machine Intelligence Program",
//             ar: "برنامج ذكاء الآلة"
//         }
//     },
//     {
//         id: 3,
//         img: "/images/ai/iotprogram.jpg",
//         path: "/faculties/ai/program/iot",
//         title: {
//             en: "Internet of Things and Big Data Analytics Program",
//             ar: "برنامج انترنت الأشياء وتحليل البيانات الضخمة"
//         }
//     },
// ]
export default function AiProgram({data}) {


    const { i18n } = useTranslation();
    const lang = i18n.language;
    return (
        <section className="bg-white">
            <div className="max-w-[590px] md:max-w-[738px] lg:max-w-[994px] xl:max-w-[1250px] 2xl:max-w-7xl 
            p-home-section-padding my-home-section-margin mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map(item => (
                        <ProgramCards
                            key={item.id}
                            path={item.path}
                            img={item.img}
                            programName={item.title[lang]}
                            className="w-full"
                        />
                    ))}
                </div>


            </div>
        </section>
    )
}
