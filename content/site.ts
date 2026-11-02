/**
 * Everything about the company lives here. Replace the placeholders before launch.
 * Optional facts stay hidden until they are filled in, so nothing made up can appear on the site.
 */
export const site = {
  name: "Your Travel Co",
  tagline: "Holidays planned by people you can call",
  phone: "+91 00000 00000",
  phoneHref: "+910000000000",
  email: "hello@example.com",
  address: "Office address, City, State, PIN",
  hours: "Monday to Saturday, 10am to 7pm",
  // Shown on the about page only when set.
  foundedYear: "",
  licence: "", // e.g. tourism board or IATA registration number
  socials: [] as { label: string; href: string }[],
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
export const absoluteUrl = (path: string) => `${siteUrl || "http://localhost:3002"}${path}`;
