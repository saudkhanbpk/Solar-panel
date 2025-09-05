import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Image from "../../../models/image";
import cloudinary from "../../../lib/cloudaniry";
import streamifier from "streamifier";

// ✅ GET → Fetch all images
export async function GET() {
  await connectDB();
  try {
    const images = await Image.find().sort({ createdAt: -1 }); // latest first
    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}

// ✅ POST → Upload image to Cloudinary
export async function POST(req) {
  await connectDB();

  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Wrap Cloudinary upload in a Promise (important!)
    const uploadPromise = new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "projects" },
        async (error, result) => {
          if (error) {
            console.error("Cloudinary error:", error);
            reject(error);
          } else {
            try {
              // Save in MongoDB
              const newImage = await Image.create({
                url: result.secure_url,
                name: file.name,
                cloudinary_id: result.public_id, // Save for deletion
              });
              resolve(newImage);
            } catch (dbError) {
              reject(dbError);
            }
          }
        }
      );
      streamifier.createReadStream(buffer).pipe(stream);
    });

    const savedImage = await uploadPromise;

    return NextResponse.json({ success: true, image: savedImage });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
