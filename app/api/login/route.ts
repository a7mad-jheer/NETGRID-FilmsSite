import { loginUser } from "@/app/actions/auth";
import connect from "@/app/actions/connect";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export async function POST(req: Request) {

    try {
        await connect()

        const body = await req.json();

        const result = await loginUser(body);

        if (!result.success || !result.user) {
            return NextResponse.json({ message: result.message }, { status: 401 });
        }

        const token = jwt.sign(
            {id: result.user.id , email: result.user.email},
            process.env.JWT_SECRET!,
            {expiresIn : "1h"}
        );
        console.log("Generated Token :" , token);



        return NextResponse.json({ success: true ,token , user :  result.user }, { status: 200 })

    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 500 })
    }
}