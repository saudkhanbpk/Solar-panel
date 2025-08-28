// src/app/api/change-password/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "../../../lib/mongodb";
import User from "../../../models/user.model";

export async function POST(req) {
  try {
    await connectDB();

    // ✅ get email from query string
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    // ✅ get passwords from body
    const { oldPassword, newPassword } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // check if old password matches
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Old password is incorrect" }, { status: 400 });
    }

    // hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json({ message: "Password updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Password update error:", error);
    return NextResponse.json({ message: "Error updating password" }, { status: 500 });
  }
}