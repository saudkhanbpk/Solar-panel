import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Quote from "../../../models/quote.model"


export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, address, phone, interestedProduct, message } = body;

    if (!name, !address, !phone, !interestedProduct) {
      return new Response(
        JSON.stringify({ 'sucess': false, error: 'required field are missing' }),
        { status: 404 }
      );
    }
    const newQuote = new Quote({
      name,
      email,
      address,
      phone,
      interestedProduct,
      message,
      status : 'Processing'
    })
    await newQuote.save();

    return new Response(
      JSON.stringify({ 'sucess': true, message: "Quote submitted sucessfully" }),
      { status: 201 }
    )

  } catch (error) {
    console.error("Error saving quote:", error);
    return new Response(
      JSON.stringify({ sucess: false, error: "internal server error" }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const quotes = await Quote.find().sort({ createdAt: -1 }); // latest first

    return NextResponse.json({
      success: true,
      data: quotes,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ sucess: false, error: "internal server error " }),
      { status: 500 }
    )
  }
}