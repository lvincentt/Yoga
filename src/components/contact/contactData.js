// src/data/contactData.js

export const studioInfo = {
  name: "Sthira Yoga Studio",
  address: "Jl. Kemang Raya No. 42, Kemang, Jakarta Selatan 12730",
  phone: "+62 812 3456 7890",
  whatsapp: "6281234567890", // tanpa + dan spasi
  email: "hello@sthirayoga.id",
  instagram: "@sthirayoga",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123!2d106.813!3d-6.261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnNDAuMCJTIDEwNsKwNDgnNDYuOCJF!5e0!3m2!1sen!2sid!4v1700000000000",
  mapsLink: "https://maps.google.com/?q=Kemang+Raya+Jakarta",
};

export const openingHours = [
  { day: "Monday – Friday", hours: "06.00 – 21.00" },
  { day: "Saturday", hours: "07.00 – 20.00" },
  { day: "Sunday", hours: "08.00 – 18.00" },
];

export const contactMethods = [
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+62 812 3456 7890",
    href: "https://wa.me/6281234567890?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20classes",
    note: "Fastest response",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "hello@sthirayoga.id",
    href: "mailto:hello@sthirayoga.id",
    note: "We reply within 24h",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@sthirayoga",
    href: "https://instagram.com",
    note: "Daily inspiration",
  },
];

export const quickFaqs = [
  {
    q: "Do I need to book in advance?",
    a: "Yes, we recommend booking ahead to secure your spot — especially for evening and weekend classes. Drop-ins are welcome if space is available.",
  },
  {
    q: "What should I bring to my first class?",
    a: "Just yourself and comfortable clothing. Mats, blocks, and straps are provided. We have changing rooms, showers, and a tea corner for after class.",
  },
  {
    q: "Is there parking at the studio?",
    a: "Yes — free parking is available on-site for motorbikes and cars. The studio is also a 5-minute walk from the nearest TransJakarta stop.",
  },
];
