'use client';

import { useTranslation } from 'react-i18next';
import I18nProvider from '../components/I18nProvider';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/homecomponent/Footer';
import { Markazi_Text, Roboto, Playfair_Display ,Playwrite_CZ} from 'next/font/google';

const markazi = Markazi_Text({
    subsets: ['arabic', 'latin'],
    variable: '--font-arabic',
});

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-english',
});

const Playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-header',

})
const playwrite = Playwrite_CZ({
    subsets: ['latin'],
    variable: '--font-subheader',

})

export default function ClientRootLayout({ children }) {
    const { i18n } = useTranslation();
    const lang = i18n.language; // 'ar' أو 'en'

    return (
        <body
            className={`flex flex-col min-h-screen ${lang === 'ar' ? markazi.variable : roboto.variable
                } ${Playfair.variable} ${playwrite.variable}`}
        >
            <I18nProvider>
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="w-full mx-auto">{children}</div>
                </main>
                <Footer />
            </I18nProvider>
        </body>
    );
}
