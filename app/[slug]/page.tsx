import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { CtaBand, JsonLd } from "@/components/Chrome";
import { MonthStrip } from "@/components/MonthStrip";
import { durationLabel, PackageCard } from "@/components/PackageCard";
import { Stamp } from "@/components/Stamp";
import { destinations, getDestination } from "@/content";
import { photos } from "@/content/photos";
import { absoluteUrl, site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destination = getDestination((await params).slug);
  if (!destination) return {};
  const { metaTitle, metaDescription, slug, heroPhoto } = destination;
  const image = photos[heroPhoto].src;
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: metaTitle, description: metaDescription, url: `/${slug}`, images: [image] },
    twitter: { card: "summary_large_image", title: metaTitle, description: metaDescription, images: [image] },
  };
}

const steps = [
  { title: "Tell us what you want", text: "Dates, who is coming, the budget and anything you must see. A package is only a starting point." },
  { title: "Get a plan with a price", text: "We call you, adjust the route and send a written plan listing hotels, transfers and what is not covered." },
  { title: "Go, with one number to call", text: "Change it until it suits you, confirm it, and call the same team if anything comes up on the road." },
];

export default async function DestinationPage({ params }: Props) {
  const d = getDestination((await params).slug);
  if (!d) notFound();
  const hero = photos[d.heroPhoto];
  const related = d.related.map(getDestination).filter((r) => r !== undefined);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: d.heading, item: absoluteUrl(`/${d.slug}`) },
              ],
            },
            {
              "@type": "ItemList",
              name: d.heading,
              itemListElement: d.packages.map((pkg, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "TouristTrip",
                  name: pkg.title,
                  description: `${durationLabel(pkg)}. ${pkg.highlights.join(". ")}.`,
                  itinerary: { "@type": "ItemList", itemListElement: pkg.stops.map(([place]) => ({ "@type": "Place", name: place })) },
                },
              })),
            },
            {
              "@type": "FAQPage",
              mainEntity: d.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
            },
          ],
        }}
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-6 pb-12 sm:px-6 md:grid-cols-5 md:pt-12 md:pb-16">
        <div className="md:col-span-3">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
            <Link href="/#destinations" className="inline-flex min-h-11 items-center hover:underline">All destinations</Link>
          </nav>
          <h1 className="text-landing">{d.heading}</h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">{d.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#packages" className="btn btn-primary">See {d.packages.length} packages</a>
            <a href={`tel:${site.phoneHref}`} className="btn btn-outline"><Phone aria-hidden="true" className="size-4" /> Call {site.phone}</a>
          </div>
        </div>
        <div className="mx-auto w-3/4 max-w-sm md:col-span-2 md:w-full">
          <Stamp src={hero.src} alt={hero.alt} index={1} priority sizes="(min-width: 768px) 38vw, 75vw" />
        </div>
      </section>

      <section aria-label="Quick facts" className="border-y border-line">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 px-4 py-6 sm:px-6 md:grid-cols-4">
          {d.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-sm text-ink-soft">{fact.label}</dt>
              <dd className="mt-0.5 font-display text-lg font-bold leading-snug">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="packages" className="scroll-mt-4 bg-sky-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-section">{d.name} packages</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">Each one can change: swap hotels, add a night or drop a stop. Ask and we will price your version.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {d.packages.map((pkg) => (
              <PackageCard key={pkg.title} pkg={pkg} destination={d.name} sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 92vw" />
            ))}
          </div>
        </div>
      </section>

      {d.months ? (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-section">When to go</h2>
          <p className="mt-3 mb-6 max-w-2xl text-lg text-ink-soft">{d.months.note}</p>
          <MonthStrip ratings={d.months.ratings} />
        </section>
      ) : null}

      <section className={d.months ? "border-t border-line" : ""}>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-section">{d.placesTitle}</h2>
          <dl className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2">
            {d.places.map((place) => (
              <div key={place.name}>
                <dt className="font-display text-xl font-bold">
                  {place.href ? <Link className="inline-flex min-h-11 items-center underline decoration-yolk-deep decoration-2 underline-offset-4 hover:text-sea" href={place.href}>{place.name}</Link> : place.name}
                </dt>
                <dd className="mt-1 text-ink-soft">{place.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-sky-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-section">How booking works</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true" className="inline-flex size-10 -rotate-3 items-center justify-center rounded-sm bg-yolk font-display text-lg font-bold">{index + 1}</span>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-1 text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="text-section">Questions people ask</h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {d.faqs.map(({ q, a }) => (
            <details key={q} className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {q}
                <span aria-hidden="true" className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 text-ink-soft">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-section">You might also like</h2>
            <ul className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              {related.map((r, index) => {
                const photo = photos[r.stampPhoto];
                return (
                  <li key={r.slug}>
                    <Link href={`/${r.slug}`} className="group block rounded-md">
                      <Stamp src={photo.src} alt="" index={index} sizes="(min-width: 768px) 25vw, 46vw" />
                      <span className="mt-3 block font-display text-lg font-bold group-hover:underline">{r.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaBand title={`Have dates in mind for ${d.name}?`} text="Tell us when and who is coming. We will call you back with a plan and a price." destination={d.name} />
    </>
  );
}
