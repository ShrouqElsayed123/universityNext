import React from 'react'
import { useTranslation } from "react-i18next";

export default function NewsCard({ news }) {
    const { t, i18n } = useTranslation();
    const { language } = i18n;
    return (
        <div className="p-5 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">All News</h1>

            {news.length === 0 && (
                <p className="text-center text-gray-500">No news available</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item, index) => (
                    <div
                        key={item._id + index} // دمج _id مع index لضمان الفريدة
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                    >
                        {/* الصورة */}
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.title?.ar || "news image"}
                                className="w-full h-56 object-cover"
                            />
                        )}

                        {/* المحتوى */}
                        <div className="p-4 flex flex-col flex-1">
                            <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                <span>By {item.author}</span>
                                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                            </div>
                            <h2 className="text-lg font-semibold mb-1 line-clamp-2">{item?.title?.[language]}</h2>
                            {/* <p className="text-gray-600 mb-2 line-clamp-2">{item?.title?.[language]}</p> */}
                            {/* <p className="text-gray-700 mb-4 line-clamp-3">{item?.content?.[language]}</p> */}

                            {/* الكاتب والتاريخ */}


                            {/* زر قراءة المزيد */}
                            <button className="bg-mainColor text-white py-2 px-4 rounded hover:bg-mainColorDark1 transition">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>


    );
}
