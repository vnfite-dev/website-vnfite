"use client";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { usePathname } from "next/navigation";
const Header = () => {
	const pathname = usePathname();

	// Define background classes based on the route
	const bannerBackground = (() => {
		if (pathname === "/") {
			return "bg-home-banner";
		} else {
			return `bg-${pathname.split("/")[1]}-banner`;
		}
		// switch (pathname) {
		// 	case "/about":
		// 		return "bg-about-banner";
		// 	case "/products":
		// 		return "bg-products-banner";
		// 	case "/contact":
		// 		return "bg-contact-banner";
		// 	case "/invest":
		// 		return "bg-invest-banner";
		// 	case "/insure":
		// 		return "bg-insure-banner";
		// 	case "/news":
		// 		return "bg-news-banner";
		// 	default:
		// 		return "bg-home-banner";
		// }
	})();
	return (
		<header className={`${bannerBackground} min-h-[720px] max-h-fit`}>
			<Topbar />
			<Navbar />
			<div className="lg:container mx-auto relative top-4">
				{pathname === "/" && (
					<div className="mt-6 md:mt-10 xl:mt-12">
						<Banner />
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
