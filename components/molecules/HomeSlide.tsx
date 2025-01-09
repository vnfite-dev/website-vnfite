import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import NumberTicker from "../ui/number-ticker";

const SlideItem = ({
	image = "/images/home/slide-student.png",
	title = "Gọi vốn sinh viên",
	detail = "Gọi vốn dành cho các bạn sinh viên với lãi suất vô cùng hấp dẫn, nhanh chóng không cần giấy tờ.",
}: {
	image: string;
	title: string;
	detail: string;
}) => {
	return (
		<div className="bg-grad rounded-[33px] p-[1px]">
			<div className="rounded-4xl pt-8 pb-14 px-4 bg-customPink w-full flex flex-col justify-center items-center">
				<Image src={image} alt="slide1" height={160} width={160} />
				<div className="text-center mt-6 font-semibold text-xl">{title}</div>
				<div className="text-center mt-6 text-sm ">{detail}</div>
			</div>
		</div>
	);
};

const StaticItem = (item: { number: number; preNum: string; afterNum: string; name: string }) => {
	const parts = item.name.split("VNFITE");

	return (
		<div className="w-1/4 flex flex-col items-center relative">
			<h1 className="text-5xl font-extrabold text-gradient mb-4 flex">
				<p>{item.preNum}</p>
				<NumberTicker value={item.number} className="text-5xl font-extrabold text-gradient" />
				<p>{item.afterNum}</p>
			</h1>
			{/* <div className="px-10 border border-customPink w-full">
				<div className="border border-gray-200"></div>
			</div> */}
			<div className="relative text-[20px] text-center px-[27px] mt-14">
				<p className="w-fit  relative font-medium before:content-[''] before:absolute  before:-top-8 before:w-[110%] before:h-[2px] before:bg-gray-200 before:left-[-5%]">
					{parts[0]}
					{parts.length > 1 && <span className="text-gradient font-bold">VNFITE</span>}
					{parts[1]}
				</p>
			</div>
		</div>
	);
};

const data = [
	{
		image: "/images/home/slide-student.png",
		title: "Gọi vốn sinh viên",
		detail:
			"Gọi vốn dành cho các bạn sinh viên với lãi suất vô cùng hấp dẫn, nhanh chóng không cần giấy tờ.",
	},
	{
		image: "/images/home/slide-teacher.png",
		title: "Gọi vốn giáo viên",
		detail:
			"Gọi vốn dành cho các bạn giáo viên với lãi suất vô cùng hấp dẫn, nhanh chóng không cần giấy tờ.",
	},
	{
		image: "/images/home/slide-engineer.png",
		title: "Gọi vốn công nhân",
		detail:
			"Gọi vốn dành cho các bạn công nhân với lãi suất vô cùng hấp dẫn, nhanh chóng không cần giấy tờ.",
	},
	{
		image: "/images/home/slide-doctor.png",
		title: "Gọi vốn bác sĩ",
		detail: "Gọi vốn dành cho các bạn bác sĩ với lãi suất vô cùng hấp dẫn, nhanh chóng không cần giấy tờ.",
	},
	{
		image: "/images/home/slide-doctor.png",
		title: "Gọi vốn bác sĩ",
		detail: "Gọi vốn dành cho các bạn bác sĩ với lãi suất vô cùng hấp dẫn, nhanh chóng không cần giấy tờ.",
	},
];

const staticData = [
	{
		preNum: "+",
		number: 98,
		afterNum: "%",
		name: "Khoản giản ngân thành công",
	},
	{
		number: 30,
		preNum: "+",
		name: "Sản phẩm gọi vốn",
	},
	{
		number: 100000,
		preNum: "+",
		name: "Khách hàng đồng hành cùng VNFITE",
	},
	{
		number: 5000,
		preNum: "+",
		name: "Khoản bạn có thể đầu tư ngay",
	},
];

const HomeSlide = () => {
	return (
		<div>
			<div className="w-full font-sfpro z-10 text-center ">
				<p className="green-underline text-gradient font-semibold text-[16px]">Sản phẩm</p>
				<p className="mt-4 text-5xl ">
					Một số sản phẩm nổi bật của <span className="text-gradient font-semibold">VNFITE</span>
				</p>
			</div>

			<div className="mt-16 w-full px-[13%]">
				<Carousel
					opts={{
						loop: true,
						align: "start",
					}}
					className="w-full"
				>
					{/* <CarouselContent className="-ml-1"> */}
					<CarouselContent className="">
						{data.map((items, index) => (
							<CarouselItem key={index} className="pl-4 w-fit md:basis-1/2 lg:basis-1/4">
								<div className="pl-1">
									{/* <SlideItem index={index} /> */}
									<SlideItem {...items} />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="w-20 h-20 -left-24 shadow-md" />
					<CarouselNext className="w-20 h-20 -right-24 shadow-md text-3xl font-bold " />
				</Carousel>

				<div className="mt-16 flex font-sfpro">
					{staticData.map((item, index) => (
						<StaticItem key={index} {...item} afterNum={item.afterNum || ''} name={item.name || ''} number={item.number} preNum={item.preNum} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeSlide;
