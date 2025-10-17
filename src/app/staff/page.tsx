"use client";
import {
  Users,
  Award,
  Stethoscope,
  Baby,
  Syringe,
  FlaskConical,
  Pill,
  Heart,
  FileText,
  Calculator,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

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

export default function StaffPage() {
  const staff = [
    {
      name: "Dr. Balogun Rahman Shola",
      designation: "Chief Medical Director",
      department: "General Medicine / Administration",
      icon: Award,
      image: "/staff/dr-rahman-balogun.jpg",
      bio: "Co-founder of God's Favourite Hospital with over 15 years of medical excellence and leadership. Passionate about making quality healthcare accessible to all.",
      specialty: "Leadership & General Medicine",
    },
    {
      name: "Dr. Idowu Bolutife Seun",
      designation: "Consultant Gynecologist",
      department: "Obstetrics & Gynecology",
      icon: Baby,
      image: "/staff/dr-idowu-bolutife.jpg",
      bio: "Experienced gynecologist dedicated to providing safe, compassionate maternal and reproductive healthcare services.",
      specialty: "Women's Health & Maternity Care",
    },
    {
      name: "Dr. Anyika Maximilian Dennis",
      designation: "Pediatrician",
      department: "Child Health",
      icon: Syringe,
      image: "/staff/dr-anyika-maximilian.jpg",
      bio: "Specialized in pediatric care with a gentle, child-friendly approach to treating infants, children, and adolescents.",
      specialty: "Pediatric Medicine",
    },
    {
      name: "Mrs. Asonita Anastasia",
      designation: "Laboratory Scientist",
      department: "Diagnostics & Laboratory",
      icon: FlaskConical,
      image: "/staff/mrs-asonita-anastasia.jpg",
      bio: "Expert laboratory scientist ensuring accurate diagnostic results with state-of-the-art laboratory equipment and techniques.",
      specialty: "Clinical Laboratory Services",
    },
    {
      name: "Mr. Akwuobi Ukamata Perpetua",
      designation: "Pharmacist",
      department: "Pharmacy",
      icon: Pill,
      image: "/staff/mr-akwuobi-ukamata.jpg",
      bio: "Professional pharmacist providing expert pharmaceutical care and medication counseling to all patients.",
      specialty: "Pharmaceutical Services",
    },
    {
      name: "Nurse Adeshola S. Balogun",
      designation: "Head Nurse",
      department: "Nursing Department",
      icon: Heart,
      image: "/staff/nurse-adeshola-balogun.jpg",
      bio: "Co-founder and Head Nurse with unwavering dedication to compassionate patient care and nursing excellence.",
      specialty: "Nursing Leadership & Patient Care",
    },
    {
      name: "Miss Olaitan Rofiat",
      designation: "Administrative Officer",
      department: "Management & Records",
      icon: FileText,
      image: "/staff/miss-olaitan-rofiat.jpg",
      bio: "Efficient administrative professional ensuring smooth hospital operations and excellent patient record management.",
      specialty: "Hospital Administration",
    },
    {
      name: "Mr. Simon Uche",
      designation: "Accounting Officer",
      department: "Finance & Administration",
      icon: Calculator,
      image: "/staff/mr-simon-uche.jpg",
      bio: "Detail-oriented accounting professional managing hospital finances with integrity and precision.",
      specialty: "Financial Management",
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
              <Users className="w-10 h-10 text-blue-600" strokeWidth={2} />
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>

            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-blue-900 leading-tight mb-6">
              Meet Our Dedicated Team
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A team of passionate healthcare professionals united by faith,
              compassion, and a commitment to healing excellence.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">3</p>
              <p className="text-sm text-gray-600">Medical Doctors</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">20+</p>
              <p className="text-sm text-gray-600">Qualified Nurses</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">8</p>
              <p className="text-sm text-gray-600">Core Staff</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">15+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {staff.map((member, index) => {
              const IconComponent = member.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200"
                >
                  {/* Staff Image */}
                  <div className="relative h-80 bg-gradient-to-br from-blue-50 to-blue-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center p-8">
                              <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                              </div>
                              <p class="text-blue-900 font-bold text-xl text-center">${member.name}</p>
                            </div>
                          `;
                        }
                      }}
                    />

                    {/* Department Icon Badge */}
                    <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                      <IconComponent
                        className="w-6 h-6 text-blue-600"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Staff Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">
                      {member.name}
                    </h3>

                    <div className="flex items-center space-x-2 mb-1">
                      <Award className="w-4 h-4 text-blue-600" />
                      <p className="text-blue-600 font-semibold">
                        {member.designation}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {member.department}
                    </p>

                    <div className="border-t border-gray-200 pt-4 mb-4">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {member.bio}
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-xs text-gray-600 mb-1">Specialty:</p>
                      <p className="text-blue-700 font-semibold text-sm">
                        {member.specialty}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nursing Team Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Our Nursing Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              In addition to our core staff, we have a dedicated team of over 20
              qualified nurses providing round-the-clock care with compassion
              and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Stethoscope
                className="w-12 h-12 text-blue-600 mx-auto mb-4"
                strokeWidth={2}
              />
              <h3 className="text-blue-800 font-bold text-lg mb-2">
                Expert Care
              </h3>
              <p className="text-gray-600 text-sm">
                Highly trained nurses with years of clinical experience
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Heart
                className="w-12 h-12 text-blue-600 mx-auto mb-4"
                strokeWidth={2}
              />
              <h3 className="text-blue-800 font-bold text-lg mb-2">
                Compassionate Service
              </h3>
              <p className="text-gray-600 text-sm">
                Patient-centered care with empathy and dignity
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Users
                className="w-12 h-12 text-blue-600 mx-auto mb-4"
                strokeWidth={2}
              />
              <h3 className="text-blue-800 font-bold text-lg mb-2">
                24/7 Availability
              </h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock nursing support for all patients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <Users
            className="w-16 h-16 text-white mx-auto mb-6"
            strokeWidth={2}
          />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Team of Healthcare Heroes
          </h3>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate healthcare professionals
            who share our vision of faith-driven, compassionate medical care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Your CV
            </a>
            <a
              href="tel:08033899495"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Our Founders
            </h2>
            <p className="text-gray-600 text-lg">
              Meet the visionary leaders who established God&apos;s Favourite
              Hospital in 2010
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Dr. Rahman Balogun
              </h3>
              <p className="text-blue-600 font-semibold mb-4">
                Co-Founder & Chief Medical Director
              </p>
              <p className="text-gray-600 leading-relaxed">
                Driven by faith and compassion, Dr. Balogun has led the hospital
                from a single flat to a magnificent three-storey medical
                facility, making quality healthcare accessible to all.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Nurse Adeshola Sherifat
              </h3>
              <p className="text-blue-600 font-semibold mb-4">
                Co-Founder & Head Nurse
              </p>
              <p className="text-gray-600 leading-relaxed">
                With unwavering dedication to patient care, Nurse Adeshola has
                been instrumental in building a nursing team that delivers
                compassionate healthcare with grace and professionalism.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center bg-blue-900 rounded-2xl p-8 text-white">
            <p className="text-xl italic font-semibold mb-2">
              &quot;We came out as victors&quot;
            </p>
            <p className="text-blue-200">
              Through perseverance, teamwork, and unwavering faith, our founders
              turned every setback into a stepping stone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
