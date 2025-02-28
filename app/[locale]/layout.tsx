import { AxiomWebVitals } from "next-axiom";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CookieConsent from "@/components/ui/CookieConsent";
import GoToTop from "@/components/ui/GoToTop";
import { Locale, locales } from "@/i18n";
import TOPlist from "@/lib/TOPlist";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export type Children = { children: React.ReactNode };
export type Params = { locale: Locale };

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<Params> }>) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    return notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.variable} font-sans`}>
      <body className="flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <CookieConsent />
          <Footer />
        </NextIntlClientProvider>
        <GoToTop />
        <SpeedInsights />
        <AxiomWebVitals />
        <TOPlist />
        <Link href="https://www.jiri-simecek.com/" target="_blank" className="h-0 w-0" />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
