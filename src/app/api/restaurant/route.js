import { connectionStr } from "@/app/lib/db";
import resturantSchema from "@/app/lib/restModal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(connectionStr);
        const data = await resturantSchema.find();
        console.log("data", data);
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    } finally {
        await mongoose.connection.close();
    }
}

export async function POST(request) {
    try {
        
        let data;
        await mongoose.connect(connectionStr);
        const payload = await request.json();
        if (payload.login) {
            data = await resturantSchema.findOne({ email: payload.email, password: payload.password });
        }
        else {
            data = await new resturantSchema(payload);
            await data.save();
        }
        return NextResponse.json({ message: data, status: 200 });
    }
    catch (error) {
        debugger
        console.log("error from catch section");
        
        console.error(error);
        // return new Response("Internal Server Error", { status: 500 });
    }
    finally {
        await mongoose.connection.close();
    }
}