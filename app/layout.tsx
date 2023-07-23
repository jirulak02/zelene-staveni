import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoToTop from "@/components/ui/GoToTop";
import CookieConsent from "@/components/ui/CookieConsent";
import TOPlist from "@/lib/TOPlist";

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
				<Analytics />
				<TOPlist />
			</body>
		</html>
	);
}
