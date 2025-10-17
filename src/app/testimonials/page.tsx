import type { Metadata } from "next";

// Structured Data for Reviews (use in testimonials page)
export const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "God's Favourite Hospital",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "11",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Mrs. Omolola A.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      reviewBody:
        "I gave birth safely after a high-risk pregnancy. The doctors and nurses treated me like family.",
    },
  ],
};
// app/testimonials/page.tsx
export const testimonialsMetadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Read real patient reviews and testimonials. See why families trust God's Favourite Hospital for emergency care, maternity, surgery, and general healthcare in Lagos.",
  openGraph: {
    title: "Patient Reviews & Testimonials | God's Favourite Hospital",
    description:
      "Hear from patients who experienced our compassionate, affordable healthcare services.",
    url: "https://www.godsfavouritehospital.com/testimonials",
  },
};
