import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
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

  return (
    <section id="testimonials" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            Real stories of healing, compassion, and faith-driven medical care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border-t-2 border-gradient-to-r from-blue-500 to-blue-700 hover:shadow-xl transition-shadow duration-200"
              style={{
                borderTopWidth: "2px",
                borderTopStyle: "solid",
                borderImage:
                  "linear-gradient(to right, rgb(59, 130, 246), rgb(29, 78, 216)) 1",
              }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-blue-600" strokeWidth={2} />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base italic leading-relaxed mb-4">
                "{testimonial.text}"
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
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-lg mb-6">
            Join thousands of satisfied patients who chose God's Favourite
            Hospital
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
      </div>
    </section>
  );
}
