"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((r) => r.json())
      .then(setOrders);
  }, []);

  return (
    <div>
      <h1 className="text-3xl mb-4">My Panels</h1>
      {orders.map((o) => (
        <div key={o._id} className="border p-4 mb-2">
          {o.plan} — <b>{o.panelKey}</b>
        </div>
      ))}
    </div>
  );
}
