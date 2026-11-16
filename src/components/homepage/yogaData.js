// src/data/yogaData.js

export const benefits = [
  {
    icon: "🌿",
    title: "Mindful Guidance",
    desc: "Experience personalized attention in our intimate classes, where each movement is intentional.",
    color: "from-emerald-50 to-emerald-100/30",
  },
  {
    icon: "🌀",
    title: "Holistic Integration",
    desc: "Movement, breathwork, and meditation woven together for complete mind-body harmony.",
    color: "from-amber-50 to-amber-100/30",
  },
  {
    icon: "🕊️",
    title: "Sacred Space",
    desc: "A tranquil environment designed to help you disconnect from noise and reconnect with self.",
    color: "from-stone-50 to-stone-100/30",
  },
];

// src/data/yogaData.js (atau src/components/yoga/yogaData.js — sesuaikan path Anda)

export const classes = [
  {
    id: "morning-flow",
    name: "Morning Flow",
    time: "07.00 – 08.00",
    duration: 60,
    level: "Energizing · All Levels",
    instructor: { name: "Sarah", avatar: "S" },
    color: "from-amber-300 to-orange-300",
    accent: "amber",
    spots: 5,
    capacity: 12,
    price: 150000,
  },
  {
    id: "slow-hatha",
    name: "Slow Hatha",
    time: "17.00 – 18.15",
    duration: 75,
    level: "Grounding · Beginner Friendly",
    instructor: { name: "Maya", avatar: "M" },
    color: "from-emerald-300 to-teal-300",
    accent: "emerald",
    spots: 3,
    capacity: 12,
    price: 150000,
  },
  {
    id: "yin-restore",
    name: "Yin & Restore",
    time: "19.00 – 20.00",
    duration: 60,
    level: "Deeply Relaxing",
    instructor: { name: "Lena", avatar: "L" },
    color: "from-violet-300 to-indigo-300",
    accent: "violet",
    spots: 0,
    capacity: 12,
    price: 175000,
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

// src/data/testimonialsData.js (atau src/components/yoga/testimonialsData.js)

export const testimonials = [
  {
    id: 1,
    quote:
      "This studio has become my weekly reset button. Sarah's guidance has helped me find stillness in motion and peace in the pause. I leave every class feeling both grounded and renewed.",
    name: "Charlotte Hayes",
    role: "Marketing Lead",
    location: "Jakarta",
    avatar:
      " https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    since: "Practicing for 2 years",
    rating: 5,
    highlight: "weekly reset button",
  },

  {
    id: 2,
    quote:
      "I came for the physical practice and stayed for the community. The instructors here don't just teach poses — they teach you how to listen to your body. It's changed how I move through my whole life.",
    name: "Harrison Reed",
    role: "Software Engineer",
    location: "Jakarta",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    since: "Practicing for 3 years",
    rating: 5,
    highlight: "changed how I move",
  },
  {
    id: 3,
    quote:
      "As a new mother, I needed a space that felt safe and unhurried. The prenatal classes here carried me through my entire pregnancy — and the community carried me after. I'm forever grateful.",
    name: "Evelyn Foster",
    role: "New Mother",
    location: "Jakarta",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    since: "Practicing for 1 year",
    rating: 5,
    highlight: "safe and unhurried",
  },
  {
    id: 4,
    quote:
      "The candlelight Yin sessions are something else entirely. I've tried studios across Bali and Singapore, and nothing compares to the stillness this place creates. It's a rare find.",
    name: "Theodore Blake",
    role: "Travel Writer",
    location: "Singapore",
    avatar:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    since: "Visiting for 6 months",
    rating: 5,
    highlight: "nothing compares",
  },
];

export const stats = [
  { value: "500+", label: "Community members" },
  { value: "4.9", label: "Average rating", suffix: "★" },
  { value: "8", label: "Years of practice" },
  { value: "12K+", label: "Classes taught" },
];
