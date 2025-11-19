"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [navItems, setNavItems] = useState([]);

  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // 🔥 load navbar JSON from public/data/
  useEffect(() => {
    let isMounted = true;

    fetch("/data/NavbarList.json", { cache: "force-cache" })
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setNavItems(data);
      })
      .catch((err) => console.error("Failed to load navbar data:", err));

    return () => (isMounted = false);
  }, []);

  // mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };

  return (
    <div className="w-full border-b  max-w-screen-xl mx-auto">
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className=" flex flex-wrap items-center justify-between p-2">

          {/* LOGO */}
          <Link href="/">
            <img src="/images/logo.png" alt="logo" className="w-20 h-w-20 object-contain" />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* NAV LINKS */}
          <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:items-center md:gap-6 mt-4 md:mt-0 text-lg font-medium">

              {navItems.map((item, index) => {

                // 🔗 Normal Link
                if (item.type === "link") {
                  return (
                    <li key={index}>
                      <Link
                        href={item.path}
                        className={
                          pathname === item.path
                            ? "text-mainColor block py-2 px-3 font-bold md:p-0"
                            : "block py-2 px-3 md:p-0"
                        }
                      >
                        {item.title[currentLang]}
                      </Link>
                    </li>
                  );
                }

                // 📂 Dropdown
                if (item.type === "dropdown") {
                  return (
                    <li key={index} className="relative" ref={openDropdown === item.title[currentLang] ? dropdownRef : null}>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.title[currentLang] ? null : item.title[currentLang])
                        }
                        className="flex items-center justify-between gap-1 py-2 px-3 md:p-0 w-full"
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
                            className={`mt-2 bg-white border rounded shadow-md z-50 ${
                              isMobile ? "pl-4 py-2 space-y-1" : "absolute top-full left-0 w-56"
                            }`}
                          >
                            {item.submenu?.map((sub, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={sub.path}
                                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  {sub.title[currentLang]}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                // 🟦 Button
                if (item.type === "button") {
                  return (
                    <li key={index}>
                      <div className="btn-filled2">{item.title[currentLang]}</div>
                    </li>
                  );
                }
              })}

              {/* 🌐 LANGUAGE SWITCHER */}
              <li>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between w-24 h-11 px-2 rounded-full bg-gray-100 shadow-inner hover:shadow-lg"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                  ) : currentLang === "ar" ? (
                    <>
                      <img src="/images/egypt.svg" className="w-9 h-w-9 rounded-full" />
                      <span className="text-sm font-semibold">AR</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm font-semibold">EN</span>
                      <img src="/images/usa.svg" className="w-9 h-w-9 rounded-full" />
                    </>
                  )}
                </button>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}
