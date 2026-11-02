import type { Destination } from "../types";

export const sikkimDarjeeling: Destination = {
  slug: "sikkim-darjeeling-tour-packages",
  name: "Sikkim and Darjeeling",
  kind: "india",
  moods: ["snow", "mountains", "culture", "family"],
  blurb: "Tea, monasteries and Kanchenjunga",
  metaTitle: "Sikkim and Darjeeling tour packages: Gangtok, Pelling, Lachung",
  metaDescription: "Sikkim and Darjeeling packages through Gangtok, Tsomgo Lake, Pelling and tea country, with Kanchenjunga views. Call or send an enquiry for a price.",
  heading: "Sikkim and Darjeeling tour packages",
  intro: "See sunrise hit Kanchenjunga from Tiger Hill, ride the toy train, and drive up to a frozen lake above Gangtok. This corner of the eastern Himalaya is tidy, friendly and full of momos.",
  heroPhoto: "sikkim-darjeeling",
  stampPhoto: "sikkim-tsomgo",
  facts: [
    { label: "Fly into", value: "Bagdogra (IXB)" },
    { label: "Good trip length", value: "5 to 8 nights" },
    { label: "Best for", value: "Families and slow travellers" },
    { label: "Don't miss", value: "Tiger Hill at sunrise" },
  ],
  months: {
    ratings: ["okay", "okay", "best", "best", "best", "avoid", "avoid", "avoid", "okay", "best", "best", "okay"],
    note: "March to May has rhododendrons in bloom, and October to November has the clearest mountain views. December to February is cold with snow up high. June to August brings heavy rain and road trouble.",
  },
  placesTitle: "Places on the route",
  places: [
    { name: "Darjeeling", text: "Tea estates, the UNESCO-listed Himalayan toy train, Batasia Loop and Tiger Hill." },
    { name: "Gangtok", text: "A walkable MG Marg, Rumtek Monastery and permit-only drives to Tsomgo Lake and Nathu La." },
    { name: "Pelling", text: "Close-up Kanchenjunga views, Pemayangtse Monastery and a glass skywalk." },
    { name: "Lachung and Yumthang", text: "North Sikkim's valley of flowers in spring. Roads and permits vary each season, and we confirm access before booking." },
    { name: "Kalimpong", text: "A quieter hill town of nurseries, old churches and viewpoints between Darjeeling and Gangtok." },
  ],
  packages: [
    { title: "Darjeeling tea and toy train", tier: "Budget", photo: "sikkim-train", stops: [["Darjeeling", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Tiger Hill sunrise", "Short toy train joyride", "Tea estate walk and tasting"] },
    { title: "Gangtok and Darjeeling", tier: "Comfort", photo: "sikkim-darjeeling", stops: [["Gangtok", 3], ["Darjeeling", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Tsomgo Lake, with permit", "Rumtek Monastery", "Batasia Loop and Peace Pagoda"] },
    { title: "Sikkim grand loop", tier: "Comfort", photo: "sikkim-gangtok", stops: [["Gangtok", 3], ["Pelling", 2], ["Darjeeling", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Pemayangtse Monastery", "Kanchenjunga viewpoints", "Tea country drive"] },
    { title: "North Sikkim and Yumthang", tier: "Premium", photo: "sikkim-yumthang", stops: [["Gangtok", 2], ["Lachung", 2], ["Gangtok", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Yumthang Valley in bloom", "Permits handled for you", "Local 4x4 with experienced driver"] },
    { title: "Himalayan family holiday", tier: "Comfort", photo: "sikkim-tsomgo", stops: [["Gangtok", 3], ["Kalimpong", 1], ["Darjeeling", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Ropeway ride in Gangtok", "Nurseries in Kalimpong", "Zoo and mountaineering institute in Darjeeling"] },
  ],
  faqs: [
    { q: "Which permits do I need in Sikkim?", a: "Indian citizens need permits for Tsomgo Lake, Nathu La and North Sikkim. Foreign nationals also need a Restricted Area Permit to enter the state, and have added limits. We apply with your ID and photos." },
    { q: "How do I get to Gangtok from the airport?", a: "Bagdogra to Gangtok takes about 4 to 5 hours by private cab, along the Teesta river. We arrange the transfer in your package." },
    { q: "Will I definitely see Kanchenjunga?", a: "No one can promise it. October and November give the best chance, and clouds can hide the peak on any day. That is why we keep more than one morning open in the hills when possible." },
    { q: "Is the toy train worth doing?", a: "Yes. The short joyride from Darjeeling to Ghum and back with a stop at Batasia takes about two hours, so it fits most itineraries. Book early in peak season." },
  ],
  related: ["meghalaya-tour-packages", "himachal-tour-packages", "uttarakhand-tour-packages", "family-holiday-packages"],
};
