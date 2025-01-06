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
import Topbar from "./Topbar";
const Navbar = () => {
	return (
		<>
			{/* <Topbar /> */}
			<div className="w-full flex justify-between items-center">
				<div className="">
					<Image src="/images/vnfite_logo.png" width={220} height={52} alt="logo" />
				</div>
				<div className="items relative">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="hover:text-gradient hover:bg-transparent navigation-menu-item">
									Về VNFITE
								</NavigationMenuTrigger>
								<NavigationMenuContent className="relative" onClick={(e) => console.log(e)}>
									<div className="flex gap-3 py-3 px-3 w-[750px] relative z-[1000]">
										<div className="flex flex-col min-w-[250px]">
											<div className="py-3 px-6 w-full cursor-pointer hover:bg-customPink hover:font-semibold ">
												Gọi vốn cá nhân
											</div>
											<div className="py-3 px-6 cursor-pointer hover:bg-customPink">
												Gọi vốn cá nhân
											</div>
											<div className="py-3 px-6 cursor-pointer hover:bg-customPink">
												Gọi vốn cá nhân
											</div>
										</div>

										<div className="grid">
											<div className=""></div>
										</div>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="navigation-menu-item">
									Sàn giao dịch
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<NavigationMenuLink>
										{" "}
										<div className="flex gap-3 py-3 px-3 w-[750px] relative z-[1000]">
											<div className="flex flex-col min-w-[250px]">
												<div className="py-3 px-6 w-full cursor-pointer hover:bg-customPink hover:font-semibold ">
													Gọi vốn cá nhân
												</div>
												<div className="py-3 px-6 cursor-pointer hover:bg-customPink">
													Gọi vốn cá nhân
												</div>
												<div className="py-3 px-6 cursor-pointer hover:bg-customPink">
													Gọi vốn cá nhân
												</div>
											</div>

											<div className="grid">
												<div className=""></div>
											</div>
										</div>
									</NavigationMenuLink>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="navigation-menu-item">
									Sản phẩm
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<NavigationMenuLink>
										{" "}
										<div className="flex gap-3 py-3 px-3 w-[750px] relative z-[1000]">
											<div className="flex flex-col min-w-[250px]">
												<div className="py-3 px-6 w-full cursor-pointer hover:bg-customPink hover:font-semibold ">
													Gọi vốn cá nhân
												</div>
												<div className="py-3 px-6 cursor-pointer hover:bg-customPink">
													Gọi vốn cá nhân
												</div>
												<div className="py-3 px-6 cursor-pointer hover:bg-customPink">
													Gọi vốn cá nhân
												</div>
											</div>

											<div className="grid">
												<div className=""></div>
											</div>
										</div>
									</NavigationMenuLink>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="navigation-menu-item">
									Tin tức
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<NavigationMenuLink>
										{" "}
										<div className="flex gap-3 py-3 px-3 w-[750px] relative z-[1000]">
											<div className="flex flex-col min-w-[250px]">
												<div className="py-3 px-6 w-full cursor-pointer hover:bg-customPink hover:font-semibold ">
													Gọi vốn cá nhân
												</div>
												<div className="py-3 px-6 cursor-pointer hover:bg-customPink">
													Gọi vốn cá nhân
												</div>
												<div className="py-3 px-6 cursor-pointer hover:bg-customPink">
													Gọi vốn cá nhân
												</div>
											</div>

											<div className="grid">
												<div className=""></div>
											</div>
										</div>
									</NavigationMenuLink>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="navigation-menu-item">
									Bảo hiểm
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<NavigationMenuLink>Link</NavigationMenuLink>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/docs" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn("navigation-menu-item", navigationMenuTriggerStyle())}
									>
										Documentation
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="">
					<Button className="btn-primary">Tải ứng dụng</Button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
