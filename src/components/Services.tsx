"use client";
import {
  HeartPulse,
  Baby,
  Syringe,
  Scale,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "General Medicine & Family Health",
      description: "Comprehensive primary care and family health services.",
      icon: HeartPulse,
    },
    {
      title: "Obstetrics & Gynecology (Maternity Care)",
      description: "Safe, professional, and compassionate maternal care.",
      icon: Baby,
    },
    {
      title: "Pediatrics (Child Health)",
      description: "Dedicated care for infants, children, and adolescents.",
      icon: Syringe,
    },
    {
      title: "Surgical Services",
      description:
        "Modern surgical procedures performed by skilled specialists.",
      icon: Scale,
    },
  ];

  return (
    <section id="services" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            <Stethoscope className="w-8 h-8 text-blue-600" />
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Our Medical Services
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering world-class, compassionate, and affordable healthcare
            across diverse specialties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                    <IconComponent
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-blue-700 font-semibold text-lg mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* Additional Services Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200 flex flex-col justify-center items-center text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto">
                <Stethoscope className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
            </div>

            <h3 className="text-blue-700 font-semibold text-lg mb-3">
              And Many More...
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Emergency care, laboratory services, pharmacy, cardiology,
              diabetes management, dental care, and more.
            </p>
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center pt-8">
          <a
            href="/services"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow duration-200"
          >
            View All Our Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
