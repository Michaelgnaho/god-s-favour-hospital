import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "God's Favourite Hospital | Quality Healthcare in Lagos, Nigeria",
    template: "%s | God's Favourite Hospital",
  },
  description:
    "God's Favourite Hospital offers 24/7 emergency care, maternity services, pediatrics, surgery, and general medicine in Lagos. Affordable, compassionate healthcare near Badagry Expressway. Established 2010.",
  keywords: [
    "hospital in Lagos",
    "healthcare Lagos Nigeria",
    "emergency care Lagos",
    "maternity hospital Lagos",
    "pediatric care Lagos",
    "affordable hospital Lagos",
    "Badagry Expressway hospital",
    "24/7 hospital Lagos",
    "general medicine Lagos",
    "obstetrics gynecology Lagos",
    "God's Favourite Hospital",
    "hospital near MTN bus stop Lagos",
    "Araromi Ale hospital",
    "surgery Lagos",
    "laboratory services Lagos",
  ],
  authors: [{ name: "God's Favourite Hospital" }],
  creator: "God's Favourite Hospital",
  publisher: "God's Favourite Hospital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.godsfavouritehospital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "God's Favourite Hospital | Quality Healthcare in Lagos",
    description:
      "Compassionate, affordable healthcare services including emergency care, maternity, pediatrics, and surgery. Open 24/7 in Lagos, Nigeria.",
    url: "https://www.godsfavouritehospital.com",
    siteName: "God's Favourite Hospital",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "God's Favourite Hospital - Quality Healthcare in Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "God's Favourite Hospital | Quality Healthcare in Lagos",
    description:
      "Compassionate, affordable healthcare services. Open 24/7 in Lagos, Nigeria.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-lWAB3pfGtnRINq8xW886rOaSGNfZrllPrHdTxAaqvg", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "God's Favourite Hospital",
    alternateName: "Favour Hospital",
    url: "https://www.godsfavouritehospital.com",
    logo: "https://www.godsfavouritehospital.com/logo.png",
    image: "https://www.godsfavouritehospital.com/hospital-image.jpg",
    description:
      "Quality, compassionate, and affordable healthcare services in Lagos, Nigeria. Offering 24/7 emergency care, maternity services, pediatrics, surgery, and general medicine.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No. 1 Favour Hospital Road, MTN Bus Stop, Along Araromi Ale, Badagry Expressway",
      addressLocality: "Lagos",
      addressRegion: "Lagos",
      postalCode: "",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.4698",
      longitude: "3.2043",
    },
    telephone: ["+234-803-389-9495", "+234-816-316-5464"],
    email: "godsfavouritehospital@gmail.com",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "₦₦",
    foundingDate: "2010-10-05",
    founder: [
      {
        "@type": "Person",
        name: "Dr. Rahman Balogun",
      },
      {
        "@type": "Person",
        name: "Nurse Adeshola Sherifat",
      },
    ],
    medicalSpecialty: [
      "Emergency Medicine",
      "Obstetrics",
      "Gynecology",
      "Pediatrics",
      "General Surgery",
      "Cardiology",
      "Diabetology",
      "Dentistry",
      "Ophthalmology",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Emergency Care",
      },
      {
        "@type": "MedicalProcedure",
        name: "Maternity Services",
      },
      {
        "@type": "MedicalProcedure",
        name: "Pediatric Care",
      },
      {
        "@type": "MedicalProcedure",
        name: "Surgical Services",
      },
      {
        "@type": "MedicalProcedure",
        name: "Laboratory Diagnostics",
      },
    ],
    sameAs: [
      "https://www.facebook.com/godsfavouritehospital",
      "https://www.instagram.com/godsfavouritehospital",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="geo.position" content="6.4698;3.2043" />
        <meta name="ICBM" content="6.4698, 3.2043" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
