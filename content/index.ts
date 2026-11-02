import { andaman } from "./destinations/andaman";
import { bali } from "./destinations/bali";
import { dubai } from "./destinations/dubai";
import { family } from "./destinations/family";
import { goa } from "./destinations/goa";
import { himachal } from "./destinations/himachal";
import { honeymoon } from "./destinations/honeymoon";
import { kashmir } from "./destinations/kashmir";
import { kerala } from "./destinations/kerala";
import { ladakh } from "./destinations/ladakh";
import { meghalaya } from "./destinations/meghalaya";
import { rajasthan } from "./destinations/rajasthan";
import { sikkimDarjeeling } from "./destinations/sikkim-darjeeling";
import { thailand } from "./destinations/thailand";
import { uttarakhand } from "./destinations/uttarakhand";
import type { Destination } from "./types";

/** Every landing page on the site. Add a destination file, list it here and the page, sitemap and menus follow. */
export const destinations: Destination[] = [
  kashmir, himachal, kerala, goa, ladakh, rajasthan, andaman, uttarakhand, sikkimDarjeeling, meghalaya,
  bali, thailand, dubai,
  honeymoon, family,
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
