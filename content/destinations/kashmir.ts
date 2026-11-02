import type { Destination } from "../types";

export const kashmir: Destination = {
  slug: "kashmir-tour-packages",
  name: "Kashmir",
  kind: "india",
  moods: ["snow", "mountains", "honeymoon", "family"],
  blurb: "Shikaras, meadows and winter snow",
  metaTitle: "Kashmir tour packages: Srinagar, Gulmarg, Pahalgam",
  metaDescription: "Kashmir holiday packages with houseboat stays, Gulmarg, Pahalgam and Sonamarg. Compare routes from 3 to 7 nights, then call or enquire for a price.",
  heading: "Kashmir tour packages",
  intro: "Wake up on a houseboat, ride the Gulmarg gondola and spend an afternoon beside the Lidder river. Pick a route below and we will shape it around your dates.",
  heroPhoto: "kashmir-dal",
  stampPhoto: "kashmir-dal",
  facts: [
    { label: "Fly into", value: "Srinagar (SXR)" },
    { label: "Good trip length", value: "5 to 7 nights" },
    { label: "Best for", value: "Couples and families" },
    { label: "Snow months", value: "December to February" },
  ],
  months: {
    ratings: ["okay", "okay", "okay", "best", "best", "best", "okay", "okay", "best", "best", "okay", "okay"],
    note: "April to June brings tulips and open meadows, and September to October is clear and golden. Come from December to February if snow is the point, and pack for real cold.",
  },
  placesTitle: "Where you will spend your days",
  places: [
    { name: "Srinagar", text: "Houseboats and shikaras on Dal Lake, the Mughal gardens of Nishat and Shalimar, and the old city's wooden shrines." },
    { name: "Gulmarg", text: "A high meadow with one of the world's highest gondola rides. Skiing in winter, wildflowers and golf in summer." },
    { name: "Pahalgam", text: "Pine forest and the Lidder river, with Betaab and Aru valleys a short drive away." },
    { name: "Sonamarg", text: "The meadow of gold, close to the Thajiwas glacier. An easy day trip from Srinagar or a quiet overnight stop." },
  ],
  packages: [
    { title: "Srinagar and Gulmarg short break", tier: "Budget", photo: "kashmir-gulmarg", stops: [["Srinagar", 2], ["Gulmarg", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Evening shikara ride on Dal Lake", "Gulmarg gondola day", "Nishat and Shalimar gardens"] },
    { title: "Classic Kashmir valley circuit", tier: "Comfort", photo: "kashmir-pahalgam", stops: [["Srinagar", 2], ["Pahalgam", 2], ["Gulmarg", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["One night on a Dal Lake houseboat", "Betaab Valley and Aru drive", "Sonamarg day trip"] },
    { title: "Kashmir honeymoon on the water", tier: "Premium", photo: "kashmir-dal", stops: [["Srinagar", 3], ["Gulmarg", 2], ["Pahalgam", 2]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Deluxe houseboat with private shikara", "Candlelit dinner by the lake", "Room decoration on arrival"] },
    { title: "Kashmir with kids and grandparents", tier: "Comfort", photo: "kashmir-garden", stops: [["Srinagar", 3], ["Pahalgam", 2], ["Sonamarg", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Shorter drives and later starts", "Pony ride options at Pahalgam", "Gardens and lakeside evenings"] },
    { title: "Winter snow in Gulmarg", tier: "Comfort", photo: "kashmir-sonamarg", stops: [["Srinagar", 2], ["Gulmarg", 3]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Beginner ski lesson with instructor", "Sledging and snow walks", "Heated rooms in Gulmarg"] },
  ],
  faqs: [
    { q: "How many days are enough for Kashmir?", a: "Five nights cover Srinagar, Gulmarg and Pahalgam without rushing. With seven you can add Sonamarg and a slower pace. Three nights suit a short Srinagar and Gulmarg break." },
    { q: "When will I find snow in Kashmir?", a: "Gulmarg usually has reliable snow from late December to February. Higher slopes can hold snow into spring, and the gondola's upper phase often has it longer. Snowfall varies each year, so we check conditions before you travel." },
    { q: "Is a houseboat stay included?", a: "Most of these packages can include one or more nights on Dal Lake or Nigeen Lake. Tell us if you would prefer a hotel for the whole trip." },
    { q: "Do prepaid SIM cards work in Kashmir?", a: "Prepaid SIMs from other states usually do not work in Jammu and Kashmir. Postpaid connections generally do. Hotels also have Wi-Fi, though speed varies." },
  ],
  related: ["ladakh-tour-packages", "himachal-tour-packages", "honeymoon-packages", "uttarakhand-tour-packages"],
};
