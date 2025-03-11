import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import foodsSchema from "@/app/lib/foodModal";
import { NextResponse } from "next/server";
export async function GET(response, content) {
    const id = content.params.id;
    await mongoose.connect(connectionStr);
    const result = await foodsSchema.find();
    return NextResponse.json(result, { status: 200 });
}
