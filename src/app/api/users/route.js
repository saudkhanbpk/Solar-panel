// app/api/users/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import User from '../../../models/user.model'

// GET all users
export async function GET() {
    await connectDB();
    const newUser = new User({ name: "Test User", email: "test@example.com" });
    await newUser.save();

    return NextResponse.json({ message: "User created!" });
    
}


