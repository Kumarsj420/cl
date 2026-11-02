import { bir } from "./destinations/bir";
import { dalhousie } from "./destinations/dalhousie";
import { dharamshala } from "./destinations/dharamshala";
import { family } from "./destinations/family";
import { himachal } from "./destinations/himachal";
import { honeymoon } from "./destinations/honeymoon";
import { jibhi } from "./destinations/jibhi";
import { kasol } from "./destinations/kasol";
import { kinnaur } from "./destinations/kinnaur";
import { manali } from "./destinations/manali";
import { shangarh } from "./destinations/shangarh";
import { shimla } from "./destinations/shimla";
import { shimlaManali } from "./destinations/shimla-manali";
import { spiti } from "./destinations/spiti";
import type { Destination } from "./types";

/** Every landing page on the site. Add a destination file, list it here and the page, sitemap and menus follow. */
export const destinations: Destination[] = [
  shimla, manali, shimlaManali, dharamshala, dalhousie, jibhi, spiti, shangarh, bir, kasol, kinnaur,
  himachal, honeymoon, family,
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
