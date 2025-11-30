"use client";
import NewsCard from "@/components/homecomponent/NewsCard";
import Loading from "@/components/Loading";
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

    if (loading) return <Loading />

    return (
        <NewsCard news={news} />


    );
}
