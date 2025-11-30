"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditNewsPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const [newsItem, setNewsItem] = useState(null);
    const [formData, setFormData] = useState({
        title: { ar: "", en: "" },
        content: { ar: "", en: "" },
        image: "",
        published_date: "",
        author: { ar: "", en: "" },
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(`/api/news/${id}`);
                const data = await res.json();
                if (data.success) {
                    setNewsItem(data.data);
                    setFormData({
                        title: {
                            ar: data.data.title?.ar || "",
                            en: data.data.title?.en || "",
                        },
                        content: {
                            ar: data.data.content?.ar || "",
                            en: data.data.content?.en || "",
                        },
                        image: data.data.image || "",
                        published_date: data.data.published_date?.slice(0, 10) || "",
                        author: {
                            ar: data.data.author?.ar || "",
                            en: data.data.author?.en || "",
                        },
                    });
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const [field, lang] = name.split("."); // مثال: "title.ar"
        if (lang) {
            setFormData((prev) => ({
                ...prev,
                [field]: { ...prev[field], [lang]: value },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [field]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/api/news/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                alert("تم التحديث بنجاح");
                router.push("/dashboard/news");
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (!newsItem) return <p>News not found</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">تعديل الخبر</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title_ar" className="block mb-1 font-medium">العنوان بالعربي</label>
                    <input
                        id="title_ar"
                        type="text"
                        name="title.ar"
                        value={formData.title.ar}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="العنوان بالعربي"
                    />
                </div>

                <div>
                    <label htmlFor="title_en" className="block mb-1 font-medium">Title in English</label>
                    <input
                        id="title_en"
                        type="text"
                        name="title.en"
                        value={formData.title.en}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Title in English"
                    />
                </div>

                <div>
                    <label htmlFor="content_ar" className="block mb-1 font-medium">المحتوى بالعربي</label>
                    <textarea
                        id="content_ar"
                        name="content.ar"
                        value={formData.content.ar}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        rows={5}
                        placeholder="المحتوى بالعربي"
                    />
                </div>

                <div>
                    <label htmlFor="content_en" className="block mb-1 font-medium">Content in English</label>
                    <textarea
                        id="content_en"
                        name="content.en"
                        value={formData.content.en}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        rows={5}
                        placeholder="Content in English"
                    />
                </div>

                <div>
                    <label htmlFor="author_ar" className="block mb-1 font-medium">اسم المؤلف بالعربي</label>
                    <input
                        id="author_ar"
                        type="text"
                        name="author.ar"
                        value={formData.author.ar}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="اسم المؤلف بالعربي"
                    />
                </div>

                <div>
                    <label htmlFor="author_en" className="block mb-1 font-medium">Author in English</label>
                    <input
                        id="author_en"
                        type="text"
                        name="author.en"
                        value={formData.author.en}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Author in English"
                    />
                </div>

                <div>
                    <label htmlFor="image" className="block mb-1 font-medium">رابط الصورة</label>
                    <input
                        id="image"
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="رابط الصورة"
                    />
                </div>

                <div>
                    <label htmlFor="published_date" className="block mb-1 font-medium">تاريخ النشر</label>
                    <input
                        id="published_date"
                        type="date"
                        name="published_date"
                        value={formData.published_date}
                        onChange={handleChange}
                        className="border px-3 py-2 rounded"
                    />
                </div>
                <div className="flex items-center gap-3 mt-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        حفظ
                    </button>

                    <button
                        type="button"
                        onClick={() => router.push("/dashboard/news")}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        إلغاء
                    </button>
                </div>

            </form>
        </div>

    );
}
