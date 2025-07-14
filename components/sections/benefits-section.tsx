"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  LineChart, 
  Headphones, 
  Shield, 
  Clock,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Target,
  ArrowRight,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendToWhatsApp } from "@/lib/form-handlers";

const benefits = [
  {
    icon: Users, 
    title: "Expert Travel Advisors",
    description: "Professional travel consultants with extensive destination knowledge to help plan your perfect trip.",
    features: [
      "Certified travel experts",
      "Destination specialists",
      "Personalized recommendations"
    ],
    gradient: "from-blue-500 to-cyan-500",
    stat: "24/7",
    statLabel: "Expert Support"
  },
  {
    icon: Calendar, 
    title: "Flexible Booking",
    description: "Easy booking modifications, date changes, and cancellations with minimal fees and maximum flexibility.",
    features: [
      "Free date changes",
      "Flexible cancellation",
      "Easy modifications"
    ],
    gradient: "from-green-500 to-emerald-500",
    stat: "Free",
    statLabel: "Date Changes"
  },
  {
    icon: LineChart, 
    title: "Price Monitoring",
    description: "Advanced price tracking technology that monitors fare changes and alerts you to the best deals.",
    features: [
      "Price drop alerts",
      "Fare comparison",
      "Best time to book"
    ],
    gradient: "from-purple-500 to-indigo-500",
    stat: "Up to 40%",
    statLabel: "Savings"
  },
  {
    icon: Headphones, 
    title: "24/7 Customer Support",
    description: "Round-the-clock customer service for booking assistance, travel emergencies, and any questions.",
    features: [
      "24/7 phone support",
      "Live chat assistance",
      "Emergency travel help"
    ],
    gradient: "from-orange-500 to-red-500",
    stat: "< 5min",
    statLabel: "Response Time"
  },
  {
    icon: Shield, 
    title: "Secure Booking",
    description: "Bank-level security for all transactions with comprehensive travel insurance options available.",
    features: [
      "SSL encryption",
      "Secure payments",
      "Travel insurance"
    ],
    gradient: "from-teal-500 to-cyan-500",
    stat: "100%",
    statLabel: "Secure"
  },
  {
    icon: Clock, 
    title: "Instant Confirmation",
    description: "Immediate booking confirmation with e-tickets delivered instantly to your email and mobile.",
    features: [
      "Instant e-tickets",
      "Mobile boarding passes",
      "Real-time updates"
    ],
    gradient: "from-pink-500 to-rose-500",
    stat: "Instant",
    statLabel: "Confirmation"
  }
];

const companyStats = [
  { number: "500K+", label: "Happy Travelers" },
  { number: "1M+", label: "Flights Booked" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "200+", label: "Destinations" }
];

export function BenefitsSection() {
  const handleContactClick = () => {
    sendToWhatsApp({ type: "Flight Booking" });
  };

  return (
    <section id="benefits" className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30 dark:from-gray-900 dark:via-gray-900/50 dark:to-blue-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="container relative">
        {/* Enhanced Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full mb-6 border border-blue-200 dark:border-blue-800/50"
          >
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              WHY CHOOSE JETRAY JORDAN
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            Why Travel{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              With Us
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Experience the difference with Jetray Jordan's premium travel services. 
            Every journey designed to exceed expectations and create unforgettable memories.
          </motion.p>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-3xl mx-auto"
          >
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Icon with Enhanced Design */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-1 shadow-lg`}>
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-gray-700 dark:text-gray-200" />
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3 inline mr-1" />
                  TOP
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent text-sm font-bold mb-3`}>
                    <span className="text-2xl">{benefit.stat}</span>
                    <span className="text-xs opacity-80">{benefit.statLabel}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Feature List */}
                <div className="space-y-3 pt-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  onClick={handleContactClick} 
                  className="group/btn w-full justify-between mt-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Ready to Experience These Benefits?</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take Flight?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 500K+ travelers who've discovered the world with Jetray Jordan. 
              Best prices, premium service, and unforgettable experiences guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleContactClick}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Target className="mr-2 h-5 w-5" />
                Book Your Flight
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleContactClick}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 transition-all duration-300"
              >
                View Special Deals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex items-center justify-center gap-8 mt-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Secure Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm">Best Price Guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}