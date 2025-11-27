"use client";

import { useState } from "react";

export default function AdminNewsForm() {
    const [file, setFile] = useState(null);
    const [titleEn, setTitleEn] = useState("");
    const [titleAr, setTitleAr] = useState("");
    const [contentEn, setContentEn] = useState("");
    const [contentAr, setContentAr] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const formData = new FormData();
            if (file) formData.append("image", file);
            formData.append("title", JSON.stringify({ en: titleEn, ar: titleAr }));
            formData.append("content", JSON.stringify({ en: contentEn, ar: contentAr }));
            formData.append("author", author);

            const res = await fetch("/api/news", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                setMessage("News created successfully!");
                // إعادة تهيئة الحقول
                setFile(null);
                setTitleEn("");
                setTitleAr("");
                setContentEn("");
                setContentAr("");
                setAuthor("");
            } else {
                setMessage(data.message || "Something went wrong!");
            }
        } catch (err) {
            console.error(err);
            setMessage("Error uploading news.");
        }

        setLoading(false);
    };

    return (
        <div className="max-w-xl mx-auto p-5">
            <h1 className="text-2xl font-bold mb-5 text-center">Create News</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Title (English)"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Title (Arabic)"
                    value={titleAr}
                    onChange={(e) => setTitleAr(e.target.value)}
                    required
                    className="p-2 border rounded"
                />
                <textarea
                    placeholder="Content (English)"
                    value={contentEn}
                    onChange={(e) => setContentEn(e.target.value)}
                    required
                    className="p-2 border rounded"
                />
                <textarea
                    placeholder="Content (Arabic)"
                    value={contentAr}
                    onChange={(e) => setContentAr(e.target.value)}
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    className="p-2 border rounded"
                />

                <div>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    {file && (
                        <img
                            src={URL.createObjectURL(file)}
                            alt="Preview"
                            className="w-32 h-32 object-cover mt-2 rounded border"
                        />
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    {loading ? "Uploading..." : "Create News"}
                </button>
            </form>

            {message && <p className="mt-4 text-center">{message}</p>}
        </div>
    );
}
