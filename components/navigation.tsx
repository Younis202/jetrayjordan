"use client";

import { Button } from "@/components/ui/button";
import { sendToWhatsApp } from "@/lib/form-handlers";
import { Menu, Moon, Phone, Sparkles, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Benefits", href: "#benefits" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "Stats", href: "#stats" },
    { label: "CTA", href: "#cta" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleContactClick = () => {
    sendToWhatsApp({ type: "Flight Booking" });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 shadow-xl shadow-gray-900/10"
          : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg shadow-gray-900/5"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="relative">
              <Image
                src="https://ik.imagekit.io/pcet3dvcu/jetray-Photoroom.png?updatedAt=1752514564717"
                alt="JetRay"
                width={180}
                height={180}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-full p-1.5 border border-gray-200/40 dark:border-gray-700/40 shadow-lg shadow-gray-900/5">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-full"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full blur-sm"></div>
                  <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full shadow-lg"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative h-11 w-11 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50"
              suppressHydrationWarning
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-500 drop-shadow-sm" />
                ) : (
                  <Moon className="h-5 w-5 text-indigo-600 drop-shadow-sm" />
                ))}
            </Button>

            <Button
              onClick={handleContactClick}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 group border border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>
              <div className="relative flex items-center">
                <Phone className="mr-2 h-4 w-4 drop-shadow-sm" />
                <span>Book Now</span>
                <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12 drop-shadow-sm" />
              </div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative h-11 w-11 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              suppressHydrationWarning
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-500 drop-shadow-sm" />
                ) : (
                  <Moon className="h-5 w-5 text-indigo-600 drop-shadow-sm" />
                ))}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative h-11 w-11 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/40 dark:to-purple-900/40 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-all duration-300 shadow-lg border border-blue-200/50 dark:border-blue-700/50"
            >
              <div className="relative">
                <Menu
                  className={`h-5 w-5 text-blue-600 dark:text-blue-400 transition-all duration-300 drop-shadow-sm ${
                    mobileMenuOpen
                      ? "rotate-90 opacity-0"
                      : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`h-5 w-5 text-blue-600 dark:text-blue-400 absolute inset-0 transition-all duration-300 drop-shadow-sm ${
                    mobileMenuOpen
                      ? "rotate-0 opacity-100"
                      : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-gray-200/30 dark:border-gray-700/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block px-6 py-4 text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:shadow-lg mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center">
                    <span className="transition-transform duration-300 group-hover:translate-x-2 drop-shadow-sm">
                      {item.label}
                    </span>
                  </div>
                </Link>
              ))}

              <div className="pt-6 border-t border-gray-200/30 dark:border-gray-700/30 mx-2">
                <Button
                  onClick={handleContactClick}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20"
                >
                  <Phone className="mr-2 h-5 w-5 drop-shadow-sm" />
                  <span className="drop-shadow-sm">Book Now</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
