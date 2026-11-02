import { Bed, Bus, Car, Heart, Map, Users, type LucideIcon } from "lucide-react";
import { HelpStrip } from "@/components/Chrome";
import { DestinationCard } from "@/components/DestinationCard";
import { EnquiryButton } from "@/components/Enquiry";
import { PackageCard } from "@/components/PackageCard";
import { PhotoHero } from "@/components/PhotoHero";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { destinations, getDestination } from "@/content";
import { photos } from "@/content/photos";
import { site, whatsappLink } from "@/content/site";

const picks = [
  { slug: "shimla-manali-tour-packages", index: 0 },
  { slug: "manali-tour-packages", index: 1 },
  { slug: "dharamshala-mcleodganj-tour-packages", index: 0 },
  { slug: "jibhi-tirthan-tour-packages", index: 1 },
  { slug: "spiti-valley-tour-packages", index: 0 },
  { slug: "himachal-honeymoon-packages", index: 0 },
];

const services: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Map, title: "Custom Himachal packages", text: "A route built around your dates, budget and the places you most want to see." },
  { icon: Bed, title: "Hotels and homestays", text: "From town hotels in Shimla and Manali to wooden homestays in Jibhi and Shangarh." },
  { icon: Car, title: "Cabs and Tempo Travellers", text: "Private vehicles with drivers who know the mountain roads, sized for your group." },
  { icon: Bus, title: "Volvo bus tickets", text: "Overnight Volvo seats from Delhi and Chandigarh to Manali, Dharamshala and Kullu." },
  { icon: Heart, title: "Honeymoon setups", text: "Room decoration, a cake or a candlelit dinner, arranged with your hotel." },
  { icon: Users, title: "Group and corporate trips", text: "Friends, colleagues or school groups, with one plan and one point of contact." },
];

const promises = [
  { title: "A real price, in writing", text: "Your quote names the hotels, the vehicle and the meals, and lists taxes and anything not covered." },
  { title: "A route that suits your people", text: "We plan around ages, food and how much driving you can take, and change it until it fits." },
  { title: "Someone to call on the road", text: "If a road closes or plans change, you call the same team that planned your trip." },
];

export default function HomePage() {
  const places = destinations.filter((d) => d.kind === "place");
  return (
    <>
      <PhotoHero photo={photos["manali-solang"]} formTitle="Plan your Himachal trip">
        <p className="kicker">Explore the hills</p>
        <h1 className="text-hero mt-2">Himachal holidays, planned around you</h1>
        <p className="mt-5 max-w-xl text-lg">
          Shimla, Manali, Dharamshala, Spiti and the quiet valleys in between. Tell us when you want to go, and we will plan the stays, the cab and the route.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#packages" className="btn btn-primary">See packages</a>
          {site.whatsapp ? <a href={whatsappLink()} className="btn btn-whatsapp"><WhatsAppIcon /> WhatsApp us</a> : null}
        </div>
      </PhotoHero>

      <section id="destinations" className="scroll-mt-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="kicker">Popular destinations</p>
          <h2 className="text-section mt-1">Where in Himachal?</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {places.map((d) => (
              <li key={d.slug}><DestinationCard destination={d} sizes="(min-width: 1024px) 270px, (min-width: 768px) 30vw, 46vw" /></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="packages" className="scroll-mt-4 bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Our top packages</p>
              <h2 className="text-section mt-1">Trips people book most</h2>
              <p className="mt-2 max-w-2xl text-ink-soft">Every package can change. Ask for the version that suits you.</p>
            </div>
            <EnquiryButton className="btn btn-outline">Plan something different</EnquiryButton>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {picks.map(({ slug, index }) => {
              const d = getDestination(slug);
              if (!d) return null;
              return <PackageCard key={slug} pkg={d.packages[index]} destination={d.name} sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 92vw" />;
            })}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="kicker">What we offer</p>
          <h2 className="text-section mt-1">Everything for your trip, in one place</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <li key={title} className="card bg-cream p-6">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent"><Icon aria-hidden="true" className="size-6" /></span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-ink-soft">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          <h2 className="text-section md:col-span-3">Why travel with {site.name}</h2>
          {promises.map((promise) => (
            <div key={promise.title} className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold">{promise.title}</h3>
              <p className="mt-1 text-ink-soft">{promise.text}</p>
            </div>
          ))}
        </div>
      </section>

      <HelpStrip />
    </>
  );
}
