import type { Destination } from "../types";

export const dharamshala: Destination = {
  slug: "dharamshala-mcleodganj-tour-packages",
  name: "Dharamshala",
  kind: "place",
  blurb: "McLeod Ganj, Triund and Kangra tea",
  metaTitle: "Dharamshala McLeod Ganj tour packages: Triund, Bhagsu, Palampur",
  metaDescription: "Dharamshala and McLeod Ganj packages with the Dalai Lama Temple, Bhagsu waterfall, Triund trek and Palampur tea gardens. Call or WhatsApp for a price.",
  heading: "Dharamshala and McLeod Ganj tour packages",
  intro: "Tibetan monasteries and momos in McLeod Ganj, the Dhauladhar range rising straight behind town, a day hike to Triund and tea gardens in Palampur. Calm, easy to reach and good value.",
  heroPhoto: "dharamshala-mcleod",
  cardPhoto: "dharamshala-mcleod",
  facts: [
    { label: "Fly into", value: "Kangra airport (Gaggal)" },
    { label: "By train", value: "Pathankot, about 3 hours away" },
    { label: "Good trip length", value: "3 to 5 nights" },
    { label: "Best for", value: "Couples, friends, culture" },
  ],
  months: {
    ratings: ["okay", "okay", "best", "best", "best", "okay", "avoid", "avoid", "okay", "best", "best", "okay"],
    note: "March to May and October to November are clear and pleasant, and good for Triund. Dharamshala is one of the wettest places in Himachal, so July and August bring very heavy rain. Winters are cold with snow on the peaks.",
  },
  placesTitle: "In and around Dharamshala",
  places: [
    { name: "McLeod Ganj", text: "The Tsuglagkhang complex with the Dalai Lama's temple, Tibetan markets and cafes." },
    { name: "Bhagsu and Dharamkot", text: "A short walk to Bhagsunag waterfall, and quiet cafes up the hill in Dharamkot." },
    { name: "Triund", text: "A popular day hike or overnight camp with close views of the Dhauladhar range." },
    { name: "HPCA Stadium", text: "A cricket ground with snow peaks behind it, open to visitors on non-match days." },
    { name: "Palampur and Baijnath", text: "Tea gardens and factory visits, and an old stone Shiva temple at Baijnath." },
  ],
  packages: [
    { title: "Dharamshala and McLeod Ganj break", photo: "dharamshala-tsuglag", stops: [["McLeod Ganj", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Dalai Lama Temple", "Bhagsu waterfall walk", "HPCA Stadium"] },
    { title: "Triund trek weekend", photo: "dharamshala-triund", stops: [["McLeod Ganj", 1], ["Triund", 1], ["McLeod Ganj", 1]], includes: ["hotel", "camping", "meals", "guide"], highlights: ["Guided trek from Galu Devi", "Tent and meals at the top", "Sunset over the Kangra valley"] },
    { title: "Dharamshala and Palampur", photo: "palampur-tea", stops: [["Dharamshala", 2], ["Palampur", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Tea garden walk and tasting", "Baijnath Temple", "Norbulingka Institute"] },
    { title: "Dharamshala, Bir and Palampur", photo: "dharamshala-bhagsu", stops: [["Dharamshala", 2], ["Bir", 1], ["Palampur", 1]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Tandem paragliding at Bir, in season", "Tibetan colony and monasteries", "Tea gardens"] },
  ],
  faqs: [
    { q: "What is the difference between Dharamshala and McLeod Ganj?", a: "Lower Dharamshala is the main town, and McLeod Ganj sits higher up the hill, about 10 km away. Most visitors stay in or near McLeod Ganj for the monasteries, cafes and treks." },
    { q: "How hard is the Triund trek?", a: "It is about 9 km each way from Galu Devi temple, steady and rocky in places. Most fit beginners manage it in 4 to 6 hours. Avoid it in heavy rain or deep snow." },
    { q: "Can I see the Dalai Lama?", a: "He gives public teachings on some dates, announced in advance. We cannot promise it, but tell us your dates and we will check the schedule." },
    { q: "How do I reach Dharamshala?", a: "Fly into Kangra airport, about 15 km away, or take a train to Pathankot. Overnight Volvo buses also run from Delhi." },
  ],
  related: ["bir-billing-tour-packages", "dalhousie-khajjiar-tour-packages", "himachal-tour-packages", "himachal-honeymoon-packages"],
};
