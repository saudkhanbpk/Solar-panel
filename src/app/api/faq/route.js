// src/app/api/faq/route.js
import { NextResponse } from "next/server";
import  connectDB  from "../../../lib/mongodb";
import Faq from "../../../models/faq.model";


export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const faq = await Faq.create(body);
    return NextResponse.json({ success: true, data: faq }, { status: 201 });

  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}



export async function GET() {
  await connectDB();
  try {
    const faq = await Faq.find().sort({ order: 1 });
    return NextResponse.json({ success: true, faq });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
