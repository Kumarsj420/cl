import type { Destination } from "../types";

export const kinnaur: Destination = {
  slug: "kinnaur-tour-packages",
  name: "Kinnaur",
  kind: "place",
  blurb: "Kalpa, Sangla and Chitkul",
  metaTitle: "Kinnaur tour packages: Kalpa, Sangla Valley and Chitkul",
  metaDescription: "Kinnaur packages with Sangla Valley, Chitkul, Kalpa and Kinnaur Kailash views, apple orchards and old wooden temples. Call or WhatsApp for a price.",
  heading: "Kinnaur tour packages",
  intro: "Apple orchards under the Kinnaur Kailash range, the Baspa river through Sangla and Chitkul, the last village on the old road to Tibet. A dramatic drive from Shimla, and the gentle way into Spiti.",
  heroPhoto: "kinnaur-kalpa",
  cardPhoto: "kinnaur-chitkul",
  facts: [
    { label: "Start from", value: "Shimla" },
    { label: "Good trip length", value: "4 to 6 nights" },
    { label: "Best for", value: "Road trips and views" },
    { label: "Apple season", value: "September and October" },
  ],
  months: {
    ratings: ["avoid", "avoid", "okay", "best", "best", "best", "avoid", "avoid", "best", "best", "okay", "avoid"],
    note: "April to June and September to October are the best months, and autumn is apple harvest time. In winter, Chitkul and upper Sangla are snowed in. The monsoon makes the highway risky.",
  },
  placesTitle: "Places on the route",
  places: [
    { name: "Sangla Valley", text: "Wooden houses, the Kamru Fort temple and the Baspa river." },
    { name: "Chitkul", text: "The last inhabited village on this road, with wide views and a riverside walk." },
    { name: "Kalpa", text: "Orchards and a close view of the Kinnaur Kailash peaks, best at sunrise." },
    { name: "Nako", text: "A high village beside a small lake, on the way into Spiti." },
  ],
  packages: [
    { title: "Sangla and Chitkul", photo: "kinnaur-chitkul", stops: [["Narkanda", 1], ["Sangla", 2], ["Kalpa", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Chitkul village day", "Kamru Fort", "Kalpa sunrise"] },
    { title: "Kinnaur with Shimla", photo: "kinnaur-sangla", stops: [["Shimla", 1], ["Sangla", 2], ["Kalpa", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Hindustan-Tibet road", "Riverside camp option in Sangla", "Roghi village walk"] },
    { title: "Kinnaur apple season trip", photo: "kinnaur-kalpa", stops: [["Narkanda", 1], ["Sangla", 2], ["Kalpa", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Orchard visit in harvest season", "Kinnaur Kailash views", "Chitkul"] },
    { title: "Kinnaur and Nako", photo: "kinnaur-nako", stops: [["Sangla", 2], ["Kalpa", 1], ["Nako", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Nako Lake", "Khab confluence viewpoint", "Option to continue into Spiti"] },
  ],
  faqs: [
    { q: "Is the Kinnaur road safe?", a: "The highway is cut into steep cliffs and can be hit by landslides, especially in the monsoon. We use experienced local drivers and avoid travel in heavy rain." },
    { q: "Do I need a permit for Kinnaur?", a: "Indian citizens do not. Foreign nationals need an Inner Line Permit for areas near the border such as beyond Kalpa towards Nako. We help arrange it." },
    { q: "Can we combine Kinnaur with Spiti?", a: "Yes. Kinnaur is the best way into Spiti because it lets you climb slowly. See our Spiti circuit packages." },
    { q: "When is apple season?", a: "Usually September and October, depending on altitude. Orchards are colourful and busy then." },
  ],
  related: ["spiti-valley-tour-packages", "shimla-tour-packages", "himachal-tour-packages", "manali-tour-packages"],
};
