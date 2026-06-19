export default function Home() {
   return (
      <section className="space-y-4">
         <h1 className="text-4xl font-bold text-brand-primary">
            Fresno State Hockey Club
         </h1>
         <p className="text-lg text-brand-primary/80">
            Welcome to the official home of the Fresno State Hockey Club.
            Schedule, roster, and team news coming soon.
         </p>
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="rounded-lg bg-brand-white shadow border-t-4 border-brand-secondary p-4">
               <h2 className="font-semibold text-brand-primary">Next Game</h2>
               <p className="text-sm text-brand-primary/70">TBD</p>
            </div>
            <div className="rounded-lg bg-brand-white shadow border-t-4 border-brand-secondary p-4">
               <h2 className="font-semibold text-brand-primary">Latest News</h2>
               <p className="text-sm text-brand-primary/70">Stay tuned.</p>
            </div>
            <div className="rounded-lg bg-brand-white shadow border-t-4 border-brand-secondary p-4">
               <h2 className="font-semibold text-brand-primary">Roster</h2>
               <p className="text-sm text-brand-primary/70">Coming soon.</p>
            </div>
         </div>
      </section>
   );
}
