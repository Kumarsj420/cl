import type { Destination } from "../types";

export const meghalaya: Destination = {
  slug: "meghalaya-tour-packages",
  name: "Meghalaya and Assam",
  kind: "india",
  moods: ["mountains", "wildlife", "family"],
  blurb: "Root bridges and glass-clear rivers",
  metaTitle: "Meghalaya tour packages: Shillong, Cherrapunji, Dawki, Kaziranga",
  metaDescription: "Meghalaya and Assam packages with Shillong, Cherrapunji, the living root bridges, Dawki and Kaziranga rhinos. Call or send an enquiry for a price.",
  heading: "Meghalaya and Assam tour packages",
  intro: "Walk across bridges grown from living tree roots, float on a river so clear the boats appear to hover, and head to Kaziranga for one-horned rhinos. All of it starts from Guwahati.",
  heroPhoto: "meghalaya-dawki",
  stampPhoto: "meghalaya-rootbridge",
  facts: [
    { label: "Fly into", value: "Guwahati (GAU)" },
    { label: "Good trip length", value: "5 to 8 nights" },
    { label: "Best for", value: "Curious travellers and walkers" },
    { label: "Kaziranga's season", value: "November to April" },
  ],
  months: {
    ratings: ["best", "best", "best", "best", "okay", "avoid", "avoid", "okay", "okay", "best", "best", "best"],
    note: "October to April is dry, and from about November Dawki's river is at its clearest. The monsoon makes the waterfalls huge, but rain can disrupt days. Kaziranga closes for the wet season.",
  },
  placesTitle: "What makes this trip different",
  places: [
    { name: "Shillong", text: "Pine-lined hills, Umiam Lake on the way in, plus Ward's Lake and a lively cafe and music scene." },
    { name: "Cherrapunji (Sohra)", text: "One of the wettest places on Earth, with Nohkalikai and Seven Sisters falls and limestone caves." },
    { name: "Nongriat", text: "The famous double-decker root bridge, reached by about 3,000 steps each way. Worth it if your knees agree." },
    { name: "Dawki and Mawlynnong", text: "Boat rides on the Umngot river at the Bangladesh border, and a village known for its spotless lanes." },
    { name: "Kaziranga", text: "A UNESCO-listed park in Assam with most of the world's one-horned rhinos, seen by jeep or by elephant." },
  ],
  packages: [
    { title: "Shillong and Cherrapunji", tier: "Budget", photo: "meghalaya-nohkalikai", stops: [["Shillong", 2], ["Cherrapunji", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Umiam Lake on arrival", "Nohkalikai and Seven Sisters falls", "Mawsmai Cave"] },
    { title: "Meghalaya highlights", tier: "Comfort", photo: "meghalaya-dawki", stops: [["Shillong", 2], ["Cherrapunji", 2], ["Shillong", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Boat ride on the Umngot at Dawki", "Mawlynnong village", "Root bridge walk"] },
    { title: "Root bridge and rivers", tier: "Comfort", photo: "meghalaya-rootbridge", stops: [["Shillong", 2], ["Cherrapunji", 1], ["Nongriat", 2], ["Dawki", 1]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Guesthouse in Nongriat village", "Double-decker root bridge", "Night by the river in Dawki"] },
    { title: "Rhinos and rain: Kaziranga with Meghalaya", tier: "Premium", photo: "meghalaya-kaziranga", stops: [["Kaziranga", 2], ["Shillong", 2], ["Cherrapunji", 2]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Jeep safari in Kaziranga", "Tea estates on the Assam drive", "Dawki and Mawlynnong day"] },
    { title: "Shillong family getaway", tier: "Comfort", photo: "meghalaya-umiam", stops: [["Shillong", 3], ["Cherrapunji", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Boating at Umiam Lake", "Easy cave and waterfall stops", "No long walks required"] },
  ],
  faqs: [
    { q: "How fit do I need to be for the root bridges?", a: "The double-decker bridge at Nongriat takes about 3,000 steps each way, and the climb back is demanding. Easier root bridges near Mawlynnong and Riwai need only a short walk, so those suit children and older travellers." },
    { q: "When is Dawki's water clear?", a: "Usually November to April. The river turns green and murky in the monsoon, and boating can stop." },
    { q: "How far is Shillong from Guwahati airport?", a: "About 3 to 4 hours by road. Cherrapunji is roughly 2 more hours beyond Shillong. We arrange the cab with your package." },
    { q: "Do I need a permit for Meghalaya?", a: "Indian tourists generally do not need an entry permit, but rules can change, and Meghalaya may ask for online tourist registration. Foreign travellers should check too, especially near the border. We confirm when you book." },
  ],
  related: ["sikkim-darjeeling-tour-packages", "kerala-tour-packages", "ladakh-tour-packages", "family-holiday-packages"],
};
