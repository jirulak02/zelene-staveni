import { AxiomWebVitals } from "next-axiom";
import { Montserrat } from "next/font/google";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CookieConsent from "@/components/ui/CookieConsent";
import GoToTop from "@/components/ui/GoToTop";
import TOPlist from "@/lib/TOPlist";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export type Children = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="cs" className={`${montserrat.variable} font-sans`}>
      <body className="flex flex-col">
        <Header />
        <main>{children}</main>
        <CookieConsent />
        <Footer />
        <GoToTop />
        <SpeedInsights />
        <AxiomWebVitals />
        <TOPlist />
        <Link href="https://www.jiri-simecek.com/" target="_blank" className="h-0 w-0" />
      </body>
    </html>
  );
}
