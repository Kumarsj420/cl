import type { Destination } from "../types";

export const rajasthan: Destination = {
  slug: "rajasthan-tour-packages",
  name: "Rajasthan",
  kind: "india",
  moods: ["culture", "family", "honeymoon"],
  blurb: "Forts, lake palaces and desert nights",
  metaTitle: "Rajasthan tour packages: Jaipur, Udaipur, Jodhpur, Jaisalmer",
  metaDescription: "Rajasthan tour packages through Jaipur, Udaipur, Jodhpur and Jaisalmer. Forts, heritage stays and desert camps, by private cab. Call or enquire for a price.",
  heading: "Rajasthan tour packages",
  intro: "Pink streets in Jaipur, a blue city under Mehrangarh, a golden fort that people still live in, and a night under the stars in the Thar. With a private cab and sensible driving days, it all fits together.",
  heroPhoto: "rajasthan-udaipur",
  stampPhoto: "rajasthan-jaipur",
  facts: [
    { label: "Start from", value: "Jaipur or Delhi" },
    { label: "Good trip length", value: "4 to 10 nights" },
    { label: "Best for", value: "Culture, couples, families" },
    { label: "Stay in", value: "Heritage havelis and palaces" },
  ],
  months: {
    ratings: ["best", "best", "best", "okay", "avoid", "avoid", "avoid", "okay", "okay", "best", "best", "best"],
    note: "October to March has warm days and cool nights, and is the time for desert camps. May to July is fiercely hot. Udaipur is lovely after the August rain, when its lakes are full.",
  },
  placesTitle: "Rajasthan, city by city",
  places: [
    { name: "Jaipur", text: "Amber Fort, Hawa Mahal and City Palace, with block prints and jewellery in the bazaars." },
    { name: "Udaipur", text: "White palaces around Lake Pichola, sunset boat rides and Kumbhalgarh's huge walls a drive away." },
    { name: "Jodhpur", text: "Mehrangarh Fort above a sea of blue houses, with Umaid Bhawan and the old clock tower market." },
    { name: "Jaisalmer", text: "A lived-in sandstone fort, carved havelis and the Sam dunes for camel rides and folk music." },
    { name: "Pushkar and Ranthambore", text: "A sacred lake and its famous November fair, or tiger safaris in a park full of ruins." },
  ],
  packages: [
    { title: "Jaipur and Pushkar weekend", tier: "Budget", photo: "rajasthan-amber", stops: [["Jaipur", 2], ["Pushkar", 1]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Amber Fort and Hawa Mahal", "Pushkar lake evening", "Bazaar time in Jaipur"] },
    { title: "Royal Rajasthan circuit", tier: "Comfort", photo: "rajasthan-jodhpur", stops: [["Jaipur", 2], ["Jodhpur", 2], ["Udaipur", 3]], includes: ["hotel", "meals", "cab", "sightseeing"], highlights: ["Mehrangarh with a local guide", "Ranakpur Jain temples on the way", "Lake Pichola boat ride"] },
    { title: "Golden desert: Jodhpur and Jaisalmer", tier: "Comfort", photo: "rajasthan-jaisalmer", stops: [["Jodhpur", 2], ["Jaisalmer", 2], ["Sam dunes", 1]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Camel ride on the Sam dunes", "Night in a desert camp with folk music", "Jaisalmer Fort walk"] },
    { title: "Udaipur romantic escape", tier: "Premium", photo: "rajasthan-udaipur", stops: [["Udaipur", 3], ["Kumbhalgarh", 1]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Lake-view heritage room", "Private sunset boat", "Rooftop dinner in the old city"] },
    { title: "Rajasthan family trail", tier: "Comfort", photo: "rajasthan-jaipur", stops: [["Jaipur", 2], ["Ranthambore", 2], ["Udaipur", 2]], includes: ["hotel", "meals", "cab", "activity"], highlights: ["Tiger safari in Ranthambore", "Puppet show and Chokhi Dhani evening", "Hotels with pools where possible"] },
  ],
  faqs: [
    { q: "How many days do I need for Rajasthan?", a: "Seven nights cover Jaipur, Jodhpur and Udaipur comfortably. Add three or four for Jaisalmer. For a short trip, stay within Jaipur and Pushkar, or fly to Udaipur." },
    { q: "Is it too hot to visit in summer?", a: "From May to July, temperatures often pass 40°C. If you have to go then, keep sightseeing to mornings and evenings and pick Udaipur or Mount Abu, which are slightly cooler." },
    { q: "Can we stay in a real palace?", a: "Yes. Many palaces and havelis are now hotels, across a wide range of prices. Tell us your budget and we will suggest specific ones." },
    { q: "Are the desert camps comfortable?", a: "Most have tents with attached bathrooms, meals and a cultural evening. Winter nights get cold, so bring warm layers. Camps generally run from October to March." },
  ],
  related: ["goa-tour-packages", "family-holiday-packages", "uttarakhand-tour-packages", "dubai-tour-packages"],
};
