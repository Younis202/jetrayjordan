"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Star, 
  Zap, 
  Shield, 
  Crown, 
  Rocket,
  ArrowRight,
  Phone,
  Users,
  Award,
  Sparkles,
  TrendingUp,
  Clock,
  Target
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/form-handlers";

const plans = [
  {
    name: "Economy",
    price: "Best Value",
    unit: "per person",
    description: "Budget-friendly flights with essential services and great value",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    color: "blue",
    badge: "POPULAR",
    badgeColor: "green",
    stats: "200+ destinations",
    features: [
      "Economy class flights",
      "Standard baggage allowance",
      "Seat selection (fee applies)",
      "24/7 customer support",
      "Mobile check-in",
      "Basic travel insurance"
    ],
    highlights: [
      "Best value for money",
      "Flexible booking options",
      "No hidden fees"
    ]
  },
  {
    name: "Business",
    price: "Premium",
    unit: "per person",
    description: "Premium comfort with enhanced services for business travelers",
    icon: Crown,
    gradient: "from-purple-500 to-indigo-500",
    color: "purple",
    badge: "MOST POPULAR",
    badgeColor: "purple",
    stats: "Worldwide coverage",
    highlighted: true,
    features: [
      "Everything in Economy, plus:",
      "Business class flights",
      "Priority check-in & boarding",
      "Lounge access included",
      "Extra baggage allowance",
      "Premium meal service",
      "Dedicated account manager",
      "Flexible date changes"
    ],
    highlights: [
      "Enhanced comfort & service",
      "Priority treatment",
      "Flexible booking terms"
    ]
  },
  {
    name: "First Class",
    price: "Luxury",
    unit: "per person",
    description: "Ultimate luxury travel experience with exclusive services",
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
    color: "orange",
    badge: "LUXURY",
    badgeColor: "orange", 
    stats: "Premium experience",
    features: [
      "Everything in Business, plus:",
      "First class flights",
      "Private suite or cabin",
      "Gourmet dining experience",
      "Personal concierge service",
      "Luxury ground transportation",
      "VIP airport services",
      "Exclusive lounge access"
    ],
    highlights: [
      "Ultimate luxury experience",
      "Personalized service",
      "Exclusive amenities"
    ]
  }
];

const testimonials = [
  { name: "David K.", role: "Business Traveler", rating: 5, text: "Business class with Jetray Jordan was exceptional! Worth every penny." },
  { name: "Lisa M.", role: "Vacation Traveler", rating: 5, text: "Best travel experience ever! They handled everything perfectly." },
  { name: "James R.", role: "Luxury Traveler", rating: 5, text: "First class service exceeded all expectations. Truly luxurious!" }
];

const pricingStats = [
  { number: "30%", label: "Average Savings" },
  { number: "98%", label: "On-time Performance" },
  { number: "Instant", label: "Booking Confirmation" },
  { number: "98%", label: "Customer Satisfaction" }
];

export function PricingSection() {
  const handleContactClick = (planName = "") => {
    sendToWhatsApp({ type: "Flight Booking", plan: planName });
  };

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 px-6 py-3 rounded-full mb-6 border border-green-200 dark:border-green-800/50"
          >
            <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">
              BEST PRICES • INSTANT BOOKING
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            Flight Options,{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Every Budget
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            From budget-friendly economy to luxurious first class, find the perfect flight option for your needs. 
            Join 500K+ travelers who trust Jetray Jordan for their journeys worldwide.
          </motion.p>

          {/* Pricing Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-3xl mx-auto"
          >
            {pricingStats.map((stat, index) => (
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

        {/* Enhanced Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 ${
                plan.highlighted ? "scale-105 ring-2 ring-purple-500/50 shadow-purple-500/20" : "hover:scale-[1.02]"
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ {plan.badge}
                </div>
              )}

              {/* Plan Badge */}
              {!plan.highlighted && (
                <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${plan.gradient} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg`}>
                  {plan.badge}
                </div>
              )}
              
              {/* Icon with Enhanced Design */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} p-1 shadow-lg`}>
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                    <plan.icon className="h-8 w-8 text-gray-700 dark:text-gray-200" />
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -bottom-2 -right-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {plan.stats}
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Plan Header */}
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {plan.description}
                  </p>
                </div>
                
                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">{plan.unit}</span>
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                    Contact for Best Rates!
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 space-y-2">
                  {plan.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                {/* Feature List */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <Button 
                    onClick={() => handleContactClick(plan.name)}
                    className={`w-full h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                      plan.highlighted 
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white" 
                        : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                    }`}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Book {plan.name} Flight
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    onClick={() => handleContactClick(`${plan.name} Demo`)}
                    className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">Client Success Stories</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Join 500K+ Happy Travelers
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50"
              >
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Ready to Start in 24 Hours</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take Flight?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of travelers already exploring the world with Jetray Jordan. 
              Best prices, premium service, unforgettable experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => handleContactClick("Flight Search")}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Target className="mr-2 h-5 w-5" />
                Search Flights Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => handleContactClick("Special Offers")}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 transition-all duration-300"
              >
                View Special Offers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Secure Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Best Price Guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}