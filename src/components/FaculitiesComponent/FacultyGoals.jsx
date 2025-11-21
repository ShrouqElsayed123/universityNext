"use client"; // مهم جداً لأننا نستخدم useState و useTranslation

import Image from "next/image";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

export default function FacultyGoals({ data, img }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState(data[0]?.id || "1");

  const [expanded, setExpanded] = useState({});

  const activeItem = data.find((item) => item.id === activeTab);

  const visibleContent = expanded[activeTab]
    ? activeItem.content
    : activeItem.content.slice(0, 4);

  return (
    <section className="bg-white">
      <div className="max-w-[590px] md:max-w-[738px] lg:max-w-[994px] xl:max-w-[1250px] 2xl:max-w-7xl 
            p-home-section-padding my-home-section-margin
             mx-auto">
        {/* Section Title */}
        <div className="">
          <div className="text-center flex items-center flex-col gap-3 mb-8">
            <div className="flex items-center gap-2 font-Playwrite text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
              <HiOutlineBuildingLibrary className="w-6 h-6" />
              <span className="text-sm tracking-widest uppercase">{t("tgoal")}</span>
            </div>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <Trans
                  i18nKey="goal"
                  components={{ highlight: <span className="text-mainColor" /> }}
                />
              </h2>
            </div>
          </div>

          {/* Grid Content */}
          <div className="grid md:grid-cols-2 gap-10 items-start justify-center min-h-[400px]">
            {/* Illustration */}
            <div className="flex justify-center md:justify-start w-full">
              <Image
                src={img}
                alt="Faculty Illustration"
                width={400}
                height={380}
                className="object-contain max-w-full max-h-[380px]"
              />
            </div>

            {/* Content */}
            <div>
              {/* Tabs */}
              <div className="border rounded-xl overflow-hidden shadow-sm bg-white h-[380px] flex flex-col">
                <div className="flex border-b">
                  {data.map((item) => (
                    <button
                      key={item.id}
                      className={`flex-1 py-3 text-center font-medium ${activeTab === item.id
                        ? "text-green-700 border-b-2 border-green-600"
                        : "text-gray-500"
                        }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.label[lang]}
                    </button>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 p-6 pb-0">
                  {activeItem.title[lang]}
                </h2>

                {/* Content items */}
                <div className="p-6 space-y-3 overflow-y-auto flex-1">
                  {visibleContent.map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-green-600 text-xl">✔</span>
                      <p className="text-gray-500">{c[lang]}</p>
                    </div>
                  ))}

                  {activeItem.content.length > 4 && (
                    <button
                      onClick={() =>
                        setExpanded((prev) => ({
                          ...prev,
                          [activeTab]: !prev[activeTab],
                        }))
                      }
                      className="text-green-700 font-medium mt-2"
                    >
                      {expanded[activeTab]
                        ? lang === "ar"
                          ? "عرض أقل"
                          : "Show Less"
                        : lang === "ar"
                          ? "عرض المزيد"
                          : "Read More"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
