"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PagesHeader({ links, img }) {
    const pathname = usePathname();

    return (
        <div className='relative h-72 flex items-center justify-center text-center mb-10'>

            {/* Background Image */}
            <div
                className='inset-0 opacity-15 bg-cover bg-center absolute'
                style={{ backgroundImage: `url(${img})` }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-3 font-header">
                    {links[links.length - 1].label}
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
                                    {link.label}
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
