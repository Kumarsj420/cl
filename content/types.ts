import type { PhotoKey } from "./photos";

export type Inclusion = "hotel" | "meals" | "cab" | "volvo" | "sightseeing" | "activity" | "camping" | "guide";
export type MonthRating = "best" | "okay" | "avoid";

export type TripPackage = {
  title: string;
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
  /** "place" pages are destinations, "theme" pages are trip types like honeymoon. */
  kind: "place" | "theme";
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  heroPhoto: PhotoKey;
  cardPhoto: PhotoKey;
  facts: { label: string; value: string }[];
  /** January to December. */
  months?: { ratings: MonthRating[]; note: string };
  placesTitle: string;
  places: { name: string; text: string; href?: string }[];
  packages: TripPackage[];
  faqs: { q: string; a: string }[];
  related: string[];
};
