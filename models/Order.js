import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userEmail: String,
  plan: String,
  panelKey: String,
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
