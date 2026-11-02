import type { Destination } from "../types";

export const kerala: Destination = {
  slug: "kerala-tour-packages",
  name: "Kerala",
  kind: "india",
  moods: ["beach", "wildlife", "honeymoon", "family"],
  blurb: "Houseboats, tea hills and slow mornings",
  metaTitle: "Kerala tour packages: Munnar, Thekkady, Alleppey, Varkala",
  metaDescription: "Kerala holiday packages with Munnar tea hills, Thekkady wildlife, an Alleppey houseboat and beach time in Varkala or Kovalam. Call or enquire for a price.",
  heading: "Kerala tour packages",
  intro: "Start in the tea hills, spend a night drifting on a houseboat and finish with your feet in the sand. Kerala is compact enough for one easy loop, starting and ending at Kochi or Trivandrum.",
  heroPhoto: "kerala-alleppey",
  stampPhoto: "kerala-alleppey",
  facts: [
    { label: "Fly into", value: "Kochi (COK) or Trivandrum (TRV)" },
    { label: "Good trip length", value: "5 to 8 nights" },
    { label: "Best for", value: "Couples and families" },
    { label: "Don't miss", value: "A night on the backwaters" },
  ],
  months: {
    ratings: ["best", "best", "best", "okay", "okay", "avoid", "avoid", "okay", "best", "best", "best", "best"],
    note: "September to March is pleasant across the state, with December and January the busiest. April and May are humid on the coast but fine in Munnar. June and July bring the full monsoon, which is lovely for Ayurveda and poor for beaches.",
  },
  placesTitle: "The classic Kerala loop",
  places: [
    { name: "Munnar", text: "Rolling tea estates, misty viewpoints and Eravikulam National Park, home of the Nilgiri tahr." },
    { name: "Thekkady", text: "Boating on Periyar Lake, spice plantation walks and Kathakali shows in town." },
    { name: "Alleppey and Kumarakom", text: "Private houseboats cruising past paddy fields and village canals, with meals cooked on board." },
    { name: "Varkala and Kovalam", text: "Red cliffs above the sea at Varkala, and lighthouse views and calm bays at Kovalam." },
    { name: "Wayanad", text: "Green hills in the north with Edakkal Caves, the Chembra Peak trek and quiet plantation stays." },
  ],
  packages: [
    { title: "Munnar and Alleppey short loop", tier: "Budget", photo: "kerala-munnar", stops: [["Munnar", 2], ["Alleppey", 1]], includes: ["hotel", "houseboat", "meals", "cab"], highlights: ["Tea museum and estate viewpoints", "One night on a houseboat", "Kochi drop at the end"] },
    { title: "Classic Kerala in a week", tier: "Comfort", photo: "kerala-alleppey", stops: [["Munnar", 2], ["Thekkady", 1], ["Alleppey", 1], ["Kovalam", 2]], includes: ["hotel", "houseboat", "meals", "cab"], highlights: ["Periyar boat ride", "Private houseboat with all meals", "Kovalam beach days"] },
    { title: "Kerala honeymoon on the backwaters", tier: "Premium", photo: "kerala-thekkady", stops: [["Munnar", 3], ["Thekkady", 1], ["Kumarakom", 1], ["Varkala", 2]], includes: ["hotel", "houseboat", "meals", "cab"], highlights: ["Plantation-view rooms", "Candlelit dinner on the houseboat", "Cliff-top stay at Varkala"] },
    { title: "Kerala with children", tier: "Comfort", photo: "kerala-varkala", stops: [["Kochi", 1], ["Munnar", 2], ["Alleppey", 1], ["Marari", 2]], includes: ["hotel", "houseboat", "meals", "cab"], highlights: ["Short drives between stops", "Family cabin on the houseboat", "Quiet Marari beach"] },
    { title: "North Kerala: Wayanad and Kozhikode", tier: "Comfort", photo: "kerala-wayanad", stops: [["Wayanad", 3], ["Kozhikode", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Edakkal Caves and Banasura Dam", "Chembra Peak walk, fitness permitting", "Kozhikode beach and food"] },
  ],
  faqs: [
    { q: "How long should a Kerala trip be?", a: "Five or six nights cover Munnar, Thekkady and a houseboat. Add two nights for a beach. If you only have three or four nights, choose Munnar and Alleppey." },
    { q: "Are houseboats private?", a: "Our packages use private boats with an attached bathroom, crew and meals on board. Air conditioning hours vary, so we will tell you the exact details before you pay." },
    { q: "Is Kerala good in the monsoon?", a: "It is green and quiet, and many people go for Ayurveda treatments. Beach swimming is unsafe in heavy seas, and some hill roads can be affected by landslides, so we plan with care." },
    { q: "Which airport should I use?", a: "Fly into Kochi for Munnar first and out of Trivandrum after the beach, or use Kochi both ways. Open-jaw flights usually save half a day of driving." },
  ],
  related: ["goa-tour-packages", "andaman-tour-packages", "honeymoon-packages", "bali-tour-packages"],
};
