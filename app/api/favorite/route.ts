import connect from "@/app/actions/connect";
import User from "@/core/models/user";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/core/utils/jwt"
import { success } from "zod";


export async function POST(req: NextRequest) {
    try {
        await connect()

        const body = await req.json()
        const { movieID } = body;

        const token = req.cookies.get("token")?.value;

        if (!token) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        const userID = verifyToken(token);

        const user = await User.findById(userID);
        if (!user) return NextResponse.json({ success: false, message: "User Not Found" }, { status: 404 })



        if (!user.favorite.includes(movieID)) {
            user.favorite.push(movieID);
            await user.save();
        }
        return NextResponse.json({ success: true, message: "Movie Add To Facorites" })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 })
    }
}

export async function GET(req: NextRequest) {
    try {
        await connect();

        const token = req.cookies.get("token")?.value;
        if (!token) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

        const userID = verifyToken(token);
        const user = await User.findById(userID);
        if (!user) return NextResponse.json({ success: false, message: "User Not Found" }, { status: 404 });

        const favoriteIDs = user.favorite;
        return NextResponse.json({ success: true, favoriteIDs });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
    }
}