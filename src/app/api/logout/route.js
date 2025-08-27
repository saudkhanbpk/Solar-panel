// app/api/logout/route.js
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true, message: "Logged out" });

  // Remove cookie by setting it empty + expired
  response.cookies.set("token", "", { httpOnly: true, path: "/", maxAge: 0 });

  return response;
}
