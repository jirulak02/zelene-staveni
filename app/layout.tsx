import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export type Children = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Children) {
	return (
		<html lang="en" className={`${inter.variable} font-sans`}>
			<body>{children}</body>
		</html>
	);
}
