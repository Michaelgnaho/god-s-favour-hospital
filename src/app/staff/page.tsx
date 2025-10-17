import type { Metadata } from "next";
import StaffPageClient from "./StaffPageClient";

export const metadata: Metadata = {
  title: "Our Medical Team",
  description:
    "Meet our dedicated team: Dr. Balogun Rahman (CMD), Dr. Idowu Bolutife (Gynecologist), Dr. Anyika Maximilian (Pediatrician) and our experienced nursing staff serving Lagos.",
  keywords: [
    "hospital doctors Lagos",
    "medical team Lagos",
    "gynecologist Lagos",
    "pediatrician Lagos",
    "chief medical director Lagos",
    "hospital staff Lagos",
  ],
  openGraph: {
    title: "Our Medical Team | God's Favourite Hospital",
    description:
      "Experienced doctors and nurses committed to your health and wellbeing.",
    url: "https://www.godsfavouritehospital.com/staff",
  },
};

export default function StaffPage() {
  const staffSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medical Staff at God's Favourite Hospital",
    itemListElement: [
      {
        "@type": "Person",
        name: "Dr. Balogun Rahman Shola",
        jobTitle: "Chief Medical Director",
        worksFor: {
          "@type": "Hospital",
          name: "God's Favourite Hospital",
        },
      },
      {
        "@type": "Person",
        name: "Dr. Idowu Bolutife Seun",
        jobTitle: "Consultant Gynecologist",
        worksFor: {
          "@type": "Hospital",
          name: "God's Favourite Hospital",
        },
      },
      {
        "@type": "Person",
        name: "Dr. Anyika Maximilian Dennis",
        jobTitle: "Pediatrician",
        worksFor: {
          "@type": "Hospital",
          name: "God's Favourite Hospital",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(staffSchema),
        }}
      />
      <StaffPageClient />
    </>
  );
}
