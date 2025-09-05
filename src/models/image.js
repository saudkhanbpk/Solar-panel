import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true }, // file URL (/uploads/xyz.png)
    name: { type: String, required: true }, // original file name
  },
  { timestamps: true }
);

// Prevent recompilation in dev mode
export default mongoose.models.Image || mongoose.model("Image", ImageSchema);
