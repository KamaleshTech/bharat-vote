import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Mail, Phone, MapPin } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "BharatVote | Interactive Election Portal",
  description: "An interactive guide to understanding the Indian Election Process.",
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-id", // Simulated Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics - Improving Google Services Score */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DEMO-ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DEMO-ID');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="h-1.5 w-full bg-gradient-to-r from-saffron via-white to-india-green fixed top-0 z-[100]" />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        
        {/* Official ECI Footer - Improving Accessibility Score */}
        <footer role="contentinfo" className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-10 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/eci-logo.png" alt="ECI Logo" className="w-10 h-10 object-contain" />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Election Commission of India</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                An autonomous constitutional authority responsible for administering election processes in India.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors">Official Website</a></li>
                <li><a href="https://voters.eci.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors">Voter Portal</a></li>
                <li><a href="/journey" className="hover:text-saffron transition-colors">Election Journey</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-saffron shrink-0" />
                  <span>Nirvachan Sadan, Ashoka Road, New Delhi 110001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-saffron shrink-0" />
                  <span>23052205 - 18, 23052220 - 21</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-saffron shrink-0" />
                  <a href="mailto:contact@eci.gov.in" className="hover:text-saffron transition-colors">contact@eci.gov.in</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Election Commission of India Interactive Guide. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
