import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/Chrome";
import { Stamp } from "@/components/Stamp";
import { photos } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About us",
  description: `${site.name} plans holidays across India and abroad. See how we work and what to expect when you travel with us.`,
  alternates: { canonical: "/about" },
};

const values = [
  { title: "We ask before we suggest", text: "Who is travelling? What did you love on your last trip? What is the budget, honestly? A good plan begins with those answers, not a brochure." },
  { title: "We tell you what we would change", text: "If a route has too much driving or the season is wrong, we will say so, even when it means selling you a shorter trip." },
  { title: "We put it all in writing", text: "Hotels, car type, meals, taxes, cancellation terms and anything not covered go in your quote before you pay." },
  { title: "We stay on after you pay", text: "You get one team to call before and during the trip, not a chat ticket." },
];

export default function AboutPage() {
  const facts = [
    site.foundedYear ? { label: "Planning trips since", value: site.foundedYear } : null,
    site.licence ? { label: "Registration", value: site.licence } : null,
  ].filter((fact) => fact !== null);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-14 sm:px-6 md:grid-cols-5 md:pt-16 md:pb-20">
        <div className="md:col-span-3">
          <h1 className="text-landing">We plan holidays the way you would, with more phone calls</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            {site.name} is a tour and travel company. We build holidays in India and abroad for couples, families and groups of friends. You tell us what matters, and we do the comparing, booking and chasing.
          </p>
        </div>
        <div className="mx-auto w-3/4 max-w-xs md:col-span-2 md:w-full">
          <Stamp src={photos["sikkim-train"].src} alt={photos["sikkim-train"].alt} index={3} priority sizes="(min-width: 768px) 30vw, 70vw" />
        </div>
      </section>

      {facts.length > 0 ? (
        <section aria-label="Company facts" className="border-y border-line">
          <dl className="mx-auto flex max-w-6xl flex-wrap gap-x-12 gap-y-4 px-4 py-6 sm:px-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-ink-soft">{fact.label}</dt>
                <dd className="font-display text-lg font-bold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <section className="bg-sky-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-section">How we work</h2>
          <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-ink-soft">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="text-section">Where we go</h2>
        <p className="mt-4 text-lg text-ink-soft">
          Himalayan trips in Kashmir, Ladakh, Himachal, Uttarakhand and Sikkim. Beaches and backwaters in Goa, Kerala and the Andamans. Forts in Rajasthan, root bridges in Meghalaya, and short trips abroad to Bali, Thailand and Dubai.{" "}
          <Link className="text-link" href="/#destinations">See all destinations</Link>.
        </p>
      </section>

      <CtaBand title="Tell us about your trip" text="A short call is usually all we need to send you a first plan." />
    </>
  );
}
