"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  PhoneCall, 
  Building2, 
  Star, 
  TrendingUp, 
  Sparkles,
  CheckCircle2,
  Award,
  Target
} from "lucide-react";

const stats = [
  {
    icon: Users, 
    value: "500K+",
    label: "Happy Travelers",
    description: "Satisfied customers worldwide",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30"
  },
  {
    icon: PhoneCall, 
    value: "1M+",
    label: "Flights Booked",
    description: "Successfully completed bookings",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/30"
  },
  {
    icon: Building2, 
    value: "200+",
    label: "Destinations",
    description: "Cities and countries worldwide",
    gradient: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30"
  },
  {
    icon: Star, 
    value: "98%",
    label: "Satisfaction",
    description: "Customer satisfaction rate",
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/30"
  }
];

const achievements = [
  { icon: Award, label: "Industry Leader" },
  { icon: Target, label: "Proven Results" },
  { icon: TrendingUp, label: "Consistent Growth" }
];

export function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30 dark:from-gray-900 dark:via-gray-900/50 dark:to-blue-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.1),transparent_60%)]" />
      </div>

      <div className="container relative">
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 px-6 py-3 rounded-full mb-6 border border-blue-200 dark:border-blue-800/50"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              PROVEN PERFORMANCE
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            Travel Stats That{' '}
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Our track record of excellence speaks for itself. See why travelers choose Jetray Jordan 
            as their trusted travel partner for unforgettable journeys.
          </motion.p>

          {/* Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <achievement.icon className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {achievement.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Enhanced Icon */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} p-1 shadow-lg mx-auto`}>
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                    <stat.icon className="h-10 w-10 text-gray-700 dark:text-gray-200" />
                  </div>
                </div>
                {/* Success Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {stat.label}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {stat.description}
                </p>

                {/* Progress Indicator */}
                <div className="pt-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className={`h-2 bg-gradient-to-r ${stat.gradient} rounded-full shadow-sm`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}