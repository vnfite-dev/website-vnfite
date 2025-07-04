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
import { useAppLink } from "@/hooks/helper";
import { useEffect, useState, useRef, useCallback } from "react";
import { Briefcase, ChevronDown, Download, UserRound, UsersRound } from "lucide-react";
import { usePathname } from "next/navigation";
import itemProduct from "@/app/(main)/products/data";
import { useFooter } from "./FooterProvider";

const ProductNavItem = ({ image, title, id }: { image: string; title: string; id: number }) => {
	return (
		<Link href={`/products/${id}`} legacyBehavior>
			<div className="flex w-full justify-center items-center gap-3 py-2 px-4 cursor-pointer hover:bg-customPink h-fit rounded-sm">
				<div className="w-16 h-16 relative">
					<Image src={image} fill alt="products" />
				</div>
				<p>{title}</p>
			</div>
		</Link>
	);
};
const Navbar = () => {
	const navRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [childMenuOpen, setChildMenuOpen] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const pathname = usePathname();
	const [productsType, setProductsType] = useState(0);
	const appLink = useAppLink();

	// Bấm tải xuống cuộn xuống cuối trang và tự động mở rộng footer
	const { setIsOpenFooter, isDisabled, setIsDisabled } = useFooter();
	const handleDownloadClick = useCallback(() => {
			if (isDisabled) return;
			console.log("Download click: Open Footer");
			setIsOpenFooter(true);
			setIsDisabled(true);
			setTimeout(() => {
				setIsDisabled(false);
			}, 500);
		}, [isDisabled, setIsOpenFooter, setIsDisabled]);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (window.innerWidth < 768) {
			setIsFixed(true);
		}
		setIsOpen(false);
		setChildMenuOpen(false);
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
					if (window.innerWidth > 768) {
						setIsFixed(false);
					}
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
				className={cn(
					"w-full scrollbar-ignore",
					isFixed ? "bg-white fixed z-[80] top-0 py-2 shadow-lg" : ""
				)}
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
							<div className="hidden sm:flex flex-col justify-center items-center gap-1">
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
									<Link href="/about" legacyBehavior passHref>
										<NavigationMenuLink
											className={cn(
												"navigation-menu-item",
												navigationMenuTriggerStyle()
											)}
										>
											Về VNFITE
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link href={"/products/1"}>
										<NavigationMenuTrigger className="hover:text-gradient navigation-menu-item">
											Gọi vốn
										</NavigationMenuTrigger>
									</Link>
									<NavigationMenuContent className="relative">
										<div className="flex gap-3 py-3 w-[1000px] pb-10 relative z-[1000]">
											<div className="flex flex-col min-w-[250px]">
												<div
													onMouseEnter={() => setProductsType(0)}
													className="py-3 px-6 rounded-r-md cursor-pointer hover:bg-red-400 hover:font-semibold hover:text-white "
												>
													Gọi vốn cá nhân
												</div>
												<div
													onMouseEnter={() => setProductsType(1)}
													className="py-3 px-6 rounded-r-md cursor-pointer hover:bg-red-400 hover:font-semibold hover:text-white "
												>
													Gọi vốn hộ kinh doanh
												</div>
												<div
													onMouseEnter={() => setProductsType(2)}
													className="py-3 px-6 rounded-r-md cursor-pointer hover:bg-red-400 hover:font-semibold hover:text-white "
												>
													Gọi vốn doanh nghiệp
												</div>
											</div>

											<div className="w-full h-full grid grid-cols-3 gap-4 justify-between px-2 border-l-[3px]  border-customPink">
												{productsType === 0 &&
													itemProduct
														.filter((item) => item.productsType === 0)
														.map((item, index) => (
															<ProductNavItem
																// state="active"
																image={item.image}
																title={item.title}
																id={item.id}
																key={index}
															/>
														))}

												{productsType === 1 &&
													itemProduct
														.filter((item) => item.productsType === 1)
														.map((item, index) => (
															<ProductNavItem
																// state="active"
																image={item.image}
																title={item.title}
																id={item.id}
																key={index}
															/>
														))}

												{productsType === 2 &&
													itemProduct
														.filter((item) => item.productsType === 2)
														.map((item, index) => (
															<ProductNavItem
																// state="active"
																image={item.image}
																title={item.title}
																id={item.id}
																key={index}
															/>
														))}
											</div>
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link href="/invest" legacyBehavior passHref>
										<NavigationMenuLink
											className={cn(
												"navigation-menu-item",
												navigationMenuTriggerStyle()
											)}
										>
											Đầu tư
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link href="/news" legacyBehavior passHref>
										<NavigationMenuLink
											className={cn(
												"navigation-menu-item",
												navigationMenuTriggerStyle()
											)}
										>
											Tin tức
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link href="/insure" legacyBehavior passHref>
										<NavigationMenuLink
											className={cn(
												"navigation-menu-item",
												navigationMenuTriggerStyle()
											)}
										>
											Bảo hiểm
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link href="/careers" legacyBehavior passHref>
										<NavigationMenuLink
											className={cn(
												"navigation-menu-item",
												navigationMenuTriggerStyle()
											)}
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
							<Link href="/about" legacyBehavior>
								<li className="py-3 px-4">
									<a className="text-lg font-semibold text-gray-600">Về VNFITE</a>
								</li>
							</Link>
							<li className="py-3 px-4">
								<div className="cursor-pointer">
									<p
										className="flex justify-between items-center text-lg font-semibold text-gray-600 hover:text-gradient h-fit"
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
										className={`text-lg font-medium overflow-hidden transition-all duration-300 ${
											childMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
										}`}
									>
										<Link href="/products/1">
											<div className="flex items-center gap-3 py-3 px-4 ">
												{" "}
												<UserRound color="#E82F2F" /> Gọi vốn cá nhân{" "}
											</div>
										</Link>
										<Link href="/products/5">
											<div className="flex items-center gap-3  py-3 px-4">
												<UsersRound color="#E82F2F" />
												Gọi vốn hộ kinh doanh
											</div>
										</Link>
										<Link href="/products/4">
											<div className="flex items-center gap-3  py-3 px-4">
												<Briefcase color="#E82F2F" />
												Gọi vốn doanh nghiệp
											</div>
										</Link>
									</div>
								</div>
							</li>
							<Link href="/invest" legacyBehavior>
								<li className="py-3 px-4">
									<a className="text-lg font-semibold text-gray-500">Đầu tư</a>
								</li>
							</Link>
							<Link href="/news" legacyBehavior>
								<li className="py-3 px-4">
									<a className="text-lg font-semibold text-gray-500">Tin tức</a>
								</li>
							</Link>
							<Link href="/insure" legacyBehavior>
								<li className="py-3 px-4">
									<a className="text-lg font-semibold text-gray-500">Bảo hiểm</a>
								</li>
							</Link>
							<Link href="/careers" legacyBehavior>
								<li className="py-3 px-4  border-b border-gray-300">
									<a className="text-lg font-semibold text-gray-500">Tuyển dụng</a>
								</li>
							</Link>
						</ul>

						<div className="mt-12 py-3 px-4">
							<Link href={appLink} target="_blank">
								<Button className="btn-primary w-full">
									<span>Tải ứng dụng</span> <Download />
								</Button>
							</Link>

							<div className="mt-4 text-center text-gray-300">Kết nối nguồn vốn siêu tốc</div>
						</div>
					</div>

					<div
						className="lg:hidden relative flex flex-col items-center justify-center w-10 h-10 group gap-[6px]"
						onClick={() => setIsOpen(!isOpen)}
					>
						{/* <Menu color="#E82F2F" size={46} /> */}

						<span
							className={`block w-8 h-1 bg-grad rounded-sm transition-transform duration-300 ${
								isOpen ? "rotate-45 translate-y-3" : "translate-y-0"
							}`}
						></span>

						{/* Line 2 */}
						<span
							className={`block w-8 h-1 bg-grad rounded-sm transition-opacity duration-300 ${
								isOpen ? "opacity-0" : "opacity-100"
							}`}
						></span>

						{/* Line 3 */}
						<span
							className={`block w-8 h-1 bg-grad rounded-sm transition-transform duration-300 ${
								isOpen ? "-rotate-45 -translate-y-2" : "translate-y-0"
							}`}
						></span>
					</div>
					<div className="hidden lg:block">
						{/* <Button className="btn-primary">{isFixed == false ? "Tải ứng dụng" : <Download />}</Button> */}
						<Link href={"#footer"} target="_self">
							<Button className="btn-primary" onClick={handleDownloadClick}>Tải ứng dụng</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
