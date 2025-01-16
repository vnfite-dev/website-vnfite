'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CarouselDots
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
// import { time } from "console";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { detailNews } from './data';
import { useRouter } from "next/navigation";

const bigNews = [
	{
		id: 1,
		banner: `bg-[url("/images/news/outstanding.png")]`,
		title: "THỂ LỆ CHƯƠNG TRÌNH “TẢI APP NGAY, CÓ TIỀN LIỀN TAY - NHẬN TIỀN MẶT ĐẾN 88 TRIỆU ĐỒNG”",
	},
];
const NewsPage = () => {
	const router = useRouter();

	const navigateToDetail = (id: number) => {
		router.push(`/news/${id}`);
	}

	const truncateText = (text: string, length: number) => {
		return text.length > length ? text.slice(0, length) + "..." : text;
	}

	return (
		<div className="px-5 sm:px-[10%] xl:px-[16.7%] mx-auto">
			<div className="mt-12 lg:mt-28 text-center text-2xl lg:text-5xl font-semibold">
				Khuyến mãi cùng <span className="text-gradient">VNFITE</span>
			</div>

			<div className="mt-10 ">
				<Carousel className="w-full">
					<CarouselContent>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem key={index} className="">
								<div
									className={cn(
										"p-1 border border-red-300 rounded-2xl h-64 md:h-80 lg:h-96 xl:h-[458px] bg-cover flex justify-center items-end pb-6 md:pb-12 lg:pb-16",
										bigNews[0].banner
									)}
								>
									<div className="py-5 px-6 md:px-16 border rounded-2xl border-red-500 text-white font-medium text-sm md:text-base 2xl:text-lg bg-red-800 bg-opacity-65">
										{bigNews[0].title}
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden sm:flex" />
					<CarouselNext className="hidden sm:flex" />
					<CarouselDots className="mt-5" />
				</Carousel>
			</div>

			<div className="mt-10 lg:mt-20">
				<div className="text-center text-2xl lg:text-5xl font-semibold">Tin tức nổi bật</div>
				<div className="mt-8 lg:mt-16 flex gap-8 xl:flex-row flex-col ">
					<div
						className={cn(
							"hidden sm:flex w-full md:w-[80%] lg:w-[55%] xl:w-full cursor-pointer aspect-square bg-cover rounded-4xl relative overflow-hidden group mx-auto",
							detailNews[0].banner
						)}
						onClick={() => navigateToDetail(1)}
					>
						{/* Gradient Filter for Bottom Half */}
						<div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-gray-800/100 to-transparent group-hover:h-full group-hover:from-red-600/65 transition-all duration-300 pointer-events-none"></div>

						{/* Content */}
						<div className="relative z-10 flex justify-end items-center h-full px-7 pb-6 sm:pb-14 flex-col gap-4 overflow-hidden">
							{/* Title Animation */}
							<p className="text-white font-semibold text-lg sm:text-2xl transform translate-y-24 group-hover:-translate-y-0 transition-transform duration-500 ease-in-out">
								{detailNews[0].title}
							</p>

							{/* Detail Animation */}
							<p className="hidden sm:flex text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
								{truncateText(detailNews[0].detail, 300)}
							</p>
							<p className="flex sm:hidden text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
								{truncateText(detailNews[0].detail, 150)}
							</p>

							{/* Border Animation */}
							<div className="w-full flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
								<div className="w-full border-t border-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out"></div>
								<p className="w-[280px] text-center px-1 text-white text-sm sm:text-base">Xem chi tiết</p>
								<div className="w-full border-t border-white transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out"></div>
							</div>
						</div>
					</div>

					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-[18%] md:px-0 lg:px-[10%] xl:px-0">
						{detailNews.slice(1, 5).map((_, index) => (
							<div key={index} className="cursor-pointer group" onClick={() => navigateToDetail(_.id)}>
								<div
									className={cn("w-full relative h-[160px] rounded-2xl bg-cover overflow-hidden")}
								>
									<Image
										className="group-hover:scale-110 object-cover"
										src={_.image}
										alt="banner"
										fill
									/>
								</div>
								<div className="text-base font-semibold mt-2">{truncateText(_.title, 85)}</div>
								<div className="flex gap-1 text-sm items-center text-gray-600">
									<Calendar size={16} />
									{_.time}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="mt-10 lg:mt-28">
				<p className="text-center text-2xl lg:text-5xl font-semibold">Danh sách tin tức</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-6 mt-6 lg:mt-16">
					{detailNews.map((_, index) => (
						<div
							key={index}
							className="flex flex-col gap-3 lg:gap-6 p-2 pb-4 lg:pb-6 border-2 rounded-3xl group hover:shadow-2xl cursor-pointer"
							onClick={() => navigateToDetail(_.id)}
						>
							<div className={cn("w-full relative h-40 sm:h-[200px] rounded-2xl bg-cover  overflow-hidden")}>
								<Image
									className="group-hover:scale-110 object-cover"
									src={_.image}
									alt="banner"
									fill
								/>

								<div className="absolute top-0 py-1 px-3 bg-grad text-white rounded-b-lg left-1/2 -translate-x-1/2">
									{_.time}
								</div>
							</div>
							<div className="text-base font-semibold group-hover:text-gradient min-h-16 lg:min-h-20">
								{truncateText(_.title, 85)}
							</div>
							<div className="w-full flex items-center gap-3 transition-opacity duration-500 ease-in-out font-medium">
								<div className="w-full border-t border-red-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out"></div>
								<p className="w-[280px] text-center px-1 text-black group-hover:text-red-500 text-sm">
									Xem chi tiết
								</p>
								<div className="w-full border-t border-red-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default NewsPage;
