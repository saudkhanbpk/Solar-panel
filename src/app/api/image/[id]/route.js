import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import Image from "../../../../models/image";
import cloudinary from "../../../../lib/cloudaniry";

export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = await params;

  try {
    const image = await Image.findById(id);
    if (!image) {
      return NextResponse.json({ success: false, error: "Image not found" });
    }

    // Delete from Cloudinary
    if (image.cloudinary_id) {
      await cloudinary.uploader.destroy(image.cloudinary_id);
    }

    // Remove from DB
    await Image.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
