import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b border-gray-800">
      <h1 className="text-green-400 font-bold">Senu Modz</h1>
      <div className="space-x-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}
