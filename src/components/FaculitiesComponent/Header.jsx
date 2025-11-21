"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Header({ links, img }) {
    const pathname = usePathname();
    const { i18n } = useTranslation();
    const lang = i18n.language;
    return (
        <div className="relative h-80 flex items-center justify-center text-center px-0">

            {/* Background Image */}
            <div
                className="inset-0 opacity-50 bg-cover bg-center absolute"
                style={{ backgroundImage: `url(${img})` }}
            ></div>

            <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-3 font-header">
                    {links[links.length - 1].label[lang]}
                </h2>

                <p className="text-gray-600 dark:text-white">
                    {links.map((link, index) => {
                        const isActive = pathname === link.to;

                        return (
                            <span key={index}>
                                <Link
                                    href={link.to}
                                    className={
                                        isActive
                                            ? "text-mainColor font-semibold"
                                            : "hover:underline"
                                    }
                                >
                                    {link.label[lang]}
                                </Link>

                                {index < links.length - 1 && " >> "}
                            </span>
                        );
                    })}
                </p>
            </div>
        </div>
    );
}
