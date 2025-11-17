"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// الصور من public
const logo = "/images/logo.png";
const ukFlag = "/images/usa.svg";
const saFlag = "/images/egypt.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(false);
    const [navItems, setNavItems] = useState([]);
    const dropdownRef = useRef(null);
    const { i18n } = useTranslation();

    const currentLang = i18n.language || "en";

    // تغيير اللغة
    const toggleLanguage = () => {
        const newLang = currentLang === "ar" ? "en" : "ar";
        setLoading(true);

        setTimeout(() => {
            i18n.changeLanguage(newLang);
            document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
            document.documentElement.lang = newLang;
            setLoading(false);
        }, 600);
    };

    // قراءة JSON من public
    useEffect(() => {
        fetch("/data/NavbarList.json")
            .then((res) => res.json())
            .then((data) => setNavItems(data))
            .catch((err) => console.error("Error loading JSON:", err));
    }, []);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // إغلاق القائمة عند الضغط خارجها
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
    };

    return (
        <div className="w-full border-b">
            <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logo}
                            alt="logo"
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </Link>

                    {/* Mobile Menu Btn */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="md:hidden text-gray-500 hover:bg-gray-100 p-2 rounded-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor">
                            <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Menu */}
                    <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col md:flex-row md:items-center md:gap-6 mt-4 md:mt-0 text-lg font-medium">

                            {navItems.length === 0 && <li>Loading...</li>}

                            {navItems.map((item, index) => {
                                if (item.type === "link") {
                                    return (
                                        <li key={index}>
                                            <Link href={item.path} className="block py-2 px-3 hover:text-blue-600">
                                                {item.title[currentLang]}
                                            </Link>
                                        </li>
                                    );
                                }

                                if (item.type === "dropdown") {
                                    return (
                                        <li key={index} className="relative" ref={dropdownRef}>
                                            <button
                                                onClick={() =>
                                                    setOpenDropdown(
                                                        openDropdown === item.title[currentLang] ? null : item.title[currentLang]
                                                    )
                                                }
                                                className="flex items-center gap-1 py-2 px-3 hover:text-blue-600"
                                            >
                                                {item.title[currentLang]}
                                                <svg className="w-4 h-4" fill="currentColor">
                                                    <path d="M5.5 7l4.5 4.5L14.5 7" />
                                                </svg>
                                            </button>

                                            <AnimatePresence>
                                                {openDropdown === item.title[currentLang] && (
                                                    <motion.ul
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="exit"
                                                        variants={dropdownVariants}
                                                        className={`mt-2 bg-white border rounded shadow-md z-50 ${isMobile ? "pl-4 py-2 space-y-1" : "absolute top-full left-0 w-56"
                                                            }`}
                                                    >
                                                        {item.submenu?.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    href={subItem.path}
                                                                    className="block px-3 py-2 hover:bg-gray-100 rounded"
                                                                    onClick={() => {
                                                                        setIsOpen(false);
                                                                        setOpenDropdown(null);
                                                                    }}
                                                                >
                                                                    {subItem.title[currentLang]}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    );
                                }

                                if (item.type === "button") {
                                    return (
                                        <li key={index}>
                                            <div className="px-3 py-2 bg-blue-600 text-white rounded">
                                                {item.title[currentLang]}
                                            </div>
                                        </li>
                                    );
                                }

                                return null;
                            })}

                            {/* Language Switch Button */}
                            <li>
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center gap-2 px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                                    ) : currentLang === "ar" ? (
                                        <Image src={saFlag} alt="AR" width={36} height={36} className="rounded-full" />
                                    ) : (
                                        <Image src={ukFlag} alt="EN" width={36} height={36} className="rounded-full" />
                                    )}

                                    <span className="font-semibold">{currentLang.toUpperCase()}</span>
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
