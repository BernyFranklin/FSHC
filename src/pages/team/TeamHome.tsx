import { Link } from "react-router-dom";

export default function TeamHome() {
  const cards = [
    { to: "todos", title: "To-Do List", desc: "Team tasks and reminders." },
    { to: "dues", title: "Pay Dues", desc: "Settle your season dues." },
    { to: "uniforms", title: "Order Uniforms", desc: "Submit your kit order." },
  ];
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="rounded-lg bg-white shadow p-4 hover:shadow-md transition"
          >
            <h2 className="font-semibold">{c.title}</h2>
            <p className="text-sm text-slate-600">{c.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
