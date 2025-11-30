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
     ar: { type: String, trim: true },
      en: { type: String, trim: true },
    },
  },
  { timestamps: true } // createdAt + updatedAt
);

// Middleware قبل الحفظ
NewsSchema.pre("save", function (next) {
  // العنوان
  if (this.title.ar && !this.title.en) this.title.en = "";
  if (this.title.en && !this.title.ar) this.title.ar = "";

  // المحتوى
  if (this.content.ar && !this.content.en) this.content.en = "";
  if (this.content.en && !this.content.ar) this.content.ar = "";

  // المؤلف
//   if (!this.author) this.author = "ali";
if (!this.content.en) this.content.en = "Randa Younis";
  if (!this.content.ar) this.content.ar = "رندا يونس";

  next();
});

const News = mongoose.models.News || mongoose.model("News", NewsSchema);
export default News;
