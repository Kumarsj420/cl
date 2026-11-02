import type { Destination } from "../types";

export const manali: Destination = {
  slug: "manali-tour-packages",
  name: "Manali",
  kind: "place",
  blurb: "Solang, Atal Tunnel and Old Manali cafes",
  metaTitle: "Manali tour packages: Solang Valley, Atal Tunnel, Sissu",
  metaDescription: "Manali holiday packages with Solang Valley, Atal Tunnel, Sissu, Old Manali and Naggar. Volvo or private cab from Delhi and Chandigarh. Call or WhatsApp for a price.",
  heading: "Manali tour packages",
  intro: "Snow at Solang, a drive through the Atal Tunnel to Sissu, Hadimba Temple in the cedar forest and slow evenings in Old Manali. Manali has something for families, couples and friends.",
  heroPhoto: "manali-solang",
  cardPhoto: "manali-solang",
  facts: [
    { label: "Start from", value: "Delhi or Chandigarh" },
    { label: "Good trip length", value: "3 to 5 nights" },
    { label: "Getting there", value: "Overnight Volvo or private cab" },
    { label: "Snow months", value: "December to February" },
  ],
  months: {
    ratings: ["okay", "okay", "okay", "best", "best", "best", "avoid", "avoid", "best", "best", "okay", "okay"],
    note: "April to June is the busy season, with snow still on the high slopes. September and October are clear and calmer. Winter brings snow to Solang and sometimes the town. Avoid July and August for landslide risk.",
  },
  placesTitle: "In and around Manali",
  places: [
    { name: "Solang Valley", text: "Paragliding, ropeway rides and zorbing in summer, and snow activities in winter." },
    { name: "Atal Tunnel and Sissu", text: "The long tunnel under Rohtang opens the way to Lahaul, with a waterfall and wide views at Sissu." },
    { name: "Hadimba Temple and Old Manali", text: "A wooden temple in a cedar forest, then cafes and small lanes across the Manalsu stream." },
    { name: "Naggar", text: "An old stone and timber castle above the Kullu valley, and the Roerich art gallery nearby." },
    { name: "Rohtang Pass", text: "Snow often lingers here into summer. Vehicles need a permit, which we apply for once your dates are fixed." },
  ],
  packages: [
    { title: "Manali short break", photo: "manali-hadimba", stops: [["Manali", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Solang Valley day", "Hadimba Temple and Old Manali", "Vashisht hot springs"] },
    { title: "Manali with Atal Tunnel and Sissu", photo: "manali-atal", stops: [["Manali", 4]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Atal Tunnel to Sissu", "Solang Valley", "Naggar Castle"] },
    { title: "Manali by Volvo from Delhi", photo: "manali-beas", stops: [["Manali", 3]], includes: ["volvo", "hotel", "meals", "sightseeing"], highlights: ["Overnight Volvo both ways", "Local sightseeing by cab", "Good value for groups of friends"] },
    { title: "Manali adventure trip", photo: "manali-sissu", stops: [["Manali", 4]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Paragliding at Solang, in season", "River rafting in Kullu, in season", "Snow activities in winter"] },
  ],
  faqs: [
    { q: "How do I get to Manali from Delhi?", a: "Most people take an overnight Volvo bus, which takes about 12 to 14 hours. A private cab is quicker and lets you stop on the way. The nearest airport is Bhuntar, about 50 km away, with limited flights." },
    { q: "Do I need a permit for Rohtang or Atal Tunnel?", a: "The Atal Tunnel needs no permit. Rohtang Pass needs a vehicle permit with a daily limit, and it is closed on some days. We apply for it when your dates are confirmed." },
    { q: "When is the best time for snow in Manali?", a: "December to February for snow in and around town. From March to May you will usually still find snow at Solang's higher points, Rohtang and Sissu." },
    { q: "How many days do I need?", a: "Three nights for the main sights, four with Sissu and Naggar. Add Shimla, Kasol or Jibhi for a longer trip." },
  ],
  related: ["shimla-manali-tour-packages", "kasol-tour-packages", "jibhi-tirthan-tour-packages", "spiti-valley-tour-packages"],
};
