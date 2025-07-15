"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Headset,
  BarChart as ChartBar,
  Clock,
  ArrowRight,
  Sparkles,
  Shield,
  Trophy,
  Zap,
  CheckCircle2,
  Star,
  TrendingUp,
  Users,
  Target
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/form-handlers";

export function CtaSection() {
  const handleContactClick = () => {
    sendToWhatsApp({ type: "Flight Booking" });
  };

  const features = [
    {
      icon: Phone,
      title: "Expert Travel Advisors",
      description: "Professional travel consultants available 24/7",
      gradient: "from-blue-500 to-cyan-500",
      highlight: "24/7 Available"
    },
    {
      icon: Headset,
      title: "Instant Booking",
      description: "Book flights instantly with immediate confirmation",
      gradient: "from-green-500 to-emerald-500",
      highlight: "Instant Confirm"
    },
    {
      icon: ChartBar,
      title: "Best Price Guarantee",
      description: "We guarantee the best prices or we'll match it",
      gradient: "from-purple-500 to-indigo-500",
      highlight: "Price Match"
    },
    {
      icon: Clock,
      title: "Flexible Booking",
      description: "Easy changes and cancellations with minimal fees",
      gradient: "from-orange-500 to-red-500",
      highlight: "Flexible Terms"
    }
  ];

  const guarantees = [
    { icon: Shield, label: "Risk-Free Trial" },
    { icon: Trophy, label: "Results Guaranteed" },
    { icon: Zap, label: "Quick Setup" }
  ];

  const statsOverlay = [
    { value: "200+", label: "Destinations", icon: Headset },
    { value: "98%", label: "Satisfaction", icon: Star },
    { value: "30%", label: "Avg Savings", icon: Target }
  ];

  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.15),transparent_60%)]" />
      </div>

      <div className="container relative">
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Header Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800/50">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    START YOUR SUCCESS JOURNEY
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Ready to{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Explore
                  </span>{' '}
                  the World?
                </h2>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Join 500K+ travelers who have discovered amazing destinations with
                  Jetray Jordan's premium travel services. Start your journey today.
                </p>

                {/* Guarantee Badges */}
                <div className="flex flex-wrap gap-4">
                  {guarantees.map((guarantee, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/30 px-4 py-2 rounded-full border border-green-200 dark:border-green-800/50"
                    >
                      <guarantee.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">
                        {guarantee.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                    <div className="flex items-center gap-4 relative">
                      {/* Enhanced Icon */}
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-1 shadow-lg`}>
                          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                            <feature.icon className="h-8 w-8 text-gray-700 dark:text-gray-200" />
                          </div>
                        </div>
                        {/* Highlight Badge */}
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                          {feature.highlight}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      <CheckCircle2 className="w-6 h-6 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Book Your Flight
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleContactClick}
                  className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-lg font-semibold px-8 py-4 transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  View Destinations
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"
              >
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>No booking fees</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Instant confirmation</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>24/7 support</span>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Airplane flying through beautiful clouds"
                  className="w-full h-full object-cover"
                />

                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  >
                    <div className="grid grid-cols-3 gap-6 text-center text-white">
                      {statsOverlay.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="space-y-2"
                        >
                          <stat.icon className="w-6 h-6 mx-auto text-white/80" />
                          <div className="text-2xl md:text-3xl font-bold">
                            {stat.value}
                          </div>
                          <div className="text-sm font-medium text-white/80">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Success Badge */}
                <div className="absolute top-6 right-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                    className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Live Now</span>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl" />
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-2xl" />

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute -right-4 top-1/4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">+40%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Avg. Growth</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
