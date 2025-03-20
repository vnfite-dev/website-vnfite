import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/molecules/Footer";
import Header from "@/components/molecules/Header";
import Head from "next/head";
import ZaloChatWidget from "@/components/molecules/ZaloChatWidget";
import { Suspense } from "react";
import Loading from "./loading";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const sfpro = localFont({
	src: [
		{
			path: "./fonts/SF-Pro-Display-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/SF-Pro-Display-Semibold.otf",
			weight: "600",
		},
		{
			path: "./fonts/SF-Pro-Display-Bold.otf",
			weight: "700",
		},
		{
			path: "./fonts/SF-Pro-Display-Heavy.otf",
			weight: "800",
		},
	],
	variable: "--font-sfpro",
});

const ambrose = localFont({
	src: [
		{
			path: "./fonts/UTM-Ambrose.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-ambrose",
});

export const metadata: Metadata = {
	title: "VNFITE - KẾT NỐI NGUỒN VỐN SIÊU TỐC",
	description: "VNFITE - Làm chủ tương lai tài chính của bạn",
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta httpEquiv="Content-Security-Policy" content="img-src https: data:;" />
				<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
			</Head>
			<body className={`${sfpro.variable} ${inter.className} ${ambrose.variable} font-sfpro relative`}>
				<ZaloChatWidget />

				<Header />
				{modal}
				<Suspense fallback={<Loading />}>
					{children}
				</Suspense>

				<footer className="mt-32 font-sfpro">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
