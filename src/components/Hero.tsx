"use client";
import { HeartPulse, Calendar, Info } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Headline with Icon */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <HeartPulse
                  className="w-10 h-10 text-blue-600"
                  strokeWidth={2}
                />
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              </div>

              <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-blue-900 leading-tight">
                Where Healing Meets Grace.
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Providing world-class, compassionate, and affordable healthcare
              that nurtures the body, mind, and soul.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow duration-200"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <Info className="w-5 h-5 mr-2" />
                Learn More
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-blue-700">15+</p>
                <p className="text-sm text-gray-600 mt-1">Years Serving</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">20+</p>
                <p className="text-sm text-gray-600 mt-1">Qualified Nurses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">24/7</p>
                <p className="text-sm text-gray-600 mt-1">Emergency Care</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <Image
                  src="/hero-hospital.jpg"
                  alt="God's Favourite Hospital - Modern Healthcare Facility"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-8">
                          <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-6">
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                          </div>
                          <p class="text-blue-900 font-bold text-2xl text-center">God's Favourite Hospital</p>
                          <p class="text-gray-600 text-center mt-2">A three-storey medical facility</p>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Trusted Care</p>
                  <p className="text-sm text-gray-600">Since 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
