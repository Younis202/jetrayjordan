import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Jetray Jordan | Premium Flight Booking & Travel Services',
  description: 'Discover the world with Jetray Jordan. Premium flight booking, exclusive deals, and personalized travel experiences. Your journey begins here.',
  keywords: [
    'flight booking',
    'cheap flights',
    'airline tickets',
    'travel agency',
    'international flights',
    'domestic flights',
    'flight deals',
    'travel booking',
    'vacation packages',
    'business travel'
  ],
  icons: {
    icon: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=64&h=64&fit=crop&crop=center',
    shortcut: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=64&h=64&fit=crop&crop=center',
    apple: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=64&h=64&fit=crop&crop=center',
    other: {
      rel: 'apple-touch-icon',
      url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=64&h=64&fit=crop&crop=center',
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
          href="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=64&h=64&fit=crop&crop=center"
        />
        <link
          rel="apple-touch-icon"
          href="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=64&h=64&fit=crop&crop=center"
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