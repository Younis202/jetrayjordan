'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle2, ArrowRight, Users, Clock, Trophy, Star, Shield, Zap } from 'lucide-react';
import { sendToWhatsApp } from '@/lib/form-handlers';

export function HeroSection() {
  const handleContactClick = () => {
    sendToWhatsApp({ type: 'Flight Booking' });
  };

  const features = [
    { icon: Users, text: 'Expert Travel Advisors', color: 'blue' },
    { icon: Clock, text: '24/7 Customer Support', color: 'green' },
    { icon: Shield, text: 'Best Price Guarantee', color: 'purple' },
    { icon: Zap, text: 'Instant Booking', color: 'orange' }
  ];

  const stats = [
    { number: '500K+', label: 'Happy Travelers' },
    { number: '1M+', label: 'Flights Booked' },
    { number: '200+', label: 'Destinations' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30 dark:from-slate-900 dark:via-blue-950/50 dark:to-indigo-950/30" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_50%)]" />
      </div>

      <div className="container relative py-20">
        {/* Centered Layout with Better Alignment */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content (7 columns) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Trust Badge - Better Positioned */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-start"
              >
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 px-6 py-3 rounded-full border border-emerald-200 dark:border-emerald-800/50">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                    ✈️ Best Deals • Instant Booking • 24/7 Support
                  </span>
                </div>
              </motion.div>

              {/* Main Headlines - Better Typography Hierarchy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                  Discover the World with{' '}
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Jetray Jordan
                  </span>
                </h1>
                
                {/* Rating - Better Positioned */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                    4.9/5 • 500K+ Happy Travelers
                  </span>
                </div>
              </motion.div>

              {/* Description - Better Spacing */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              >
                Your gateway to extraordinary travel experiences. Book flights to 200+ destinations worldwide with 
                <span className="font-semibold text-gray-900 dark:text-white"> exclusive deals, premium service, and instant confirmation</span>.
              </motion.p>

              {/* CTA Buttons - Better Alignment */}
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
                  className="text-lg px-8 py-4 h-14 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300"
                >
                  Explore Deals <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Features Grid - Better Layout */}
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-lg bg-${feature.color}-100 dark:bg-${feature.color}-900/30`}>
                      <feature.icon className={`h-5 w-5 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Proof - Better Typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Trusted airline partners:
                  </span>
                  <div className="flex items-center gap-6 text-sm font-semibold text-gray-500 dark:text-gray-400">
                    <span className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Emirates</span>
                    <span>•</span>
                    <span className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Qatar Airways</span>
                    <span>•</span>
                    <span className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Turkish Airlines</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual (5 columns) */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Main Image Container - Better Proportions */}
                <div className="relative">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-900">
                      <img
                        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Airplane flying through clouds"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Top Achievement Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 12 }}
                    transition={{ delay: 1 }}
                    className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-3 rounded-2xl shadow-lg font-bold text-sm"
                  >
                    ⭐ Best Travel Agency 2024
                  </motion.div>

                  {/* Bottom Stats Card - Better Positioning */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute -bottom-8 left-0 right-0 mx-4"
                  >
                    <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            className="text-center"
                          >
                            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {stat.number}
                            </div>
                            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Elements - Better Positioned */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/4 -left-6 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                  >
                    <Phone className="w-6 h-6 text-blue-500" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [8, -8, 8] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-1/3 -right-6 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                  >
                    <Trophy className="w-6 h-6 text-amber-500" />
                  </motion.div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}