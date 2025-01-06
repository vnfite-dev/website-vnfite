"use client";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { usePathname } from "next/navigation";
const Header = () => {
	const pathname = usePathname();

	// Define background classes based on the route
	const bannerBackground = (() => {
		switch (pathname) {
			case "/about":
				return "bg-about-banner";
			case "/products":
				return "bg-products-banner";
			case "/contact":
				return "bg-contact-banner";
			case "/invest":
				return "bg-invest-banner";
			default:
				return "bg-home-banner";
		}
	})();
	return (
		<header className={`${bannerBackground} pb-[190px] h-v`}>
			<Topbar />
			<div className="lg:container mx-auto pt-8 relative top-4">
				<Navbar />

				{pathname === "/" && (
					<div className="mt-[90px]">
						<Banner />
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
