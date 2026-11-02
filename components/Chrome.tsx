import Link from "next/link";
import { Phone, Send } from "lucide-react";
import { EnquiryButton } from "./Enquiry";
import { site } from "@/content/site";
import { destinations } from "@/content";

const nav = [
  { href: "/#destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 pt-2 sm:px-6 md:flex-nowrap md:py-2">
        <Link href="/" className="flex min-h-11 items-center gap-2 font-display text-xl font-extrabold tracking-tight">
          <Send aria-hidden="true" className="size-5 -rotate-12 fill-yolk text-ink" />
          {site.name}
        </Link>
        <a href={`tel:${site.phoneHref}`} className="btn btn-outline order-3 hidden md:inline-flex">
          <Phone aria-hidden="true" className="size-4" /> {site.phone}
        </a>
        <nav aria-label="Main" className="-mx-3 order-4 flex w-full md:order-2 md:mx-0 md:ml-auto md:w-auto">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center rounded-md px-3 font-medium hover:bg-sky-100">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

const footerGroups = [
  { title: "India", kind: "india" },
  { title: "Abroad", kind: "abroad" },
  { title: "By trip type", kind: "theme" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-sky-50 pb-24 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-extrabold">{site.name}</p>
          <p className="mt-3 text-ink-soft">{site.address}</p>
          <p className="mt-3"><a className="text-link" href={`tel:${site.phoneHref}`}>{site.phone}</a></p>
          <p className="mt-1"><a className="text-link break-all" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p className="mt-3 text-ink-soft">{site.hours}</p>
        </div>
        <nav aria-label="Destinations" className="md:col-span-2">
          <p className="font-display text-lg font-bold">{footerGroups[0].title}</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-4">
            {destinations.filter((d) => d.kind === "india").map((d) => (
              <li key={d.slug}><Link href={`/${d.slug}`} className="inline-flex min-h-11 items-center hover:underline">{d.name}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="grid content-start gap-6">
          {footerGroups.slice(1).map((group) => (
            <nav key={group.kind} aria-label={group.title}>
              <p className="font-display text-lg font-bold">{group.title}</p>
              <ul className="mt-2">
                {destinations.filter((d) => d.kind === group.kind).map((d) => (
                  <li key={d.slug}><Link href={`/${d.slug}`} className="inline-flex min-h-11 items-center hover:underline">{d.name}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 py-3 text-sm text-ink-soft sm:px-6">
          <p>{site.name}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:underline">Privacy policy</Link>
            <Link href="/photo-credits" className="inline-flex min-h-11 items-center hover:underline">Photo credits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Always-visible call and enquiry buttons on phones. The footer reserves room for it. */
export function MobileActions() {
  return (
    <aside aria-label="Contact us" className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-2 gap-2 border-t border-line bg-paper p-2 mobile-actions md:hidden">
      <a href={`tel:${site.phoneHref}`} className="btn btn-outline"><Phone aria-hidden="true" className="size-4" /> Call us</a>
      <EnquiryButton>Send enquiry</EnquiryButton>
    </aside>
  );
}

export function CtaBand({ title, text, destination }: { title: string; text: string; destination?: string }) {
  return (
    <section className="bg-yolk">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-section">{title}</h2>
          <p className="mt-3 text-lg">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${site.phoneHref}`} className="btn bg-ink text-paper hover:bg-sea-deep"><Phone aria-hidden="true" className="size-4" /> Call {site.phone}</a>
          <EnquiryButton topic={{ destination }} className="btn btn-outline hover:bg-yolk-deep">Send enquiry</EnquiryButton>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
