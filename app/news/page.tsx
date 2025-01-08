import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Calendar, Calendar1Icon } from "lucide-react";
const bigNews = [
	{
		id: 1,
		banner: `bg-[url("/images/news/outstanding.png")]`,
		title: "THỂ LỆ CHƯƠNG TRÌNH “TẢI APP NGAY, CÓ TIỀN LIỀN TAY - NHẬN TIỀN MẶT ĐẾN 88 TRIỆU ĐỒNG”",
	},
];

const normalNews = [
	{
		id: 1,
		banner: `bg-[url("/images/news/bigNew.jpg")]`,
		title: "Mở thêm cửa tiếp cận tín dụng cho người yếu thế",
		detail:
			"Công ty chứng khoán của bà Nguyễn Thanh Phượng thanh toán thay nhà đầu tư ngoại. Công ty chứng khoán của bà Nguyễn Thanh Phượng thanh toán thay nhà đầu tư ngoại.Công ty chứng khoán của bà Nguyễn Thanh Phượng thanh toán thay nhà đầu tư ngoại.",
		time: "17/12/2024",
	},
];
const NewsPage = () => {
	return (
		<div className="px-[16.7%] mx-auto">
			<div className="mt-28 text-center text-5xl font-semibold">
				Khuyến mãi cùng <span className="text-gradient">VNFITE</span>
			</div>

			<div className="mt-10 ">
				<Carousel className="w-full">
					<CarouselContent>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem key={index} className="">
								<div
									className={cn(
										"p-1 border border-red-300 rounded-2xl h-[458px] bg-cover flex justify-center items-end pb-16",
										bigNews[0].banner
									)}
								>
									<div className="py-5 px-16 border rounded-2xl border-red-500 text-white font-medium text-lg bg-red-800 bg-opacity-65">
										{bigNews[0].title}
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>

			<div className="mt-28">
				<div className="text-center text-5xl font-semibold">Tin tức nổi bật</div>
				<div className="mt-16 flex gap-8 ">
					<div
						className={cn(
							"w-full aspect-square bg-cover rounded-4xl relative overflow-hidden group",
							normalNews[0].banner
						)}
					>
						{/* Gradient Filter for Bottom Half */}
						<div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-gray-800/100 to-transparent group-hover:h-full group-hover:from-red-600/65 transition-all duration-300 pointer-events-none"></div>

						{/* Content */}
						<div className="relative z-10 flex justify-end items-center h-full px-7 pb-14 flex-col gap-4 overflow-hidden">
							{/* Title Animation */}
							<p className="text-white font-semibold text-2xl transform translate-y-24 group-hover:-translate-y-0 transition-transform duration-500 ease-in-out">
								{normalNews[0].title}
							</p>

							{/* Detail Animation */}
							<p className="text-white opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
								{normalNews[0].detail}
							</p>

							{/* Border Animation */}
							<div className="w-full flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
								<div className="w-full border-t border-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out"></div>
								<p className="w-[250px] text-center px-3 text-white">Xem chi tiết</p>
								<div className="w-full border-t border-white transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out"></div>
							</div>
						</div>
					</div>

					<div className="w-full grid grid-cols-2 gap-8">
						{[...Array(4)].map((_, index) => (
							<div key={index}>
								<div
									className={cn("w-full h-[200px] rounded-3xl bg-cover", normalNews[0].banner)}
								></div>

								<div className="text-base font-semibold">{normalNews[0].title}</div>
								<div className="flex gap-1 text-sm items-center text-gray-600">
									<Calendar size={16} />
									{normalNews[0].time}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="mt-28">
				<p className="text-center text-5xl font-semibold">Danh sách tin tức</p>

				<div className="grid grid-cols-4">
					{[...Array(8)].map((_, index) => (
						<div key={index} className="flex flex-col gap-4 p-4">
							<div className="w-full h-[200px] rounded-3xl bg-cover"></div>
							<div className="text-base font-semibold">{normalNews[0].title}</div>
							<div className="flex gap-1 text-sm items-center text-gray-600">
								<Calendar size={16} />
								{normalNews[0].time}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default NewsPage;
