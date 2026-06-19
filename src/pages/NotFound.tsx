import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="text-center space-y-3">
      <h1 className="text-4xl font-bold text-brand-primary">404</h1>
      <p className="text-brand-primary/70">Page not found.</p>
      <Link to="/" className="text-brand-secondary underline">
        Back to home
      </Link>
    </section>
  );
}
