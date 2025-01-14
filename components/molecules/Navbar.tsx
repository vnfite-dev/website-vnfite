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
import { Briefcase, ChevronDown, Download, Menu, UserRound, UsersRound } from "lucide-react";
import { usePathname } from "next/navigation";
const Navbar = () => {
	const navRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [childMenuOpen, setChildMenuOpen] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (isOpen == true) {
			setIsFixed(true);
		}

		if (isOpen == false) {
			if (window.scrollY < 48) {
				setIsFixed(false);
			}
		}
	}, [isOpen]);

	useEffect(() => {
		const handleScroll = () => {
			if (navRef.current) {
				// const rect = navRef.current.getBoundingClientRect();

				if (window.scrollY >= 48) {
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
		<div className="relative">
			{/* <Topbar /> */}
			{/* <div
				className={cn(
					"py-6 w-full flex justify-between items-center max-w-[1280px] mx-auto px-4 lg:px-10",
					isFixed ? "fixed w-full max-w-none bg-white shadow-lg z-[80] top-0 py-2 text-red-500" : ""
				)}
				ref={navRef}
			> */}
			<div
				className={cn("w-full", isFixed ? "bg-white fixed z-[80] top-0 py-2 shadow-lg" : "")}
				ref={navRef}
			>
				<div
					className={cn(
						"max-w-[1280px] flex justify-between items-center mx-auto px-4 xl:px-0",
						isFixed ? "" : "py-6 w-full  "
					)}
				>
					<Link href={"/"}>
						<div className="flex gap-1">
							{/* <Image src="/images/vnfite_logo.png" width={220} height={52} alt="logo" /> */}
							<Image src="/logo.svg" width={55} height={55} alt="logo" />
							<div className="flex flex-col justify-center items-center gap-1">
								<Image
									src="/onlyVNFITE.svg"
									width={160}
									height={32}
									alt="logo"
									// className={cn(isFixed && "transform")}
								/>

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
					<div className="items relative hidden lg:block">
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

					{/* mobile navbar */}

					{/* Mobile Menu */}
					<div
						className={cn(
							"absolute z-[80] top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 lg:hidden",
							{
								"max-h-[100vh] opacity-100": isOpen,
								"max-h-0 opacity-0": !isOpen,
							}
						)}
					>
						<ul className="flex flex-col divide-y divide-gray-200">
							<li className="py-3 px-4">
								<Link href="/" legacyBehavior>
									<a className="text-lg font-semibold text-gray-600">Về VNFITE</a>
								</Link>
							</li>
							<li className="py-3 px-4">
								<div className="cursor-pointer">
									<p
										className="flex justify-between items-center text-lg font-semibold text-gray-600 hover:text-gradient"
										onClick={() => setChildMenuOpen(!childMenuOpen)} // Toggle menu visibility
									>
										<span>Gọi vốn</span>

										<ChevronDown
											color="#E82F2F"
											className={cn(
												"transition-transform duration-300",
												childMenuOpen && "rotate-180"
											)}
										/>
									</p>
									<div
										className={`pt-2 text-lg font-medium overflow-hidden transition-all duration-300 ${
											childMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
										}`}
									>
										<Link href="/products">
											<div className="flex items-center gap-3 py-2 ">
												{" "}
												<UserRound color="#666666" /> Gọi vốn cá nhân{" "}
											</div>
										</Link>
										<Link href="/products">
											<div className="flex items-center gap-3 py-2 ">
												<UsersRound color="#666666" />
												Gọi vốn gia đình
											</div>
										</Link>
										<Link href="/products">
											<div className="flex items-center gap-3 py-2 ">
												<Briefcase color="#666666" />
												Gọi vốn doanh nghiệp
											</div>
										</Link>
									</div>
								</div>
							</li>
							<li className="py-3 px-4">
								<Link href="/invest" legacyBehavior>
									<a className="text-lg font-semibold text-gray-500">Đầu tư</a>
								</Link>
							</li>
							<li className="py-3 px-4">
								<Link href="/news" legacyBehavior>
									<a className="text-lg font-semibold text-gray-500">Tin tức</a>
								</Link>
							</li>
							<li className="py-3 px-4">
								<Link href="/insure" legacyBehavior>
									<a className="text-lg font-semibold text-gray-500">Bảo hiểm</a>
								</Link>
							</li>
							<li className="py-3 px-4">
								<Link href="/careers" legacyBehavior>
									<a className="text-lg font-semibold text-gray-500">Tuyển dụng</a>
								</Link>
							</li>

							<li className="py-3 px-4">
								<Button className="btn-primary w-full">
									<span>Tải ứng dụng</span> <Download />
								</Button>
							</li>
						</ul>
					</div>

					<div className="lg:hidden " onClick={() => setIsOpen(!isOpen)}>
						<Menu color="#E82F2F" size={40} />
					</div>
					<div className="hidden lg:block">
						<Button className="btn-primary">{isFixed == false ? "Tải ứng dụng" : <Download />}</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
