import { NextResponse } from "next/server";
import  connectDB  from "../../../../lib/mongodb";
import Faq from "../../../../models/faq.model";

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    await Faq.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "FAQ deleted" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
