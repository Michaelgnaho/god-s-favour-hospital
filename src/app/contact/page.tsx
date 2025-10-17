"use client";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Send,
  AlertCircle,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import type { Metadata } from "next";

export const contactMetadata: Metadata = {
  title: "Contact Us",
  description:
    "Visit God's Favourite Hospital at MTN Bus Stop, Badagry Expressway, Lagos. Call: 0803 389 9495, 0816 316 5464. Open 24/7 for emergencies. Email: godsfavouritehospital@gmail.com",
  openGraph: {
    title: "Contact God's Favourite Hospital | Lagos",
    description:
      "Get in touch with us. Open 24/7 for emergencies and consultations.",
    url: "https://www.godsfavouritehospital.com/contact",
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert(
      "Thank you for contacting God's Favourite Hospital. We will respond to your message shortly."
    );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["0803 389 9495", "0816 316 5464"],
      links: ["tel:08033899495", "tel:08163165464"],
      description: "Call us anytime for inquiries or emergencies",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["godsfavouritehospital@gmail.com"],
      links: ["mailto:godsfavouritehospital@gmail.com"],
      description: "Send us an email and we'll respond promptly",
    },
    {
      icon: MapPin,
      title: "Hospital Address",
      details: [
        "MTN Bus Stop, No. 1 Favour Hospital Road",
        "Along Araromi Ale, Badagry Expressway",
        "Lagos, Nigeria",
      ],
      links: [],
      description: "Visit us at our three-storey medical facility",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday – Sunday: 24 Hours", "Emergency Services: 24/7"],
      links: [],
      description: "We are always here when you need us",
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
              <MessageSquare
                className="w-10 h-10 text-blue-600"
                strokeWidth={2}
              />
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>

            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-blue-900 leading-tight mb-6">
              Get In Touch With Us
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to answer your questions, schedule appointments,
              and provide the care you need. Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4">
                    <IconComponent
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {info.title}
                  </h3>

                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) =>
                      info.links[idx] ? (
                        <a
                          key={idx}
                          href={info.links[idx]}
                          className="block text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={idx} className="text-gray-700 text-sm">
                          {detail}
                        </p>
                      )
                    )}
                  </div>

                  <p className="text-gray-600 text-xs">{info.description}</p>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-blue-800 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="080XXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Book an Appointment</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="emergency">Emergency</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
                  <div className="text-center">
                    <MapPin
                      className="w-16 h-16 text-blue-600 mx-auto mb-4"
                      strokeWidth={2}
                    />
                    <h3 className="text-xl font-bold text-blue-800 mb-2">
                      Visit Us
                    </h3>
                    <p className="text-gray-700 leading-relaxed max-w-sm">
                      MTN Bus Stop, No. 1 Favour Hospital Road, Along Araromi
                      Ale, Badagry Expressway, Lagos, Nigeria.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Quick Actions
                </h3>

                <div className="space-y-3">
                  <a
                    href="#appointment"
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Book an Appointment
                      </p>
                      <p className="text-xs text-gray-600">
                        Schedule your visit online
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:08033899495"
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Us Now</p>
                      <p className="text-xs text-gray-600">0803 389 9495</p>
                    </div>
                  </a>

                  <a
                    href="mailto:godsfavouritehospital@gmail.com"
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-xs text-gray-600">
                        Quick response guaranteed
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Website Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-blue-800">
                    Visit Our Website
                  </h3>
                </div>
                <a
                  href="https://www.godsfavouritehospital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  www.godsfavouritehospital.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 px-6 md:px-12 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <AlertCircle
            className="w-16 h-16 text-white mx-auto mb-4"
            strokeWidth={2}
          />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Medical Emergency?
          </h3>
          <p className="text-red-50 text-lg mb-6">
            Our emergency team is available 24/7. Don&apos;t wait—call us
            immediately or visit our facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:08033899495"
              className="inline-flex items-center justify-center bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency: 0803 389 9495
            </a>
            <a
              href="tel:08163165464"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Alternate: 0816 316 5464
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            We&apos;re here to help! Reach out through any of the channels
            above, and our team will respond promptly with the information you
            need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="text-blue-800 font-bold mb-2">
                24/7 Availability
              </h4>
              <p className="text-gray-600 text-sm">
                We&apos;re always open, every day of the year
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <MessageSquare className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="text-blue-800 font-bold mb-2">Quick Response</h4>
              <p className="text-gray-600 text-sm">
                We respond to all inquiries promptly
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Phone className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="text-blue-800 font-bold mb-2">
                Multiple Channels
              </h4>
              <p className="text-gray-600 text-sm">
                Reach us by phone, email, or in person
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
