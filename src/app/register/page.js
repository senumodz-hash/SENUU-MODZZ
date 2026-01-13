"use client";

export default function Register() {
  async function handle(e) {
    e.preventDefault();
    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    location.href = "/login";
  }

  return (
    <form onSubmit={handle} className="max-w-sm mx-auto mt-20">
      <input name="name" placeholder="Name" className="w-full p-2 mb-2" />
      <input name="email" placeholder="Email" className="w-full p-2 mb-2" />
      <input name="password" type="password" className="w-full p-2 mb-2" />
      <button className="bg-green-500 w-full py-2 font-bold">Register</button>
    </form>
  );
}
