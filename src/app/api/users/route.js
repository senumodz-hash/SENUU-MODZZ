import { connectDB } from "../../../lib/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    await connectDB();

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });

    return NextResponse.json({ success: true, user: { id: user._id, email: user.email } });
  } catch (err) {
    return NextResponse.json({ error: "Failed to register user" }, { status: 500 });
  }
}
