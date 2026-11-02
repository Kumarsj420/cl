import type { Destination } from "../types";

export const himachal: Destination = {
  slug: "himachal-tour-packages",
  name: "Himachal Pradesh",
  kind: "india",
  moods: ["snow", "mountains", "honeymoon", "family"],
  blurb: "Toy trains, deodar forest and Spiti",
  metaTitle: "Himachal tour packages: Shimla, Manali, Spiti, Dharamshala",
  metaDescription: "Himachal Pradesh holiday packages for Shimla, Manali, Dharamshala, Dalhousie and Spiti Valley. Easy road trips from Delhi or Chandigarh. Call or enquire.",
  heading: "Himachal Pradesh tour packages",
  intro: "Go for snow in Solang, tea in Palampur, Tibetan culture in McLeod Ganj or the moonscape of Spiti. Most of Himachal is one long drive from Delhi or Chandigarh, so it works for short breaks too.",
  heroPhoto: "himachal-manali",
  stampPhoto: "himachal-manali",
  facts: [
    { label: "Start from", value: "Chandigarh or Delhi" },
    { label: "Good trip length", value: "4 to 8 nights" },
    { label: "Best for", value: "Families and couples" },
    { label: "Snow months", value: "December to February" },
  ],
  months: {
    ratings: ["okay", "okay", "best", "best", "best", "best", "avoid", "avoid", "best", "best", "best", "okay"],
    note: "March to June is the classic escape from the plains, and September to November has the clearest views. July and August bring heavy monsoon rain and landslide risk. Spiti opens properly from June to September.",
  },
  placesTitle: "Which Himachal is yours?",
  places: [
    { name: "Shimla and Kufri", text: "Colonial streets around the Ridge and Mall Road, the UNESCO-listed Kalka to Shimla railway, and snow at Kufri in winter." },
    { name: "Manali and Solang", text: "Old Manali cafes, Hadimba Temple and adventure sports at Solang, with the Atal Tunnel opening the way to Sissu." },
    { name: "Dharamshala and McLeod Ganj", text: "Tibetan monasteries and momos, the Triund trail and Kangra's tea gardens below." },
    { name: "Dalhousie and Khajjiar", text: "Quiet pine-covered hills and a saucer-shaped meadow often called India's mini Switzerland." },
    { name: "Spiti Valley", text: "A high, dry desert with Key Monastery, Chandratal Lake and villages that feel a long way from anywhere." },
  ],
  packages: [
    { title: "Shimla and Manali in a week", tier: "Comfort", photo: "himachal-manali", stops: [["Shimla", 2], ["Kullu", 1], ["Manali", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Kufri and the Ridge", "Solang Valley and Atal Tunnel", "Kullu riverside evening"] },
    { title: "Shimla and Kufri weekend", tier: "Budget", photo: "himachal-shimla", stops: [["Shimla", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Jakhu Temple and Mall Road", "Kufri day trip", "Optional toy train ride"] },
    { title: "Dharamshala and Dalhousie hills", tier: "Comfort", photo: "himachal-mcleod", stops: [["Dharamshala", 3], ["Dalhousie", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Dalai Lama Temple in McLeod Ganj", "Khajjiar meadow", "Kangra tea garden visit"] },
    { title: "Spiti Valley circuit", tier: "Comfort", photo: "himachal-spiti", stops: [["Shimla", 1], ["Kalpa", 2], ["Kaza", 3], ["Manali", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Key Monastery and Kibber", "Chandratal Lake, road permitting", "Experienced mountain driver"] },
    { title: "Manali honeymoon with snow", tier: "Premium", photo: "himachal-solang", stops: [["Shimla", 2], ["Manali", 4]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Valley-view rooms", "Candlelit dinner in Manali", "Paragliding at Solang, in season"] },
  ],
  faqs: [
    { q: "Which is better, Shimla or Manali?", a: "Shimla is easier to reach and suits older travellers. Manali has more snow access and adventure. Most first-time visitors do both in six or seven nights." },
    { q: "Where can I see snow in Himachal?", a: "Kufri and Solang get snow in the coldest months. Between March and May, Rohtang Pass and the Sissu side usually still have it. Rohtang needs a permit, and we apply when your dates are confirmed." },
    { q: "Is it safe to travel in the monsoon?", a: "July and August carry a real risk of landslides and road closures. If those are your only dates, we plan shorter routes with spare time and watch the forecast closely." },
    { q: "How do I get to Himachal from Delhi?", a: "Most trips start with an overnight Volvo or a private cab, or a flight to Chandigarh. The drive takes about 7 to 8 hours to Shimla and 12 to 14 to Manali." },
  ],
  related: ["uttarakhand-tour-packages", "kashmir-tour-packages", "ladakh-tour-packages", "family-holiday-packages"],
};
