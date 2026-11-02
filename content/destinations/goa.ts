import type { Destination } from "../types";

export const goa: Destination = {
  slug: "goa-tour-packages",
  name: "Goa",
  kind: "india",
  moods: ["beach", "culture", "honeymoon", "family"],
  blurb: "Two coasts, old churches, long lunches",
  metaTitle: "Goa tour packages: north and south Goa beaches and stays",
  metaDescription: "Goa holiday packages for beach stays in north and south Goa, Old Goa's churches, Fontainhas and Dudhsagar. Call or send an enquiry for a price.",
  heading: "Goa tour packages",
  intro: "North Goa has the beach clubs and flea markets. South Goa has long, quiet sand. In between are Portuguese lanes and fish curry lunches. Tell us which Goa you are after and we will book the right side.",
  heroPhoto: "goa-palolem",
  stampPhoto: "goa-palolem",
  facts: [
    { label: "Fly into", value: "Dabolim (GOI) or Mopa (GOX)" },
    { label: "Good trip length", value: "3 to 6 nights" },
    { label: "Best for", value: "Friends, couples, families" },
    { label: "Peak dates", value: "Christmas to New Year" },
  ],
  months: {
    ratings: ["best", "best", "okay", "okay", "okay", "avoid", "avoid", "avoid", "avoid", "okay", "best", "best"],
    note: "November to February is sunny and lively, though late December books out and costs most. June to September brings heavy rain and rough seas, and many shacks close, though the inland waterfalls are at their best.",
  },
  placesTitle: "Which part of Goa should you pick?",
  places: [
    { name: "North Goa", text: "Baga, Anjuna and Vagator for nightlife, cafes, sunset points and Fort Aguada." },
    { name: "South Goa", text: "Palolem, Agonda and Colva, for calmer water and resorts with space around them." },
    { name: "Old Goa and Panjim", text: "The UNESCO-listed Basilica of Bom Jesus, plus Fontainhas, the colourful Latin quarter." },
    { name: "Dudhsagar and the spice farms", text: "A four-tier waterfall on the Karnataka border and shaded farm lunches on the way back. Access to the falls usually closes in the monsoon." },
  ],
  packages: [
    { title: "North Goa beach break", tier: "Budget", photo: "goa-beach", stops: [["North Goa", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Stay near Calangute or Candolim", "Fort Aguada and Chapora", "Mandovi sunset cruise"] },
    { title: "North and south Goa combo", tier: "Comfort", photo: "goa-fontainhas", stops: [["North Goa", 3], ["South Goa", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Fontainhas walking tour", "Old Goa churches", "Palolem day at the beach"] },
    { title: "South Goa honeymoon resort", tier: "Premium", photo: "goa-palolem", stops: [["South Goa", 4]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Beachfront or pool-view room", "Private candlelit dinner", "Couple's spa session"] },
    { title: "Goa with kids", tier: "Comfort", photo: "goa-dudhsagar", stops: [["South Goa", 4]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Family resort with pool", "Dudhsagar jeep trip, in season", "Spice farm lunch"] },
    { title: "Goa heritage and food", tier: "Comfort", photo: "goa-basilica", stops: [["Panjim", 2], ["South Goa", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Basilica of Bom Jesus", "Food walk through Panjim", "Chandor's Portuguese mansions"] },
  ],
  faqs: [
    { q: "North Goa or south Goa?", a: "North for nightlife, markets and things to do. South for space, quiet and better swimming beaches. Five nights lets you try both." },
    { q: "Should I hire a scooter?", a: "They are popular, but we include a cab for transfers and sightseeing days. If you hire a scooter, make sure the renter is licensed, wear a helmet and carry your licence." },
    { q: "Is Goa worth visiting in the monsoon?", a: "Yes, if you want green scenery, lower prices and no crowds. Swimming is not safe in rough seas, and many beach shacks are closed between June and September." },
    { q: "How early should I book for New Year?", a: "Two to three months before is sensible. Rates rise sharply from about 20 December and many hotels ask for a minimum stay." },
  ],
  related: ["kerala-tour-packages", "andaman-tour-packages", "thailand-tour-packages", "honeymoon-packages"],
};
