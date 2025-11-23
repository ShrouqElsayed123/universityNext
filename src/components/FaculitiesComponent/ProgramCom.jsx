"use client";
import ProgramCards from './ProgramCards'
import { useTranslation, Trans } from "react-i18next";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

export default function ProgramCom({ data }) {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { t } = useTranslation();

    const columns =
        data.length >= 4
            ? "lg:grid-cols-4"
            : data.length === 3
                ? "lg:grid-cols-3"
                : "lg:grid-cols-2";

    return (
        <section className="bg-white">
            <div className="max-w-[590px] md:max-w-[738px] lg:max-w-[994px] xl:max-w-[1250px] 2xl:max-w-7xl 
            p-home-section-padding my-home-section-margin
             mx-auto">


                <div>
                    <div className="text-center flex items-center flex-col gap-3 mb-8">
                        <div className="flex items-center gap-2 font-Playwrite text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
                            <HiOutlineBuildingLibrary className="w-6 h-6" />
                            <span className="text-sm tracking-widest uppercase">{t("tprogram")}</span>
                        </div>
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                <Trans
                                    i18nKey="program"
                                    components={{ highlight: <span className="text-mainColor" /> }}
                                />
                            </h2>
                        </div>
                    </div>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6`}>
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

            </div>
        </section>
    );
}

