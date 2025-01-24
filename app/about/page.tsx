"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import ButtonArrow from "@/components/molecules/ButtonArrow";
import "./style.css";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const About = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [show, setShow] = useState(0);
	const [isShowIntro, setIsShowIntro] = useState(false);
	const [api, setApi] = useState<CarouselApi>();
	const [colorClick, setColorClick] = useState(4);

	// Cập nhật carousel khi timeline được chọn
	const handleTimelineClick = (index: number) => {
		setColorClick(index);
		api?.scrollTo(index); // Chuyển carousel đến mục tương ứng
	};

	// Cập nhật timeline khi carousel thay đổi
	const handleCarouselChange = (index: number) => {
		setColorClick(index);
	};
	const dataHistory = [
		{
			title: "Thành lập VNFITE",
			content: [
				"Được thành lập với sứ mệnh cung cấp các giải pháp tài chính thông minh, minh bạch và an toàn.",
				"Tập trung vào gọi vốn P2P, quản lý tài chính cá nhân, và hỗ trợ sinh viên, VNFITE không ngừng đổi mới công nghệ để tạo ra nền tảng tài chính toàn diện.",
				"Với tầm nhìn dẫn đầu ngành FinTech, VNFITE cam kết mang lại giá trị bền vững cho khách hàng trong nước và khu vực.",
			],
		},
		{
			title: "Ban hành các quy trình, quy chế tại VNFITE",
			content: [
				"VNFITE xây dựng và ban hành các quy trình, quy chế nhằm đảm bảo hoạt động minh bạch, hiệu quả và tuân thủ pháp luật.",
				"Quy trình gồm các bước: xây dựng nội dung, thẩm định, phê duyệt, công bố và giám sát thực thi.",
				"Các quy chế tiêu biểu bao gồm quy định về tài chính, nhân sự và an ninh thông tin, tạo nền tảng cho môi trường làm việc chuyên nghiệp và phát triển bền vững.",
			],
		},
		{
			title: "Ứng dụng VNFITE chính thức lên CH Play và App Store",
			content: [
				"Người dùng có thể dễ dàng tải về và trải nghiệm các dịch vụ tài chính thông minh như gọi vốn P2P, đầu tư nhóm, quản lý tài chính cá nhân, và đầu tư một cách an toàn, tiện lợi.",
				"Với giao diện thân thiện và công nghệ hiện đại, VNFITE mang đến giải pháp tài chính tối ưu ngay trên thiết bị di động của bạn.",
			],
		},
		{
			title: "Hoàn thiện hệ thống Core P2P Lending VNFITE",
			content: [
				"Hệ thống tích hợp công nghệ hiện đại và Blockchain để đảm bảo an toàn, minh bạch và nhanh chóng.",
				"Hỗ trợ tự động kết nối người vay và nhà đầu tư, cung cấp thông tin chi tiết, quản lý rủi ro hiệu quả, và tối ưu hóa quy trình giải ngân.",
				"Đây là giải pháp tài chính toàn diện, mang lại lợi ích vượt trội cho cả nhà đầu tư và người vay vốn.",
			],
		},
		{
			title: "Nâng cấp ứng dụng VNFITE Version 2",
			content: [
				"VNFITE Version 2 mang đến trải nghiệm tài chính vượt trội với giao diện thân thiện và dễ sử dụng.",
				"Phiên bản mới này tích hợp nhiều tính năng thú vị, đầu tư P2P thông minh và quy trình gọi vốn nhanh chóng.",
				"Nâng cao bảo mật với công nghệ hiện đại, giúp khách hàng đầu tư dễ dàng và nhanh chóng hơn.",
			],
		},
	];

	return (
		<div>
			<div className="flex flex-row items-center justify-center space-x-10 mt-10 lg:mt-16">
				<div className="hidden md:flex justify-center items-center md:justify-between flex-col md:flex-row space-y-8 md:space-y-0 px-4 w-full max-w-[1280px] font-semibold text-xl">
					<div className="bg-grad p-[1px] rounded-lg w-[90%] md:w-[30%] h-12 ">
						<div
							className={`rounded-[7px] flex justify-center items-center w-full h-full text-lg md:text-sm lg:text-lg xl:text-2xl cursor-pointer  ${
								show === 0 ? "bg-grad text-white" : "bg-white text-[#E0694F]"
							}`}
							onClick={() => setShow(0)}
						>
							Thông tin về VNFITE
						</div>
					</div>
					<div className="bg-grad p-[1px] rounded-lg w-[90%] md:w-[30%] h-12 ">
						<div
							className={`rounded-[7px] flex justify-center items-center w-full h-full text-lg md:text-sm lg:text-lg xl:text-2xl cursor-pointer ${
								show === 1 ? "bg-grad text-white" : "bg-white text-[#E0694F]"
							}`}
							onClick={() => setShow(1)}
						>
							Ban lãnh đạo
						</div>
					</div>
					<div className="bg-grad p-[1px] rounded-lg w-[90%] md:w-[30%] h-12 ">
						<div
							className={`rounded-[7px] flex justify-center items-center w-full h-full text-lg md:text-sm lg:text-lg xl:text-2xl cursor-pointer ${
								show === 2 ? "bg-grad text-white" : "bg-white text-[#E0694F]"
							}`}
							onClick={() => setShow(2)}
						>
							Cổ đông
						</div>
					</div>
				</div>

				<div className="flex md:hidden w-full mx-auto pr-9">
					<Select onValueChange={(value) => setShow(Number(value))}>
						<SelectTrigger className="w-full mx-auto">
							<SelectValue placeholder="Thông tin về VNFITE" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value={"0"}>Thông tin về VNFITE</SelectItem>
								<SelectItem value={"1"}>Ban lãnh đạo</SelectItem>
								<SelectItem value={"2"}>Cổ đông</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				{/* <div className="relative w-80 h-14 cursor-pointer" onClick={() => setShow(0)}>
					<div
						className={
							"w-80 h-14 skew-x-12 " +
							(show === 0 ? "bg-grad" : "bg-gray-500 flex justify-center items-center")
						}
						style={{
							clipPath: "polygon(2% 0, 88% 0, 99.5% 60%, 98% 100%, 12% 100%, 0.5% 40%)",
						}}
					>
						<div
							className="skew-x-12 relative"
							style={{
								backgroundColor: "white",
								width: "98%",
								height: "98%",
								clipPath: "polygon(3.4% 2%, 90% 2%, 99.35% 62%, 96.7% 98%, 10% 98%, 0.65% 38%)",
							}}
						></div>
					</div>
					<div
						className={
							"absolute left-14 top-3 font-semibold text-xl " +
							(show === 0 ? "text-gradient" : "text-gray-500")
						}
					>
						Thông tin về VNFITE
					</div>
				</div>

				<div className="relative w-80 h-14 cursor-pointer " onClick={() => setShow(1)}>
					<div
						className={
							"w-80 h-14 skew-x-12 " +
							(show === 1 ? "bg-grad" : "bg-gray-500 flex justify-center items-center")
						}
						style={{
							clipPath: "polygon(2% 0, 88% 0, 99.5% 60%, 98% 100%, 12% 100%, 0.5% 40%)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							className="skew-x-12 relative"
							style={{
								backgroundColor: "white",
								width: "98%",
								height: "98%",
								clipPath: "polygon(3.4% 2%, 90% 2%, 99.35% 62%, 96.7% 98%, 10% 98%, 0.65% 38%)",
							}}
						></div>
					</div>
					<div
						className={
							"absolute left-24 top-3 font-semibold text-xl " +
							(show === 1 ? "text-gradient" : "text-gray-500")
						}
					>
						Ban lãnh đạo
					</div>
				</div>

				<div className="relative w-80 h-14 cursor-pointer" onClick={() => setShow(2)}>
					<div
						className={
							"w-80 h-14 skew-x-12 " +
							(show === 2 ? "bg-grad" : "bg-gray-500 flex justify-center items-center")
						}
						style={{
							clipPath: "polygon(2% 0, 88% 0, 99.5% 60%, 98% 100%, 12% 100%, 0.5% 40%)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							className="skew-x-12 relative"
							style={{
								backgroundColor: "white",
								width: "98%",
								height: "98%",
								clipPath: "polygon(3.4% 2%, 90% 2%, 99.35% 62%, 96.7% 98%, 10% 98%, 0.65% 38%)",
							}}
						></div>
					</div>
					<div
						className={
							"absolute left-28 top-3 font-semibold text-xl " +
							(show === 2 ? "text-gradient" : "text-gray-500")
						}
					>
						Cổ đông
					</div>
				</div> */}
			</div>

			<div className="mt-8 lg:mt-28">
				{/* 1. Thông tin về VNFITEVNFITE */}
				{show === 0 && (
					<div className="flex justify-center items-center flex-col space-y-14 lg:space-y-28">
						{/* 1.1. Giới thiệu về VNFITE */}
						<div>
							<p className="text-2xl lg:text-5xl font-semibold text-center px-4">
								Giới thiệu về <span className="text-gradient">VNFITE</span>
							</p>

							<div className="max-w-[1280px] w-[90%] my-6 mx-auto">
								<Image
									src="/images/about/AboutIntro.png"
									alt="About Intro"
									layout="responsive"
									width={1280}
									height={720}
									priority
								/>
							</div>

							<p className="sm:p-4 font-normal text-base mt-0 lg:mt-14 flex flex-col space-y-7 max-w-screen-xl w-[90%] mx-auto">
								<span>
									VNFITE là một trong những nền tảng cho vay ngang hàng (P2P Lending) lớn tại Việt
									Nam, đóng vai trò kết nối giữa nhà đầu tư và người vay. Được thành lập từ năm 2020,
									VNFITE đã trở thành một đơn vị tiên phong trong lĩnh vực công nghệ tài chính tại
									Việt Nam, giúp đơn giản hóa quy trình vay vốn và đầu tư với công nghệ hiện đại.{" "}
									<br />
									<br />
									Công ty Cổ phần Công nghệ Tài chính VNFITE là một trong các đơn vị tiên phong và uy
									tín hàng đầu cung cấp giải pháp công nghệ tài chính, kết nối giữa các nhà đầu tư và
									nhà gọi vốn.
								</span>

								{/* <span>
									Công ty Cổ phần Công nghệ Tài chính VNFITE là một trong các đơn vị tiên phong và uy
									tín hàng đầu cung cấp giải pháp công nghệ tài chính, kết nối giữa các nhà đầu tư và
									nhà gọi vốn.
								</span> */}

								{isShowIntro && (
									<>
										<span>
											Phân khúc khách hàng của VNFITE là cá nhân (30 triệu khách hàng) hộ kinh
											doanh (gần 1 triệu khách hàng) và doanh nghiệp vừa và nhỏ SME (bao gồm cả mir
											SME) khoảng 0,5 triệu khách hàng.Đặc biệt định hướng vào phân khúc cho người
											dân vùng nông thôn, người nghèo chưa có điều kiện tiếp cận dịch vụ tài chính
											ngân hàng với ứng dụng công nghệ cao.
										</span>

										<span>
											Hướng đến nhóm khách hàng tài chính vi mô, để mọi người dân đều có thể sử
											dụng dịch vụ. Mang tính an sinh xã hội và phổ cập tài chính rộng khắp cho
											người dân. Có tính nhân văn lớn.Sở hữu đội ngũ nhân viên chuyên nghiệp, giàu
											kinh nghiệm trong lĩnh vực tài chính ngân hàng, VNFITE mang đến một kênh đầu
											tư hiệu quả, an toàn vì cuộc sống tốt đẹp phát triển thịnh vượng cho các nhà
											đầu tư trên mọi miền tổ quốc.
										</span>

										<span>
											Dưới sự dẫn dắt của Hội Đồng Quản Trị, tuy mới thành lập nhưng VNFITE đang
											dần khẳng định vị thế của mình trên thị trường Fintech nói chung và thị
											trường tài chính nói chung. Với mục tiêu kết nối nhanh chóng và an toàn,
											VNFITE đã và đang ứng dụng một cách triệt để công nghệ 4.0, kết nối trực tiếp
											các nhà đầu tư và người kêu gọi vốn, dần chứng minh mình là một trong những
											kênh dẫn vốn hiệu quả cho các hộ kinh doanh, các doanh nghiệp vừa và nhỏ.
										</span>

										<span>
											Với phương châm đặt lợi ích của khách hàng lên hàng đầu, VNFITE tin rằng chỉ
											có mang lại giá trị thiết thực cho khách hàng mới là giá trị cốt lõi của
											doanh nghiệp tài chính nói riêng và các doanh nghiệp nói chung
										</span>
									</>
								)}
							</p>

							<div className="max-w-screen-xl w-[90%] mx-auto">
								<ButtonArrow
									text={isShowIntro ? "Ẩn bớt" : "Xem thêm"}
									onClick={() => setIsShowIntro((prev) => !prev)}
								/>
							</div>
						</div>

						{/* 1.2. Lịch sử phát triển */}
						<div className="w-full md:w-auto">
							<p className="text-2xl lg:text-5xl font-semibold text-center">Lịch sử phát triển</p>

							<div className="flex justify-center items-center flex-col md:flex-row mt-8 lg:mt-16 max-w-[1280px] space-y-14 md:space-x-6 md:space-y-0 md:mx-10">
								<div className="flex justify-center items-center w-[90%] h-[400px] md:w-[35%] mx-auto relative">
									<Image
										src="/images/about/History1.jpg"
										alt="About History VNFITE"
										className=" rounded-xl object-cover"
										fill
									/>
								</div>
								<div className="w-full md:w-[65%] flex justify-center flex-col items-center">
									{/* Timeline */}
									<div className="mb-6 lg:mb-10">
										<div className="flex items-center w-full justify-between">
											<div className="w-10 lg:w-20 h-1 bg-[#B3B3B3]"></div>
											{Array.from({ length: 5 }).map((_, index) => (
												<div
													className="flex items-center cursor-pointer"
													key={index}
													onClick={() => handleTimelineClick(index)}
												>
													<div
														className={
															`w-5 h-5 rounded-full border-2 border-white relative` +
															(colorClick === index ? " bg-grad " : " bg-gray-500 ")
														}
														style={{
															boxShadow:
																colorClick === index
																	? "0 0 0 4px #E0694F"
																	: "0 0 0 4px #B3B3B3",
														}}
													>
														<div
															className={`absolute ${
																colorClick === index ? "text-gradient" : "text-[#B3B3B3]"
															} text-lg lg:text-2xl font-semibold top-9 -left-3 lg:-left-5`}
														>
															{index + 2020}
														</div>
													</div>
													<div
														className={`w-10 lg:w-20 h-1 ${
															colorClick === index ? "bg-grad" : "bg-[#B3B3B3]"
														}`}
													></div>
												</div>
											))}
										</div>
									</div>

									<div className="w-full flex relative">
										<div className="hidden xl:flex flex-col justify-center items-center">
											<div className="h-9 w-9 cursor-pointer rounded-full bg-grad flex items-center justify-center">
												<div
													className="h-8 w-8 rounded-full bg-white flex justify-center items-center"
													onClick={() => {
														api?.scrollPrev();
														setColorClick((prev) =>
															prev > 0 ? prev - 1 : dataHistory.length - 1
														);
													}}
												>
													<ChevronRight
														size={40}
														color="#CF1313"
														className="relative -left-[2px] rotate-180"
													/>
												</div>
											</div>
										</div>

										<Carousel
											className="w-full px-8 sm:px-2"
											setApi={setApi}
											opts={{ loop: true }}
											onIndexChange={handleCarouselChange}
										>
											<CarouselContent>
												{dataHistory.map((_, index) => (
													<CarouselItem key={index}>
														<div className="pt-8 basis-1/2 min-w-0">
															<p className="text-lg lg:text-2xl font-semibold leading-[48px] text-center mb-3 lg:mb-6">
																{_.title}
															</p>

															{_.content.map((_, index) => (
																<p
																	key={index}
																	className=" text-base font-normal third-line-truncate px-4 w-full"
																>
																	{_}
																</p>
															))}
														</div>
													</CarouselItem>
												))}
											</CarouselContent>
										</Carousel>

										<div className="hidden xl:flex flex-col justify-center items-center">
											<div
												className="h-9 w-9 cursor-pointer rounded-full bg-grad flex items-center justify-center"
												onClick={() => api?.scrollNext()}
											>
												<div className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
													<ChevronRight
														size={40}
														color="#CF1313"
														className="relative left-[2px]"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* 1.3. Tầm nhìn và sứ mệnh */}
						<div>
							<p className="text-2xl lg:text-5xl font-semibold text-center px-4">
								Tầm nhìn và sứ mệnh
							</p>
							<p className="font-normal text-base mt-0 lg:mt-10 text-center p-6">
								Là sợi dây kết nối giữa nhà đầu tư và nhà huy động, tạo ra sân chơi an toàn giao
								thương tài chính, tạo lợi ích cho các bên đồng thời tạo sự phát triển bền vững cho xã
								hội.
							</p>
							<div className="flex justify-center items-center mt-3 lg:mt-8 space-y-4 flex-col lg:flex-row lg:space-x-4 lg:space-y-0 mb-4 px-4">
								<div className="bg-grad-about text-xl font-medium p-4 space-x-4 w-full sm:w-[405px] min-h-24 rounded-lg">
									<div style={{ width: "56px", height: "64px" }}>
										<Image
											src="/images/about/View1.png"
											alt="Tầm nhìn và sứ mệnh 1"
											width={56}
											height={64}
										/>
									</div>
									<p>Khách hàng là trung tâm</p>
								</div>
								<div className="bg-grad-about text-xl font-medium p-4 space-x-4 w-full sm:w-[405px] min-h-24 rounded-lg">
									<div style={{ width: "56px", height: "64px" }}>
										<Image
											src="/images/about/View2.png"
											alt="Tầm nhìn và sứ mệnh 2"
											width={56}
											height={64}
										/>
									</div>
									<p>Đoàn kết và phát triển</p>
								</div>
								<div className="bg-grad-about text-xl font-medium p-4 space-x-4 w-full sm:w-[405px] min-h-24 rounded-lg">
									<div style={{ width: "56px", height: "64px" }}>
										<Image
											src="/images/about/View3.png"
											alt="Tầm nhìn và sứ mệnh 3"
											width={56}
											height={64}
										/>
									</div>
									<p>Nhiệt huyết và đổi mới</p>
								</div>
							</div>
							<div className="flex justify-center items-center space-y-4 flex-col lg:flex-row lg:space-x-4 lg:space-y-0 mb-4 px-4">
								<div className="bg-grad-about text-xl font-medium p-4 space-x-4 w-full sm:w-[405px] min-h-24 rounded-lg">
									<div style={{ width: "56px", height: "64px" }}>
										<Image
											src="/images/about/View4.png"
											alt="Tầm nhìn và sứ mệnh 4"
											width={56}
											height={64}
										/>
									</div>
									<p>Tin cậy và trách nhiệm</p>
								</div>
								<div className="bg-grad-about text-xl font-medium p-4 space-x-4 w-full sm:w-[405px] min-h-24 rounded-lg">
									<div style={{ width: "56px", height: "64px" }}>
										<Image
											src="/images/about/View5.png"
											alt="Tầm nhìn và sứ mệnh 5"
											width={56}
											height={64}
										/>
									</div>
									<p>An sinh xã hội hướng tới lợi ích cộng đồng</p>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* 2. Ban lãnh đạo */}
				{show === 1 && (
					<div className="flex justify-center items-center flex-col space-y-14">
						<div>
							<div className="flex justify-center items-center flex-col px-3 py-2 rounded-2xl shadow-custom">
								<Image
									src="/images/about/Logo.png"
									alt="About History VNFITE"
									width={264}
									height={264}
								/>
								<p className="font-semibold text-xl text-gradient">Mr. Mai Ngọc</p>
								<p className="font-medium text-base pt-3">Chủ tịch Hội Đồng Quản Trị</p>
							</div>
						</div>
						<div className="flex justify-center items-center space-x-0 md:space-x-10 space-y-14 md:space-y-0 flex-col md:flex-row">
							<div className="flex justify-center items-center flex-col px-3 py-2 rounded-2xl shadow-custom mx-auto">
								<Image
									src="/images/about/Logo.png"
									alt="About History VNFITE"
									width={264}
									height={264}
								/>
								<p className="font-semibold text-xl text-gradient">Trần Quốc Hưng</p>
								<p className="font-medium text-base pt-3">Phó chủ tịch Hội Đồng Quản Trị</p>
							</div>

							<div className="flex justify-center items-center flex-col px-3 py-2 rounded-2xl shadow-custom mx-auto">
								<Image
									src="/images/about/Logo.png"
									alt="About History VNFITE"
									width={264}
									height={264}
								/>
								<p className="font-semibold text-xl text-gradient">Nguyễn Mạnh Cường</p>
								<p className="font-medium text-base pt-3">Phó chủ tịch Hội Đồng Quản Trị</p>
							</div>
						</div>
					</div>
				)}

				{/* 3. Cổ đông */}
				{show === 2 && (
					<div className="flex justify-center items-center flex-col">
						<div>
							<p className="text-2xl lg:text-5xl font-semibold text-center px-4">
								Đối với nhà đầu tư về <span className="text-gradient">VNFITE</span>
							</p>

							<div
								style={{
									maxWidth: "1280px",
									width: "90%",
									margin: "20px auto",
								}}
							>
								<Image
									src="/images/about/Investor.png"
									alt="About Intro"
									layout="responsive"
									width={1280}
									height={720}
									priority
								/>
							</div>

							<p className="p-4 font-normal text-base mt-0 lg:mt-14 flex flex-col space-y-7 max-w-screen-xl w-[90%] mx-auto">
								<span className="text-center">
									Công ty Cổ phần Công nghệ Tài chính VNFITE là một trong các đơn vị tiên phong và uy
									tín hàng đầu cung cấp giải pháp công nghệ tài chính, kết nỗi giữa các nhà đầu tư và
									nhà gọi vốn.
								</span>

								<span className="text-center">
									Phân khúc khách hàng của VNFITE là cá nhân (30 triệu khách hàng) hộ kinh doanh (gần
									1 triệu khách hàng) và doanh nghiệp vừa và nhỏ SME (bao gồm cả miro SME) khoảng 0,5
									triệu khách hàng. Đặc biệt định hướng vào phân khúc cho người dân vùng nông thôn,
									người nghèo chưa có điều kiện tiếp cận dịch vụ tài chính ngân hàng với ứng dụng
									công nghệ cao. Hướng đến nhóm khách hàng tài chính vi mô, để mọi người dân đều có
									thể sử dụng dịch vụ. Mang tính an sinh xã hội và phổ cập tài chính rộng khắp cho
									người dân. Có tính nhân văn lớn. Sở hữu đội ngũ nhân viên chuyên nghiệp, giàu kinh
									nghiệm trong lĩnh vực tài chính ngân hàng, VNFITE mang đến một kênh đầu tư hiệu
									quả, an toàn vì cuộc sống tốt đẹp phát triển thịnh vượng cho các nhà đầu tư trên
									mọi miền tổ quốc.
								</span>

								<span className="text-center">
									Dưới sự dẫn dắt của Hội Đồng Quản Trị, tuy mới thành lập nhưng VNFITE đang dần
									khẳng định vị thế của mình trên thị trường Fintech nói chung và thị trường tài
									chính nói chung. Với mục tiêu kết nối nhanh chóng và an toàn, VNFITE đã và đang ứng
									dụng một cách triệt để công nghệ 4.0, kết nối trực tiếp các nhà đầu tư và người kêu
									gọi vốn, dần chứng minh mình là một trong những kênh dẫn vốn hiệu quả cho các hộ
									kinh doanh, các doanh nghiệp vừa và nhỏ.
								</span>

								<span className="text-center">
									Với phương châm đặt lợi ích của khách hàng lên hàng đầu, VNFITE tin rằng chỉ có
									mang lại giá trị thiết thực cho khách hàng mới là giá trị cốt lõi của doanh nghiệp
									tài chính nói riêng và các doanh nghiệp nói chung.
								</span>
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default About;
