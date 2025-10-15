import { Hospital, Award, Users, Building2 } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100">
                <Image
                  src="/about-hospital.jpg"
                  alt="God's Favourite Hospital Building"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-8">
                          <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                          </div>
                          <p class="text-blue-900 font-bold text-xl text-center">Three-Storey Medical Facility</p>
                          <p class="text-gray-600 text-center mt-2">Established October 5, 2010</p>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Milestone Badges */}
            <div className="absolute -bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <Award className="w-8 h-8 text-blue-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">
                  CAC Registered
                </p>
                <p className="text-xs text-gray-600">Since 2015</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <Building2 className="w-8 h-8 text-blue-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">
                  Fed. Min. Health
                </p>
                <p className="text-xs text-gray-600">Accredited 2018</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Section Title with Icon */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Hospital className="w-10 h-10 text-blue-600" strokeWidth={2} />
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
                About God&apos;s Favourite Hospital
              </h2>
            </div>

            {/* Story Content */}
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-lg">
                God&apos;s Favourite Hospital was established on October 5,
                2010, by Dr. Rahman Balogun and Nurse Adeshola Sherifat — two
                passionate healthcare professionals driven by faith, compassion,
                and a vision to make quality healthcare accessible to everyone.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                What began humbly in a single flat with just a few patients and
                minimal equipment has grown into a magnificent three-storey
                medical facility — a symbol of dedication, resilience, and
                divine favour. Today, the hospital stands as a beacon of hope
                and a household name in the region, where healing truly meets
                grace.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    7 Dedicated Staff
                  </p>
                  <p className="text-sm text-gray-600">Expert medical team</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Hospital className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">20+ Nurses</p>
                  <p className="text-sm text-gray-600">
                    Qualified professionals
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-6 text-center mt-8">
              <p className="text-white text-xl font-bold">
                Over 15 years of trusted healthcare service.
              </p>
            </div>

            {/* Learn More Button */}
            <div className="pt-6">
              <a
                href="/about"
                className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Learn more about us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
