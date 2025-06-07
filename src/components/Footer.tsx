import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    restaurant: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#" },
      { name: "Chef's Table", href: "#" },
      { name: "Private Events", href: "#" },
      { name: "Gift Cards", href: "#" },
    ],
    menu: [
      { name: "Full Menu", href: "#menu" },
      { name: "Wine List", href: "#" },
      { name: "Seasonal Specials", href: "#" },
      { name: "Catering", href: "#" },
      { name: "Takeout", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Reservations", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Feedback", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-amber-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest News
            </h3>
            <p className="text-amber-100 mb-6">
              Subscribe to our newsletter and be the first to know about new
              menu items, special events, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 border-none"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                <span className="text-amber-500">Delish</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Experience culinary excellence with our chef's carefully crafted
                dishes using the finest ingredients and traditional cooking
                methods.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">
                  123 Food Street, City, State 12345
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">hello@delish.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">Daily 11:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Restaurant
            </h3>
            <ul className="space-y-3">
              {footerLinks.restaurant.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Menu</h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Awards */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-gray-800 hover:bg-amber-600 p-2 rounded-full transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Awards/Certifications */}
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="bg-amber-600 p-1 rounded">
                  <Heart className="h-3 w-3 text-white fill-current" />
                </div>
                <span>Michelin Recommended</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-amber-600 p-1 rounded">
                  <Heart className="h-3 w-3 text-white fill-current" />
                </div>
                <span>James Beard Award</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-gray-700" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <span>© 2024 Delish Restaurant. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
