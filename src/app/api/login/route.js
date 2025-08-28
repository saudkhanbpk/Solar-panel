import { NextResponse } from "next/server";
import  connectDB  from "../../../lib/mongodb";
import User from "../../../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key"; // store in .env file

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    // Find user in DB
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 401 }
      );
    }


    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },  // payload
      JWT_SECRET,                           // secret key
      { expiresIn: "1d" }                   // 1 day expiry
    );

    return NextResponse.json({
      success: true,
      message: "Login successful",
      token, // return JWT token
      email,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
