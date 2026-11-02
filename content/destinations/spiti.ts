import type { Destination } from "../types";

export const spiti: Destination = {
  slug: "spiti-valley-tour-packages",
  name: "Spiti Valley",
  kind: "place",
  blurb: "High desert, monasteries and Chandratal",
  metaTitle: "Spiti Valley tour packages: Kaza, Key, Chandratal, full circuit",
  metaDescription: "Spiti Valley packages via Shimla and Kinnaur or Manali: Key Monastery, Kaza, Langza, Dhankar and Chandratal, with careful acclimatisation. Call or WhatsApp for a price.",
  heading: "Spiti Valley tour packages",
  intro: "A cold high desert with whitewashed monasteries on cliffs, fossil villages, very few people and a moon-shaped lake at Chandratal. The full circuit through Kinnaur is one of the great road trips in India.",
  heroPhoto: "spiti-key",
  cardPhoto: "spiti-key",
  facts: [
    { label: "Altitude at Kaza", value: "About 3,800 m" },
    { label: "Good trip length", value: "7 to 9 nights" },
    { label: "Best for", value: "Road trippers and photographers" },
    { label: "Manali side open", value: "Usually June to October" },
  ],
  months: {
    ratings: ["avoid", "avoid", "avoid", "avoid", "okay", "best", "best", "best", "best", "okay", "avoid", "avoid"],
    note: "June to September is the season, when both the Kinnaur and Manali roads are usually open and Chandratal camps run. May and October are colder and quieter. Winter trips are possible only from the Shimla side and are very cold.",
  },
  placesTitle: "The circuit",
  places: [
    { name: "Kaza", text: "Spiti's main town and your base, with a market, cafes and fuel." },
    { name: "Key Monastery and Kibber", text: "The best-known monastery in Spiti, and a high village nearby." },
    { name: "Langza, Hikkim and Komic", text: "High villages with fossils, a large Buddha statue and a post office often called the world's highest." },
    { name: "Dhankar and Tabo", text: "A monastery on a crumbling ridge, and Tabo's ancient mud-walled monastery with old murals." },
    { name: "Chandratal", text: "A blue lake on the Manali side, with seasonal camps a short walk away." },
  ],
  packages: [
    { title: "Spiti circuit via Kinnaur", photo: "spiti-dhankar", stops: [["Shimla", 1], ["Sangla", 1], ["Kalpa", 1], ["Tabo", 1], ["Kaza", 3], ["Manali", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Gradual climb for acclimatisation", "Key, Dhankar and Tabo", "Chandratal on the way out, road permitting"] },
    { title: "Spiti from Manali", photo: "spiti-chandratal", stops: [["Manali", 1], ["Chandratal", 1], ["Kaza", 3], ["Manali", 1]], includes: ["hotel", "camping", "meals", "cab"], highlights: ["Atal Tunnel and Kunzum Pass", "Night camp near Chandratal", "Langza and Hikkim"] },
    { title: "Kaza and the high villages", photo: "spiti-langza", stops: [["Kaza", 4]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Key and Kibber", "Langza, Hikkim and Komic", "Pin Valley day"] },
    { title: "Kinnaur and Spiti, unhurried", photo: "spiti-kaza", stops: [["Narkanda", 1], ["Sangla", 2], ["Kalpa", 1], ["Nako", 1], ["Kaza", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Chitkul village", "Nako Lake", "Extra rest day in Kaza"] },
  ],
  faqs: [
    { q: "Which route is better, Shimla or Manali?", a: "Going in through Shimla and Kinnaur and out via Manali is best. The altitude rises slowly that way, which lowers the risk of altitude sickness." },
    { q: "Do I need a permit for Spiti?", a: "Indian citizens do not need a permit for the usual route. Foreign nationals need an Inner Line Permit for the stretch near the border around Nako and Sumdo. We help arrange it." },
    { q: "Is Spiti safe for children and older people?", a: "Often yes, with a slow plan and a doctor's advice first. Days are long and the altitude is high. We do not suggest Chandratal overnight stays for infants or anyone with heart or breathing problems." },
    { q: "Do phones work in Spiti?", a: "BSNL and Jio work in Kaza and some villages. Expect no signal on long stretches and at Chandratal." },
  ],
  related: ["kinnaur-tour-packages", "manali-tour-packages", "shimla-tour-packages", "himachal-tour-packages"],
};
