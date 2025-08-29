
import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      // match: [/^\+?[0-9]{7,15}$/, "Please enter a valid phone number"], // regex validation
    },
    interestedProduct: {
      type: String,
      required: [true, "Interested product is required"],
      trim: true,
    },
    message: {
      type: String,
      default: "",
      trim: true,
    },
     status: {
    type: String,
    values: ["Processing", "Shipped", "Delivered"],
    default: "Processing",
  },
  },
  { timestamps: true } 
);


export default mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);
