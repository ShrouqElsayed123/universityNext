import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
    {
        image: {
            type: String, // هنا هنخزن رابط الصورة بعد رفعها
            default: "", // لو مش موجودة صورة
        },

        title: {
            ar: { type: String, trim: true },
            en: { type: String, trim: true },
        },

        content: {
            ar: { type: String, trim: true },
            en: { type: String, trim: true },
        },

        author: {
            type: String,

            trim: true,
        },
    },
    { timestamps: true } // createdAt + updatedAt
);

const News = mongoose.models.News || mongoose.model("News", NewsSchema);
export default News;
