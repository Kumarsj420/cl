import type { Destination } from "../types";

export const jibhi: Destination = {
  slug: "jibhi-tirthan-tour-packages",
  name: "Jibhi and Tirthan",
  kind: "place",
  blurb: "Wooden homestays by a mountain stream",
  metaTitle: "Jibhi and Tirthan Valley tour packages: Jalori Pass, Serolsar",
  metaDescription: "Jibhi and Tirthan Valley packages with riverside homestays, Jalori Pass, Serolsar Lake and Great Himalayan National Park. Call or WhatsApp for a price.",
  heading: "Jibhi and Tirthan Valley tour packages",
  intro: "Wood and stone houses beside fast streams, forest walks to Jibhi waterfall and an easy trek from Jalori Pass to Serolsar Lake. This is the slow side of Himachal, for people who want quiet more than sightseeing.",
  heroPhoto: "jibhi-tirthan",
  cardPhoto: "jibhi-village",
  facts: [
    { label: "Nearest airport", value: "Bhuntar (Kullu), about 2 hours" },
    { label: "Good trip length", value: "3 to 4 nights" },
    { label: "Best for", value: "Couples and quiet breaks" },
    { label: "Jalori Pass", value: "Often shut by snow in winter" },
  ],
  months: {
    ratings: ["okay", "okay", "okay", "best", "best", "best", "avoid", "avoid", "best", "best", "best", "okay"],
    note: "April to June and September to November are best for walks and Jalori Pass. Winter is snowy and beautiful but the pass often closes. The monsoon brings landslides on the Aut to Banjar road.",
  },
  placesTitle: "What to do",
  places: [
    { name: "Jibhi", text: "A small village with treehouse and wooden homestays, a waterfall walk and the Mini Thailand rocks in the stream." },
    { name: "Jalori Pass and Serolsar Lake", text: "A drive up to the pass, then about 5 km of forest walking to a small sacred lake." },
    { name: "Tirthan Valley", text: "Riverside stays, trout streams and the entry to the Great Himalayan National Park." },
    { name: "Chehni Kothi", text: "A tall old stone and wood tower in a village above Banjar, reached by a short uphill walk." },
  ],
  packages: [
    { title: "Jibhi weekend escape", photo: "jibhi-village", stops: [["Jibhi", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Wooden homestay by the stream", "Jibhi waterfall", "Bonfire evening"] },
    { title: "Jibhi with Jalori Pass and Serolsar", photo: "jibhi-jalori", stops: [["Jibhi", 3]], includes: ["hotel", "meals", "cab", "guide"], highlights: ["Jalori Pass, road permitting", "Guided walk to Serolsar Lake", "Chehni Kothi"] },
    { title: "Tirthan riverside stay", photo: "jibhi-tirthan", stops: [["Tirthan", 3]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Riverside cottage", "Nature walk into GHNP buffer zone", "Trout lunch option"] },
    { title: "Manali and Jibhi", photo: "jibhi-serolsar", stops: [["Manali", 3], ["Jibhi", 2]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Solang Valley", "Atal Tunnel to Sissu", "Slow last days in Jibhi"] },
  ],
  faqs: [
    { q: "How do I get to Jibhi?", a: "Most people take an overnight Volvo from Delhi to Aut, then a cab of about an hour. Bhuntar airport is about two hours away. We arrange the transfer." },
    { q: "Is Jalori Pass open in winter?", a: "It often closes after heavy snow, usually between December and March. Jibhi itself stays reachable. We check the road before your trip." },
    { q: "Is Jibhi good for families?", a: "Yes, if you enjoy quiet. There is not much shopping or nightlife, and some homestays need a short walk with luggage, so tell us if that is hard." },
    { q: "Do phones work in Jibhi?", a: "Mobile signal and internet work in most of Jibhi and Tirthan, though speed varies and some homestays have weak signal." },
  ],
  related: ["shangarh-tour-packages", "manali-tour-packages", "kasol-tour-packages", "himachal-honeymoon-packages"],
};
