import type { Metadata } from "next";
import TestimonialsPageClient from "./TestimonialPageClient";

// Structured Data for Reviews (use in testimonials page)
export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Read real patient reviews and testimonials. See why families trust God's Favourite Hospital for emergency care, maternity, surgery, and general healthcare in Lagos.",
  keywords: [
    "hospital reviews Lagos",
    "patient testimonials Lagos",
    "hospital ratings Lagos",
    "God's Favourite Hospital reviews",
    "best hospital Lagos reviews",
  ],
  openGraph: {
    title: "Patient Reviews & Testimonials | God's Favourite Hospital",
    description:
      "Hear from patients who experienced our compassionate, affordable healthcare services.",
    url: "https://www.godsfavouritehospital.com/testimonials",
  },
};

export default function TestimonialsPage() {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "God's Favourite Hospital",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
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
          bestRating: "5",
        },
        reviewBody:
          "I gave birth safely after a high-risk pregnancy. The doctors and nurses treated me like family.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Mr. Chinedu E.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Their emergency team saved my husband's life after an accident. Professional, kind, and prompt care.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Mrs. Fatima B.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Clean environment, great service, and very affordable. I recommend God's Favourite Hospital to everyone.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsSchema),
        }}
      />
      <TestimonialsPageClient />
    </>
  );
}
