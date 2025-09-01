import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/mongodb";
import Faq from "../../../../../models/faq.model";

export async function PATCH(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const { isPublished } = await req.json();

    const faq = await Faq.findByIdAndUpdate(
      id,
      { isPublished },
      { new: true }
    );

    if (!faq) {
      return NextResponse.json({ success: false, error: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, faq });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
