"use client";

import { useTranslation, Trans } from "react-i18next";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Image from "next/image";

export default function FacultyDoctors({ team }) {
    const { t, i18n } = useTranslation();
    const lang = i18n.language; // "en" أو "ar"

    return (
        <section className="max-w-[590px] md:max-w-[738px] lg:max-w-[994px] xl:max-w-[1250px] 2xl:max-w-7xl 
            p-home-section-padding my-home-section-margin
             mx-auto ">
            <div>
                <div>
                    <div className="text-center flex items-center flex-col gap-3">
                        <div className="flex items-center gap-2 font-Playwrite text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
                            <HiOutlineBuildingLibrary className="w-6 h-6" />
                            <span className="text-sm tracking-widest uppercase">{t("tdoctors")}</span>
                        </div>
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                <Trans
                                    i18nKey="doctors"
                                    components={{ highlight: <span className="text-mainColor" /> }}
                                />
                            </h2>
                        </div>
                    </div>

                    {/* الشبكة */}
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {team &&
                            team.length > 0 &&
                            team.map((member, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center text-center shadow-lg rounded-2xl py-2 hover:shadow-xl transition ${index % 2 === 0 ? "translate-y-3" : "-translate-y-3"
                                        }`}
                                >
                                    <div className="relative mb-4 z-20 border rounded-full border-t-secondaryColor border-l-secondaryColor border-mainColor">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={160}
                                            height={160}
                                            className="object-cover rounded-full z-20 p-2"
                                        />
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                                    <p className="text-mainColor font-medium">{member.role[lang]}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
