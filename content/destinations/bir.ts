import type { Destination } from "../types";

export const bir: Destination = {
  slug: "bir-billing-tour-packages",
  name: "Bir Billing",
  kind: "place",
  blurb: "Paragliding over the Kangra valley",
  metaTitle: "Bir Billing tour packages with tandem paragliding",
  metaDescription: "Bir Billing packages with tandem paragliding from Billing, the Tibetan colony and monasteries in Bir, and cafes. Call or WhatsApp for a price.",
  heading: "Bir Billing tour packages",
  intro: "Take off from Billing with a trained pilot and glide down over tea gardens and villages to land in Bir. Spend the rest of the time in Tibetan monasteries, small cafes and quiet walks.",
  heroPhoto: "bir-paragliding",
  cardPhoto: "bir-paragliding",
  facts: [
    { label: "Fly into", value: "Kangra airport (Gaggal)" },
    { label: "Good trip length", value: "2 to 3 nights" },
    { label: "Best for", value: "Friends and adventure" },
    { label: "Flying season", value: "October to June, weather permitting" },
  ],
  months: {
    ratings: ["okay", "okay", "best", "best", "best", "okay", "avoid", "avoid", "okay", "best", "best", "okay"],
    note: "October, November and March to May have the most reliable flying. Flights stop during the monsoon, usually from July to mid September. Winter flying is possible on clear days but cold.",
  },
  placesTitle: "What to do",
  places: [
    { name: "Tandem paragliding", text: "Flights take off from Billing and land in Bir, usually 15 to 30 minutes in the air. A licensed pilot does the flying." },
    { name: "Tibetan colony", text: "Chokling and Palpung Sherabling monasteries, a stupa and handmade crafts." },
    { name: "Bir cafes", text: "A small, relaxed cafe scene near the landing site, popular with travellers and pilots." },
    { name: "Baijnath and Palampur", text: "An old stone Shiva temple and tea gardens, both short drives away." },
  ],
  packages: [
    { title: "Bir Billing paragliding weekend", photo: "bir-paragliding", stops: [["Bir", 2]], includes: ["hotel", "meals", "activity", "sightseeing"], highlights: ["Tandem flight from Billing", "Monastery visits", "Cafe evening in Bir"] },
    { title: "Bir, Dharamshala and McLeod Ganj", photo: "bir-billing", stops: [["Bir", 2], ["McLeod Ganj", 2]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Tandem paragliding", "Dalai Lama Temple", "Bhagsu waterfall"] },
    { title: "Bir and Palampur tea country", photo: "palampur-tea", stops: [["Bir", 2], ["Palampur", 1]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Paragliding flight", "Tea garden walk", "Baijnath Temple"] },
    { title: "Bir Billing camping and flight", photo: "bir-billing", stops: [["Billing", 1], ["Bir", 1]], includes: ["camping", "meals", "activity", "guide"], highlights: ["Night camp near Billing", "Sunrise over the valley", "Tandem flight down to Bir"] },
  ],
  faqs: [
    { q: "Do I need experience to paraglide?", a: "No. In a tandem flight a licensed pilot flies and you sit in front. Operators set weight limits and some health restrictions, and flights depend on the weather that day." },
    { q: "Is paragliding in Bir safe?", a: "Bir Billing is one of India's best-known flying sites. We book registered operators and certified pilots with proper equipment. As with any adventure sport, there is some risk, and flights are cancelled in bad weather." },
    { q: "Can children fly?", a: "Operators usually take children only above a minimum age and weight, with a guardian's consent. Ask us and we will check with the operator." },
    { q: "Can we do it in a day from Dharamshala?", a: "Yes, Bir is about 2 hours from Dharamshala. Staying a night gives a spare morning if the weather stops flights on the first day." },
  ],
  related: ["dharamshala-mcleodganj-tour-packages", "manali-tour-packages", "kasol-tour-packages", "himachal-tour-packages"],
};
