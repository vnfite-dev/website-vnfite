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
const Navbar = () => {
	return (
		<div className="w-full flex justify-between items-center">
			<div className="">
				<Image src="/images/vnfite_logo.png" width={220} height={52} alt="logo" />
			</div>
			<div className="items relative">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="navigation-menu-item">Về VNFITE</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div className="grid gap-3 p-6 w-[700px]">
									<div className="grid gap-1">
										<h4 className="text-sm font-medium leading-none">Về chúng tôi</h4>
										<p className="text-sm text-muted-foreground">Kết nối nguồn vốn siêu tốc</p>
									</div>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="navigation-menu-item">
								Sàn giao dịch
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Link</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="navigation-menu-item">Sản phẩm</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Link</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="navigation-menu-item">Tin tức</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Link</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="navigation-menu-item">Bảo hiểm</NavigationMenuTrigger>
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
	);
};

export default Navbar;
