"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CarouselDots,
} from "@/components/ui/carousel";
import { cn, simpleFetchFunction } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { detailNews, detailPromotion } from "./data";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// const bigNews = [
// 	{
// 		id: 1,
// 		banner: `bg-[url("/images/news/outstanding.png")]`,
// 		title: "THỂ LỆ CHƯƠNG TRÌNH “TẢI APP NGAY, CÓ TIỀN LIỀN TAY - NHẬN TIỀN MẶT ĐẾN 88 TRIỆU ĐỒNG”",
// 	},
// ];

interface NewsItem {
	id: string;
	urlImage: string;
	createdDate: string | number | Date;
	mainTitle: string;
	content: string;
}

const fetchNewsData = async () => {
	const data = await simpleFetchFunction(`/get-news?pageSize=10&pageNumber=0&type=1`);
	console.log(data);
	return data.data.data;
};

const NewsPage = () => {
	const [newsList, setNewsList] = useState<NewsItem[]>([]);
	const [visibleCount, setVisibleCount] = useState(8);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const newsData = await fetchNewsData(); // Thêm await để chờ dữ liệu
				const newsList = [...(newsData ?? []), ...detailNews];
				setNewsList(newsList);
			} catch (error) {
				console.error("Lỗi khi lấy dữ liệu:", error);
			}
		};

		fetchData();
	}, []);

	const htmlToText = (html: string): string => {
		if (!html) return "";

		return html
			.replace(/<br\s*\/?>/gi, "\n") // Thay <br> bằng xuống dòng
			.replace(/<\/?(p|div|li)[^>]*>/gi, "\n") // Thay <p>, <div>, <li> bằng xuống dòng
			.replace(/<\/?(ul|ol|span|strong|em|b|i|u|h\d|blockquote|code|pre)[^>]*>/gi, "") // Xoá các thẻ không cần thiết
			.replace(/\n\s*\n+/g, "\n") // Xoá khoảng trắng thừa giữa các dòng
			.trim(); // Xoá khoảng trắng đầu/cuối chuỗi
	};

	const textContent = htmlToText(newsList[0]?.content || "");

	const truncateText = (text: string, length: number) => {
		return text.length > length ? text.slice(0, length) + "..." : text;
	};

	const formatDate = (isoString: string | number | Date) => {
		return new Date(isoString).toLocaleDateString("vi-VN");
	};

	const handleShowMore = () => {
		setVisibleCount((prevCount) => prevCount + 4);
	};

	const handleShowLess = () => {
		setVisibleCount(8);
	};

	return (
		<div className="px-5 sm:px-[10%] xl:px-[16.7%] mx-auto">
			<div className="mt-12 lg:mt-28 text-center text-2xl lg:text-5xl font-semibold">
				Khuyến mãi cùng <span className="text-gradient">VNFITE</span>
			</div>

			<div className="mt-10 ">
				<Carousel className="w-full">
					<CarouselContent>
						{detailPromotion.map((_, index) => (
							<CarouselItem key={index}>
								<div
									className={cn(
										"p-1 border border-red-300 rounded-2xl h-64 md:h-80 lg:h-96 xl:h-[458px] bg-cover flex justify-center items-end pb-6 md:pb-12 lg:pb-16 bg-center",
										_.banner
									)}
								>
									<div className="py-5 px-6 md:px-16 border rounded-2xl border-red-500 text-white font-medium text-sm md:text-base 2xl:text-lg bg-red-800 bg-opacity-65">
										{_.mainTitle}
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden sm:flex size-12 xl:size-20 -left-14 xl:-left-24 shadow-md" />
					<CarouselNext className="hidden sm:flex size-12 xl:size-20 -right-14 xl:-right-24 shadow-md text-3xl font-bold" />
					<CarouselDots className="mt-5" />
				</Carousel>
			</div>

			<div className="mt-10 lg:mt-20">
				<div className="text-center text-2xl lg:text-5xl font-semibold">Tin tức nổi bật</div>
				<div className="mt-8 lg:mt-16 flex gap-8 xl:flex-row flex-col xl:items-start">
					<Link
						href={`/news/${newsList[0]?.id}`}
						className={cn(
							"hidden sm:flex w-full md:w-[80%] lg:w-[55%] xl:w-full cursor-pointer rounded-4xl relative overflow-hidden group mx-auto aspect-square"
						)}
					>
						<Image
							src={newsList[0]?.urlImage}
							alt="banner"
							fill
							className=""
						/>

						{/* Gradient Filter for Bottom Half */}
						<div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-gray-800/100 to-transparent group-hover:h-full group-hover:from-red-600/65 transition-all duration-300 pointer-events-none"></div>

						{/* Content */}
						<div className="relative z-10 flex justify-end items-center h-full px-7 pb-6 sm:pb-14 flex-col gap-4 overflow-hidden">
							{/* Title Animation */}
							<p className="text-white font-semibold text-lg sm:text-2xl transform translate-y-24 group-hover:-translate-y-0 transition-transform duration-500 ease-in-out">
								{newsList[0]?.mainTitle}
							</p>

							{/* Detail Animation */}
							{textContent && (
								<>
									<p className="hidden sm:flex sm:flex-col text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-in-out whitespace-pre-line">
										{truncateText(textContent, 300)}
									</p>
									<p className="flex flex-col sm:hidden text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-in-out whitespace-pre-line">
										{truncateText(textContent, 150)}
									</p>
								</>
							)}

							{/* Border Animation */}
							<div className="w-full flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
								<div className="w-full border-t border-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out"></div>
								<p className="w-[280px] text-center px-1 text-white text-sm sm:text-base">
									Xem chi tiết
								</p>
								<div className="w-full border-t border-white transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out"></div>
							</div>
						</div>
					</Link>


					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-[18%] md:px-0 lg:px-[10%] xl:px-0">
						{newsList?.slice(1, 5).map(
							(
								_: {
									urlImage: string | StaticImport;
									mainTitle: string;
									createdDate: string | number | Date;
									id: string;
								},
								index: Key | null | undefined
							) => (
								<Link
									key={index}
									className="cursor-pointer group"
									href={`/news/${_?.id}`}
								// onClick={() => navigateToDetail(_.id)}
								>
									<div
										className={cn(
											"w-full relative aspect-[4/3] rounded-2xl overflow-hidden"
										)}
									>
										<Image
											className="group-hover:scale-110 object-cover h-full w-full"
											src={_.urlImage}
											alt="banner"
											// fill
											width={400}
											height={300}
										/>
									</div>
									<div className="text-base font-semibold mt-2">
										{truncateText(_.mainTitle, 85)}
									</div>
									<div className="flex gap-1 text-sm items-center text-gray-600">
										<Calendar size={16} />
										{formatDate(_.createdDate)}
									</div>
								</Link>
							)
						)}
					</div>
				</div>
			</div>

			<div className="mt-10 lg:mt-28">
				<p className="text-center text-2xl lg:text-5xl font-semibold">Danh sách tin tức</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-6 mt-6 lg:mt-16">
					{newsList?.slice(0, visibleCount).map(
						(
							news: {
								urlImage: string | StaticImport;
								createdDate: string | number | Date;
								mainTitle: string;
								id: string;
							},
							index: Key | null | undefined
						) => (
							<Link
								href={`/news/${news?.id}`}
								key={index}
								className="flex flex-col gap-3 lg:gap-6 p-2 pb-4 lg:pb-6 border-2 rounded-3xl group hover:shadow-2xl cursor-pointer"
							>
								<div className="w-full relative h-40 sm:h-[200px] aspect-[3/4] rounded-2xl bg-cover overflow-hidden">
									<Image
										className="group-hover:scale-110 object-cover"
										src={news?.urlImage || ""}
										alt="banner"
										fill
									/>
									<div className="absolute top-0 py-1 px-3 bg-grad text-white rounded-b-lg left-1/2 -translate-x-1/2">
										{formatDate(news.createdDate)}
									</div>
								</div>
								<div className="text-base font-semibold group-hover:text-gradient min-h-16 lg:min-h-20">
									{truncateText(news.mainTitle, 85)}
								</div>
							</Link>
						)
					)}
				</div>

				{visibleCount < newsList.length ? (
					<Button className="bg-grad mx-auto mt-6 text-lg" onClick={handleShowMore}>
						Xem thêm
					</Button>
				) : (
					<Button className="bg-grad mx-auto mt-6 text-lg" onClick={handleShowLess}>
						Ẩn bớt
					</Button>
				)}
			</div>
		</div>
	);
};

export default NewsPage;
