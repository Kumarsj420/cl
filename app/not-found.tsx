import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 md:py-32">
      <h1 className="text-hero">This road does not go anywhere</h1>
      <p className="mt-5 text-lg text-ink-soft">The page may have moved. Pick a destination, or call us and we will help you find it.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/#destinations" className="btn btn-primary">See destinations</Link>
        <Link href="/contact" className="btn btn-outline">Contact us</Link>
      </div>
    </section>
  );
}
