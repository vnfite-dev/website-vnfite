"use client";
import Image from "next/image";
import { useState } from "react";
import {
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	Carousel,
	CarouselDots,
} from "../ui/carousel";
import itemProduct from "@/app/(main)/products/data";

import { useRouter, useParams } from "next/navigation";

const SlideItem = ({
	id = 1,
	image = "/images/home/slide-student.png",
	title = "Gọi vốn dành cho các bạn sinh viên với lãi suất vô cùng hấp dẫn, nhanh chóng không cần giấy tờ.",
}: {
	id: number;
	image?: string;
	title?: string;
	detail?: string;
}) => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push("/products/" + id)}
			className="pt-6 pb-3 border-2 rounded-2xl h-full w-full flex flex-col justify-between items-center cursor-pointer"
		>
			<div className="px-5">
				<Image src={image} alt="slide1" height={160} width={160} />
			</div>
			<div className="px-2 flex-grow">
				<div className="text-center mt-4 font-normal text-base">{title}</div>
			</div>
		</div>
	);
};
const ListProducts = () => {
	const [tabLoanCondition, setTabLoanCondition] = useState(0);
	const param = useParams().id;

	const data = itemProduct.find((item) => item.id === Number(param));

	// const handleTabClick = (index: number) => {
	// 	if (tabActive === index) return;

	// 	setTabTransition(tabActive);

	// 	setTimeout(() => {
	// 		setTabActive(index);
	// 	}, 300); // Thời gian này phải khớp với `transition-duration`
	// };

	const dataArray = [
		{
			image: "/images/products/cccd.png",
			title: "Là người công dân Việt Nam",
		},
		{
			image: "/images/products/age.png",
			title: "Từ 18 đến 60 tuồi",
		},
		{
			image: "/images/products/income.png",
			title: "Thu nhập tối thiểu 5 triệu/tháng",
		},
		{
			image: "/images/products/badDebt.png",
			title: "Khách hàng không nợ xấu",
		},
	];

	return (
		<div>
			<div className="text-center leading-[72px]">
				{/* <div className="flex text-2xl mt-16 justify-between gap-6 relative w-full">
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
				</div> */}

				{/* <div className="bg-grad w-full rounded-b-lg flex justify-center items-center relative">
					<div className="bg-blue-300 w-[calc(100% - 4px)] h-[calc(100% - 4px)]  p-4 flex">Hello</div>
				</div> */}

				{/* <div className="bg-grad rounded-b-4xl p-[2px]"> */}
				<div className="bg-white rounded-b-4xl w-full">
					<div className=" w-full flex pb-12 relative">
						<div className="w-full text-base text-left font-normal ">
							<div className="text-center text-2xl lg:text-5xl leading-tight font-semibold mb-8 lg:mb-20">
								{data?.title}
							</div>
							<div className="flex flex-col gap-6 px-5 sm:px-8 xl:px-[10%] 2xl:px-[16.7%]">
								<div className="text-left text-lg lg:text-2xl font-medium bg-grad pl-2 mb-2">
									<div className="bg-white w-full pl-2">
										Vì sao bạn nên đồng hành với sản phẩm gọi vốn của VNFITE?
									</div>
								</div>

								<div className="grid grid-cols-1 justify-center lg:flex lg:justify-between space-y-8 lg:space-y-0">
									<div className="bg-grad rounded-4xl p-[3px] max-w-96 w-full lg:w-[30%] min-h-80 mx-auto">
										<div className="bg-white rounded-[29px] w-full h-full pb-2">
											<div className="flex justify-start flex-col items-center space-y-3 mt-3">
												<div className="max-w-[120px] ">
													<Image
														src={data?.image || "/images/home/slide-student.png"}
														alt="productStudent1"
														width={120}
														height={120}
													/>
												</div>

												<p className="text-xl font-medium">Thông tin sản phẩm</p>
											</div>

											<div className="text-base font-normal text-[#4D4D4D] mt-5 space-y-3 px-[6%] mb-5">
												{data?.info.split(".").map((item, index) => (
													<p key={index}>{item}</p>
												))}
											</div>
										</div>
									</div>

									<div className="bg-grad rounded-4xl p-[3px] max-w-96 w-full lg:w-[30%] min-h-80 mx-auto">
										<div className="bg-white rounded-[30px] w-full h-full pb-2">
											<div className="flex justify-start flex-col items-center space-y-3 mt-3">
												<div className="max-w-[120px] ">
													<Image
														src={"/images/products/Time.png"}
														alt="productStudent1"
														width={120}
														height={120}
													/>
												</div>

												<p className="text-xl font-medium">Thời gian</p>
											</div>

											<div className="text-base font-normal text-[#4D4D4D] mt-5 space-y-3 px-[6%]">
												{data?.time.split(".").map((item, index) => (
													<p key={index}>{item}</p>
												))}
											</div>
										</div>
									</div>

									<div className="bg-grad rounded-4xl p-[3px] max-w-96 w-full lg:w-[30%] min-h-80 mx-auto">
										<div className="bg-white rounded-[30px] w-full h-full pb-2">
											<div className="flex justify-start flex-col items-center space-y-3 mt-3">
												<div className="max-w-[120px] ">
													<Image
														src={"/images/products/MoneyProduct.png"}
														alt="productStudent1"
														width={120}
														height={120}
													/>
												</div>

												<p className="text-xl font-medium">Điều kiện</p>
											</div>

											<div className="text-base font-normal text-[#4D4D4D] mt-5 space-y-3 px-[6%]">
												{data?.condition.split(".").map((item, index) => (
													<p key={index}>{item}</p>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-20 px-5 sm:px-8 xl:px-[10%] 2xl:px-[16.7%]">
								<div className="text-left text-lg lg:text-2xl font-medium bg-grad pl-2 mb-8">
									<div className="bg-white w-full pl-2">Yêu cầu gọi vốn ở VNFITE</div>
								</div>

								<div className="flex space-x-4 pb-8">
									<div className="bg-grad p-[1px] rounded-lg w-44 min-h-8">
										<div
											className={`rounded-[7px] w-full h-full text-center text-base cursor-pointer leading-8 ${
												tabLoanCondition === 0 ? "bg-grad text-white" : "bg-white text-[#E0694F]"
											}`}
											onClick={() => setTabLoanCondition(0)}
										>
											Điều kiện vay vốn
										</div>
									</div>
									{/* <div className="bg-grad p-[1px] rounded-lg w-44 min-h-8">
										<div
											className={`rounded-[7px] w-full h-full text-center text-base cursor-pointer leading-8 ${
												tabLoanCondition === 1 ? "bg-grad text-white" : "bg-white text-[#E0694F]"
											}`}
											onClick={() => setTabLoanCondition(1)}
										>
											Nộp hồ sơ yêu cầu
										</div>
									</div> */}
								</div>

								<div className="hidden md:flex items-center w-full justify-center">
									{dataArray.map((_, index) => (
										<div
											className="flex justify-center items-center cursor-pointer mx-0 px-0"
											key={index}
										>
											<div className="w-6 md:w-10 lg:w-14 xl:w-20 2xl:w-28 h-1 bg-[#E6E6E6]"></div>
											<div className={`w-8 h-8 md:w-14 md:h-14 rounded-full bg-grad relative`}>
												<div className="text-white text-lg md:text-2xl font-semibold">
													{index + 1}
												</div>
											</div>
											<div
												className={`w-6 md:w-10 lg:w-14 xl:w-20 2xl:w-28 h-1 bg-[#E6E6E6]`}
											></div>
										</div>
									))}
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4 px-[12%] md:px-[16%] lg:px-0">
									{dataArray.map((_, index) => (
										<div
											className={`flex justify-start items-center flex-col text-2xl font-semibold mx-auto`}
											key={index}
										>
											<div
												className="w-48 h-44 rounded-2xl"
												style={{ background: `url(${_.image})`, backgroundSize: "cover" }}
											></div>
											<p className="text-base font-medium text-center pt-3">{_.title}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="px-8 md:px-[14%] lg:px-[10.5%] 2xl:px-[16.7%] my-10 lg:my-20">
						<div className="text-center text-2xl lg:text-5xl leading-tight font-semibold mb-10 lg:mb-20 ">
							Các sản phẩm khác
						</div>

						<Carousel
							opts={{
								loop: true,
								align: "start",
							}}
							className="w-full"
						>
							{/* <CarouselContent className="-ml-1"> */}
							<CarouselContent className="flex">
								{itemProduct
									.filter((item) => item.id !== Number(param))
									.map((items, index) => (
										<CarouselItem
											key={index}
											className="pl-4 w-fit sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex items-stretch"
										>
											<div className="flex-grow flex items-stretch">
												<SlideItem {...items} />
											</div>
										</CarouselItem>
									))}
							</CarouselContent>
							<CarouselPrevious className="hidden md:flex w-14 h-14 lg:w-20 lg:h-20 -left-24 shadow-md" />
							<CarouselNext className="hidden md:flex w-14 h-14 lg:w-20 lg:h-20 -right-24 shadow-md text-3xl font-bold " />
							<CarouselDots className="mt-4" />
						</Carousel>
					</div>
				</div>
				{/* </div> */}
			</div>
		</div>
	);
};

export default ListProducts;
