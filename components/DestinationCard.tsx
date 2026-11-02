import Image from "next/image";
import Link from "next/link";
import { photos } from "@/content/photos";
import type { Destination } from "@/content/types";

/** A tall photo tile with the place name on it, linking to its landing page. */
export function DestinationCard({ destination, sizes }: { destination: Destination; sizes: string }) {
  const photo = photos[destination.cardPhoto];
  const count = destination.packages.length;
  return (
    <Link href={`/${destination.slug}`} className="card-lift group relative block aspect-3/4 overflow-hidden rounded-md bg-ink shadow-card">
      <span className="tile-shade absolute inset-0">
        <Image src={photo.src} alt="" fill sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </span>
      <span className="absolute inset-x-0 bottom-0 p-4 text-paper">
        <span className="block font-display text-xl font-semibold leading-tight">{destination.name}</span>
        <span className="mt-1 block text-sm">{destination.blurb}</span>
        <span className="mt-2 inline-block rounded-sm bg-accent px-2 py-0.5 text-sm font-semibold text-ink">{count} {count === 1 ? "package" : "packages"}</span>
      </span>
    </Link>
  );
}
