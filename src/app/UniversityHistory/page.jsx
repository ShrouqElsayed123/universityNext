"use client";

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
            "to": "/",
            "label": {
                "en": "Establishment of the university",
                "ar": " نشأة الجامعة"
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
            <Timeline />
        </div>
    )
}
