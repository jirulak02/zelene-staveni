import { Montserrat } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoToTop from "@/components/ui/GoToTop";

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
				<Footer />
				<GoToTop />
			</body>
		</html>
	);
}
