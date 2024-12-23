"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Carousel } from "../ui/carousel";

const SlideItem = ({
	image = "/images/home/slide-student.png",
	title = "Gọi vốn dành cho nhân viên văn phòng.",
}: {
	image?: string;
	title?: string;
	detail?: string;
}) => {
	return (
		<div className="pt-6 pb-3 border-2 rounded-2xl  w-full flex flex-col justify-center items-center cursor-pointer">
			<div className="px-5">
				<Image src={image} alt="slide1" height={160} width={160} />
			</div>
			<div className="px-2">
				<div className="text-center mt-4 font-normal text-base">{title}</div>
			</div>
		</div>
	);
};
const ListProducts = () => {
	const [tabActive, setTabActive] = useState(1);
	const [tabTransition, setTabTransition] = useState(0);

	const handleTabClick = (index: number) => {
		if (tabActive === index) return;

		setTabTransition(tabActive);

		setTimeout(() => {
			setTabActive(index);
		}, 300); // Thời gian này phải khớp với `transition-duration`
	};
	return (
		<div>
			<div className="text-center font-semibold text-5xl leading-[72px]">
				<p>
					Sản phẩm <span className="text-gradient">VNFITE</span> mang lại cho bạn
				</p>
				<div className="flex text-2xl mt-16 justify-between gap-6 relative w-full">
					{["Gọi vốn cá nhân", "Gọi vốn hộ gia đình kinh doanh", "Gọi vốn doanh nghiệp"].map(
						(item, index) => (
							<div
								// onClick={() => setTabActive(index + 1)}
								onClick={() => handleTabClick(index + 1)}
								key={index}
								className={cn(
									"w-1/3 bg-grad text-white rounded-2xl cursor-pointer py-4 h-fit transition-all duration-300 ",
									tabActive === index + 1 && "pb-10 rounded-b-none",
									tabTransition === index + 1 && "pb-4"
								)}
							>
								{item}
							</div>
						)
					)}
				</div>
				{/* <div className="bg-grad w-full rounded-b-lg flex justify-center items-center relative">
					<div className="bg-blue-300 w-[calc(100% - 4px)] h-[calc(100% - 4px)]  p-4 flex">Hello</div>
				</div> */}
				<div className="bg-grad rounded-b-4xl p-[2px]">
					<div className="bg-white rounded-b-4xl w-full">
						<div className=" w-full flex gap-9 py-12 px-6 relative">
							<div className="relative w-3/5 aspect-square">
								<Image
									src={"/images/products/sp-1.png"}
									alt="sp-1"
									// width={400}
									// height={400}
									fill
									className="object-cover"
								/>
							</div>
							<div className="w-full text-base text-left font-normal ">
								<div className="text-center text-gradient text-[32px] leading-10 font-semibold mb-6">
									Gọi vốn sinh viên
								</div>
								<div className="flex flex-col gap-6">
									<div className="">Loại tiền gọi vốn/nhận vốn : VNĐ</div>
									<div className="">
										Số tiền gọi vốn tối đa: 30,000,000 VNĐ ( Ba mươi triệu đồng )
									</div>
									<div className="">
										Thời hạn gọi vốn tối đa/ thời hạn nhận nợ tối đa : Từ 01-06 tháng
									</div>
									<div className="">
										Lãi suất nhận vốn: Mức lãi suất sẽ được áp dụng theo quy định của VNFITE trong
										từng thời kỳ.
									</div>
									<div className="">Lãi suất nhận vốn cố định trong suất thời gian gọi vốn.</div>
									<div className="">Lãi phạt quá hạn: Bằng 150% lãi suất nhận vốn trong hạn</div>
									<div className="">
										Phương thức trả nợ: <br />
										+ Phương thức trả nợ gốc: Phân kỳ trả nợ gốc hàng tháng.
										<br />+ Phương thức trả lãi: Trả hàng tháng theo dư nợ thực tế, cụ thể: Tiền lãi
										= [(số tiền vay * lãi suất nhận vốn * số ngày nhận nợ)] / (365 ngày)
									</div>

									<div className="">Phí: Theo quy định hiện hành của VNFITE</div>
								</div>
							</div>
						</div>

						<div className="px-20 mb-20 mt-16">
							<Carousel
								opts={{
									loop: true,
									align: "start",
								}}
								className="w-full"
							>
								{/* <CarouselContent className="-ml-1"> */}
								<CarouselContent className="">
									{[...Array(10)].map((items, index) => (
										<CarouselItem key={index} className="pl-4 w-fit md:basis-1/2 lg:basis-1/5">
											<div className="">
												<SlideItem />
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious className="w-20 h-20 -left-24 shadow-md" />
								<CarouselNext className="w-20 h-20 -right-24 shadow-md text-3xl font-bold " />
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListProducts;
