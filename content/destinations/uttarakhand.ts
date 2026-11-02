import type { Destination } from "../types";

export const uttarakhand: Destination = {
  slug: "uttarakhand-tour-packages",
  name: "Uttarakhand",
  kind: "india",
  moods: ["snow", "mountains", "wildlife", "family"],
  blurb: "Lakes, rafting and tigers near Delhi",
  metaTitle: "Uttarakhand tour packages: Nainital, Rishikesh, Corbett, Auli",
  metaDescription: "Uttarakhand packages for Nainital, Mussoorie, Rishikesh, Jim Corbett and Auli. Short breaks and family road trips from Delhi. Call or enquire for a price.",
  heading: "Uttarakhand tour packages",
  intro: "Row across Naini Lake, raft the Ganga at Rishikesh or go looking for tigers in Corbett, all within a day's drive of Delhi. Good for long weekends and school holidays alike.",
  heroPhoto: "uttarakhand-nainital",
  stampPhoto: "uttarakhand-rishikesh",
  facts: [
    { label: "Start from", value: "Delhi or Dehradun" },
    { label: "Good trip length", value: "3 to 7 nights" },
    { label: "Best for", value: "Families and short breaks" },
    { label: "Corbett's core season", value: "Mid November to mid June" },
  ],
  months: {
    ratings: ["okay", "okay", "best", "best", "best", "best", "avoid", "avoid", "okay", "best", "best", "okay"],
    note: "March to June and October to November are mild and clear. January and February bring snow to Auli and Mussoorie's upper reaches. Monsoon months make mountain roads slow and risky.",
  },
  placesTitle: "Places to choose from",
  places: [
    { name: "Nainital and Bhimtal", text: "A town built around a green lake, with boating, cable car views and quieter lakes nearby." },
    { name: "Rishikesh", text: "White-water rafting, riverside camps and the evening Ganga aarti at Parmarth Niketan and Triveni Ghat." },
    { name: "Mussoorie", text: "Long walks on Camel's Back Road and old Landour, plus a short drive to Kempty Falls." },
    { name: "Jim Corbett", text: "India's oldest national park. Jeep safaris for tigers, elephants and birds across several zones." },
    { name: "Auli", text: "Ski slopes and Himalayan views including Nanda Devi, reached by one of the country's longest ropeways." },
  ],
  packages: [
    { title: "Nainital and Bhimtal lake break", tier: "Budget", photo: "uttarakhand-nainital", stops: [["Nainital", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Boating on Naini Lake", "Bhimtal and Sattal drive", "Snow View point ropeway"] },
    { title: "Rishikesh camp and rafting", tier: "Budget", photo: "uttarakhand-rishikesh", stops: [["Rishikesh", 2]], includes: ["hotel", "meals", "activity"], highlights: ["Riverside camp with bonfire", "Guided rafting stretch on the Ganga", "Evening aarti at the ghat"] },
    { title: "Corbett and Nainital with kids", tier: "Comfort", photo: "uttarakhand-corbett", stops: [["Jim Corbett", 2], ["Nainital", 2]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["One jeep safari in the park", "Resort with a pool", "Lake day with boating"] },
    { title: "Mussoorie and Rishikesh", tier: "Comfort", photo: "uttarakhand-mussoorie", stops: [["Mussoorie", 3], ["Rishikesh", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Landour walks and bakeries", "Kempty Falls", "Ganga aarti and rafting option"] },
    { title: "Auli snow and Himalayan views", tier: "Premium", photo: "uttarakhand-auli", stops: [["Rishikesh", 1], ["Joshimath", 1], ["Auli", 3]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Beginner ski session, in season", "Long ropeway ride", "Views of Nanda Devi"] },
  ],
  faqs: [
    { q: "What is the best short trip from Delhi?", a: "Rishikesh or Nainital work well for two or three nights. Both are about 6 to 7 hours by road, or you can take a morning train part of the way." },
    { q: "When is Corbett open?", a: "Dhikala's core zone usually opens from mid November to mid June. Zones like Jhirna and Dhela stay open longer, though monsoon closures apply. Safari permits are limited, so book early." },
    { q: "How old do children need to be for rafting?", a: "Operators usually set a minimum age of about 14 and a basic fitness requirement. Younger children can enjoy camp activities and short boat rides." },
    { q: "Do you include Char Dham Yatra?", a: "Not in these packages, but we can plan it separately. Tell us your dates and how many are travelling." },
  ],
  related: ["himachal-tour-packages", "family-holiday-packages", "kashmir-tour-packages", "rajasthan-tour-packages"],
};
