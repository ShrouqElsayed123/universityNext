"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Page() {
    const handleLogout = () => {
        signOut({ callbackUrl: "/login" });
    };

    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center bg-gray-50 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
                    Dashboard
                </h1>

                <Link
                    href="/dashboard/news"
                    className="block bg-mainColor text-white py-3 rounded-lg mb-4 font-medium hover:bg-mainColorDark1 transition"
                >
                    News
                </Link>

                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
