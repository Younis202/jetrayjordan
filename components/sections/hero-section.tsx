"use client";

import { Button } from "@/components/ui/button";
import { sendToWhatsApp } from "@/lib/form-handlers";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Phone,
  Shield,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export function HeroSection() {
  const handleContactClick = () => {
    sendToWhatsApp({ type: "Flight Booking" });
  };

  const features = [
    { icon: Users, text: "Expert Travel Advisors", color: "blue" },
    { icon: Clock, text: "24/7 Customer Support", color: "green" },
    { icon: Shield, text: "Best Price Guarantee", color: "purple" },
    { icon: Zap, text: "Instant Booking", color: "orange" },
  ];

  const stats = [
    { number: "500K+", label: "Happy Travelers" },
    { number: "1M+", label: "Flights Booked" },
    { number: "200+", label: "Destinations" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Airplane flying through clouds"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container relative py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-start"
              >
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-white">
                    Best Deals • Instant Booking • 24/7 Support
                  </span>
                </div>
              </motion.div>

              {/* Main Headlines */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                  Discover the World with <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Jetray Jordan
                  </span>
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-base font-medium text-white/90">
                    4.9/5 • 10K+ Happy Travelers
                  </span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl"
              >
                Your gateway to extraordinary travel experiences. Book flights
                to 200+ destinations worldwide with
                <span className="font-semibold text-white">
                  {" "}
                  exclusive deals, premium service, and instant confirmation
                </span>
                .
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Button
                  size="lg"
                  onClick={handleContactClick}
                  className="text-lg px-8 py-4 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Book Your Flight
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleContactClick}
                  className="text-lg px-8 py-4 h-14 border-2 border-white/30 text-white hover:text-white bg-transparent hover:border-white/50 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Explore Deals <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div
                      className={`p-3 rounded-lg bg-white/20 backdrop-blur-sm`}
                    >
                      <feature.icon className={`h-5 w-5 text-white`} />
                    </div>
                    <span className="font-medium text-white">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-6 border-t border-white/20"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="text-sm font-medium text-white/70">
                    Trusted airline partners:
                  </span>
                  <div className="flex items-center gap-6 text-sm font-semibold text-white/60">
                    <span className="hover:text-white/90 transition-colors">
                      Emirates
                    </span>
                    <span>•</span>
                    <span className="hover:text-white/90 transition-colors">
                      Qatar Airways
                    </span>
                    <span>•</span>
                    <span className="hover:text-white/90 transition-colors">
                      Turkish Airlines
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Stats Card */}
            <div className="lg:col-span-4 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Stats Card */}
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Why Choose Us?
                    </h3>
                    <p className="text-gray-600">
                      Trusted by travelers worldwide
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
                      >
                        <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-gray-600">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievement Badge */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 text-center">
                    <div className="flex items-center justify-center gap-2 text-amber-700">
                      <Trophy className="w-5 h-5" />
                      <span className="font-semibold">
                        Best Travel Agency 2024
                      </span>
                    </div>
                  </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
