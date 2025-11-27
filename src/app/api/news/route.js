
import fs from "fs";
import path from "path";
import connect from "@/lib/db";
import News from "@/models/News";

export async function POST(req) {
    await connect();

    try {
        const formData = await req.formData();
        const title = JSON.parse(formData.get("title"));
        const content = JSON.parse(formData.get("content"));
        const author = formData.get("author");
        const file = formData.get("image");

        let image = "";
        if (file && file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const fileName = Date.now() + "-" + file.name.replaceAll(" ", "_");
            const uploadDir = path.join(process.cwd(), "public/uploads");

            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, buffer);
            image = `/uploads/${fileName}`;
        }

        const newNews = await News.create({ title, content, author, image });

        return new Response(
            JSON.stringify({ success: true, data: newNews }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        console.error("Error creating news:", err);
        return new Response(
            JSON.stringify({ success: false, message: err.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

export async function GET(req) {
    await connect();
    try {
        const news = await News.find().sort({ createdAt: -1 });
        return new Response(JSON.stringify({ success: true, data: news }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(JSON.stringify({ success: false, message: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
