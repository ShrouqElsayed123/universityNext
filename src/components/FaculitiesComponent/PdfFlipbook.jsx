"use client";
import { useEffect, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/build/pdf";
import HTMLFlipBook from "react-pageflip";

GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js";

export default function PdfFlipbook({ pdfUrl }) {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPdf = async () => {
            try {
                const res = await fetch(pdfUrl);
                if (!res.ok) throw new Error("PDF not found");
                const blob = await res.blob();
                if (blob.size === 0) throw new Error("PDF is empty");

                const arrayBuffer = await blob.arrayBuffer();
                const pdf = await getDocument(arrayBuffer).promise;

                const arr = [];
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const viewport = page.getViewport({ scale: 1.2 });
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;
                    await page.render({ canvasContext: ctx, viewport }).promise;
                    arr.push(canvas.toDataURL());
                }

                setPages(arr);
            } catch (err) {
                console.error("PDF load error:", err);
                alert(err.message); // ينبهك لو الملف فاضي أو مش موجود
            } finally {
                setLoading(false);
            }
        };

        loadPdf();
    }, [pdfUrl]);

    if (loading) return <p className="text-center py-10">جارِ تحميل الصفحات...</p>;

    return (
        <HTMLFlipBook width={500} height={700} showCover className="shadow-xl">
            {pages.map((src, i) => (
                <div key={i} className="bg-white w-full h-full flex items-center justify-center">
                    <img src={src} alt={`page-${i}`} className="w-full h-full object-cover" />
                </div>
            ))}
        </HTMLFlipBook>
    );
}
