import type { Destination } from "../types";

export const thailand: Destination = {
  slug: "thailand-tour-packages",
  name: "Thailand",
  kind: "abroad",
  moods: ["beach", "culture", "family", "honeymoon", "abroad"],
  blurb: "Islands, street food and golden temples",
  metaTitle: "Thailand tour packages from India: Phuket, Krabi, Bangkok",
  metaDescription: "Thailand holiday packages from India with Bangkok, Pattaya, Phuket, Krabi and Chiang Mai. Island hopping, temples and food. Call or enquire for a price.",
  heading: "Thailand tour packages",
  intro: "Limestone islands in the Andaman Sea, gold temples beside Bangkok's river and dinner from a street cart. Thailand is one of the easiest international trips from India, and it suits most budgets.",
  heroPhoto: "thailand-phiphi",
  stampPhoto: "thailand-bangkok",
  facts: [
    { label: "Fly into", value: "Bangkok or Phuket" },
    { label: "Good trip length", value: "4 to 8 nights" },
    { label: "Best for", value: "First trip abroad, all ages" },
    { label: "Before you go", value: "Passport valid for 6 months" },
  ],
  months: {
    ratings: ["best", "best", "okay", "okay", "okay", "avoid", "avoid", "avoid", "avoid", "okay", "best", "best"],
    note: "November to February is the cool, dry season across most of the country. March to May is hot. June to September brings monsoon rain on the Phuket and Krabi side, and some boat trips stop.",
  },
  placesTitle: "Where to go in Thailand",
  places: [
    { name: "Bangkok", text: "Wat Arun, the Grand Palace, floating markets and enormous malls, plus some of the best street food anywhere." },
    { name: "Pattaya", text: "A popular first stop with Coral Island trips, shows and family attractions, about two hours from Bangkok." },
    { name: "Phuket and Phi Phi", text: "Big beaches, lively Patong and speedboat days to the Phi Phi islands and Maya Bay." },
    { name: "Krabi", text: "Quieter than Phuket, with limestone cliffs at Railay and four-island boat tours." },
    { name: "Chiang Mai", text: "Old-city temples, Doi Suthep, night markets and ethical elephant sanctuaries in the northern hills." },
  ],
  packages: [
    { title: "Bangkok and Pattaya starter", tier: "Budget", photo: "thailand-bangkok", stops: [["Pattaya", 2], ["Bangkok", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Coral Island day trip", "Bangkok temple tour", "Airport transfers included"] },
    { title: "Phuket and Krabi islands", tier: "Comfort", photo: "thailand-phiphi", stops: [["Phuket", 3], ["Krabi", 3]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Phi Phi speedboat day", "Railay Beach longtail ride", "Four-island tour"] },
    { title: "Thailand honeymoon by the sea", tier: "Premium", photo: "thailand-krabi", stops: [["Phuket", 3], ["Krabi", 2], ["Bangkok", 1]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Sea-view rooms", "Candlelit beach dinner", "Thai spa for two"] },
    { title: "Thailand with kids", tier: "Comfort", photo: "thailand-phuket", stops: [["Phuket", 3], ["Bangkok", 3]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["SEA Life or Safari World visit", "Resort with kids' pool", "Vegetarian and Indian meal options"] },
    { title: "Northern Thailand and Bangkok", tier: "Comfort", photo: "thailand-chiangmai", stops: [["Bangkok", 2], ["Chiang Mai", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Doi Suthep temple", "Ethical elephant sanctuary", "Sunday walking street market"] },
  ],
  faqs: [
    { q: "Do Indians need a visa for Thailand?", a: "Thailand's entry rules for Indian passport holders have changed several times in recent years. We confirm what applies to your dates when we quote. Your passport should be valid for at least six months." },
    { q: "Is Indian and vegetarian food easy to find?", a: "Yes, especially in Bangkok, Pattaya and Phuket. Tell us your food preferences and we will include suitable meal plans." },
    { q: "Which is better, Phuket or Krabi?", a: "Phuket has more nightlife, shopping and things for children. Krabi is quieter with bigger scenery. Six nights is enough to do both." },
    { q: "Is Thailand good for a first trip abroad?", a: "Very much so. Flights are short, it is good value and tourist services are well set up. Bangkok with Pattaya or Phuket is the usual first route." },
  ],
  related: ["bali-tour-packages", "dubai-tour-packages", "andaman-tour-packages", "family-holiday-packages"],
};
