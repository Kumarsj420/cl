import type { Metadata } from "next";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "Credits and licences for the photos used on this site.",
  alternates: { canonical: "/photo-credits" },
};

export default function PhotoCreditsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-8 pb-16 sm:px-6 md:pt-16">
      <h1 className="text-hero">Photo credits</h1>
      <p className="mt-4 text-ink-soft">These photos come from Wikimedia Commons under the licences shown. They are resized and cropped to fit this site.</p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {Object.values(photos).map((photo) => (
          <li key={photo.src} className="py-3">
            <a className="text-link" href={photo.source}>{photo.alt}</a>
            <span className="block text-sm text-ink-soft">{photo.author}, {photo.licence}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
