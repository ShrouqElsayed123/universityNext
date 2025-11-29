"use client";
import NewsCard from "@/components/homecomponent/NewsCard";
import { useEffect, useState } from "react";

export default function NewsPage() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    const getNews = async () => {
        try {
            const res = await fetch("/api/news");
            const data = await res.json();

            if (data.success) setNews(data.data);
            else setNews([]);
        } catch (err) {
            console.log(err);
            setNews([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <NewsCard news={news} />


    );
}
