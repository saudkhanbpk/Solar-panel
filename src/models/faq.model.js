import mongoose from "mongoose";

const CATEGORIES = ["industrial", "commercial", "agriculture", "net-metering" ,"Filling station"];

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true, trim: true },
    category: { type: String, enum: CATEGORIES, required: true },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Faq || mongoose.model("Faq", faqSchema);
