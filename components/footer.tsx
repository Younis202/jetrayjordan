"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Building2,
  Users,
  Clock,
  BarChart,
  Headphones,
  Globe,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./animations/fade-in";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const whatsappNumber = "+15155065027";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

const quickLinks = [
  { href: whatsappLink, label: "About Us", icon: Users },
  { href: whatsappLink, label: "Destinations", icon: Building2 },
  { href: whatsappLink, label: "Flight Deals", icon: Globe },
  { href: whatsappLink, label: "Services", icon: BarChart },
  { href: whatsappLink, label: "Contact", icon: MessageCircle },
  { href: whatsappLink, label: "Travel Blog", icon: Star },
];

const serviceHighlights = [
  { icon: Users, label: "Travel Experts", desc: "Professional advisors" },
  { icon: Clock, label: "24/7 Support", desc: "Always available" },
  { icon: BarChart, label: "Best Prices", desc: "Guaranteed lowest fares" },
  { icon: Shield, label: "Secure Booking", desc: "Bank-level protection" },
  { icon: TrendingUp, label: "Happy Travelers", desc: "98% satisfaction rate" },
  { icon: Zap, label: "Instant Booking", desc: "Immediate confirmation" },
];

const destinations = [
  { name: "Dubai, UAE", href: whatsappLink, discount: "25% OFF" },
  { name: "Paris, France", href: whatsappLink, discount: "30% OFF" },
  { name: "Tokyo, Japan", href: whatsappLink, discount: "20% OFF" },
  { name: "New York, USA", href: whatsappLink, discount: "35% OFF" },
  { name: "London, UK", href: whatsappLink, discount: "28% OFF" },
  { name: "Bali, Indonesia", href: whatsappLink, discount: "40% OFF" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <FadeIn>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Company Branding & CTA - Takes more space */}
            <div className="lg:col-span-4 space-y-8">
              <Link href={whatsappLink} className="inline-block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">✈</span>
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Jetray Jordan
                  </span>
                </div>
              </Link>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Discover the World with Premium Travel Services
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join 500K+ travelers who trust us to create unforgettable
                  journeys worldwide. Book your next adventure with exclusive
                  deals and premium service.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">500K+</div>
                    <div className="text-xs text-muted-foreground">
                      Happy Travelers
                    </div>
                  </div>
                  <div className="text-center p-3 bg-emerald-500/5 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">
                      98%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Book Today</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Find your perfect flight with exclusive deals and instant
                  booking
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full group">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book your Flight Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Special Offers
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <link.icon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries with Growth Stats */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-primary" />
                Popular Destinations
              </h4>
              <div className="space-y-3">
                {destinations.map((destination) => (
                  <a
                    key={destination.href}
                    href={destination.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {destination.name}
                    </span>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full">
                      {destination.discount}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Service Features & Contact */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                Why Choose Us
              </h4>

              {/* Service Highlights */}
              <div className="grid grid-cols-1 gap-3">
                {serviceHighlights.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center p-3 rounded-lg bg-background/50 border border-border/50"
                  >
                    <feature.icon className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm text-foreground">
                        {feature.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {feature.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-4 border-t border-border/50">
                <h5 className="font-semibold text-foreground flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  Get In Touch
                </h5>
                <div className="space-y-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <span className="group-hover:underline">
                      {whatsappNumber}
                    </span>
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <span className="group-hover:underline">
                      info@jetrayjordan.com
                    </span>
                  </a>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    United States
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Follow us:
              </span>
              {[
                {
                  icon: Facebook,
                  href: whatsappLink,
                  label: "Facebook",
                  color: "hover:bg-blue-600",
                },
                {
                  icon: Twitter,
                  href: whatsappLink,
                  label: "Twitter",
                  color: "hover:bg-sky-500",
                },
                {
                  icon: Instagram,
                  href: whatsappLink,
                  label: "Instagram",
                  color: "hover:bg-pink-600",
                },
                {
                  icon: Linkedin,
                  href: whatsappLink,
                  label: "LinkedIn",
                  color: "hover:bg-blue-700",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-10 w-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:text-white transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Jetray Jordan. All rights
                  reserved.
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs text-emerald-600 font-medium">
                    IATA Certified
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  { href: whatsappLink, label: "Privacy Policy" },
                  { href: whatsappLink, label: "Terms of Service" },
                  { href: whatsappLink, label: "FAQ" },
                  { href: whatsappLink, label: "Careers" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
