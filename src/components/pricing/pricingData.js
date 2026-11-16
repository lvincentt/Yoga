// src/data/pricingData.js

export const plans = [
  {
    id: "drop-in",
    name: "Drop-In",
    tagline: "Try a single class",
    price: 150000,
    period: "per class",
    description: "Perfect for trying us out or visiting from out of town.",
    features: [
      "Access to any regular class",
      "Mat & props provided",
      "Tea corner access",
      "No commitment",
    ],
    cta: "Book a Class",
    highlighted: false,
  },
  {
    id: "class-pack-5",
    name: "Class Pack · 5",
    tagline: "Save 10%",
    price: 675000,
    period: "5 classes",
    pricePerClass: 135000,
    description: "For those finding their rhythm — valid for 2 months.",
    features: [
      "5 classes of your choice",
      "Valid for 2 months",
      "Mat & props provided",
      "Tea corner access",
      "Flexible scheduling",
    ],
    cta: "Get the Pack",
    highlighted: false,
  },
  {
    id: "membership",
    name: "Unlimited Membership",
    tagline: "Most popular",
    price: 1200000,
    period: "per month",
    description: "For the dedicated practitioner. Unlimited access, always.",
    features: [
      "Unlimited regular classes",
      "Priority booking (48h early)",
      "1 guest pass per month",
      "10% off workshops & retreats",
      "Mat & props provided",
      "Tea corner access",
    ],
    cta: "Start Membership",
    highlighted: true,
  },
  {
    id: "class-pack-20",
    name: "Class Pack · 20",
    tagline: "Save 20%",
    price: 2400000,
    period: "20 classes",
    pricePerClass: 120000,
    description: "Best value for regular practitioners — valid for 4 months.",
    features: [
      "20 classes of your choice",
      "Valid for 4 months",
      "Mat & props provided",
      "Tea corner access",
      "Flexible scheduling",
      "1 guest pass",
    ],
    cta: "Get the Pack",
    highlighted: false,
  },
];

export const comparisonFeatures = [
  {
    name: "Regular classes",
    dropIn: true,
    pack5: true,
    membership: true,
    pack20: true,
  },
  {
    name: "Mat & props provided",
    dropIn: true,
    pack5: true,
    membership: true,
    pack20: true,
  },
  {
    name: "Tea corner access",
    dropIn: true,
    pack5: true,
    membership: true,
    pack20: true,
  },
  {
    name: "Flexible scheduling",
    dropIn: true,
    pack5: true,
    membership: true,
    pack20: true,
  },
  {
    name: "Priority booking",
    dropIn: false,
    pack5: false,
    membership: true,
    pack20: false,
  },
  {
    name: "Guest pass",
    dropIn: false,
    pack5: false,
    membership: true,
    pack20: true,
  },
  {
    name: "Workshop discounts",
    dropIn: false,
    pack5: false,
    membership: true,
    pack20: false,
  },
  {
    name: "Unlimited access",
    dropIn: false,
    pack5: false,
    membership: true,
    pack20: false,
  },
];

export const faqs = [
  {
    q: "Do you offer a free trial class?",
    a: "Yes! First-time guests enjoy 20% off their first class. Use code WELCOME20 at checkout, or simply mention it when you arrive.",
  },
  {
    q: "Can I share my class pack with a friend?",
    a: "Class packs are personal, but membership includes one guest pass per month so you can bring a friend along.",
  },
  {
    q: "How long are class packs valid?",
    a: "The 5-class pack is valid for 2 months, and the 20-class pack is valid for 4 months from the date of purchase.",
  },
  {
    q: "Can I cancel or reschedule a booked class?",
    a: "Yes — you can cancel or reschedule up to 4 hours before the class starts without any penalty. Late cancellations will use one class credit.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfer, credit/debit cards, and e-wallets via Midtrans. Cash is also welcome at the studio.",
  },
  {
    q: "Is there a contract for the membership?",
    a: "No lock-in contracts. Your membership renews monthly, and you can pause or cancel anytime with 7 days' notice.",
  },
  {
    q: "Do you offer student or senior discounts?",
    a: "Yes — students and seniors enjoy 15% off drop-in classes and class packs. Just show a valid ID at the studio.",
  },
  {
    q: "Can I pause my membership?",
    a: "Absolutely. You can pause your membership for up to 1 month per year — perfect for travel or recovery.",
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
