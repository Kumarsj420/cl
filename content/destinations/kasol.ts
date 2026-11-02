import type { Destination } from "../types";

export const kasol: Destination = {
  slug: "kasol-tour-packages",
  name: "Kasol and Kheerganga",
  kind: "place",
  blurb: "Parvati Valley, cafes and hot springs",
  metaTitle: "Kasol Kheerganga tour packages: Parvati Valley, Manikaran, Tosh",
  metaDescription: "Kasol packages with Manikaran Sahib, Tosh and the Kheerganga trek to the hot spring. Riverside stays in Parvati Valley. Call or WhatsApp for a price.",
  heading: "Kasol and Kheerganga tour packages",
  intro: "Pine forest along the Parvati river, riverside cafes, the hot springs of Manikaran and a trek up to Kheerganga's natural hot pool. A favourite with friends and backpackers.",
  heroPhoto: "kasol-village",
  cardPhoto: "kasol-kheerganga",
  facts: [
    { label: "Nearest airport", value: "Bhuntar, about 1 hour" },
    { label: "Good trip length", value: "2 to 4 nights" },
    { label: "Best for", value: "Friends and trekkers" },
    { label: "Kheerganga trek", value: "About 12 km each way" },
  ],
  months: {
    ratings: ["okay", "okay", "okay", "best", "best", "best", "avoid", "avoid", "best", "best", "best", "okay"],
    note: "April to June and September to November are best for the Kheerganga trek. Kasol is open all winter and gets some snow, but the trek becomes cold and slippery. The monsoon brings landslides.",
  },
  placesTitle: "Parvati Valley",
  places: [
    { name: "Kasol", text: "Riverside cafes, a small market and walks to Chalal village across the river." },
    { name: "Manikaran Sahib", text: "A gurudwara and temples beside natural hot springs, with free langar." },
    { name: "Kheerganga", text: "A trek from Barshaini through forest and villages to a hot spring pool with mountain views." },
    { name: "Tosh", text: "A village at the end of the road with views of snowy peaks and quiet guesthouses." },
  ],
  packages: [
    { title: "Kasol weekend", photo: "kasol-village", stops: [["Kasol", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Riverside stay", "Manikaran Sahib", "Chalal village walk"] },
    { title: "Kasol and Kheerganga trek", photo: "kasol-kheerganga", stops: [["Kasol", 1], ["Kheerganga", 1], ["Kasol", 1]], includes: ["hotel", "camping", "meals", "guide"], highlights: ["Guided trek from Barshaini", "Night camp at the top", "Hot spring pool"] },
    { title: "Kasol, Tosh and Manikaran", photo: "kasol-tosh", stops: [["Kasol", 2], ["Tosh", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Tosh village", "Manikaran hot springs", "Parvati riverside evenings"] },
    { title: "Manali and Kasol by Volvo", photo: "kasol-manikaran", stops: [["Manali", 2], ["Kasol", 2]], includes: ["volvo", "hotel", "meals", "cab"], highlights: ["Overnight Volvo from Delhi", "Solang Valley", "Kasol cafes"] },
  ],
  faqs: [
    { q: "How hard is the Kheerganga trek?", a: "It is about 12 km each way from Barshaini and takes 5 to 7 hours up. It is steady rather than technical, but you need reasonable fitness. A guide is included in our trek package." },
    { q: "Can I stay at Kheerganga?", a: "Camping rules at the top have changed several times. We book whatever stays are allowed for your dates, and confirm before you pay." },
    { q: "How do I reach Kasol from Delhi?", a: "Take an overnight Volvo to Bhuntar, about 12 hours, then a cab of about an hour. We can arrange both." },
    { q: "Is Kasol good for families?", a: "Yes, for a calm riverside break with Manikaran. The Kheerganga trek suits older children who are used to walking." },
  ],
  related: ["manali-tour-packages", "jibhi-tirthan-tour-packages", "shangarh-tour-packages", "bir-billing-tour-packages"],
};
