import Image from "next/image";
import { Bed, Binoculars, Bus, Car, Sparkles, Tent, UserRound, Utensils, Phone, type LucideIcon } from "lucide-react";
import { EnquiryButton } from "./Enquiry";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { photos } from "@/content/photos";
import { site, whatsappLink } from "@/content/site";
import type { Inclusion, TripPackage } from "@/content/types";

const inclusionInfo: Record<Inclusion, { label: string; icon: LucideIcon }> = {
  hotel: { label: "Hotels", icon: Bed },
  meals: { label: "Meals", icon: Utensils },
  cab: { label: "Private cab", icon: Car },
  volvo: { label: "Volvo bus", icon: Bus },
  sightseeing: { label: "Sightseeing", icon: Binoculars },
  activity: { label: "Activities", icon: Sparkles },
  camping: { label: "Camping", icon: Tent },
  guide: { label: "Local guide", icon: UserRound },
};

export function nightsOf(pkg: TripPackage) {
  return pkg.stops.reduce((sum, [, n]) => sum + n, 0);
}

export function durationLabel(pkg: TripPackage) {
  const nights = nightsOf(pkg);
  return `${nights}N / ${nights + 1}D`;
}

const rupees = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export function PackageCard({ pkg, destination, sizes }: { pkg: TripPackage; destination: string; sizes: string }) {
  const photo = photos[pkg.photo];
  const nights = nightsOf(pkg);
  return (
    <article className="card card-lift relative flex flex-col overflow-hidden">
      <div className="relative aspect-3/2 bg-sky-100">
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
      </div>
      <p className="absolute top-3 left-3 rounded-sm bg-accent px-2.5 py-1 font-display text-on-accent text-sm font-semibold">
        <span aria-hidden="true">{durationLabel(pkg)}</span>
        <span className="sr-only">{nights} nights, {nights + 1} days</span>
      </p>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug">{pkg.title}</h3>
        <p className="mt-1 text-sm text-ink-soft">
          <span className="sr-only">Route: </span>
          {pkg.stops.map(([place, n]) => `${place} (${n}N)`).join(" · ")}
        </p>

        <ul className="mt-3 list-disc space-y-0.5 pl-5 text-sm text-ink-soft">
          {pkg.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>

        <p className="mt-4 text-sm font-semibold">Including</p>
        <ul aria-label="Included" className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
          {pkg.includes.map((item) => {
            const { label, icon: Icon } = inclusionInfo[item];
            return (
              <li key={item} className="flex items-center gap-1.5">
                <Icon aria-hidden="true" className="size-4 text-sea" /> {label}
              </li>
            );
          })}
        </ul>

        <div className="mt-auto pt-5">
          <p className="border-t border-line pt-4 font-display font-semibold tabular-nums">
            {pkg.price ? <>From {rupees.format(pkg.price)} <span className="font-sans text-sm font-normal text-ink-soft">per person</span></> : "Price on request"}
          </p>
          <div className="mt-3 grid grid-cols-[1fr_auto_auto] gap-2">
            <EnquiryButton className="btn btn-primary px-3" topic={{ destination, packageTitle: pkg.title }} label={`Enquire now about ${pkg.title}`}>
              Enquire now
            </EnquiryButton>
            {site.whatsapp ? (
              <a href={whatsappLink(`Hi, I'm interested in the ${pkg.title} package.`)} className="btn btn-whatsapp px-3" aria-label={`WhatsApp us about ${pkg.title}`}>
                <WhatsAppIcon />
              </a>
            ) : null}
            <a href={`tel:${site.phoneHref}`} className="btn btn-outline px-3" aria-label={`Call us about ${pkg.title}`}>
              <Phone aria-hidden="true" className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
