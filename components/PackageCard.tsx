import Image from "next/image";
import {
  Bed, Binoculars, Car, FileCheck, Plane, Sailboat, Ship, Sparkles, Utensils, Phone, type LucideIcon,
} from "lucide-react";
import { EnquiryButton } from "./Enquiry";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import type { Inclusion, TripPackage } from "@/content/types";

const inclusionInfo: Record<Inclusion, { label: string; icon: LucideIcon }> = {
  flights: { label: "Flights", icon: Plane },
  hotel: { label: "Hotels", icon: Bed },
  meals: { label: "Meals", icon: Utensils },
  cab: { label: "Private cab", icon: Car },
  sightseeing: { label: "Sightseeing", icon: Binoculars },
  activity: { label: "Activities", icon: Sparkles },
  ferry: { label: "Ferries", icon: Ship },
  houseboat: { label: "Houseboat", icon: Sailboat },
  visa: { label: "Visa help", icon: FileCheck },
};

export function durationLabel(pkg: TripPackage) {
  const nights = pkg.stops.reduce((sum, [, n]) => sum + n, 0);
  return `${nights} ${nights === 1 ? "night" : "nights"}, ${nights + 1} days`;
}

const rupees = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

/** A package as a boarding pass: the trip above the tear, price and buttons on the stub. */
export function PackageCard({ pkg, destination, sizes }: { pkg: TripPackage; destination: string; sizes: string }) {
  const photo = photos[pkg.photo];
  return (
    <article className="ticket">
      <div className="relative aspect-3/2 overflow-hidden rounded-t-lg bg-sky-100">
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
      </div>
      <span className="absolute top-3 left-3 -rotate-2 rounded-sm bg-yolk px-2.5 py-1 font-display text-sm font-bold">
        {durationLabel(pkg)}
      </span>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold text-sea">{pkg.tier}</p>
        <h3 className="mt-1 text-xl font-bold leading-tight">{pkg.title}</h3>

        <ol aria-label="Route" className="mt-4 flex flex-wrap gap-y-1 text-sm">
          {pkg.stops.map(([place, nights], index) => (
            <li key={`${place}-${index}`} className="flex items-center">
              {index > 0 ? <span aria-hidden="true" className="mx-1.5 w-3 border-t-2 border-dotted border-field" /> : null}
              <span>
                <span className="font-semibold">{place}</span> <span className="text-ink-soft tabular-nums">{nights}N</span>
              </span>
            </li>
          ))}
        </ol>

        <ul className="mt-4 list-disc space-y-1 pl-5 text-ink-soft">
          {pkg.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>

        <ul aria-label="Included" className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 pb-5 text-sm">
          {pkg.includes.map((item) => {
            const { label, icon: Icon } = inclusionInfo[item];
            return (
              <li key={item} className="flex items-center gap-1.5">
                <Icon aria-hidden="true" className="size-4 text-sea" /> {label}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="ticket-tear p-5">
        <p className="font-display text-lg font-bold tabular-nums">
          {pkg.price ? <>From {rupees.format(pkg.price)} <span className="font-sans text-sm font-normal text-ink-soft">per person, before taxes</span></> : "Price on request"}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <a href={`tel:${site.phoneHref}`} className="btn btn-outline px-3" aria-label={`Call us about ${pkg.title}`}>
            <Phone aria-hidden="true" className="size-4" /> Call
          </a>
          <EnquiryButton className="btn btn-primary px-3" topic={{ destination, packageTitle: pkg.title }} label={`Enquire about ${pkg.title}`}>
            Enquire
          </EnquiryButton>
        </div>
      </div>
    </article>
  );
}
