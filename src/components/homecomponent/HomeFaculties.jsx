"use client";

import { useEffect, useState } from "react";
import { BookOpen, Microscope } from "lucide-react";
import Link from "next/link";
import { useTranslation, Trans } from "react-i18next";
import {
  FaTooth,
  FaHeartbeat,
  FaCapsules,
  FaUserNurse,
  FaLaptopCode,
  FaBrain,
  FaUsers,
  FaTools,
} from "react-icons/fa";

export default function HomeFaculties() {
  const { t, i18n } = useTranslation();
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const iconMap = {
      med: <FaHeartbeat />,
      dent: <FaTooth />,
      phy: <FaTools />,
      vet: <FaTools />,
      phar: <FaCapsules />,
      nur: <FaUserNurse />,
      hci: <Microscope />,
      ai: <FaBrain />,
      hc: <FaUsers />,
      eng: <FaLaptopCode />,
    };

    // ⬅️ جلب البيانات من JSON ديناميكيًا
    fetch("/Data/Home/HomeFaculties.json")
      .then((res) => res.json())
      .then((data) => {
        const finalList = data.map((item) => ({
          name: item.name[i18n.language] || item.name["en"],
          path: item.path,
          icon: iconMap[item.code] || <FaTools />,
        }));
        setFaculties(finalList);
      })
      .catch((err) => console.error("Error loading faculties JSON:", err));
  }, [i18n.language]);

  return (
    <section
      className="transition-colors duration-300 my-home-section-margin p-home-section-padding"
      data-aos="zoom-in-up"
    >
     <div className="max-w-[590px] md:max-w-[738px] lg:max-w-[994px] xl:max-w-[1250px] 2xl:max-w-7xl
     p-home-section-padding my-home-section-margin
     mx-auto "> 
       <div className=" flex justify-center items-center flex-col gap-home-section-gap">
        <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
          <BookOpen className="w-6 h-6" />
          <span className="text-sm tracking-widest uppercase">{t("tfaculty")}</span>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <Trans
              i18nKey="faculty"
              components={{ highlight: <span className="text-mainColor" /> }}
            />
          </h2>
        </div>

        <div className="w-full mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {faculties.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="flex items-center justify-start gap-3 bg-gray-50 rounded-lg px-4 py-3 shadow-sm hover:shadow-md hover:cursor-pointer transition"
              >
                <div className="text-mainColor text-xl">{item.icon}</div>
                <span className="text-lg font-semibold text-gray-600">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
     </div>
    </section>
  );
}
