import type { Destination } from "../types";

export const andaman: Destination = {
  slug: "andaman-tour-packages",
  name: "Andaman Islands",
  kind: "india",
  moods: ["beach", "honeymoon", "family"],
  blurb: "White sand and clear water, no passport",
  metaTitle: "Andaman tour packages: Havelock, Neil and Port Blair",
  metaDescription: "Andaman holiday packages to Havelock (Swaraj Dweep), Neil (Shaheed Dweep) and Port Blair (Sri Vijaya Puram). Ferries, snorkelling and diving. Call or enquire.",
  heading: "Andaman tour packages",
  intro: "Radhanagar's white sand, coral a few fins from the shore and a sound-and-light show at the old Cellular Jail. It feels like a tropical trip abroad, with no visa to arrange.",
  heroPhoto: "andaman-radhanagar",
  stampPhoto: "andaman-havelock",
  facts: [
    { label: "Fly into", value: "Sri Vijaya Puram, Port Blair (IXZ)" },
    { label: "Good trip length", value: "4 to 7 nights" },
    { label: "Best for", value: "Honeymooners and families" },
    { label: "Getting around", value: "Ferries between islands" },
  ],
  months: {
    ratings: ["best", "best", "best", "best", "okay", "avoid", "avoid", "avoid", "avoid", "okay", "best", "best"],
    note: "November to April has calm seas and clear water for snorkelling and diving. From June to September the monsoon can cancel ferries and water sports, so we suggest other dates.",
  },
  placesTitle: "The islands",
  places: [
    { name: "Sri Vijaya Puram (Port Blair)", text: "The arrival point, with Cellular Jail and its evening light show, Corbyn's Cove and day trips to Ross Island." },
    { name: "Swaraj Dweep (Havelock)", text: "Radhanagar Beach, Elephant Beach snorkelling and the best-known dive sites in the islands." },
    { name: "Shaheed Dweep (Neil)", text: "A smaller, slower island with natural rock bridges, cycling lanes and very clear water at Bharatpur Beach." },
    { name: "Ross and North Bay", text: "British-era ruins taken over by trees and deer, then glass-bottom boats and coral at North Bay." },
  ],
  packages: [
    { title: "Port Blair and Havelock", tier: "Budget", photo: "andaman-cellular", stops: [["Port Blair", 2], ["Havelock", 2]], includes: ["hotel", "meals", "cab", "ferry"], highlights: ["Cellular Jail light show", "Radhanagar Beach sunset", "Ferry tickets arranged"] },
    { title: "Andaman three-island trip", tier: "Comfort", photo: "andaman-neil", stops: [["Port Blair", 2], ["Havelock", 2], ["Neil", 1]], includes: ["hotel", "meals", "cab", "ferry"], highlights: ["Elephant Beach snorkelling", "Natural bridge at Neil", "Ross Island visit"] },
    { title: "Andaman honeymoon by the beach", tier: "Premium", photo: "andaman-radhanagar", stops: [["Port Blair", 1], ["Havelock", 3], ["Neil", 2]], includes: ["hotel", "meals", "cab", "ferry", "activity"], highlights: ["Beachside room in Havelock", "Candlelit dinner on the sand", "Private snorkelling session"] },
    { title: "Andaman family holiday", tier: "Comfort", photo: "andaman-shore", stops: [["Port Blair", 3], ["Havelock", 3]], includes: ["hotel", "meals", "cab", "ferry"], highlights: ["Glass-bottom boat at North Bay", "Ross Island's deer and ruins", "Comfortable ferry seats"] },
    { title: "Scuba and sea in Havelock", tier: "Comfort", photo: "andaman-havelock", stops: [["Port Blair", 1], ["Havelock", 4]], includes: ["hotel", "meals", "ferry", "activity"], highlights: ["Try-dive for non-divers", "Elephant Beach trip", "Open water course on request"] },
  ],
  faqs: [
    { q: "Do I need a permit or passport?", a: "Indian citizens need only valid photo ID, with no permit for the usual tourist islands. Foreign nationals have different rules, so tell us your nationality when you enquire." },
    { q: "How do I get between islands?", a: "Government and private ferries connect Port Blair, Havelock and Neil. Rough weather can change the timetable, so we keep your last island stop away from your flight day." },
    { q: "Do I need to swim to snorkel or scuba?", a: "No. Instructors take beginners on guided try-dives and snorkelling with life jackets. Medical restrictions apply for scuba, and you should not fly within about 24 hours of diving." },
    { q: "Are the old island names still used?", a: "Yes. Port Blair is now officially Sri Vijaya Puram, Havelock is Swaraj Dweep and Neil is Shaheed Dweep. You will see both names on tickets and signs." },
  ],
  related: ["goa-tour-packages", "kerala-tour-packages", "thailand-tour-packages", "honeymoon-packages"],
};
