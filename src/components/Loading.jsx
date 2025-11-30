"use client";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen text-xl font-bold">

            <span className="relative inline-block w-12 h-12">
                <span className="absolute inset-0 box-border w-full h-full border-2 border-secondaryColor loader-rotate"></span>
                <span className="absolute inset-0 box-border w-full h-full border-2 border-mainColor loader-rotate-reverse"></span>
            </span>
        </div>

    );
}
