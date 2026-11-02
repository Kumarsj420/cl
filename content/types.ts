import type { PhotoKey } from "./photos";

export type Inclusion = "flights" | "hotel" | "meals" | "cab" | "sightseeing" | "activity" | "ferry" | "houseboat" | "visa";
export type Mood = "snow" | "mountains" | "beach" | "culture" | "wildlife" | "honeymoon" | "family" | "abroad";
export type MonthRating = "best" | "okay" | "avoid";

export type TripPackage = {
  title: string;
  tier: "Budget" | "Comfort" | "Premium";
  photo: PhotoKey;
  /** Stops in travel order, with nights in each. The duration is worked out from this. */
  stops: [place: string, nights: number][];
  includes: Inclusion[];
  highlights: string[];
  /** Starting price in rupees per person. Leave out to show "Price on request". */
  price?: number;
};

export type Destination = {
  slug: string;
  name: string;
  kind: "india" | "abroad" | "theme";
  moods: Mood[];
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  heroPhoto: PhotoKey;
  stampPhoto: PhotoKey;
  facts: { label: string; value: string }[];
  /** January to December. Theme pages cover many places, so they leave this out. */
  months?: { ratings: MonthRating[]; note: string };
  placesTitle: string;
  places: { name: string; text: string; href?: string }[];
  packages: TripPackage[];
  faqs: { q: string; a: string }[];
  related: string[];
};
