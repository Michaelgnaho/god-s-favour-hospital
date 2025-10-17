// src/app/contact/page.tsx
import ContactPageClient from "./ContactPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Visit God's Favourite Hospital at MTN Bus Stop, Badagry Expressway, Lagos. Call: 0803 389 9495, 0816 316 5464. Open 24/7 for emergencies. Email: godsfavouritehospital@gmail.com",
  keywords: [
    "contact hospital Lagos",
    "God's Favourite Hospital location",
    "hospital phone number Lagos",
    "emergency contact Lagos",
    "hospital address Badagry Expressway",
  ],
  openGraph: {
    title: "Contact God's Favourite Hospital | Lagos",
    description:
      "Get in touch with us. Open 24/7 for emergencies and consultations.",
    url: "https://www.godsfavouritehospital.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
