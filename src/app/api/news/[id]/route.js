import News from "@/models/News";
import connect from "@/lib/db";
import { NextResponse } from "next/server";

// ========== GET Single News ==========
export const GET = async (req, { params }) => {
    try {
        await connect();
        const item = await News.findById(params.id);

        if (!item)
            return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });

        return NextResponse.json({ success: true, data: item });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
};

// ========== PUT (Update News) ==========
export const PUT = async (req, { params }) => {
    try {
        await connect();
        const body = await req.json();

        const updated = await News.findByIdAndUpdate(params.id, body, {
            new: true,
        });

        return NextResponse.json({ success: true, data: updated });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
};

// ========== DELETE ==========
export const DELETE = async (req, { params }) => {
    try {
        await connect();
        await News.findByIdAndDelete(params.id);

        return NextResponse.json({ success: true, message: "Deleted successfully" });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
};
