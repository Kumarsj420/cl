import type { Destination } from "../types";

export const shimlaManali: Destination = {
  slug: "shimla-manali-tour-packages",
  name: "Shimla Manali",
  kind: "place",
  blurb: "Himachal's classic first trip",
  metaTitle: "Shimla Manali tour packages from Delhi and Chandigarh",
  metaDescription: "Shimla Manali packages of 4 to 7 nights with Kufri, Kullu, Solang Valley and Atal Tunnel. Private cab all the way. Call or WhatsApp for a price.",
  heading: "Shimla Manali tour packages",
  intro: "The route most people choose for their first Himachal holiday: colonial Shimla, the Beas river through Kullu, then snow and adventure around Manali, all with one private cab and driver.",
  heroPhoto: "manali-beas",
  cardPhoto: "shimla-mall",
  facts: [
    { label: "Start from", value: "Delhi or Chandigarh" },
    { label: "Good trip length", value: "5 to 7 nights" },
    { label: "Best for", value: "Families, couples, groups" },
    { label: "Shimla to Manali", value: "About 7 to 8 hours by road" },
  ],
  months: {
    ratings: ["okay", "okay", "best", "best", "best", "best", "avoid", "avoid", "best", "best", "best", "okay"],
    note: "March to June and September to November are the best months. Come in December to February for snow. In July and August, rain and landslides can close roads for hours.",
  },
  placesTitle: "Along the way",
  places: [
    { name: "Shimla and Kufri", href: "/shimla-tour-packages", text: "The Ridge, Mall Road and snow or viewpoints at Kufri." },
    { name: "Kullu", text: "River rafting in season, shawl shops and the drive along the Beas." },
    { name: "Manali and Solang", href: "/manali-tour-packages", text: "Hadimba Temple, Old Manali and adventure sports at Solang." },
    { name: "Atal Tunnel and Sissu", text: "A day trip into Lahaul for big mountain views." },
  ],
  packages: [
    { title: "Shimla Manali in 5 nights", photo: "shimla-mall", stops: [["Shimla", 2], ["Manali", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Kufri day trip", "Solang Valley", "Hadimba Temple"] },
    { title: "Shimla Manali with Kullu", photo: "himachal-kullu", stops: [["Shimla", 2], ["Kullu", 1], ["Manali", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Riverside night in Kullu", "Atal Tunnel to Sissu", "Naggar Castle"] },
    { title: "Shimla Manali with Kasol", photo: "kasol-village", stops: [["Shimla", 2], ["Manali", 3], ["Kasol", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Manikaran Sahib", "Parvati riverside cafes", "Solang Valley"] },
    { title: "Shimla Manali Chandigarh round trip", photo: "shimla-ridge", stops: [["Shimla", 2], ["Manali", 4]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Pickup and drop at Chandigarh", "Kufri and Solang", "Free day in Manali"] },
  ],
  faqs: [
    { q: "How many days do I need for Shimla and Manali?", a: "Five nights is the minimum to enjoy both. Six or seven nights lets you add Kullu, Sissu or Kasol without long days in the car." },
    { q: "Should we start at Shimla or Manali?", a: "Starting at Shimla breaks the drive from the plains and helps you get used to the hills. On the way back, Manali to Chandigarh is about 8 to 9 hours." },
    { q: "Can you pick us up from Delhi?", a: "Yes. Delhi pickup adds a long first day, so many people take an overnight Volvo or train to Chandigarh or Kalka and start from there." },
    { q: "What kind of cab do you use?", a: "That depends on your group size and budget, from a sedan to an Innova or Tempo Traveller. The vehicle type is written in your quote." },
  ],
  related: ["shimla-tour-packages", "manali-tour-packages", "himachal-family-tour-packages", "himachal-honeymoon-packages"],
};
