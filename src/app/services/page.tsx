import type { Metadata } from "next";
import ServicesPage from "./ServicePageClient";

// app/services/page.tsx
export const servicesMetadata: Metadata = {
  title: "Medical Services",
  description:
    "Comprehensive medical services: emergency care, maternity, pediatrics, surgery, cardiology, diabetes management, dental, eye care, laboratory & pharmacy services in Lagos.",
  keywords: [
    "hospital services Lagos",
    "emergency care Nigeria",
    "maternity services Lagos",
    "pediatric care Lagos",
    "surgical services Nigeria",
    "cardiology Lagos",
    "diabetes care Lagos",
    "dental services Lagos",
    "laboratory services Lagos",
  ],
  openGraph: {
    title: "Medical Services | God's Favourite Hospital",
    description:
      "24/7 emergency care, maternity, surgery, and specialized medical services in Lagos.",
    url: "https://www.godsfavouritehospital.com/services",
  },
};
export const medicalServicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Medical Services at God's Favourite Hospital",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Emergency & Trauma Care",
      description: "24/7 emergency medical services",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Obstetrics & Gynecology",
      description: "Complete maternity and women's health services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Pediatrics",
      description: "Comprehensive child healthcare",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Surgical Services",
      description: "General and specialized surgical procedures",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Laboratory & Diagnostic Services",
      description: "Advanced diagnostic testing and analysis",
    },
  ],
};

// Structured Data for Medical Services (use in services page)
export default function ContactPage() {
  return <ServicesPage />;
}
