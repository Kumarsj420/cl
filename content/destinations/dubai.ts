import type { Destination } from "../types";

export const dubai: Destination = {
  slug: "dubai-tour-packages",
  name: "Dubai",
  kind: "abroad",
  moods: ["family", "culture", "abroad", "honeymoon"],
  blurb: "Tall towers, big dunes, short flights",
  metaTitle: "Dubai tour packages from India: Burj Khalifa and desert safari",
  metaDescription: "Dubai holiday packages from India with Burj Khalifa, desert safari, Dhow cruise and an Abu Dhabi day trip. Visa help available. Call or enquire for a price.",
  heading: "Dubai tour packages",
  intro: "Burj Khalifa at sunset, dune bashing and barbecue in the desert, and a wooden abra across the Creek. It is only a short flight from most Indian cities, so even four nights feels like a proper trip.",
  heroPhoto: "dubai-burj",
  stampPhoto: "dubai-burj",
  facts: [
    { label: "Fly into", value: "Dubai (DXB)" },
    { label: "Good trip length", value: "4 to 6 nights" },
    { label: "Best for", value: "Families and shoppers" },
    { label: "Before you go", value: "Visa needed before travel" },
  ],
  months: {
    ratings: ["best", "best", "best", "okay", "avoid", "avoid", "avoid", "avoid", "avoid", "okay", "best", "best"],
    note: "November to March is warm and sunny, perfect for the outdoors and for the beach. April and October are hot. From May to September it often passes 40°C, so plan your days indoors.",
  },
  placesTitle: "What fills your days",
  places: [
    { name: "Downtown Dubai", text: "Burj Khalifa's observation decks, the Dubai Fountain and one of the world's largest malls." },
    { name: "The desert", text: "Dune drives, camel rides and henna at a camp, then a barbecue dinner under the stars." },
    { name: "Old Dubai", text: "Abra rides on the Creek, the gold and spice souks and the Al Fahidi lanes." },
    { name: "Marina and Palm Jumeirah", text: "Dhow dinner cruises, Atlantis, Aquaventure Waterpark and beach clubs." },
    { name: "Abu Dhabi", text: "A day trip to the marble Sheikh Zayed Grand Mosque, Ferrari World and the Louvre Abu Dhabi." },
  ],
  packages: [
    { title: "Dubai essentials", tier: "Budget", photo: "dubai-marina", stops: [["Dubai", 4]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Half-day city tour", "Desert safari with dinner", "Marina dhow cruise"] },
    { title: "Dubai and Abu Dhabi", tier: "Comfort", photo: "dubai-abudhabi", stops: [["Dubai", 4], ["Abu Dhabi", 1]], includes: ["hotel", "meals", "cab", "sightseeing", "visa"], highlights: ["Burj Khalifa observation deck", "Sheikh Zayed Grand Mosque", "Yas Island time"] },
    { title: "Dubai family fun", tier: "Comfort", photo: "dubai-desert", stops: [["Dubai", 5]], includes: ["hotel", "meals", "cab", "activity", "visa"], highlights: ["Aquaventure or Motiongate day", "Desert safari with camel ride", "Family room options"] },
    { title: "Dubai couple's luxury", tier: "Premium", photo: "dubai-burj", stops: [["Dubai", 5]], includes: ["hotel", "meals", "cab", "activity", "visa"], highlights: ["Hotel near Burj Khalifa or the Palm", "Private dhow dinner", "Burj Khalifa at sunset"] },
    { title: "Old and new Dubai long weekend", tier: "Budget", photo: "dubai-creek", stops: [["Dubai", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Abra ride and souks", "Dubai Mall and the fountains", "Museum of the Future entry option"] },
  ],
  faqs: [
    { q: "Do Indians need a visa for Dubai?", a: "Most Indian passport holders need a visa arranged before travel, though some with US, UK, EU or similar visas may be eligible on arrival. We can help with the application once your dates are set." },
    { q: "What should I wear?", a: "Everyday holiday clothes are fine in most places. Swimwear is for pools and beaches only. At mosques, cover shoulders and legs. Women will also need a headscarf, which is often available at the entrance." },
    { q: "Is Dubai good with children?", a: "It is one of the easiest places to take them, with water parks, safe streets and plenty of indoor activities in the hot months." },
    { q: "Is it too expensive?", a: "It depends on your hotel and activity choices. Four nights with a mid-range hotel and a safari is usually within reach. Tell us your budget and we will build around it." },
  ],
  related: ["thailand-tour-packages", "bali-tour-packages", "family-holiday-packages", "rajasthan-tour-packages"],
};
