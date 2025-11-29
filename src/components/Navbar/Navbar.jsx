'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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

  useEffect(() => {
    let isMounted = true;
    fetch('/data/NavbarList.json', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => { if (isMounted) setNavItems(data); })
      .catch(err => console.error('Failed to load navbar data:', err));
    return () => (isMounted = false);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpenDropdown(null);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(newLang);
      setLoading(false);
    }, 600);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.15, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className="w-full border-b ">
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2">

          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={80} height={80} className="object-contain" />
          </Link>

          {/* menu open for responsive  */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mt-4 lg:mt-0 text-lg font-medium">

              {navItems.map((item, index) => {

                /* -------------------- LINK -------------------- */
                if (item.type === 'link') {
                  const isActive = pathname === item.path;

                  return (
                    <li key={index}>
                      <Link
                        href={item.path}
                        className={`block py-2 px-3 lg:p-0 transition-all text-xl
                          ${isActive
                            ? 'text-mainColor font-bold'
                            : 'text-gray-700 dark:text-gray-300 hover:text-mainColor'
                          }`}
                      >
                        {item.title[currentLang]}
                      </Link>
                    </li>
                  );
                }

                /* -------------------- DROPDOWN -------------------- */
                if (item.type === 'dropdown') {
                  const isOpenDropdown = openDropdown === item.title[currentLang];

                  return (
                    <li key={index} className="relative" ref={isOpenDropdown ? dropdownRef : null}>
                      <button
                        onClick={() => setOpenDropdown(isOpenDropdown ? null : item.title[currentLang])}
                        className="flex items-center justify-between gap-2 py-2 px-3 lg:px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 w-full"
                      >
                        {item.title[currentLang]}

                        <svg
                          className="w-4 h-4 transition-transform duration-300"
                          style={{ transform: isOpenDropdown ? "rotate(180deg)" : "rotate(0deg)" }}
                          fill="currentColor"
                        >
                          <path d="M5.5 7l4.5 4.5L14.5 7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {isOpenDropdown && (
                          <div className="relative">

                            {!isMobile && (
                              <div className="absolute top-full left-6 w-3 h-3 bg-white
                               dark:bg-gray-800 rotate-45 -mt-[6px] border-l border-t border-gray-200 dark:border-gray-700"></div>
                            )}

                            <motion.ul
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={dropdownVariants}
                              className={`mt-3 bg-white 
                                 rounded-sm shadow-lg z-50 overflow-hidden border-t-4 border-mainColor
                                ${isMobile ? 'pl-4 py-2 space-y-1' : 'absolute top-full left-0 w-56'}`}
                            >
                              {item.submenu?.map((sub, subIndex) => {
                                const isActive = pathname === sub.path;

                                return (
                                  <li key={subIndex}>
                                    <Link
                                      href={sub.path}
                                      className={`block px-4 py-2 border-b-2 transition-all duration-200 
                                      ${isActive
                                          ? 'text-mainColor   bg-blue-50 dark:bg-gray-700'
                                          : 'text-gray-500  border-gray-50   hover:bg-gray-100 '
                                        }
                                        `}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setOpenDropdown(null);
                                      }}
                                    >
                                      {sub.title[currentLang]}
                                    </Link>
                                  </li>
                                );
                              })}
                            </motion.ul>
                          </div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                /* -------------------- MEGA MENU -------------------- */
                if (item.type === 'megamenu') {
                  const isMegaOpen = openDropdown === item.title[currentLang];

                  return (
                    <li key={index} className="relative" ref={isMegaOpen ? dropdownRef : null}>
                      <button
                        onClick={() => setOpenDropdown(isMegaOpen ? null : item.title[currentLang])}
                        className="flex items-center justify-between gap-2 py-2 px-3 lg:px-2 rounded-lg hover:bg-gray-100
                         dark:hover:bg-gray-800 transition-all duration-200 w-full "
                      >
                        {item.title[currentLang]}

                        <svg
                          className="w-4 h-4 transition-transform duration-300"
                          style={{ transform: isMegaOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                          fill="currentColor"
                        >
                          <path d="M5.5 7l4.5 4.5L14.5 7" />
                        </svg>
                      </button>

                      <AnimatePresence>

                        {/* Desktop */}
                        {!isMobile && isMegaOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            className={`absolute top-full mt-3 w-[850px]
  bg-white dark:bg-gray-800 dark:border-gray-700
  shadow-xl rounded-sm p-6 z-50 border-t-4 border-mainColor
  ${currentLang === "ar" ? "right-0" : "left-0"}`}

                          >
                            <div className="grid grid-cols-3 gap-2">
                              {item.columns?.map((col, cIndex) => (
                                <div key={cIndex}>
                                  <h3 className="font-bold text-mainColor  dark:text-white mb-3">
                                    {col.title[currentLang]}
                                  </h3>

                                  <ul className="space-y-2">
                                    {col.items?.map((sub, sIndex) => {
                                      const isActive = pathname === sub.path;

                                      return (
                                        <li key={sIndex}>
                                          <Link
                                            href={sub.path}
                                            className={`block px-2 py-1 border-b-2  transition-all
                                              ${isActive
                                                ? 'text-mainColor   bg-blue-50 dark:bg-gray-700'
                                                : 'text-gray-500  border-gray-50   hover:bg-gray-100 '
                                              }`}
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              setIsOpen(false);
                                            }}
                                          >
                                            {sub.title[currentLang]}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* Mobile */}
                        {isMobile && isMegaOpen && (
                          <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="pl-4 py-2 space-y-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl mt-2"
                          >
                            {item.columns?.map((col, cIndex) => (
                              <div key={cIndex} className="pb-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                  {col.title[currentLang]}
                                </h3>

                                {col.items?.map((sub, sIndex) => {
                                  const isActive = pathname === sub.path;

                                  return (
                                    <li key={sIndex} className="ml-3">
                                      <Link
                                        href={sub.path}
                                        className={`block px-2 py-1 rounded-lg transition-all
                                          ${isActive
                                            ? 'text-mainColor font-semibold bg-blue-50 dark:bg-gray-700'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                          }`}
                                        onClick={() => {
                                          setIsOpen(false);
                                          setOpenDropdown(null);
                                        }}
                                      >
                                        {sub.title[currentLang]}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </div>
                            ))}
                          </motion.ul>
                        )}

                      </AnimatePresence>
                    </li>
                  );
                }

                if (item.type === 'button') {
                  return (
                    <li key={index}>
                      <div className="btn-filled2">{item.title[currentLang]}</div>
                    </li>
                  );
                }
              })}

              <li>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between w-24 h-11 px-2 rounded-full bg-gray-100 shadow-inner hover:shadow-lg"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-maintext-mainColor rounded-full animate-spin mx-auto"></div>
                  ) : currentLang === 'ar' ? (
                    <>
                      <Image src="/images/egypt.svg" width={36} height={36} className="rounded-full" alt="Egypt Flag" />
                      <span className="text-sm font-semibold">AR</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm font-semibold">EN</span>
                      <Image src="/images/usa.svg" width={36} height={36} className="rounded-full" alt="USA Flag" />
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
