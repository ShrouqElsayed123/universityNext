'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import I18nProvider from '../components/I18nProvider';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/homecomponent/Footer';
import { Markazi_Text, Roboto, Playfair_Display, Playwrite_CZ } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

const markazi = Markazi_Text({ subsets: ['arabic', 'latin'], variable: '--font-arabic' });
const roboto = Roboto({ subsets: ['latin'], variable: '--font-english' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-header' });
const playwrite = Playwrite_CZ({ subsets: ['latin'], variable: '--font-subheader' });

export default function ClientRootLayout({ children }) {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState('ar'); // لغة افتراضية آمنة على السيرفر
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setLang(i18n.language);
        document.documentElement.lang = i18n.language;
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }, [i18n.language]);

    if (!mounted) return null;

    return (
        <div className={`flex flex-col min-h-screen ${lang === 'ar' ? markazi.variable : roboto.variable} ${playfair.variable} ${playwrite.variable}`}>
            <I18nProvider>
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="w-full mx-auto">
                        <SessionProvider>{children}</SessionProvider>
                    </div>
                </main>
                <Footer />
            </I18nProvider>
        </div>
    );
}
