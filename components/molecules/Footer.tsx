"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Dot } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavItem = ({ title, items }: { title: string; items: string[] }) => {
	return (
		<div className="">
			<p className="text-base font-semibold">{title}</p>
			<div className="mt-2 lg:mt-6 flex flex-col gap-4">
				{items.map((item, index) => {
					return (
						<div key={index} className="text-gray-600 text-sm leading-[16px]">
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};

const navItemText = [
	{
		title: "Sàn giao dịch",
		items: ["Đầu tư P2P", "Đầu tư nhóm", "Sàn chuyển nhượng"],
	},
	{
		title: "Sản phẩm",
		items: ["Gọi vốn cá nhân", "Gọi vốn hộ kinh doanh", "Gọi vốn doanh nghiệp"],
	},
	{
		title: "Về VNFITE",
		items: ["Thông tin về VNFITE", "Ban lãnh đạo", "Cổ đông"],
	},
	{
		title: "Tin tức",
		items: ["Khuyến mãi", "Tin tức về VNFITE", "Tin tức"],
	},
	{
		title: "Tuyển dụng",
		items: [""],
	},
];

const Footer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	const handleClick = () => {
		if (isDisabled) return;

		setIsDisabled(true);
		setIsOpen(!isOpen);

		// Kích hoạt lại sau 300ms
		setTimeout(() => {
			setIsDisabled(false);
		}, 500);
	};

	useEffect(() => {
		if (isOpen == true) {
			setTimeout(() => {
				window.scrollTo({
					top: document.body.scrollHeight, // Đến cuối trang
					behavior: "smooth", // Hiệu ứng mượt
				});
			}, 400);
		}
	}, [isOpen]);
	return (
		<div className="px-10 md:px-10 xl:px-[16%] font-sfpro bg-footer relative">
			<div
				className={cn(
					"transition-all duration-500 overflow-hidden flex w-full flex-col lg:flex-row",
					isOpen ? "opacity-100 max-h-[1000px] pt-12 pb-10" : "max-h-0 opacity-0"
				)}
			>
				<div className="lg:w-4/5">
					<div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:flex gap-6 lg:gap-12">
						{navItemText?.map((item, index) => {
							return <NavItem key={index} title={item.title} items={item.items} />;
						})}
					</div>

					<div className="mt-10 lg:mt-20 flex flex-col sm:flex-row gap-4 sm:gap-16">
						<div className="flex flex-col gap-4">
							<div className="flex gap-2">
								<div className="min-w-4">
									<Image src={"icons/home/Location.svg"} width={16} height={16} alt="Location" />
								</div>
								<div className="text-sm leading-4 md:max-w-[273px]">
									Số 4A Vương Thừa Vũ, phường Khương Trung, quận Thanh Xuân, Hà Nội
								</div>
							</div>
							<div className="flex gap-2">
								<div className="">
									<Image src={"icons/home/support.svg"} width={16} height={16} alt="Phone" />
								</div>
								<div className="text-sm leading-4 max-w-[273px]">Hotline: 024.3367.6699</div>
							</div>
							<div className="flex gap-2">
								<div>
									<Image src={"icons/home/email.svg"} width={16} height={16} alt="Phone" />
								</div>
								<div className="text-sm leading-4 max-w-[273px]">dvkh@vnfite.com.vn</div>
							</div>
						</div>
						<div className="hidden md:block list-disc">
							<div className="flex gap-1 items-center">
								<Dot />
								<div className="text-[12px] font-medium">Điều khoản và điều kiện</div>
							</div>

							<div className="flex gap-1 items-center">
								<Dot />
								<div className="text-[12px] font-medium">Quyền riêng tư và dữ liệu</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-4 lg:mt-0 lg:w-1/5 flex flex-col sm:flex-row lg:block">
					<div className="sm:w-1/2 lg:w-full">
						<div className="text-center font-semibold">Tải ứng dụng</div>
						<div className="flex text-center mt-6">
							<div className="w-full flex justify-center ">
								<div>
									<Image src={"/icons/home/QR.svg"} width={150} height={150} alt="QR" />
								</div>
							</div>
							{/* <div className="w-1/2">
								<div className="mb-6">
									<Image src={"/images/home/IOS.png"} width={120} height={40} alt="Android" />
								</div>
								<div>
									<Image src={"/images/home/ANDROID.png"} width={120} height={40} alt="Android" />
								</div>
							</div> */}
						</div>
					</div>

					<div className="mt-4 sm:mt-0 lg:mt-20">
						<div className="text-center">Kết nối với VNFITE</div>

						<div className="mt-6 flex gap-6 justify-center">
							<Image src={"/icons/home/facebook.svg"} width={32} height={32} alt="Facebook" />
							<Image src={"/icons/home/youtube.svg"} width={32} height={32} alt="Facebook" />
							<Image src={"/icons/home/tiktok.svg"} width={32} height={32} alt="Facebook" />
							<Image src={"/icons/home/zalo.svg"} width={32} height={32} alt="Facebook" />
						</div>
					</div>
				</div>
			</div>
			{/* <div className="mb-[148px] border-[0.5px] border-gray-300 w-full h-[0.5px]"></div> */}

			<div className="w-full border-t-[1px] border-gray-300 py-10 flex justify-between">
				<div className="">
					<Image
						className="md:w-40"
						src={"/images/home/logoFooter.png"}
						width={220}
						height={52}
						alt="logo"
					/>
				</div>
				<div className="hidden lg:flex font-medium text-[12px] items-center">
					Sản phẩm được phát triển bởi VNFITE SOFTWARE
				</div>
				<div
					className={cn(
						"text-sm font-semibold flex items-center gap-2 cursor-pointer",
						isDisabled && "cursor-not-allowed"
					)}
					onClick={handleClick}
				>
					<span className="hidden md:inline">
						{isOpen ? "Thu nhỏ chân trang" : "Mở rộng chân trang"}
					</span>
					<div className={cn("transition-transform duration-150", isOpen ? "rotate-0" : "rotate-180")}>
						<ChevronDown color={"#CF1313"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
