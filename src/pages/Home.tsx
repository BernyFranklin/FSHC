export default function Home() {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold">Frostburg State Hockey Club</h1>
      <p className="text-lg text-slate-700">
        Welcome to the official home of FSHC. Schedule, roster, and team news
        coming soon.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <div className="rounded-lg bg-white shadow p-4">
          <h2 className="font-semibold">Next Game</h2>
          <p className="text-sm text-slate-600">TBD</p>
        </div>
        <div className="rounded-lg bg-white shadow p-4">
          <h2 className="font-semibold">Latest News</h2>
          <p className="text-sm text-slate-600">Stay tuned.</p>
        </div>
        <div className="rounded-lg bg-white shadow p-4">
          <h2 className="font-semibold">Roster</h2>
          <p className="text-sm text-slate-600">Coming soon.</p>
        </div>
      </div>
    </section>
  );
}
