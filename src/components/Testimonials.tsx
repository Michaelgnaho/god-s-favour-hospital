"use client";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import AnimatedContent from "@/components/ui/AnimatedContent";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "I gave birth safely after a high-risk pregnancy. The doctors and nurses treated me like family. Truly God's favour rests here.",
      name: "Mrs. Omolola A.",
      location: "Lagos",
    },
    {
      text: "Their emergency team saved my husband's life after an accident. Professional, kind, and prompt care — we're forever grateful.",
      name: "Mr. Chinedu E.",
      location: "Ikeja",
    },
    {
      text: "Clean environment, great service, and very affordable. I recommend God's Favourite Hospital to everyone.",
      name: "Mrs. Fatima B.",
      location: "Agege",
    },
    {
      text: "I didn't even pay money and they performed surgery for me. I was in a critical condition, but they chose humanity over money.",
      name: "Mr. Adewale O.",
      location: "Lagos",
    },
    {
      text: "The nurses are angels, and the doctors are professionals. My recovery was faster than I imagined.",
      name: "Mrs. Kehinde R.",
      location: "Badagry",
    },
    {
      text: "From reception to the ward, everyone was kind and attentive. The environment is clean and peaceful.",
      name: "Miss Mary I.",
      location: "Ajara",
    },
    {
      text: "Affordable, neat, and professional. God's Favourite Hospital is truly a blessing to this community.",
      name: "Mr. Musa L.",
      location: "Ojo",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section id="testimonials" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedContent
          distance={80}
          direction="vertical"
          duration={1}
          reverse={true}
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              <Star className="w-8 h-8 text-blue-600" fill="currentColor" />
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              What Our Patients Say
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real stories of healing, compassion, and faith-driven medical
              care.
            </p>
          </div>
        </AnimatedContent>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <AnimatedContent
            distance={80}
            direction="horizontal"
            duration={1.2}
            reverse={true}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </AnimatedContent>

          <AnimatedContent
            distance={80}
            direction="horizontal"
            duration={1.2}
            reverse={false}
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </AnimatedContent>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <AnimatedContent
                key={currentIndex * itemsPerPage + index}
                distance={100}
                direction="vertical"
                duration={1.2 + index * 0.15}
                reverse={false}
                initialOpacity={0}
                animateOpacity
                threshold={0.2}
              >
                <div
                  className="bg-white rounded-xl p-6 shadow-lg border-t-2 hover:shadow-xl transition-shadow duration-200"
                  style={{
                    borderTopWidth: "2px",
                    borderTopStyle: "solid",
                    borderImage:
                      "linear-gradient(to right, rgb(59, 130, 246), rgb(29, 78, 216)) 1",
                  }}
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote
                      className="w-10 h-10 text-blue-600"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-base italic leading-relaxed mb-4">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Patient Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-blue-700 font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {testimonial.location}
                    </p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex space-x-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-blue-600"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>

          {/* Carousel Indicators */}
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={1.4}
            reverse={false}
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
          >
            <div className="flex justify-center space-x-2 mt-8">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </AnimatedContent>
        </div>

        {/* Bottom CTA */}
        <AnimatedContent
          distance={80}
          direction="vertical"
          duration={1.3}
          reverse={false}
          initialOpacity={0}
          animateOpacity
          threshold={0.3}
        >
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-lg mb-6">
              Join thousands of satisfied patients who chose God&apos;s
              Favourite Hospital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow duration-200"
              >
                Contact Us
              </a>
              <a
                href="#appointment"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
