import { connectDB } from "@/lib/db";
import Order from "@/models/Order";

export async function POST(req) {
  const { userEmail, plan } = await req.json();
  await connectDB();
  const panelKey = "SM-" + Math.random().toString(36).slice(2, 10);
  await Order.create({ userEmail, plan, panelKey });
  return Response.json({ panelKey });
}

export async function GET() {
  await connectDB();
  const orders = await Order.find();
  return Response.json(orders);
}
