import { connectDB } from "../../../lib/db";
import Order from "../../../models/Order";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userEmail, plan } = await req.json();
    await connectDB();

    const panelKey = "SM-" + Math.random().toString(36).slice(2, 10);
    const order = await Order.create({ userEmail, plan, panelKey });

    return NextResponse.json({ panelKey: order.panelKey });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const orders = await Order.find();
    return NextResponse.json(orders);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}
