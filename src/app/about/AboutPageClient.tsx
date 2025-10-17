import {
  Hospital,
  Award,
  Users,
  Heart,
  Target,
  Eye,
  Building2,
  CheckCircle,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import AboutImg2 from "../../../public/gfh-pics/img5.jpg";

export default function AboutPage() {
  const milestones = [
    {
      year: "2010",
      event: "Hospital Founded",
      icon: Building2,
      description: "Started in a single flat with minimal equipment",
    },
    {
      year: "2015",
      event: "CAC Registration",
      icon: Award,
      description: "Official Corporate Affairs Commission registration",
    },
    {
      year: "2018",
      event: "Federal Accreditation",
      icon: CheckCircle,
      description: "Registered with Federal Ministry of Health",
    },
    {
      year: "Today",
      event: "3-Storey Facility",
      icon: Hospital,
      description: "Home to 7 staff and 20+ qualified nurses",
    },
  ];

  const values = [
    {
      title: "Faith-Driven",
      description: "Rooted in divine purpose and spiritual strength",
      icon: Heart,
    },
    {
      title: "Compassion",
      description: "Every patient treated with empathy and dignity",
      icon: Users,
    },
    {
      title: "Excellence",
      description: "World-class medical care and professionalism",
      icon: Award,
    },
    {
      title: "Community Impact",
      description: "Transforming lives beyond hospital walls",
      icon: Target,
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
              <Hospital className="w-10 h-10 text-blue-600" strokeWidth={2} />
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>

            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-blue-900 leading-tight mb-6">
              Our Story of Faith, Healing & Grace
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to a beacon of hope — discover how
              God&apos;s Favourite Hospital became a household name in
              healthcare excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image/Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Image
                      src={AboutImg2}
                      alt="God's Favourite Hospital - Modern Healthcare Facility"
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Biography Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                The Beginning of Our Journey
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                God&apos;s Favourite Hospital was established on October 5,
                2010, by Dr. Rahman Balogun and Nurse Adeshola Sherifat, two
                passionate healthcare professionals driven by faith, compassion,
                and a vision to make quality healthcare accessible to everyone.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                What began humbly in a single flat with only a few patients and
                minimal equipment has now grown into a magnificent three-storey
                medical facility, symbolizing years of dedication, resilience,
                and divine favor.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-blue-900 font-semibold italic text-lg">
                  &quot;We came out as victors&quot; — The Founders
                </p>
              </div>
            </div>
          </div>

          {/* Journey Story */}
          <div className="space-y-8 max-w-4xl mx-auto mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-8">
              A Journey of Perseverance & Faith
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              The journey was not without challenges. There were moments of
              trial and uncertainty — times when growth seemed slow and
              resources were stretched thin. Yet, through perseverance,
              teamwork, and unwavering faith, the hospital emerged stronger,
              turning every setback into a stepping stone.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Over the years, the hospital has flourished, now home to a growing
              team of 7 dedicated staff and over 20 qualified nurses, all united
              by a shared mission of healing and service. The hospital&apos;s
              story is not just one of physical expansion but also of community
              transformation.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Today, God&apos;s Favourite Hospital stands not just as a
              healthcare center but as a beacon of hope and a household name in
              the region — a living testament that with faith, hard work, and
              love for humanity, greatness is inevitable. The name
              &quot;Favour&quot; has become synonymous with trust, care, and
              healing.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-12">
              Our Milestones
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent
                        className="w-8 h-8 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-3xl font-bold text-blue-700 mb-2">
                      {milestone.year}
                    </p>
                    <p className="text-blue-800 font-semibold text-lg mb-2">
                      {milestone.event}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-800">
                  Our Mission
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                At God&apos;s Favourite Hospital, our mission is to deliver
                world-class, compassionate, and affordable healthcare that
                nurtures the body, mind, and soul.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                We are dedicated to providing exceptional medical services
                guided by integrity, professionalism, and a deep sense of
                humanity.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                We believe every patient deserves not only treatment but also
                empathy, dignity, and spiritual comfort. Through advanced
                medical technology, a team of dedicated professionals, and a
                foundation of faith, we strive to create an environment where
                healing happens holistically — restoring health, hope, and
                happiness to every life we touch.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-blue-700 font-semibold text-xl italic">
                  God&apos;s Favourite Hospital — Where Healing Meets Grace.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-800">
                  Our Vision
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Our vision is to be one of Nigeria&apos;s most trusted and
                innovative healthcare institutions, recognized nationally and
                internationally for medical excellence, faith-driven service,
                and community impact.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                We aspire to build a healthcare model that sets the standard for
                quality, compassion, and accessibility — one that reaches beyond
                hospital walls to uplift the community through education,
                outreach, and preventive health programs.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                As we grow, we envision a future where God&apos;s Favourite
                Hospital becomes a symbol of excellence in healthcare, where
                patients not only recover but also experience genuine care,
                hope, and divine favour.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-12">
              Our Core Values
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-200"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent
                        className="w-8 h-8 text-blue-600"
                        strokeWidth={2}
                      />
                    </div>
                    <h4 className="text-blue-800 font-bold text-lg mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <Stethoscope
            className="w-16 h-16 text-white mx-auto mb-6"
            strokeWidth={2}
          />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Healthcare with Grace
          </h3>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands who have experienced compassionate, faith-driven
            medical care at God&apos;s Favourite Hospital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow duration-200"
            >
              Contact Us Today
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-colors duration-200"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
