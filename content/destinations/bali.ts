import type { Destination } from "../types";

export const bali: Destination = {
  slug: "bali-tour-packages",
  name: "Bali",
  kind: "abroad",
  moods: ["beach", "culture", "honeymoon", "abroad"],
  blurb: "Temples on cliffs, terraced green valleys",
  metaTitle: "Bali tour packages from India: Ubud, Seminyak, Nusa Penida",
  metaDescription: "Bali holiday packages from India with Ubud, Seminyak, Uluwatu and Nusa Penida. Private villas for honeymoons and family stays. Call or enquire for a price.",
  heading: "Bali tour packages",
  intro: "Mornings among Ubud's rice terraces, sunsets at a cliff temple, and a boat to Nusa Penida's sharp green coast. Choose a private pool villa or keep it simple, and we will work to your budget.",
  heroPhoto: "bali-ubud",
  stampPhoto: "bali-tanahlot",
  facts: [
    { label: "Fly into", value: "Denpasar (DPS)" },
    { label: "Good trip length", value: "5 to 8 nights" },
    { label: "Best for", value: "Honeymooners and friends" },
    { label: "Before you go", value: "Passport valid for 6 months" },
  ],
  months: {
    ratings: ["okay", "okay", "okay", "best", "best", "best", "best", "best", "best", "best", "okay", "okay"],
    note: "April to October is dry and sunny, with July and August the busiest. November to March is the rainy season, with short heavy showers, greener hills and often lower rates.",
  },
  placesTitle: "How Bali splits up",
  places: [
    { name: "Ubud", text: "The island's green centre, with Tegallalang terraces, the Monkey Forest, craft villages and yoga." },
    { name: "Seminyak and Canggu", text: "Beach clubs, surf and the island's best restaurants, with Tanah Lot temple close by." },
    { name: "Uluwatu and Nusa Dua", text: "A cliff temple with a kecak fire dance at sunset, and calm resort beaches on the south coast." },
    { name: "Nusa Penida", text: "A fast boat away, for the T-Rex cliff at Kelingking Beach and swimming with manta rays." },
    { name: "Lake Bratan", text: "The Ulun Danu temple seems to float on the water in the cool highlands. A good day trip from Ubud." },
  ],
  packages: [
    { title: "Bali first look", tier: "Budget", photo: "bali-uluwatu", stops: [["Ubud", 2], ["Kuta", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Tegallalang rice terraces", "Kecak fire dance at Uluwatu", "Airport transfers included"] },
    { title: "Bali classic: Ubud and Seminyak", tier: "Comfort", photo: "bali-ubud", stops: [["Ubud", 3], ["Seminyak", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Lake Bratan and Tanah Lot", "Sacred Monkey Forest", "A free beach day"] },
    { title: "Pool villa honeymoon", tier: "Premium", photo: "bali-tanahlot", stops: [["Ubud", 3], ["Seminyak", 3]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Private pool villa", "Floating breakfast and candlelit dinner", "Couple's Balinese massage"] },
    { title: "Bali with Nusa Penida", tier: "Comfort", photo: "bali-penida", stops: [["Ubud", 2], ["Nusa Penida", 2], ["Seminyak", 2]], includes: ["hotel", "meals", "cab", "ferry"], highlights: ["Kelingking and Broken Beach", "Snorkelling with mantas, in season", "Fast boat tickets arranged"] },
    { title: "Bali family holiday", tier: "Comfort", photo: "bali-bratan", stops: [["Ubud", 3], ["Nusa Dua", 3]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Bali Safari or Bird Park day", "Calm beach with water sports", "Family rooms or a villa"] },
  ],
  faqs: [
    { q: "Do Indians need a visa for Bali?", a: "Visa rules and fees change, so we confirm the current process when we quote. Your passport should be valid for at least six months. Bali also charges a tourist levy, payable online or on arrival." },
    { q: "How do I fly to Bali from India?", a: "Direct flights run from some Indian cities, otherwise connecting through Singapore or Kuala Lumpur is common. Expect about 8 to 12 hours in all. Tell us your city and we will include flight options." },
    { q: "Are flights included in the package?", a: "Land packages are the default, as flight prices shift daily. We can add flights to your quote and show them as a separate line." },
    { q: "How many days are enough for Bali?", a: "Six nights works well: three in Ubud and three on the coast. Add two if you want Nusa Penida without rushing." },
  ],
  related: ["thailand-tour-packages", "dubai-tour-packages", "honeymoon-packages", "andaman-tour-packages"],
};
