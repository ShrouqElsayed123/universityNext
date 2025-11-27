import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
    {
        image: {
            type: String, // هنا هنخزن رابط الصورة بعد رفعها
            default: "", // لو مش موجودة صورة
        },

        title: {
            ar: { type: String, required: true, trim: true },
            en: { type: String, required: true, trim: true },
        },

        content: {
            ar: { type: String, required: true, trim: true },
            en: { type: String, required: true, trim: true },
        },

        author: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true } // createdAt + updatedAt
);

const News = mongoose.models.News || mongoose.model("News", NewsSchema);
export default News;
