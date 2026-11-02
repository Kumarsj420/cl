import type { Destination } from "../types";

export const shangarh: Destination = {
  slug: "shangarh-tour-packages",
  name: "Shangarh",
  kind: "place",
  blurb: "A hidden meadow in Sainj Valley",
  metaTitle: "Shangarh tour packages: Sainj Valley meadow and homestays",
  metaDescription: "Shangarh packages in Kullu's Sainj Valley: the open meadow, Shangchul Mahadev temple, Barshangarh waterfall and village homestays. Call or WhatsApp for a price.",
  heading: "Shangarh tour packages",
  intro: "A wide, flat meadow ringed by deodar forest, an old wooden temple and village homestays with home-cooked food. Shangarh is at the end of a winding road in Sainj Valley, and few people make it this far.",
  heroPhoto: "shangarh-meadow",
  cardPhoto: "shangarh-meadow",
  facts: [
    { label: "Nearest airport", value: "Bhuntar (Kullu), about 2 hours" },
    { label: "Good trip length", value: "2 to 3 nights" },
    { label: "Best for", value: "Offbeat and slow travel" },
    { label: "Stay in", value: "Village homestays" },
  ],
  months: {
    ratings: ["okay", "okay", "okay", "best", "best", "best", "avoid", "avoid", "best", "best", "best", "okay"],
    note: "April to June and September to November are green and pleasant. Winter can bring snow and very cold nights. The road gets risky in the monsoon.",
  },
  placesTitle: "What to do",
  places: [
    { name: "Shangarh meadow", text: "A big open ground for walks and picnics. Locals ask visitors to keep it clean and avoid playing loud music." },
    { name: "Shangchul Mahadev Temple", text: "An old wooden temple at the edge of the meadow, central to village life." },
    { name: "Barshangarh waterfall", text: "A short walk from the village to a tall waterfall in the forest." },
    { name: "Great Himalayan National Park", text: "Sainj is one of the entry valleys to this UNESCO-listed park, with longer guided treks." },
  ],
  packages: [
    { title: "Shangarh meadow weekend", photo: "shangarh-meadow", stops: [["Shangarh", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Village homestay", "Shangchul Mahadev Temple", "Barshangarh waterfall walk"] },
    { title: "Shangarh and Jibhi", photo: "shangarh-sainj", stops: [["Shangarh", 2], ["Jibhi", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Two quiet valleys in one trip", "Jalori Pass, road permitting", "Riverside stay in Jibhi"] },
    { title: "Shangarh and Great Himalayan National Park", photo: "shangarh-gnp", stops: [["Sainj", 1], ["Shangarh", 2]], includes: ["hotel", "meals", "cab", "guide"], highlights: ["Guided forest walk in the park", "Local village food", "Stars on clear nights"] },
    { title: "Manali, Kasol and Shangarh", photo: "shangarh-sainj", stops: [["Manali", 2], ["Kasol", 2], ["Shangarh", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Solang Valley", "Parvati Valley cafes", "Shangarh meadow"] },
  ],
  faqs: [
    { q: "How do I reach Shangarh?", a: "It is in Sainj Valley, about 2 hours from Bhuntar airport and about an hour from Aut, where Volvo buses from Delhi stop. The last part is a narrow mountain road." },
    { q: "Are there hotels in Shangarh?", a: "Mostly village homestays and a few small guesthouses. Rooms are simple and clean, with home-cooked meals. Tell us what comfort level you need." },
    { q: "Can we camp on the meadow?", a: "The meadow is sacred to the local temple, and villagers have restricted camping and events there. We follow local rules and book proper stays nearby." },
    { q: "Is Shangarh good for families?", a: "Yes, for families who enjoy nature and simple stays. There are no shops or attractions beyond walks, temples and views." },
  ],
  related: ["jibhi-tirthan-tour-packages", "kasol-tour-packages", "manali-tour-packages", "himachal-tour-packages"],
};
