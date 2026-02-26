import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
