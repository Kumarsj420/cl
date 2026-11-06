import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { EnquiryButton } from "./Enquiry";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { site, whatsappLink } from "@/content/site";
import { destinations } from "@/content";

const nav = [
  { href: "/#destinations", label: "Destinations" },
  { href: "/himachal-honeymoon-packages", label: "Honeymoon" },
  { href: "/himachal-family-tour-packages", label: "Family trips" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function TopBar() {
  return (
    <div className="bg-accent text-sm text-on-accent">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-x-5 px-4 sm:px-6">
        <div className="flex items-center gap-x-5">
          <a href={`tel:${site.phoneHref}`} className="inline-flex min-h-11 items-center gap-1.5 font-semibold hover:underline">
            <Phone aria-hidden="true" className="size-4" /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="hidden min-h-11 items-center gap-1.5 hover:underline sm:inline-flex">
            <Mail aria-hidden="true" className="size-4" /> {site.email}
          </a>
        </div>
        {site.whatsapp ? (
          <a href={whatsappLink()} className="inline-flex min-h-11 items-center gap-1.5 font-semibold hover:underline">
            <WhatsAppIcon className="size-4" /> WhatsApp us
          </a>
        ) : null}
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <TopBar />
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 py-1 sm:px-6 lg:flex-nowrap lg:py-2">
        <Link href="/" className="flex min-h-11 items-center py-1">
          <Image src="/logo.png" alt={site.name} width={684} height={174} priority className="h-10 w-auto lg:h-12" />
        </Link>
        <EnquiryButton className="btn btn-primary order-2 hidden lg:order-3 lg:inline-flex">Enquire now</EnquiryButton>
        <nav aria-label="Main" className="order-3 -mx-4 w-[calc(100%+2rem)] overflow-x-auto px-1 lg:order-2 lg:mx-0 lg:ml-auto lg:w-auto lg:px-0">
          <ul className="flex whitespace-nowrap">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center rounded-md px-3 font-medium hover:bg-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

/** The yellow "we're here to help" strip that closes every page. */
export function HelpStrip({ title = "Planning a Himachal trip?", destination }: { title?: string; destination?: string }) {
  return (
    <section className="bg-accent text-on-accent">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-center">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-1">Tell us your dates and who is coming. We will call back with a plan and a price.</p>
        </div>
        <a href={`tel:${site.phoneHref}`} className="flex min-h-11 items-center gap-3 font-semibold hover:underline">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-paper text-accent"><Phone aria-hidden="true" className="size-5" /></span>
          <span><span className="block text-sm font-normal">Call us</span>{site.phone}</span>
        </a>
        {site.whatsapp ? (
          <a href={whatsappLink(destination ? `Hi, I'd like to plan a ${destination} trip.` : undefined)} className="flex min-h-11 items-center gap-3 font-semibold hover:underline">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-whatsapp text-paper"><WhatsAppIcon /></span>
            <span><span className="block text-sm font-normal">WhatsApp</span>Chat with us</span>
          </a>
        ) : null}
        <EnquiryButton topic={{ destination }} className="btn bg-paper text-accent-ink hover:bg-cream">Get a free quote</EnquiryButton>
      </div>
    </section>
  );
}

export function Footer() {
  const places = destinations.filter((d) => d.kind === "place");
  const themes = destinations.filter((d) => d.kind === "theme");
  return (
    <footer className="border-t-4 border-gold bg-night pb-24 text-paper lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold">{site.name}</p>
          <p className="mt-2 text-sm opacity-90">{site.tagline}</p>
          {site.address ? <p className="mt-3 text-sm opacity-90">{site.address}</p> : null}
          <p className="mt-3"><a className="font-semibold underline underline-offset-4" href={`tel:${site.phoneHref}`}>{site.phone}</a></p>
          <p className="mt-1"><a className="break-all underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a></p>
          {site.whatsapp ? <p className="mt-1"><a className="underline underline-offset-4" href={whatsappLink()}>Chat on WhatsApp</a></p> : null}
          {site.hours ? <p className="mt-3 text-sm opacity-90">{site.hours}</p> : null}
        </div>
        <nav aria-label="Destinations" className="md:col-span-2">
          <p className="font-display font-semibold text-accent-light">Destinations</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-4">
            {places.map((d) => (
              <li key={d.slug}><Link href={`/${d.slug}`} className="inline-flex min-h-11 items-center hover:underline">{d.name}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Trip types">
          <p className="font-display font-semibold text-accent-light">Trip types</p>
          <ul className="mt-2">
            {themes.map((d) => (
              <li key={d.slug}><Link href={`/${d.slug}`} className="inline-flex min-h-11 items-center hover:underline">{d.slug === "himachal-tour-packages" ? "All Himachal packages" : d.name}</Link></li>
            ))}
            <li><Link href="/about" className="inline-flex min-h-11 items-center hover:underline">About us</Link></li>
            <li><Link href="/contact" className="inline-flex min-h-11 items-center hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-paper/20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 py-2 text-sm sm:px-6">
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

/** Call, WhatsApp and enquiry, always in reach: a bar on phones, a floating button on wider screens. */
export function QuickActions() {
  return (
    <aside aria-label="Contact us">
      <div className="mobile-actions fixed inset-x-0 bottom-0 z-20 grid grid-cols-[auto_auto_1fr] gap-2 border-t border-line bg-paper p-2 lg:hidden">
        <a href={`tel:${site.phoneHref}`} className="btn btn-outline px-3" aria-label={`Call ${site.phone}`}><Phone aria-hidden="true" className="size-5" /></a>
        {site.whatsapp ? <a href={whatsappLink()} className="btn btn-whatsapp px-3" aria-label="Chat on WhatsApp"><WhatsAppIcon /></a> : null}
        <EnquiryButton>Enquire now</EnquiryButton>
      </div>
      {site.whatsapp ? (
        <a href={whatsappLink()} aria-label="Chat on WhatsApp" className="fixed right-5 bottom-5 z-20 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-paper shadow-card transition-transform duration-200 ease-bounce hover:scale-105 lg:inline-flex">
          <WhatsAppIcon className="size-7" />
        </a>
      ) : null}
    </aside>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
