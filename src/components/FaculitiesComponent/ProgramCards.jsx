import Image from "next/image";
import Link from "next/link";

export default function ProgramCards({ img, programName, path, className }) {
    return (
        <Link
            href={path}
            className={`
                relative bg-white rounded-md overflow-hidden block
                transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-2xl
                ${className}
            `}
        >
            {/* Image Container */}
            <div className="relative w-full h-72 overflow-hidden">
                <Image
                    src={img}
                    alt={programName}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
            </div>

            {/* Name Box */}
            <div className="absolute w-full bottom-0 right-0 bg-white bg-opacity-90 px-4 py-2 shadow-md border-t-4 border-mainColor transition-all duration-300 ease-in-out hover:bg-opacity-100">
                <p className="text-xl font-semibold text-gray-800 tracking-widest transition-all duration-300 ease-in-out hover:text-mainColor">
                    {programName}
                </p>
            </div>
        </Link>
    );
}
