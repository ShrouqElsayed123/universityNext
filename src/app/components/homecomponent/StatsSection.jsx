"use client"; // مهم جداً لأن فيه useState و useEffect

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaBookOpen, FaUserGraduate,FaChalkboardTeacher  } from 'react-icons/fa';
import { FaBuildingColumns } from "react-icons/fa6";

import { Trans, useTranslation } from 'react-i18next';
import { BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StatsSection({
  size1 = 40,
  textsize = "text-4xl",
  numberSize = "text-3xl",
  pSize = "py-10",
  display1 = "block"
}) {
  const [stats, setStats] = useState([]);
  const { t, i18n } = useTranslation();

  // map للـ icons
  const icons = {
    "book-open": <FaBookOpen size={size1} />,
    "user-graduate": <FaUserGraduate size={size1} />,
    "building-columns": <FaBuildingColumns size={size1} />,
    "chalkboard-user": <FaChalkboardTeacher  size={size1}/>
  };

  // Load stats من public JSON حسب اللغة
  useEffect(() => {
    const lang = i18n.language; // "en" أو "ar"

    fetch(`/data/home/stats.json`) // الملف موجود في public/data/home/stats.json
      .then(res => res.json())
      .then(data => {
        setStats(data[lang] || []); // نحط النسخة المناسبة حسب اللغة
      })
      .catch(err => console.error("Failed to load stats JSON:", err));
  }, [i18n.language]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="transition-colors duration-300"
      data-aos="fade-down"
    >
      <div className=" mx-auto flex justify-center items-center flex-col gap-home-section-gap">

        {/* Title */}
        <div className={`flex items-center ${display1} gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit`}>
          <BookOpen className="w-6 h-6" />
          <span className="text-sm tracking-widest uppercase">
            {t('stats')}
          </span>
        </div>

        {/* Sub title */}
        <div className={`text-center ${display1}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <Trans
              i18nKey="statistics"
              components={{ highlight: <span className="text-mainColor" /> }}
            />
          </h2>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">

            {stats.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`flex items-center flex-col gap-3 justify-center bg-white rounded-sm shadow-lg px-2 ${pSize}`}
              >
                {/* Icon */}
                <div className="text-mainColor">
                  {icons[item.icon]}
                </div>

                {/* Number + Label */}
                <div className='flex flex-col gap-2'>
                  <h2 className={`${numberSize} font-bold`}>
                    {inView && <CountUp end={item.number} duration={2} />}+
                  </h2>

                  <p className="font-semibold text-gray-500 text-sm">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
