"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  DollarSign, 
  Building2, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  Headphones,
  Clock,
  Users,
  Award,
  Zap,
  CheckCircle
} from "lucide-react";

const faqCategories = [
  {
    id: "pricing",
    label: "Booking & Pricing",
    icon: DollarSign,
    color: "text-emerald-500"
  },
  {
    id: "service",
    label: "Travel Services",
    icon: Building2,
    color: "text-blue-500"
  },
  {
    id: "quality",
    label: "Support & Policies",
    icon: Shield,
    color: "text-purple-500"
  }
];

const faqs = [
  {
    category: "pricing",
    question: "How do I find the best flight deals?",
    answer: "Our advanced search engine compares prices across 50+ airlines to find you the best deals. We also offer price alerts, flexible date options, and exclusive member discounts. Book early or check our last-minute deals section for maximum savings.",
    highlight: "Up to 40% savings"
  },
  {
    category: "pricing",
    question: "Are there any hidden fees when booking?",
    answer: "Absolutely not! We believe in transparent pricing. The price you see is the price you pay, with no hidden booking fees or surprise charges. All taxes and fees are included in the displayed price.",
    highlight: "No hidden fees"
  },
  {
    category: "service",
    question: "What destinations do you cover?",
    answer: "We offer flights to over 200 destinations worldwide, covering all major cities and popular vacation spots. From business hubs like New York and London to exotic destinations like Bali and Dubai, we've got you covered.",
    highlight: "200+ destinations"
  },
  {
    category: "service",
    question: "Can I change or cancel my booking?",
    answer: "Yes! We offer flexible booking options with easy changes and cancellations. Depending on your ticket type and airline policy, you can modify dates, destinations, or cancel with minimal fees. Our 24/7 support team is here to help.",
    highlight: "Flexible booking"
  },
  {
    category: "service",
    question: "How do I receive my tickets and boarding passes?",
    answer: "After booking confirmation, you'll receive e-tickets via email instantly. You can also access mobile boarding passes through our app or the airline's app. All booking details are stored in your account for easy access anytime.",
    highlight: "Instant e-tickets"
  },
  {
    category: "quality",
    question: "What kind of customer support do you provide?",
    answer: "We provide 24/7 customer support through phone, live chat, and email. Our travel experts can help with booking, changes, cancellations, and travel emergencies. We're here whenever you need us, anywhere in the world.",
    highlight: "24/7 support available"
  },
  {
    category: "quality",
    question: "Do you offer travel insurance?",
    answer: "Yes! We offer comprehensive travel insurance options to protect your trip investment. Coverage includes trip cancellation, medical emergencies, lost baggage, and flight delays. You can add insurance during booking or within 24 hours of purchase.",
    highlight: "Comprehensive coverage"
  },
  {
    category: "quality",
    question: "How secure is my payment information?",
    answer: "Your payment information is completely secure with bank-level SSL encryption and PCI DSS compliance. We never store your full credit card details, and all transactions are processed through secure payment gateways trusted by millions worldwide.",
    highlight: "Bank-level security"
  }
];

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("pricing");
  
  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Travel Questions Answered
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Get instant answers about flight booking, travel services, and how we can 
            <span className="text-primary font-semibold"> make your journey unforgettable</span>
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {faqCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-background border border-border hover:border-primary/50 hover:bg-muted'
              }`}
            >
              <category.icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-primary-foreground' : category.color}`} />
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:border-primary/20 transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group-hover:text-primary transition-colors">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-left font-semibold">{faq.question}</span>
                      {faq.highlight && (
                        <span className="ml-4 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full whitespace-nowrap">
                          {faq.highlight}
                        </span>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="flex items-start gap-3 pt-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-full mb-4">
            <Headphones className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Still have questions?</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Our travel experts are here to help you plan your perfect trip
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Speak with Travel Expert
            </button>
            <button className="px-8 py-3 border border-border rounded-full font-semibold hover:bg-muted transition-colors">
              Live Chat Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}