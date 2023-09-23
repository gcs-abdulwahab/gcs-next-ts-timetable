import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@radix-ui/themes/styles.css";
import { StrictMode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TanStackProvider from "./components/providers/TanStackProvider";

const inter = Inter({ subsets: ["latin"] });

// This is the sample change
export const metadata: Metadata = {
	title: "GCS TimeTable Next TS App",
	description: "Created By Abdul-Wahab",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<StrictMode>
			<html lang="en" data-theme="dark">
						<TanStackProvider>
				<body className={inter.className}>
					<div className="container mx-auto">
							<Header />
							{children}
							<Footer />
					</div>
				</body>
						</TanStackProvider>
			</html>
		</StrictMode>
	);
}
