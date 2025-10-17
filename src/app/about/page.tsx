import type { Metadata } from "next";
import AboutPage from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about God's Favourite Hospital - established 2010 by Dr. Rahman Balogun. Our journey from a single flat to a three-storey medical facility serving Lagos communities.",
  keywords: [
    "about God's Favourite Hospital",
    "hospital history Lagos",
    "Dr. Rahman Balogun",
    "hospital established 2010",
    "healthcare Lagos Nigeria",
  ],
  openGraph: {
    title: "About God's Favourite Hospital | Our Story",
    description:
      "From humble beginnings to Lagos' trusted healthcare provider. Discover our faith-driven journey since 2010.",
    url: "https://www.godsfavouritehospital.com/about",
  },
};
export default function ContactPage() {
  return <AboutPage />;
}
