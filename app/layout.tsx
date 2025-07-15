import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jetray Jordan | Premium Flight Booking & Travel Services",
  description:
    "Discover the world with Jetray Jordan. Premium flight booking, exclusive deals, and personalized travel experiences. Your journey begins here.",
  keywords: [
    "flight booking",
    "cheap flights",
    "airline tickets",
    "travel agency",
    "international flights",
    "domestic flights",
    "flight deals",
    "travel booking",
    "vacation packages",
    "business travel",
  ],
  icons: {
    icon: "https://ik.imagekit.io/pcet3dvcu/jetray-Photoroom.png?updatedAt=1752514564717",
    shortcut:
      "https://ik.imagekit.io/pcet3dvcu/jetray-Photoroom.png?updatedAt=1752514564717",
    apple:
      "https://ik.imagekit.io/pcet3dvcu/jetray-Photoroom.png?updatedAt=1752514564717",
    other: {
      rel: "apple-touch-icon",
      url: "https://ik.imagekit.io/pcet3dvcu/jetray-Photoroom.png?updatedAt=1752514564717",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://ik.imagekit.io/pcet3dvcu/jetray-Photoroom.png?updatedAt=1752514564717"
        />
        <link
          rel="apple-touch-icon"
          href="https://ik.imagekit.io/pcet3dvcu/jetray-Photoroom.png?updatedAt=1752514564717"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
