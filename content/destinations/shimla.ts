import type { Destination } from "../types";

export const shimla: Destination = {
  slug: "shimla-tour-packages",
  name: "Shimla",
  kind: "place",
  blurb: "The Ridge, the toy train and Kufri snow",
  metaTitle: "Shimla tour packages: Kufri, Chail, Narkanda and the toy train",
  metaDescription: "Shimla holiday packages with Kufri, Mall Road, the Kalka to Shimla toy train, Chail and Narkanda. Short breaks from Chandigarh and Delhi. Call or WhatsApp for a price.",
  heading: "Shimla tour packages",
  intro: "Walk the Ridge and Mall Road, ride the old toy train through the hills and go looking for snow at Kufri. Shimla is the easiest hill station in Himachal to reach, so it suits weekends and first trips alike.",
  heroPhoto: "shimla-ridge",
  cardPhoto: "shimla-ridge",
  facts: [
    { label: "Start from", value: "Chandigarh, about 3 to 4 hours" },
    { label: "Good trip length", value: "2 to 4 nights" },
    { label: "Best for", value: "Families and first visits" },
    { label: "Snow months", value: "Late December to February" },
  ],
  months: {
    ratings: ["okay", "okay", "best", "best", "best", "best", "avoid", "avoid", "okay", "best", "best", "okay"],
    note: "March to June is pleasant when the plains are hot, and October to November has clear skies. Snow usually falls from late December to February, mostly at Kufri and Narkanda. July and August bring heavy rain and slow roads.",
  },
  placesTitle: "In and around Shimla",
  places: [
    { name: "The Ridge and Mall Road", text: "Christ Church, the old Gaiety Theatre and an evening walk with roasted corn and views over the valley." },
    { name: "Kalka to Shimla toy train", text: "A UNESCO-listed narrow-gauge line through more than a hundred tunnels. Book early in season." },
    { name: "Kufri", text: "About 15 km away, for snow in winter and horse rides and viewpoints the rest of the year." },
    { name: "Chail and Kasauli", text: "Quiet pine-covered towns with an old palace, colonial churches and sunset points." },
    { name: "Narkanda", text: "Apple orchards and the Hatu Peak temple, with snow and beginner skiing in a good winter." },
  ],
  packages: [
    { title: "Shimla and Kufri weekend", photo: "shimla-kufri", stops: [["Shimla", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Kufri half day", "Mall Road and the Ridge", "Jakhu Temple"] },
    { title: "Shimla with the toy train", photo: "shimla-toytrain", stops: [["Shimla", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Toy train from Kalka", "Kufri and Mashobra", "Viceregal Lodge visit"] },
    { title: "Shimla, Chail and Kasauli", photo: "shimla-chail", stops: [["Shimla", 2], ["Chail", 1], ["Kasauli", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Chail Palace and cricket ground", "Kasauli's Christ Church", "Sunset at Monkey Point area"] },
    { title: "Shimla and Narkanda snow trip", photo: "shimla-narkanda", stops: [["Shimla", 2], ["Narkanda", 2]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Hatu Peak drive, weather permitting", "Snow play in season", "Apple orchard walk"] },
  ],
  faqs: [
    { q: "How many days are enough for Shimla?", a: "Two nights cover the Ridge, Mall Road and Kufri. Add a night for the toy train or for Chail and Kasauli, and two for Narkanda." },
    { q: "When does it snow in Shimla?", a: "Usually between late December and February, though it changes every year. Kufri and Narkanda are higher and get more snow than the town." },
    { q: "Is the toy train worth it?", a: "Yes, if you have the time. Kalka to Shimla takes about five to six hours, so most people ride one way and drive the other. Seats sell out in peak season." },
    { q: "Can we combine Shimla with Manali?", a: "Yes, it is the most popular Himachal route. See our Shimla Manali packages, which usually run five to seven nights." },
  ],
  related: ["shimla-manali-tour-packages", "manali-tour-packages", "kinnaur-tour-packages", "himachal-family-tour-packages"],
};
