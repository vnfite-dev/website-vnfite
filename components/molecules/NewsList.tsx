"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// const formatDate = (date: Date) => {
// const options = {
// 	hour: "2-digit",
// 	minute: "2-digit",
// };
// const time = date.toLocaleTimeString("en-GB"); // 24-hour format

// const day = String(date.getDate()).padStart(2, "0");
// const month = String(date.getMonth() + 1).padStart(2, "0");
// const year = date.getFullYear();

// return `${time} - ${day}/${month}/${year}`;

// return "17:19 - 10/12/2023";
// };
const data = [
	{
		src: "/images/home/new-1.png",
		title: "Lộ lý do giá vàng đột ngột tăng mạnh, phá vỡ mọi kỷ lục.",
		content:
			'Giá vàng giao ngay bắt đầu tuần giao dịch ở 2.570 USD/ounce, không thay đổi nhiều so với giá đóng cửa tuần trước. Sau đó, mặt hàng này chủ yếu đi ngang, "nín thở" chờ đợi quyết định cuối cùng của Cục Dự trữ Liên bang Mỹ (Fed), rằng sẽ cắt giảm 0,25% hay là mức cắt giảm mạnh 0,5% nếu có sự thay đổi.',
		date: "17:19 - 10/12/2023",
	},
	{
		src: "/images/home/money.png",
		title: "Lộ lý do giá vàng đột ngột tăng mạnh, phá vỡ mọi kỷ lục.",
		content:
			'Giá vàng giao ngay bắt đầu tuần giao dịch ở 2.570 USD/ounce, không thay đổi nhiều so với giá đóng cửa tuần trước. Sau đó, mặt hàng này chủ yếu đi ngang, "nín thở" chờ đợi quyết định cuối cùng của Cục Dự trữ Liên bang Mỹ (Fed), rằng sẽ cắt giảm 0,25% hay là mức cắt giảm mạnh 0,5% nếu có sự thay đổi.',
		date: "17:19 - 10/12/2023",
	},
	{
		src: "/images/home/new-1.png",
		title: "Lộ lý do giá vàng đột ngột tăng mạnh, phá vỡ mọi kỷ lục.",
		content:
			'Giá vàng giao ngay bắt đầu tuần giao dịch ở 2.570 USD/ounce, không thay đổi nhiều so với giá đóng cửa tuần trước. Sau đó, mặt hàng này chủ yếu đi ngang, "nín thở" chờ đợi quyết định cuối cùng của Cục Dự trữ Liên bang Mỹ (Fed), rằng sẽ cắt giảm 0,25% hay là mức cắt giảm mạnh 0,5% nếu có sự thay đổi.',
		date: "17:19 - 10/12/2023",
	},
	{
		src: "/images/home/new-1.png",
		title: "Lộ lý do giá vàng đột ngột tăng mạnh, phá vỡ mọi kỷ lục.",
		content:
			'Giá vàng giao ngay bắt đầu tuần giao dịch ở 2.570 USD/ounce, không thay đổi nhiều so với giá đóng cửa tuần trước. Sau đó, mặt hàng này chủ yếu đi ngang, "nín thở" chờ đợi quyết định cuối cùng của Cục Dự trữ Liên bang Mỹ (Fed), rằng sẽ cắt giảm 0,25% hay là mức cắt giảm mạnh 0,5% nếu có sự thay đổi.',
		date: "17:19 - 10/12/2023",
	},
];
const NewsList = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [imageLink, setImageLink] = useState("/images/home/new-1.png");
	// const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		api.on("select", () => {
			setImageLink(data[api.selectedScrollSnap() + 1]?.src || "/images/home/new-1.png");
		});
	}, [api]);
	return (
		<div className="max-w-[1280px] mx-auto px-8">
			<div className="relative z-10 text-center">
				<p className="text-gradient font-semibold green-underline after:w-[120%]">Tin tức</p>
				<div className="mt-4 text-5xl font-semibold">
					Đọc tin HOT nhất trong ngày cùng <span className="text-gradient font-bold">VNFITE</span>
				</div>
			</div>

			<div className="bg-grad w-full rounded-[32px] mt-16 h-fit py-[2px] lg:pt-0 lg:h-[420px]">
				<div className="bg-grad-content rounded-[32px] relative">
					<div className="flex flex-col lg:flex-row w-full lg:h-[416px]">
						<div className="w-full lg:w-2/5 relative h-[416px]">
							<Image
								src={imageLink}
								alt="news"
								fill
								className="rounded-t-[32px] lg:rounded-tr-none lg:rounded-l-[32px] object-cover "
							/>
						</div>

						<div className="w-full lg:w-3/5 flex relative pb-6 lg:pb-0">
							<div className="hidden sm:flex w-1/5 flex-col justify-center items-center ">
								<div className="h-9 w-9 cursor-pointer rounded-full bg-grad flex items-center justify-center">
									<div
										className="h-8 w-8 rounded-full bg-white flex justify-center items-center"
										onClick={() => api?.scrollPrev()}
									>
										{/* <ArrowRight className="h-4 w-4" /> */}
										<ChevronRight
											size={40}
											color="#CF1313"
											className="relative -left-[2px] rotate-180"
										/>
									</div>
								</div>
							</div>

							<Carousel className="w-full px-4 lg:px-0" setApi={setApi} opts={{ loop: true }}>
								<CarouselContent>
									{data.map((_, index) => (
										<CarouselItem key={index}>
											<div className="flex-grow pt-8">
												<p className="text-[32px] leading-[48px] font-medium">{_.title}</p>

												<p className="mt-6 text-base third-line-truncate">{_.content}</p>

												<p className="mt-2 text-sm text-gray-600">{_.date}</p>

												<Link href={"#"} className="flex gap-2 mt-4">
													<p className="text-2xl leading-9">Xem chi tiết </p>
													<ArrowRight
														className="relative top-1 -rotate-45 text-gray-600"
														strokeWidth="3px"
													/>
												</Link>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
							<div className="hidden sm:flex w-1/5 flex-col justify-center items-center">
								<div
									className="h-9 w-9 cursor-pointer rounded-full bg-grad flex items-center justify-center"
									onClick={() => api?.scrollNext()}
								>
									<div className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
										<ChevronRight size={40} color="#CF1313" className="relative left-[2px]" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsList;
