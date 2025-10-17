"use client";
import {
  HeartPulse,
  Baby,
  Syringe,
  Scissors,
  AlertCircle,
  FlaskConical,
  Pill,
  Activity,
  Droplet,
  Eye,
  Users,
  Stethoscope,
  Calendar,
  Phone,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

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
// Structured Data for Medical Services (use in services page)
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

export default function ServicesPage() {
  const services = [
    {
      title: "General Medicine & Family Health",
      description:
        "Comprehensive primary care services for the entire family. From routine check-ups to chronic disease management, our experienced physicians provide personalized care tailored to your health needs.",
      icon: HeartPulse,
      image: "/services/general-medicine.jpg",
      features: [
        "Routine Health Check-ups",
        "Preventive Care",
        "Chronic Disease Management",
        "Health Screenings",
      ],
    },
    {
      title: "Obstetrics & Gynecology (Maternity Care)",
      description:
        "Safe, professional, and compassionate maternal care throughout your pregnancy journey. Our experienced team ensures the health and comfort of both mother and baby.",
      icon: Baby,
      image: "/services/maternity.jpg",
      features: [
        "Prenatal Care",
        "Safe Delivery Services",
        "Postnatal Care",
        "Family Planning",
      ],
    },
    {
      title: "Pediatrics (Child Health)",
      description:
        "Dedicated care for infants, children, and adolescents. Our pediatricians provide specialized treatment with a gentle, child-friendly approach.",
      icon: Syringe,
      image: "/services/pediatrics.jpg",
      features: [
        "Child Immunizations",
        "Growth Monitoring",
        "Childhood Illness Treatment",
        "Developmental Assessments",
      ],
    },
    {
      title: "Surgical Services",
      description:
        "Modern surgical procedures performed by skilled specialists in a fully equipped operating theatre. We maintain the highest standards of surgical care and patient safety.",
      icon: Scissors,
      image: "/services/surgery.jpg",
      features: [
        "Minor & Major Surgeries",
        "Pre-operative Assessment",
        "Post-operative Care",
        "Modern Equipment",
      ],
    },
    {
      title: "Emergency & Trauma Care (24/7)",
      description:
        "Round-the-clock emergency services for urgent medical situations. Our emergency team is always ready to provide immediate, life-saving care.",
      icon: AlertCircle,
      image: "/services/emergency.jpg",
      features: [
        "24/7 Availability",
        "Rapid Response Team",
        "Advanced Life Support",
        "Ambulance Services",
      ],
    },
    {
      title: "Laboratory & Diagnostic Services",
      description:
        "State-of-the-art laboratory equipped with modern diagnostic equipment. Fast, accurate test results to support effective treatment decisions.",
      icon: FlaskConical,
      image: "/services/laboratory.jpg",
      features: [
        "Blood Tests",
        "Urinalysis",
        "Imaging Services",
        "Microbiology Tests",
      ],
    },
    {
      title: "Pharmacy Services",
      description:
        "Well-stocked pharmacy providing quality medications and pharmaceutical care. Our pharmacists offer expert guidance on medication use.",
      icon: Pill,
      image: "/services/pharmacy.jpg",
      features: [
        "Prescription Medications",
        "Over-the-Counter Drugs",
        "Medication Counseling",
        "Drug Information",
      ],
    },
    {
      title: "Cardiology & Hypertension Management",
      description:
        "Comprehensive cardiovascular care and blood pressure management. Our cardiologists help you maintain a healthy heart through prevention and treatment.",
      icon: Activity,
      image: "/services/cardiology.jpg",
      features: [
        "Blood Pressure Monitoring",
        "ECG Services",
        "Cardiovascular Screening",
        "Heart Disease Management",
      ],
    },
    {
      title: "Diabetes & Chronic Disease Management",
      description:
        "Specialized care for diabetes and other chronic conditions. We provide ongoing support to help you manage your condition and maintain quality of life.",
      icon: Droplet,
      image: "/services/diabetes.jpg",
      features: [
        "Blood Sugar Monitoring",
        "Dietary Counseling",
        "Medication Management",
        "Lifestyle Support",
      ],
    },
    {
      title: "Dental & Eye Care",
      description:
        "Complete dental and ophthalmic services to maintain your oral and visual health. Our specialists provide preventive and corrective care.",
      icon: Eye,
      image: "/services/dental-eye.jpg",
      features: [
        "Dental Examinations",
        "Eye Tests",
        "Dental Treatments",
        "Vision Correction",
      ],
    },
    {
      title: "Community Health & Outreach Programs",
      description:
        "Extending healthcare beyond our walls through community education and outreach initiatives. We are committed to improving community health and wellness.",
      icon: Users,
      image: "/services/community.jpg",
      features: [
        "Health Education",
        "Free Screenings",
        "Vaccination Drives",
        "Wellness Programs",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              <Stethoscope
                className="w-10 h-10 text-blue-600"
                strokeWidth={2}
              />
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>

            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-blue-900 leading-tight mb-6">
              Our Medical Services
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare services delivered with compassion,
              expertise, and state-of-the-art medical technology.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">11+</p>
              <p className="text-sm text-gray-600">Specialties</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">24/7</p>
              <p className="text-sm text-gray-600">Emergency Care</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">20+</p>
              <p className="text-sm text-gray-600">Qualified Staff</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">15+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            if (e.currentTarget.parentElement) {
                              e.currentTarget.parentElement.innerHTML = `
                                <div class="w-full h-full flex flex-col items-center justify-center p-8">
                                  <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                  </div>
                                  <p class="text-blue-900 font-bold text-xl text-center">${service.title}</p>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-20 blur-2xl"></div>
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
                    </div>

                    {/* Floating Icon Badge */}
                    <div className="absolute -bottom-6 left-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                        <IconComponent
                          className="w-6 h-6 text-white"
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <IconComponent
                          className="w-6 h-6 text-blue-600"
                          strokeWidth={2}
                        />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-blue-800 font-semibold text-lg mb-4">
                        What We Offer:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar
            className="w-16 h-16 text-white mx-auto mb-6"
            strokeWidth={2}
          />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Quality Healthcare?
          </h3>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
            Our dedicated team is here to provide you with compassionate,
            world-class medical care. Book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow duration-200"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 px-6 md:px-12 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <AlertCircle
            className="w-12 h-12 text-white mx-auto mb-4"
            strokeWidth={2}
          />
          <h4 className="text-2xl font-bold text-white mb-3">
            24/7 Emergency Services Available
          </h4>
          <p className="text-blue-100 mb-4">
            For medical emergencies, call us immediately or visit our facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white">
            <a
              href="tel:08033899495"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">0803 389 9495</span>
            </a>
            <span className="hidden sm:block text-blue-300">|</span>
            <a
              href="tel:08163165464"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">0816 316 5464</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
