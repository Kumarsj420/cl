/**
 * Everything about the company lives here. Replace the placeholders before launch.
 * Optional facts stay hidden until they are filled in, so nothing made up can appear on the site.
 */
export const site = {
  name: "Bhart Tour & Travels",
  tagline: "Himachal holidays planned by people you can call",
  phone: "+91 86298 75195",
  phoneHref: "+918629875195",
  // WhatsApp chat link, digits only with country code. Leave empty to hide it.
  whatsapp: "918629875195",
  email: "bansisir7@gmail.com",
  // Address and hours stay hidden until they are filled in.
  address: "",
  hours: "",
  // Shown on the about page only when set.
  foundedYear: "",
  licence: "", // e.g. tourism board or IATA registration number
  socials: [] as { label: string; href: string }[],
};

/** A wa.me link, with an optional message already typed in. */
export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
export const absoluteUrl = (path: string) => `${siteUrl || "http://localhost:3002"}${path}`;
