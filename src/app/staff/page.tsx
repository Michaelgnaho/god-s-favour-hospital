import type { Metadata } from "next";
import StaffPage from "./StaffPageClient";

export const staffMetadata: Metadata = {
  title: "Our Medical Team",
  description:
    "Meet our dedicated team: Dr. Balogun Rahman (CMD), Dr. Idowu Bolutife (Gynecologist), Dr. Anyika Maximilian (Pediatrician) and our experienced nursing staff serving Lagos.",
  openGraph: {
    title: "Our Medical Team | God's Favourite Hospital",
    description:
      "Experienced doctors and nurses committed to your health and wellbeing.",
    url: "https://www.godsfavouritehospital.com/staff",
  },
};
export default function ContactPage() {
  return <StaffPage />;
}
