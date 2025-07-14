"use client";

import { motion } from "framer-motion";
import { 
  Star, 
  Building2, 
  Phone, 
  Target, 
  User, 
  Quote,
  TrendingUp,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Executive", 
    company: "Tech Solutions Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "Jetray Jordan made my business travel seamless. Their corporate booking platform saved us 30% on travel costs and the 24/7 support is incredible. Best travel agency we've worked with!",
    rating: 5,
    stats: {
      flights: "50+",
      savings: "30%",
      satisfaction: "100%"
    },
    gradient: "from-blue-500 to-cyan-500",
    industry: "Business Travel"
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Family Traveler",
    company: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "Our family vacation to Europe was perfectly planned by Jetray Jordan. From flights to hotels, everything was seamless. The kids loved the special arrangements they made for us!",
    rating: 5,
    stats: {
      destinations: "5",
      savings: "25%",
      experience: "Perfect"
    },
    gradient: "from-yellow-500 to-orange-500",
    industry: "Family Travel"
  },
  {
    name: "Emily Rodriguez",
    role: "Honeymoon Traveler",
    company: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "Our honeymoon in the Maldives was a dream come true! Jetray Jordan arranged everything perfectly - from first-class flights to overwater villa. Absolutely magical experience!",
    rating: 5,
    stats: {
      romance: "10/10",
      service: "Excellent",
      memories: "Lifetime"
    },
    gradient: "from-red-500 to-pink-500",
    industry: "Luxury Travel"
  }
];

const overallStats = [
  { number: "98%", label: "Customer Satisfaction" },
  { number: "30%", label: "Average Savings" },
  { number: "24/7", label: "Support Available" },
  { number: "Instant", label: "Booking Confirmation" }
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="container relative">
        {/* Enhanced Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full mb-6 border border-purple-200 dark:border-purple-800/50"
          >
            <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
              TRAVELER SUCCESS STORIES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            Real Experiences From{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Real Travelers
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Don't just take our word for it. See how Jetray Jordan has created unforgettable 
            travel experiences for thousands of satisfied customers worldwide.
          </motion.p>

          {/* Overall Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {overallStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Industry Badge */}
              <div className="absolute -top-3 left-6">
                <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${testimonial.gradient} px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg`}>
                  <Sparkles className="w-3 h-3" />
                  {testimonial.industry}
                </div>
              </div>

              <div className="pt-4">
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.gradient} p-1`}>
                      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                        <User className="w-8 h-8 text-gray-600 dark:text-gray-300" />
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    ({testimonial.rating}.0)
                  </span>
                </div>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-300 dark:text-gray-600" />
                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed pl-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 mb-1">
                      <Phone className="h-4 w-4" /> 
                      <span>Flights</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonial.stats.flights || testimonial.stats.destinations || testimonial.stats.romance}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-bold text-purple-600 dark:text-purple-400 mb-1">
                      <Building2 className="h-4 w-4" />
                      <span>Savings</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonial.stats.savings || testimonial.stats.service}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-bold text-green-600 dark:text-green-400 mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>Rating</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonial.stats.satisfaction || testimonial.stats.experience || testimonial.stats.memories}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
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
              <Target className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Join Our Success Stories</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Your Next Adventure?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who've discovered the world with Jetray Jordan. 
              Your next amazing journey could be just a click away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Star className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 transition-all duration-300"
              >
                View More Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}