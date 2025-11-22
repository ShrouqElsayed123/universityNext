"use client";

import AoutSection from '@/components/AoutSection'
import PagesHeader from '@/components/PagesHeader'
import { useTranslation } from "react-i18next";

export default function page() {
  const links = [
    {
      "to": "/",
      "label": {
        "en": "home",
        "ar": "الرئيسية"
      }
    },
    {
      "to": "/",
      "label": {
        "en": "About University",
        "ar": "عن الجامعه"
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
      <AoutSection />
    </div>
  )
}
