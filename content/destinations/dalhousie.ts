import type { Destination } from "../types";

export const dalhousie: Destination = {
  slug: "dalhousie-khajjiar-tour-packages",
  name: "Dalhousie and Khajjiar",
  kind: "place",
  blurb: "Pine hills and a big green meadow",
  metaTitle: "Dalhousie Khajjiar tour packages with Chamba",
  metaDescription: "Dalhousie and Khajjiar packages with Chamba, Panchpula and Dainkund. Quiet pine hills near Pathankot. Call or WhatsApp for a price.",
  heading: "Dalhousie and Khajjiar tour packages",
  intro: "Old colonial bungalows spread across five hills, a wide meadow ringed by deodar trees at Khajjiar and the temples of Chamba below. Quieter than Shimla and Manali, and close to Pathankot.",
  heroPhoto: "dalhousie-khajjiar",
  cardPhoto: "dalhousie-khajjiar",
  facts: [
    { label: "By train", value: "Pathankot, about 3 hours away" },
    { label: "Good trip length", value: "2 to 4 nights" },
    { label: "Best for", value: "Families and slow trips" },
    { label: "Dalhousie to Khajjiar", value: "About 22 km" },
  ],
  months: {
    ratings: ["okay", "okay", "best", "best", "best", "best", "avoid", "avoid", "okay", "best", "best", "okay"],
    note: "March to June is mild and green, and October to November is clear. Snow falls on and off from December to February. July and August are wet, with slippery roads.",
  },
  placesTitle: "In and around Dalhousie",
  places: [
    { name: "Khajjiar", text: "A meadow with a small lake, horse rides and zorbing, surrounded by forest." },
    { name: "Dalhousie town", text: "Gandhi Chowk, old churches and the walk along Thandi Sadak and Garam Sadak." },
    { name: "Dainkund and Kalatop", text: "A high viewpoint with a short walk to Pholani Devi temple, and a forest sanctuary nearby." },
    { name: "Chamba", text: "An old town on the Ravi river with carved stone temples, a museum and the Chaugan ground." },
  ],
  packages: [
    { title: "Dalhousie and Khajjiar weekend", photo: "dalhousie-khajjiar", stops: [["Dalhousie", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Khajjiar meadow", "Panchpula", "Gandhi Chowk"] },
    { title: "Dalhousie, Khajjiar and Chamba", photo: "dalhousie-chamba", stops: [["Dalhousie", 2], ["Khajjiar", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Night next to the meadow", "Chamba temples and museum", "Dainkund viewpoint"] },
    { title: "Dalhousie and Dharamshala", photo: "dalhousie-town", stops: [["Dalhousie", 2], ["Dharamshala", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Khajjiar day", "McLeod Ganj and Bhagsu", "Kangra valley drive"] },
    { title: "Amritsar, Dalhousie and Dharamshala", photo: "dalhousie-town", stops: [["Amritsar", 1], ["Dalhousie", 2], ["Dharamshala", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Golden Temple", "Wagah border ceremony", "Khajjiar and McLeod Ganj"] },
  ],
  faqs: [
    { q: "How do I reach Dalhousie?", a: "Pathankot is the nearest railway station, about 80 km and 3 hours away. Kangra airport is about 4 hours away. We arrange pickup from either." },
    { q: "Is Khajjiar worth a night?", a: "Yes, if you like quiet. Day visitors leave by evening, and the meadow is lovely early in the morning." },
    { q: "Does it snow in Dalhousie?", a: "It usually gets some snow between December and February, though not every week. Dainkund and Khajjiar tend to get more than the town." },
    { q: "Is Dalhousie good for older travellers?", a: "Yes. Drives are short and the sightseeing is gentle. Some hotels are reached by steep lanes, so tell us if walking is hard and we will pick accordingly." },
  ],
  related: ["dharamshala-mcleodganj-tour-packages", "himachal-family-tour-packages", "shimla-tour-packages", "himachal-tour-packages"],
};
