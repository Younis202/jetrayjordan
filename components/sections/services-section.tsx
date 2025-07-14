"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Sun, 
  Heart, 
  ShoppingBag, 
  GraduationCap, 
  Briefcase,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendToWhatsApp } from "@/lib/form-handlers";

const services = [
  {
    icon: Building2, 
    title: "Business Travel",
    description: "Streamlined corporate travel solutions with flexible booking, expense management, and 24/7 support for business travelers.",
    stats: "Save up to 30% on corporate travel",
    features: ["Corporate accounts", "Expense reporting", "Priority support"],
    color: "blue" as const,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sun, 
    title: "Vacation Packages",
    description: "Complete vacation packages including flights, hotels, and activities. Curated experiences for unforgettable holidays.",
    stats: "Up to 40% savings on packages",
    features: ["Flight + Hotel deals", "Activity bookings", "Travel insurance"],
    color: "yellow" as const,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Heart, 
    title: "Honeymoon Travel",
    description: "Romantic getaways and honeymoon packages to the world's most beautiful destinations with personalized service.",
    stats: "Perfect romantic experiences",
    features: ["Romantic destinations", "Luxury accommodations", "Special arrangements"],
    color: "red" as const,
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: ShoppingBag, 
    title: "Group Travel",
    description: "Specialized group booking services for families, friends, and organizations with exclusive group discounts.",
    stats: "Special group rates available",
    features: ["Group discounts", "Coordinated bookings", "Group activities"],
    color: "green" as const,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: GraduationCap, 
    title: "Student Travel",
    description: "Special student fares and educational travel programs with flexible booking options and student discounts.",
    stats: "Student discounts up to 25%",
    features: ["Student fares", "Flexible dates", "Educational tours"],
    color: "purple" as const,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Briefcase, 
    title: "Luxury Travel",
    description: "Premium travel experiences with first-class flights, luxury accommodations, and VIP services worldwide.",
    stats: "5-star luxury experiences",
    features: ["First-class flights", "Luxury hotels", "VIP services"],
    color: "orange" as const,
    gradient: "from-orange-500 to-red-500"
  }
];

const industryStats = [
  { number: "200+", label: "Destinations" },
  { number: "50+", label: "Airlines Partners" },
  { number: "1M+", label: "Flights Booked" },
  { number: "98%", label: "Customer Satisfaction" }
];

export function ServicesSection() {
  const handleContactClick = () => {
    sendToWhatsApp({ type: "Flight Booking" });
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
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
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              TRAVEL SERVICES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            Travel Services We{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Excel At
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            From business trips to dream vacations, we offer comprehensive travel services 
            with personalized attention, exclusive deals, and seamless booking experiences.
          </motion.p>

          {/* Industry Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-3xl mx-auto"
          >
            {industryStats.map((stat, index) => (
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

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Icon with Enhanced Design */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-1 shadow-lg`}>
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-gray-700 dark:text-gray-200" />
                  </div>
                </div>
                {/* Success Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent text-sm font-bold mb-3`}>
                    <TrendingUp className="w-4 h-4" />
                    {service.stats}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Feature List */}
                <div className="space-y-2 pt-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  onClick={handleContactClick} 
                  className="group/btn w-full justify-between mt-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <span className="font-semibold">Book Now</span>
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
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Ready to Scale Your Business?</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Your Next Adventure?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether it's a business trip or dream vacation, we'll help you find the perfect flight 
              at the best price with our exclusive deals and personalized service.
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
                View Special Offers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}