import type { Destination } from "../types";

export const honeymoon: Destination = {
  slug: "himachal-honeymoon-packages",
  name: "Honeymoon",
  kind: "theme",
  blurb: "Snow, pine forest and time for two",
  metaTitle: "Himachal honeymoon packages: Shimla, Manali, Dalhousie, Jibhi",
  metaDescription: "Himachal honeymoon packages with valley-view rooms, a private cab, room decoration and a candlelit dinner. Shimla, Manali, Dalhousie and Jibhi. Call or WhatsApp.",
  heading: "Himachal honeymoon packages",
  intro: "Snowy mornings in Manali, a quiet wooden cottage in Jibhi or a slow walk through Dalhousie's pine forest. We book good rooms and a private cab, add a few small surprises and leave you plenty of free time.",
  heroPhoto: "manali-oldmanali",
  cardPhoto: "dalhousie-khajjiar",
  facts: [
    { label: "Good trip length", value: "4 to 7 nights" },
    { label: "Snow months", value: "December to February" },
    { label: "Book ahead", value: "2 to 3 months if possible" },
    { label: "Tell us about", value: "Dates, budget, food" },
  ],
  months: {
    ratings: ["best", "best", "okay", "best", "best", "best", "avoid", "avoid", "okay", "best", "best", "best"],
    note: "December to February for snow and cosy stays. April to June and October to November for green valleys and clear views. Wedding season from November to February fills good rooms early.",
  },
  placesTitle: "Choosing where to go",
  places: [
    { name: "Manali", href: "/manali-tour-packages", text: "Snow, Old Manali cafes and valley-view rooms." },
    { name: "Shimla and Kufri", href: "/shimla-tour-packages", text: "Easy to reach, with colonial charm and winter snow." },
    { name: "Dalhousie and Khajjiar", href: "/dalhousie-khajjiar-tour-packages", text: "Quiet hills and a meadow to yourselves early in the morning." },
    { name: "Jibhi", href: "/jibhi-tirthan-tour-packages", text: "Wooden cottages by a stream, for couples who want peace." },
  ],
  packages: [
    { title: "Shimla Manali honeymoon", photo: "manali-solang", stops: [["Shimla", 2], ["Manali", 3]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Room decoration on arrival", "Candlelit dinner in Manali", "Solang Valley"] },
    { title: "Manali snow honeymoon", photo: "manali-hadimba", stops: [["Manali", 4]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Valley-view room", "Snow day at Solang or Sissu", "Honeymoon cake"] },
    { title: "Dalhousie and Khajjiar for two", photo: "dalhousie-khajjiar", stops: [["Dalhousie", 2], ["Khajjiar", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Night beside Khajjiar meadow", "Dainkund viewpoint", "Private cab throughout"] },
    { title: "Manali and Jibhi cottage escape", photo: "jibhi-village", stops: [["Manali", 3], ["Jibhi", 2]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Wooden cottage by the stream", "Bonfire dinner", "Jalori Pass, road permitting"] },
    { title: "Dharamshala and Dalhousie honeymoon", photo: "dharamshala-mcleod", stops: [["Dharamshala", 2], ["Dalhousie", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Cafe hopping in McLeod Ganj", "Khajjiar day", "Mountain-view rooms"] },
  ],
  faqs: [
    { q: "What do you include for couples?", a: "Usually a private cab, room decoration and one special dinner, depending on the hotel. Your written plan lists exactly what is included." },
    { q: "Where will we find snow in December or January?", a: "Manali, Solang, Sissu, Kufri, Narkanda and Dalhousie usually get snow in these months, though it varies each year." },
    { q: "Can we change our dates after booking?", a: "Often yes, depending on the hotel's rules. The change and cancellation terms are in your quote before you pay." },
    { q: "Is Volvo or a private cab better for a honeymoon?", a: "A private cab is more comfortable and lets you stop when you like. Some couples take a Volvo up and use a cab in the hills to save money." },
  ],
  related: ["manali-tour-packages", "jibhi-tirthan-tour-packages", "dalhousie-khajjiar-tour-packages", "shimla-manali-tour-packages"],
};
