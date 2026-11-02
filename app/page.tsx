import { Phone } from "lucide-react";
import { CtaBand } from "@/components/Chrome";
import { DestinationExplorer } from "@/components/DestinationExplorer";
import { EnquiryButton } from "@/components/Enquiry";
import { PackageCard } from "@/components/PackageCard";
import { Stamp } from "@/components/Stamp";
import { destinations, getDestination } from "@/content";
import { photos, type PhotoKey } from "@/content/photos";
import { site } from "@/content/site";

const heroStamps: { photo: PhotoKey; className: string; sizes: string }[] = [
  { photo: "kashmir-dal", className: "col-span-3 row-start-1 z-10", sizes: "(min-width: 768px) 22vw, 44vw" },
  { photo: "andaman-radhanagar", className: "col-span-3 col-start-4 row-start-1 mt-10 md:mt-16", sizes: "(min-width: 768px) 22vw, 44vw" },
];

const picks = [
  { slug: "kashmir-tour-packages", index: 1 },
  { slug: "kerala-tour-packages", index: 1 },
  { slug: "bali-tour-packages", index: 1 },
];

const promises = [
  { title: "A real price, in writing", text: "Your quote names the hotels, the car and the meals, and lists taxes and what is not covered." },
  { title: "A route that fits your people", text: "Every trip can change. We plan around ages, budgets, food and how much driving you can take." },
  { title: "Someone to call on the road", text: "When a flight is late or a road closes, you ring the team who planned your trip." },
];

export default function HomePage() {
  const explorerItems = destinations.map((d) => ({
    slug: d.slug,
    name: d.name,
    blurb: d.blurb,
    moods: d.moods,
    src: photos[d.stampPhoto].src,
    alt: photos[d.stampPhoto].alt,
    trips: d.packages.length,
  }));

  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-14 sm:px-6 md:grid-cols-2 md:pt-16 md:pb-20">
          <div>
            <h1 className="text-hero">Where to next?</h1>
            <p className="mt-6 max-w-md text-lg text-ink-soft md:text-xl">
              Mountains, beaches or somewhere with a good excuse to stamp your passport. Choose a place and we will plan the trip around you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#destinations" className="btn btn-primary">Pick a destination</a>
              <a href={`tel:${site.phoneHref}`} className="btn btn-outline"><Phone aria-hidden="true" className="size-4" /> Call {site.phone}</a>
            </div>
          </div>
          <div className="relative">
            <svg aria-hidden="true" viewBox="0 0 400 200" className="absolute -top-6 left-0 z-20 hidden w-full md:block" fill="none">
              <path className="flight-path" d="M10 170 C 120 40, 260 40, 390 110" stroke="var(--color-sea)" strokeWidth="2.5" strokeLinecap="round" />
              <path className="plane" d="M-11 -9 L12 0 L-11 9 L-6 0 Z" fill="var(--color-ink)" />
            </svg>
            <div className="grid grid-cols-6 gap-3">
              {heroStamps.map(({ photo, className, sizes }, index) => (
                <Stamp key={photo} src={photos[photo].src} alt={photos[photo].alt} index={index} priority sizes={sizes} className={`straighten ${className}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="scroll-mt-4 bg-sky-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-section">What are you in the mood for?</h2>
          <div className="mt-6"><DestinationExplorer items={explorerItems} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-section">A few trips to start from</h2>
            <p className="mt-3 text-ink-soft">Each one can change. Ask for the version that suits you.</p>
          </div>
          <EnquiryButton className="btn btn-outline">Plan something different</EnquiryButton>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ticket-on-paper">
          {picks.map(({ slug, index }) => {
            const destination = getDestination(slug);
            if (!destination) return null;
            return <PackageCard key={slug} pkg={destination.packages[index]} destination={destination.name} sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 92vw" />;
          })}
        </div>
      </section>

      <section className="border-t border-line bg-sky-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3 md:py-20">
          <h2 className="text-section md:col-span-3">What you can expect from us</h2>
          {promises.map((promise) => (
            <div key={promise.title}>
              <h3 className="text-xl font-bold">{promise.title}</h3>
              <p className="mt-2 text-ink-soft">{promise.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Not sure where to go yet?" text="That is a good place to start. Tell us your month and your budget, and we will suggest two or three options." />
    </>
  );
}
