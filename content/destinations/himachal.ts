import type { Destination } from "../types";

export const himachal: Destination = {
  slug: "himachal-tour-packages",
  name: "All of Himachal",
  kind: "theme",
  blurb: "Every Himachal trip in one place",
  metaTitle: "Himachal tour packages: Shimla, Manali, Dharamshala, Spiti and more",
  metaDescription: "Himachal Pradesh holiday packages from Delhi and Chandigarh: Shimla, Manali, Dharamshala, Dalhousie, Kasol, Jibhi, Spiti and Bir. Call or WhatsApp for a price.",
  heading: "Himachal tour packages",
  intro: "From the toy train in Shimla to the monasteries of Spiti, we plan Himachal trips around your dates, your group and how much time you want in the car. Pick a route below or tell us what you have in mind.",
  heroPhoto: "manali-solang",
  cardPhoto: "himachal-kullu",
  facts: [
    { label: "Start from", value: "Delhi or Chandigarh" },
    { label: "Good trip length", value: "4 to 9 nights" },
    { label: "Getting around", value: "Private cab or Volvo" },
    { label: "Snow months", value: "December to February" },
  ],
  months: {
    ratings: ["okay", "okay", "best", "best", "best", "best", "avoid", "avoid", "best", "best", "best", "okay"],
    note: "March to June and September to November suit most of Himachal. Winter brings snow to Shimla, Manali and Dalhousie. Spiti and the high passes are best from June to September. Avoid July and August if you can, as landslides are common.",
  },
  placesTitle: "Choosing where to go",
  places: [
    { name: "Shimla and Manali", href: "/shimla-manali-tour-packages", text: "The classic first trip, with snow, adventure and easy sightseeing." },
    { name: "Dharamshala and Bir", href: "/dharamshala-mcleodganj-tour-packages", text: "Tibetan culture, the Triund trek and paragliding." },
    { name: "Dalhousie and Khajjiar", href: "/dalhousie-khajjiar-tour-packages", text: "Quiet pine hills, good for families and older travellers." },
    { name: "Jibhi and Shangarh", href: "/jibhi-tirthan-tour-packages", text: "Offbeat valleys with wooden homestays and forest walks." },
    { name: "Kasol and Parvati Valley", href: "/kasol-tour-packages", text: "Riverside cafes, hot springs and the Kheerganga trek." },
    { name: "Spiti and Kinnaur", href: "/spiti-valley-tour-packages", text: "The big road trip through high desert and orchard valleys." },
  ],
  packages: [
    { title: "Shimla Manali classic", photo: "shimla-mall", stops: [["Shimla", 2], ["Manali", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Kufri day trip", "Solang Valley", "Hadimba Temple"] },
    { title: "Dharamshala, Dalhousie and Bir", photo: "dharamshala-mcleod", stops: [["Dharamshala", 2], ["Bir", 1], ["Dalhousie", 2]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["McLeod Ganj", "Paragliding at Bir, in season", "Khajjiar meadow"] },
    { title: "Manali, Kasol and Jibhi", photo: "kasol-village", stops: [["Manali", 2], ["Kasol", 2], ["Jibhi", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Atal Tunnel to Sissu", "Manikaran Sahib", "Jalori Pass, road permitting"] },
    { title: "Grand Himachal tour", photo: "manali-naggar", stops: [["Shimla", 2], ["Manali", 3], ["Dharamshala", 2], ["Dalhousie", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Four regions in one trip", "Toy train option", "Khajjiar and McLeod Ganj"] },
    { title: "Spiti circuit via Kinnaur", photo: "spiti-key", stops: [["Shimla", 1], ["Sangla", 1], ["Kalpa", 1], ["Tabo", 1], ["Kaza", 3], ["Manali", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Chitkul village", "Key Monastery", "Chandratal, road permitting"] },
  ],
  faqs: [
    { q: "What is the best time to visit Himachal?", a: "March to June and September to November for most places. December to February for snow. June to September for Spiti and the high passes." },
    { q: "How do we travel from Delhi?", a: "By overnight Volvo bus, by train to Chandigarh or Kalka, or by flight to Chandigarh, Kangra or Bhuntar. We add a private cab for the hills." },
    { q: "Can you change a package?", a: "Yes, every package can change. Swap hotels, add a night or drop a stop, and we will price your version." },
    { q: "What is included in the price?", a: "Your written quote lists the hotels, meals, vehicle type and sightseeing, plus taxes and anything not covered, before you pay." },
  ],
  related: ["shimla-manali-tour-packages", "himachal-honeymoon-packages", "himachal-family-tour-packages", "spiti-valley-tour-packages"],
};
