import type { Destination } from "../types";

export const family: Destination = {
  slug: "himachal-family-tour-packages",
  name: "Family trips",
  kind: "theme",
  blurb: "Short drives and room for everyone",
  metaTitle: "Himachal family tour packages for kids and grandparents",
  metaDescription: "Himachal family holiday packages with short drives, family rooms and gentle sightseeing in Shimla, Manali, Dalhousie and Dharamshala. Call or WhatsApp for a price.",
  heading: "Himachal family tour packages",
  intro: "Later starts, shorter drives, connecting rooms and food everyone will eat. We plan around the youngest and oldest people on the trip, so nobody spends the holiday tired.",
  heroPhoto: "shimla-kufri",
  cardPhoto: "shimla-toytrain",
  facts: [
    { label: "Good trip length", value: "4 to 7 nights" },
    { label: "Popular dates", value: "May, June and Diwali" },
    { label: "Book ahead", value: "2 to 4 months for summer" },
    { label: "Tell us about", value: "Ages, food, mobility" },
  ],
  months: {
    ratings: ["okay", "okay", "best", "best", "best", "best", "avoid", "avoid", "okay", "best", "best", "okay"],
    note: "May and June are the busiest family months, when the plains are hottest. October and November are quieter with clear views. Winter suits families who want snow and can handle the cold.",
  },
  placesTitle: "Choosing where to go",
  places: [
    { name: "Shimla", href: "/shimla-tour-packages", text: "Close to Chandigarh, with the toy train and Kufri." },
    { name: "Manali", href: "/manali-tour-packages", text: "Snow and Solang Valley fun, with plenty of family hotels." },
    { name: "Dalhousie and Khajjiar", href: "/dalhousie-khajjiar-tour-packages", text: "Gentle sightseeing and short drives." },
    { name: "Dharamshala", href: "/dharamshala-mcleodganj-tour-packages", text: "Monasteries, the cricket stadium and tea gardens." },
  ],
  packages: [
    { title: "Shimla Manali with the family", photo: "shimla-ridge", stops: [["Shimla", 2], ["Manali", 4]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Short daily drives", "Kufri and Solang", "Family rooms"] },
    { title: "Shimla with the toy train", photo: "shimla-toytrain", stops: [["Shimla", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Toy train ride", "Kufri", "Easy Mall Road evenings"] },
    { title: "Dalhousie and Dharamshala family trip", photo: "dharamshala-stadium", stops: [["Dalhousie", 2], ["Dharamshala", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Khajjiar horse rides", "HPCA Stadium", "Tea garden visit"] },
    { title: "Manali with grandparents", photo: "manali-beas", stops: [["Manali", 4]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Hotel with a lift where possible", "Gentle sightseeing", "Snow at Sissu without long walks"] },
    { title: "Grand Himachal family holiday", photo: "manali-naggar", stops: [["Shimla", 2], ["Manali", 3], ["Dharamshala", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Three regions", "Rest days built in", "Spacious vehicle"] },
  ],
  faqs: [
    { q: "Can you plan for grandparents with limited mobility?", a: "Yes. Tell us what is hard for them, such as stairs or long walks, and we will choose hotels with lifts or ground-floor rooms where possible, and keep drives short." },
    { q: "What about food for children?", a: "Hotels can usually make simple meals. Tell us early about allergies or Jain and vegetarian needs, and we will pick suitable hotels." },
    { q: "How are children charged?", a: "It depends on age and the hotel's rules. Your quote shows this line by line." },
    { q: "Which vehicle suits a big family?", a: "An Innova suits up to six, and a Tempo Traveller suits larger groups. The vehicle is named in your quote." },
  ],
  related: ["shimla-tour-packages", "manali-tour-packages", "dalhousie-khajjiar-tour-packages", "dharamshala-mcleodganj-tour-packages"],
};
