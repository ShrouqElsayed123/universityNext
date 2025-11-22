'use client';

import { useTranslation } from 'react-i18next';

import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, School } from "lucide-react";
import Image from 'next/image';

// eslint-disable-next-line no-unused-vars
export default function AoutSection() {
    const { t } = useTranslation();


    return (

        <section

            className="  transition-colors duration-300 my-home-section-margin p-home-section-padding"

            data-aos="fade-up"
        >
          <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-home-section-gap">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* العمود الأول - الصور */}
        <div className="space-y-4">
          {/* الصورة الكبرى */}
          <Image
            src="/images/slider-image-1.jfif"
            alt="Main"
            width={800}
            height={600}
            className="w-full rounded-xl shadow-md"
          />

          {/* صف صورتين */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/slider-image-1.jfif"
              alt="Sub 1"
              width={400}
              height={300}
              className="w-full h-full rounded-xl shadow-md object-cover"
            />
            <Image
              src="/images/slider-image-1.jfif"
              alt="Sub 2"
              width={400}
              height={300}
              className="w-full h-full rounded-xl shadow-md object-cover"
            />
          </div>
        </div>

        {/* العمود الثاني - النص */}
        <div className="text-gray-800 dark:text-gray-200 space-y-4">
          <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
            <BookOpen className="w-6 h-6" />
            <span className="text-sm tracking-widest uppercase">
              {t("about")}
            </span>
          </div>

          <h1 className="text-2xl font-semibold">{t("universityname")}</h1>

          <p className="text-lg text-gray-400">
            Menoufia Community University is located on an area of 18 acres, and its construction and
            equipment cost about 3. It includes a main building with offices, banquet and conference
            rooms, a theater, a university council hall, and fully equipped halls. Facilities include
            Medical, Engineering, Humanities, and Lab buildings, plus recreational areas.
          </p>

          <p className="text-lg text-gray-400">
            The university includes 10 faculties (Medicine and Surgery - Dentistry - Physiotherapy -
            Pharmacy - Health Sciences Technology - Nursing - Engineering - Computer and AI - Veterinary
            Medicine - Humanities and Social Sciences) with a capacity of ~9500 students.
          </p>
        </div>
      </div>
    </div>
        </section>

    )
}
