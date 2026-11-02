import type { Destination } from "../types";

export const ladakh: Destination = {
  slug: "ladakh-tour-packages",
  name: "Ladakh",
  kind: "india",
  moods: ["mountains"],
  blurb: "High passes and impossible blue lakes",
  metaTitle: "Leh Ladakh tour packages: Pangong, Nubra, Tso Moriri",
  metaDescription: "Leh Ladakh packages with Nubra Valley, Pangong Lake and Tso Moriri, by flight or road. Built-in acclimatisation days. Call or enquire for a price.",
  heading: "Leh Ladakh tour packages",
  intro: "Cross some of the highest motorable passes in India, sleep beside Pangong and walk the dunes in Nubra. Every route here starts with rest days, because the altitude deserves respect.",
  heroPhoto: "ladakh-pangong",
  stampPhoto: "ladakh-thiksey",
  facts: [
    { label: "Fly into", value: "Leh (IXL)" },
    { label: "Good trip length", value: "6 to 8 nights" },
    { label: "Altitude in Leh", value: "About 3,500 m" },
    { label: "Road season", value: "June to September" },
  ],
  months: {
    ratings: ["avoid", "avoid", "avoid", "avoid", "okay", "best", "best", "best", "best", "okay", "avoid", "avoid"],
    note: "June to September is the season, with both highways usually open and lake camps running. May and October are quieter and colder. In winter the roads close and many stays shut.",
  },
  placesTitle: "What the road takes you past",
  places: [
    { name: "Leh", text: "Your base for getting used to the altitude. Leh Palace, Shanti Stupa and a market full of apricots and pashmina." },
    { name: "Nubra Valley", text: "Reached over a very high pass. Sand dunes and double-humped camels at Hunder, and the giant Maitreya Buddha at Diskit." },
    { name: "Pangong Tso", text: "A long, narrow lake that shifts through shades of blue through the day. Camps sit along the shore in season." },
    { name: "Tso Moriri", text: "Quieter and higher than Pangong, near the village of Korzok. Good for those who have already acclimatised well." },
  ],
  packages: [
    { title: "Leh, Nubra and Pangong by flight", tier: "Comfort", photo: "ladakh-pangong", stops: [["Leh", 3], ["Nubra", 2], ["Pangong", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Two rest days in Leh first", "Shyok route from Nubra to Pangong", "Lakeside camp at Pangong"] },
    { title: "Ladakh in a week, unhurried", tier: "Comfort", photo: "ladakh-nubra", stops: [["Leh", 3], ["Nubra", 2], ["Pangong", 1], ["Leh", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Thiksey and Hemis monasteries", "Camel ride on the Hunder dunes", "Magnetic Hill and Sangam stop"] },
    { title: "Three lakes of Ladakh", tier: "Premium", photo: "ladakh-moriri", stops: [["Leh", 3], ["Nubra", 2], ["Pangong", 2], ["Tso Moriri", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Pangong, Tso Moriri and Tso Kar", "Well-equipped lake camps", "Experienced high-altitude driver"] },
    { title: "Leh short break and monasteries", tier: "Budget", photo: "ladakh-thiksey", stops: [["Leh", 4]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Thiksey at morning prayer", "Leh Palace and Shanti Stupa", "Sham Valley day drive"] },
    { title: "Manali to Leh road trip", tier: "Comfort", photo: "ladakh-leh", stops: [["Manali", 1], ["Keylong", 1], ["Leh", 3], ["Nubra", 1], ["Pangong", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Atal Tunnel and Baralacha La", "More Plains and Tanglang La", "Gradual altitude gain by road"] },
  ],
  faqs: [
    { q: "How do I avoid altitude sickness in Ladakh?", a: "Rest fully for your first day or two in Leh, drink plenty of water and skip alcohol early on. Our flight routes all build this in. Check with your doctor first if you have heart or lung conditions, or if you are pregnant." },
    { q: "Do I need permits for Nubra and Pangong?", a: "Yes, protected areas in Ladakh need permits and the requirements differ for Indian and foreign travellers. We arrange them with your package when we have your ID details." },
    { q: "Can I take children or older parents to Ladakh?", a: "Often yes, with a slower plan and medical advice first. We generally avoid Pangong and Tso Moriri overnight stays for infants and for anyone with heart or breathing conditions." },
    { q: "Does my phone work in Ladakh?", a: "Coverage is limited outside Leh, and prepaid SIMs from other states usually do not work there. A postpaid connection is more reliable, and you should expect no signal at some lake camps." },
  ],
  related: ["kashmir-tour-packages", "himachal-tour-packages", "sikkim-darjeeling-tour-packages", "meghalaya-tour-packages"],
};
