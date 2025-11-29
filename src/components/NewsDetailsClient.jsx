// src/components/NewsDetailsClient.jsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function NewsDetailsClient({ news }) {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <div className="max-w-4xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4">
                {lang === "ar" ? news.title.ar : news.title.en}
            </h1>
            <p className="mb-4">{lang === "ar" ? news.content.ar : news.content.en}</p>
            <p className="text-gray-500">Author: {news.author}</p>
        </div>
    );
}
