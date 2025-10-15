import {
  HeartPulse,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Departments", href: "/departments" },
    { name: "Services", href: "/services" },
    { name: "Staff", href: "/staff" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo & Motto Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-10 h-10 rounded-full flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-bold text-xl text-gray-800">
                God&apos;s Favourite Hospital
              </span>
            </div>
            <p className="text-gray-600 text-sm italic">
              Where Healing Meets Grace.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Providing world-class, compassionate, and affordable healthcare
              since 2010.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm leading-relaxed">
                  MTN Bus Stop, No. 1 Favour Hospital Road, Along Araromi Ale,
                  Badagry Expressway, Lagos, Nigeria.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <a
                    href="tel:08033899495"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    0803 389 9495
                  </a>
                  <span>, </span>
                  <a
                    href="tel:08163165464"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    0816 316 5464
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:godsfavouritehospital@gmail.com"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  godsfavouritehospital@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  24/7 — Monday to Sunday
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-4">
              Follow Us
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Stay connected with us on social media for updates and health
              tips.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-100 mt-10 mb-6"></div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} God&apos;s Favourite Hospital. All
            rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Designed with faith, built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
