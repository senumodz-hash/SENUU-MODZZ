"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  async function handle(e) {
    e.preventDefault();
    await signIn("credentials", {
      email: e.target.email.value,
      password: e.target.password.value,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <form onSubmit={handle} className="max-w-sm mx-auto mt-20">
      <input name="email" placeholder="Email" className="w-full p-2 mb-2" />
      <input name="password" type="password" className="w-full p-2 mb-2" />
      <button className="bg-green-500 w-full py-2 font-bold">Login</button>
    </form>
  );
}
