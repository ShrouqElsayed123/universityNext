import connect from "@/lib/db";
import News from "@/models/News";
import NewsDetailsClient from "@/components/NewsDetailsClient";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export default async function NewsDetailsPage({ params }) {
    const { id } = params;

    await connect();

    let news = await News.findById(id).lean();

    if (!news) {
        return <div>❌ الخبر غير موجود</div>;
    }

    news = {
        ...news,
        _id: news._id.toString(),
        published_date: news.published_date
            ? new Date(news.published_date).toISOString()
            : null,
    };

    return (
        <Suspense fallback={<Loading />}>
            <NewsDetailsClient news={news} />
        </Suspense>
    );
}
