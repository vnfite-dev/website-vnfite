"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CarouselDots,
} from "@/components/ui/carousel";
import Image from "next/image";
import NumberTicker from "../ui/number-ticker";
import itemProduct from "@/app/products/data";

const SlideItem = ({
	image = "/images/home/slide-student.png",
	title = "Gọi vốn sinh viên",
	detail = "Gọi vốn dành cho các bạn sinh viên với lãi suất vô cùng hấp dẫn, nhanh chóng không cần giấy tờ.",
	id = 1,
}: {
	image: string;
	title: string;
	detail: string;
	id: number;
}) => {
	const router = useRouter();
	return (
		<div className="bg-grad rounded-[33px] p-[1px] h-full" onClick={() => router.push("/products/" + id)}>
			<div className="rounded-4xl pt-8 pb-6 md:pb-14 px-4 bg-[#FFF8F8] w-full flex flex-col justify-center items-center h-full hover:bg-opacity-55">
				<Image src={image} alt="slide1" height={160} width={160} />
				<div
					className="text-center mt-6 font-semibold text-xl h-[50px] flex items-center justify-center overflow-hidden"
					style={{
						lineHeight: "1.5em",
						height: "3em", // Duy trì đủ chiều cao cho 2 dòng
						display: "-webkit-box",
						WebkitLineClamp: 2, // Giới hạn hiển thị tối đa 2 dòng
						WebkitBoxOrient: "vertical",
					}}
				>
					{title}
				</div>
				<div className="text-center mt-2 text-sm">{detail}</div>
			</div>
		</div>
	);
};

const StaticItem = (item: { number: number; preNum: string; afterNum: string; name: string }) => {
	const parts = item.name.split("VNFITE");

	return (
		<div className="flex flex-col items-center relative">
			<h1 className="text-5xl font-extrabold text-gradient mb-4 flex">
				<NumberTicker value={item.number} className="text-5xl font-extrabold text-gradient" />
				<p>{item.afterNum}</p>
				<p>{item.preNum}</p>
			</h1>
			{/* <div className="px-10 border border-customPink w-full">
				<div className="border border-gray-200"></div>
			</div> */}
			<div className="relative text-[20px] text-center px-[27px] mt-4 md:mt-14">
				<p className="w-fit  relative font-medium before:content-[''] before:absolute before:-top-4  md:before:-top-8 before:w-[110%] before:h-[2px] before:bg-gray-200 before:left-[-5%]">
					{parts[0]}
					{parts.length > 1 && <span className="text-gradient font-bold">VNFITE</span>}
					{parts[1]}
				</p>
			</div>
		</div>
	);
};

type CarouselOptions = {
	loop?: boolean;
	align?: "start" | "center" | "end";
};

const staticData = [
	{
		// preNum: "+",
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
	const [carouselOpts, setCarouselOpts] = useState<CarouselOptions>({
		loop: true,
		align: "start",
	});

	useEffect(() => {
		if (window.innerWidth < 768) {
			setCarouselOpts({
				loop: true,
				align: "center",
			});
		} else {
			setCarouselOpts({
				loop: true,
				align: "start",
			});
		}
	}, []);
	return (
		<div>
			<div className="w-full font-sfpro z-10 text-center ">
				<p className="green-underline text-gradient font-semibold text-[16px]">Sản phẩm</p>
				<p className="mt-4 text-3xl md:text-5xl ">
					Một số sản phẩm nổi bật của <span className="text-gradient font-semibold">VNFITE</span>
				</p>
			</div>

			<div className="mt-8 md:mt-16 w-full px-4 md:px-[13%]">
				<Carousel opts={carouselOpts} className="w-full">
					{/* <CarouselContent className="-ml-1"> */}
					<CarouselContent className="">
						{itemProduct.map((items, index) => (
							<CarouselItem
								key={index}
								className="pl-4 w-fit basis-[80%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex items-stretch"
							>
								<div className="pl-1 relative flex items-start cursor-pointer">
									<SlideItem {...items} />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden md:flex w-20 h-20 -left-24 shadow-md" />
					<CarouselNext className="hidden md:flex w-20 h-20 -right-24 shadow-md text-3xl font-bold " />
					<CarouselDots className="mt-5 flex lg:hidden" />
				</Carousel>

				<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-sfpro gap-10">
					{staticData.map((item, index) => (
						<StaticItem
							key={index}
							{...item}
							afterNum={item.afterNum || ""}
							name={item.name || ""}
							number={item.number}
							preNum={item.preNum || ""}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeSlide;
