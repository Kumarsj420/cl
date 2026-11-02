import Image from "next/image";
import type { ReactNode } from "react";
import { EnquiryForm } from "./Enquiry";
import type { Photo } from "@/content/photos";
import { site } from "@/content/site";

/** Full-width photo with the page's headline on the left and a short enquiry form on the right. */
export function PhotoHero({
  photo,
  formTitle,
  destination,
  children,
}: {
  photo: Photo;
  formTitle: string;
  destination?: string;
  children: ReactNode;
}) {
  return (
    <section className="photo-hero on-photo">
      <Image src={photo.src} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-12 pb-10 sm:px-6 lg:grid-cols-[1fr_24rem] lg:py-16">
        <div>{children}</div>
        <div className="card p-5 text-ink sm:p-6">
          <h2 className="text-xl font-semibold">{formTitle}</h2>
          <p className="mt-1 text-sm text-ink-soft">Share a few details and we will call you back with a plan and a price.</p>
          <EnquiryForm short topic={{ destination }} contact={{ phone: site.phone, phoneHref: site.phoneHref }} className="mt-4" />
        </div>
      </div>
    </section>
  );
}
