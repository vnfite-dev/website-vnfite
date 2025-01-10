"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { Download } from "lucide-react";
const Navbar = () => {
	const navRef = useRef<HTMLDivElement>(null);

	const [isFixed, setIsFixed] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (navRef.current) {
				// const rect = navRef.current.getBoundingClientRect();

				if (window.scrollY >= 60) {
					if (isFixed == false) {
						setIsFixed(true);
					}
				} else {
					setIsFixed(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			{/* <Topbar /> */}
			<div
				className={cn(
					"py-6 w-full flex justify-between items-center mx-auto px-[15%]",
					isFixed ? "fixed bg-white shadow-lg z-[80] top-0 py-2 text-red-500" : ""
				)}
				ref={navRef}
			>
				<Link href={"/"}>
					<div className="flex gap-1">
						{/* <Image src="/images/vnfite_logo.png" width={220} height={52} alt="logo" /> */}
						<Image src="/logo.svg" width={55} height={55} alt="logo" />
						<div className="flex flex-col justify-center items-center gap-1">
							{!isFixed && (
								<Image
									src="/onlyVNFITE.svg"
									width={160}
									height={32}
									alt="logo"
									// className={cn(isFixed && "transform")}
								/>
							)}

							{!isFixed && (
								<Image
									src="/knnv.svg"
									width={150}
									height={6}
									alt="logo"
									className="transition-opacity duration-300 opacity-100"
								/>
							)}
						</div>
					</div>
				</Link>
				<div className="items relative">
					<NavigationMenu className="font-sfpro">
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn("navigation-menu-item", navigationMenuTriggerStyle())}
									>
										Về VNFITE
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="hover:text-gradient navigation-menu-item">
									Gọi vốn
								</NavigationMenuTrigger>
								<NavigationMenuContent className="relative">
									<div className="flex gap-3 py-3 px-3 w-[750px] relative z-[1000]">
										<div className="flex flex-col min-w-[250px]">
											<div className="py-3 px-6 cursor-pointer hover:bg-customPink hover:font-semibold ">
												Gọi vốn cá nhân
											</div>
											<div className="py-3 px-6 cursor-pointer hover:bg-customPink hover:font-semibold ">
												Gọi vốn gia đình
											</div>
											<div className="py-3 px-6 cursor-pointer hover:bg-customPink hover:font-semibold ">
												Gọi vốn doanh nghiệp
											</div>
										</div>

										<div className="grid">
											<div className=""></div>
										</div>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/invest" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn("navigation-menu-item", navigationMenuTriggerStyle())}
									>
										Đầu tư
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/news" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn("navigation-menu-item", navigationMenuTriggerStyle())}
									>
										Tin tức
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/insure" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn("navigation-menu-item", navigationMenuTriggerStyle())}
									>
										Bảo hiểm
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/careers" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn("navigation-menu-item", navigationMenuTriggerStyle())}
									>
										Tuyển dụng
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="">
					<Button className="btn-primary">{isFixed == false ? "Tải ứng dụng" : <Download />}</Button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
