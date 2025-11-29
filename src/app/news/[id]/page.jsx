// src/app/news/[id]/page.jsx
import connect from "@/lib/db";
import News from "@/models/News";
import NewsDetailsClient from "@/components/NewsDetailsClient";

export default async function NewsDetailsPage({ params }) {
    const { id } = params;

    await connect();

    // جلب الخبر كـ plain object
    let news = await News.findById(id).lean();

    if (!news) {
        return <div>❌ الخبر غير موجود</div>;
    }

    // تحويل ObjectId و Date بشكل آمن
    news = {
        ...news,
        _id: news._id.toString(), // ObjectId -> string
        published_date: news.published_date
            ? new Date(news.published_date).toISOString() // يحول أي شكل صالح لـ ISO string
            : null,
    };

    return <NewsDetailsClient news={news} />;
}
