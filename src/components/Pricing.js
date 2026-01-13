export default function Pricing() {
  const phone = "94743903048";

  const msg = (plan) =>
    encodeURIComponent(
      `Hello Senu Modz 👋
I want to buy the ${plan} WhatsApp Bot Panel.`
    );

  return (
    <section className="grid md:grid-cols-3 gap-6 mt-20">
      {["Starter", "Pro", "Ultimate"].map((p) => (
        <div key={p} className="border p-6 rounded-xl text-center">
          <h2 className="text-2xl text-green-400 font-bold">{p}</h2>
          <a
            href={`https://wa.me/${phone}?text=${msg(p)}`}
            target="_blank"
            className="block mt-6 bg-green-500 text-black py-2 rounded-lg font-bold"
          >
            Buy via WhatsApp
          </a>
        </div>
      ))}
    </section>
  );
}
