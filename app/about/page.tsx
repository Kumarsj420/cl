import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HelpStrip } from "@/components/Chrome";
import { photos } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About us",
  description: `${site.name} plans holidays across Himachal Pradesh. See how we work and what to expect when you travel with us.`,
  alternates: { canonical: "/about" },
};

const values = [
  { title: "We ask before we suggest", text: "Who is travelling? What did you love on your last trip? What is the budget, honestly? A good plan begins with those answers, not a brochure." },
  { title: "We tell you what we would change", text: "If a route has too much driving or the season is wrong, we will say so, even when it means a shorter trip." },
  { title: "We put it all in writing", text: "Hotels, vehicle, meals, taxes, cancellation terms and anything not covered go in your quote before you pay." },
  { title: "We stay with you after you pay", text: "You get one team to call before and during the trip." },
];

export default function AboutPage() {
  const facts = [
    site.foundedYear ? { label: "Planning trips since", value: site.foundedYear } : null,
    site.licence ? { label: "Registration", value: site.licence } : null,
  ].filter((fact) => fact !== null);
  const photo = photos["himachal-kullu"];

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-14 sm:px-6 md:grid-cols-2 md:pt-16 md:pb-20">
        <div>
          <p className="kicker">About us</p>
          <h1 className="text-hero mt-2">We plan Himachal holidays, one family at a time</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            {site.name} is a tour and travel company for Himachal Pradesh. We build trips to Shimla, Manali, Dharamshala, Spiti and the quieter valleys for couples, families and groups of friends. You tell us what matters, and we do the comparing, booking and chasing.
          </p>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-md shadow-card">
          <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width: 768px) 50vw, 92vw" className="object-cover" />
        </div>
      </section>

      {facts.length > 0 ? (
        <section aria-label="Company facts" className="border-y border-line">
          <dl className="mx-auto flex max-w-6xl flex-wrap gap-x-12 gap-y-4 px-4 py-6 sm:px-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-ink-soft">{fact.label}</dt>
                <dd className="font-display text-lg font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-section">How we work</h2>
          <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="border-l-4 border-accent pl-4">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-1 text-ink-soft">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="text-section">Where we go</h2>
        <p className="mt-4 text-lg text-ink-soft">
          Shimla, Kufri and Narkanda. Manali, Sissu and Kasol. Dharamshala, Bir and Dalhousie. The quiet valleys of Jibhi, Tirthan and Shangarh, and the long road through Kinnaur to Spiti.{" "}
          <Link className="text-link" href="/#destinations">See all destinations</Link>.
        </p>
      </section>

      <HelpStrip title="Tell us about your trip" />
    </>
  );
}
