import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-background px-6 text-center">
      <p className="display text-[clamp(5rem,16vw,10rem)] leading-none text-foreground/15">404</p>
      <h1 className="display -mt-8 text-[clamp(1.75rem,4vw,2.5rem)]">Page not found</h1>
      <p className="max-w-sm text-[15px] text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn btn-ink mt-2">
        Go home
      </Link>
    </main>
  );
}
