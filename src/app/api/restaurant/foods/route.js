import { connectionStr } from "@/app/lib/db";
import foodsSchema from "@/app/lib/foodModal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    const data = await new foodsSchema(payload);
    const result = await data.save();
    return NextResponse.json(result, { status: 200 });
}