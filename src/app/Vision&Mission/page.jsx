"use client";

import MissionVision from '@/components/MissionVision';
import PagesHeader from '@/components/PagesHeader'
import Timeline from '@/components/Timeline'
import { useTranslation } from "react-i18next";

export default function Page() {

  const links = [
    {
      "to": "/",
      "label": {
        "en": "home",
        "ar": "الرئيسية"
      }
    },
    {
      "to": "/Vision&Mission",
      "label": {
        "en": "Vision & Mission",
        "ar": "الرؤية و الرسالة"
      }
    }
  ];

  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div>
      <PagesHeader
        links={links.map(link => ({
          to: link.to,
          label: link.label[lang]
        }))}
        img='/images/headerbg2.avif'
      />
      <MissionVision />
    </div>
  )
}
