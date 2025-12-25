import { signupUser } from "@/app/actions/auth";
import { NextResponse } from "next/server";
import connect from "@/app/actions/connect";

export async function POST(req : Request) {
  try {
    const body = await req.json();

    await connect();

    const result = await signupUser(body);

    if(!result.success) {
      return NextResponse.json({message : result.message}, {status : 400});
    }
    return NextResponse.json({message : result.message} , {status : 200})
  }catch (err : any) {
    return Response.json({message: err.message} , {status : 500});
  }
}