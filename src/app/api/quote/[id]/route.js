// import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import Quote from "../../../../models/quote.model";

export async function DELETE(req, { params }) {

  try {
    await connectDB();
    const { id } = await params;

    const deletedQuote = await Quote.findByIdAndDelete(id);

    if (!deletedQuote) {
      return Response.json(
        { success: false, error: "Quote not found" },
        { status: 404 }
      );
    }

    return Response.json({ success: true, message: "Quote deleted" });
  } catch (error) {
    console.error("Delete error:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function PATCH(req, { params }) {
  await connectDB();

  const { id } =await params; // ✅ works here
  const { status } = await req.json();

  console.log("status", status);

  const updatedQuote = await Quote.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );

  if (!updatedQuote) {
    return Response.json({ success: false, error: "Quote not found" }, { status: 404 });
  }

  return Response.json({
    success: true,
    message: "Status updated successfully",
    quote: updatedQuote,
  });
}

