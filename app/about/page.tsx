"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import ButtonArrow from "@/components/molecules/ButtonArrow";
import "./style.css";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import TimeLine from "@/components/molecules/TimeLine";

const About = () => {
	const [show, setShow] = useState(0);
	const [isShowIntro, setIsShowIntro] = useState(false);
	const [api, setApi] = useState<CarouselApi>();

	const dataHistory = [
		{
			title: "Thành lập VNFITE SOFTWARE",
			content: [
				"VNFITE SOFTWARE được thành lập với sứ mệnh tạo ra những công nghệ tiên tiến nhất hiện nay, với đội ngũ nhân sự dày dặn kinh nghiệm sẽ giúp cho những phầm mềm của chúng tôi có những bước chuyển đổi đột phá.",
				"Là một trong những công ty công nghệ thông tin hàng đầu Việt Nam và khu vực, trực thuộc VNFITE. Được thành lập vào năm 2024, VNFITE Software đã phát triển mạnh mẽ, cung cấp các dịch vụ công nghệ và gia công phần mềm cho khách hàng trên toàn cầu. Với sự hiện diện tại các quốc gia lớn, VNFITE Software hiện là đối tác tin cậy của nhiều tập đoàn lớn trong danh sách Fortune Global 500. ",
			],
		},
		{
			title: "Thành lập VNFITE MARKETING",
			content: [
				"VNFITE MARKETING được thành lập với sứ mệnh tạo ra những công nghệ tiên tiến nhất hiện nay, với đội ngũ nhân sự dày dặn kinh nghiệm sẽ giúp cho những phầm mềm của chúng tôi có những bước chuyển đổi đột phá.",
				"Là một trong những công ty công nghệ thông tin hàng đầu Việt Nam và khu vực, trực thuộc VNFITE. Được thành lập vào năm 2024, VNFITE Software đã phát triển mạnh mẽ, cung cấp các dịch vụ công nghệ và gia công phần mềm cho khách hàng trên toàn cầu. Với sự hiện diện tại các quốc gia lớn, VNFITE MARKETING hiện là đối tác tin cậy của nhiều tập đoàn lớn trong danh sách Fortune Global 500. ",
			],
		},
	];

	return (
		<div>
			<div className="flex flex-row items-center justify-center space-x-10 mt-16">
				<div className="flex justify-center items-center md:justify-between flex-col md:flex-row space-y-8 md:space-y-0 px-4 w-full max-w-[1280px] font-semibold text-xl">
					<div className="bg-grad p-[1px] rounded-lg w-[90%] md:w-[30%] h-12 ">
						<div className={`rounded-[7px] flex justify-center items-center w-full h-full text-lg md:text-sm lg:text-lg xl:text-2xl cursor-pointer  ${show === 0 ? 'bg-grad text-white' : 'bg-white text-[#E0694F]'}`}
							onClick={() => setShow(0)}
						>
							Gọi vốn cá nhân
						</div>
					</div>
					<div className="bg-grad p-[1px] rounded-lg w-[90%] md:w-[30%] h-12 ">
						<div className={`rounded-[7px] flex justify-center items-center w-full h-full text-lg md:text-sm lg:text-lg xl:text-2xl cursor-pointer ${show === 1 ? 'bg-grad text-white' : 'bg-white text-[#E0694F]'}`}
							onClick={() => setShow(1)}
						>
							Gọi vốn hộ kinh doanh
						</div>
					</div>
					<div className="bg-grad p-[1px] rounded-lg w-[90%] md:w-[30%] h-12 ">
						<div className={`rounded-[7px] flex justify-center items-center w-full h-full text-lg md:text-sm lg:text-lg xl:text-2xl cursor-pointer ${show === 2 ? 'bg-grad text-white' : 'bg-white text-[#E0694F]'}`}
							onClick={() => setShow(2)}
						>
							Gọi vốn doanh nghiệp
						</div>
					</div>
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
					<div className="flex justify-center items-center flex-col space-y-20 lg:space-y-40">
						{/* 1.1. Giới thiệu về VNFITE */}
						<div>
							<p className="text-2xl lg:text-5xl font-semibold text-center px-4">
								Giới thiệu về <span className="text-gradient">VNFITE</span>
							</p>

							<div className="max-w-[1280px] w-[90%] my-8 mx-auto">
								<Image
									src="/images/about/AboutIntro.png"
									alt="About Intro"
									layout="responsive"
									width={1280}
									height={720}
									priority
								/>
							</div>

							<p className="p-4 font-normal text-base mt-14 flex flex-col space-y-7 max-w-screen-xl w-[90%] mx-auto">
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

								<span>
									Công ty Cổ phần Công nghệ Tài chính VNFITE là một trong các đơn vị tiên phong và uy
									tín hàng đầu cung cấp giải pháp công nghệ tài chính, kết nối giữa các nhà đầu tư và
									nhà gọi vốn.
								</span>

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
						<div>
							<p className="text-2xl lg:text-5xl font-semibold text-center px-8">Lịch sử phát triển</p>
							<div className="flex justify-center items-center flex-col md:flex-row mt-8 lg:mt-16 max-w-[1280px] space-y-14 md:space-x-6 md:space-y-0 md:mx-10">
								<div className="flex justify-center items-center w-[90%] md:w-[35%] mx-auto">
									<Image
										src="/images/about/History.png"
										alt="About History VNFITE"
										width={400}
										height={400}
									/>
								</div>
								<div className="w-full md:w-[65%] flex justify-center flex-col items-center">
									<div className="mb-6 lg:mb-10">
										<TimeLine />
									</div>

									<div className="w-full flex relative">
										<div className="hidden w-1/5 sm:flex flex-col justify-center items-center ">
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

										<Carousel className="w-full px-8 sm:px-2" setApi={setApi} opts={{ loop: true }}>
											<CarouselContent>
												{dataHistory.map((_, index) => (
													<CarouselItem key={index}>
														<div className="flex-grow pt-8">
															<p className="text-lg lg:text-2xl font-semibold leading-[48px] text-center mb-3 lg:mb-6">
																{_.title}
															</p>

															{_.content.map((_, index) => (
																<p
																	key={index}
																	className="text-base font-normal third-line-truncate px-4"
																>
																	{_}
																</p>
															))}
														</div>
													</CarouselItem>
												))}
											</CarouselContent>
										</Carousel>

										<div className="hidden w-1/5 sm:flex flex-col justify-center items-center">
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
							<p className="text-2xl lg:text-5xl font-semibold text-center px-4">Tầm nhìn và sứ mệnh</p>
							<p className="font-normal text-base mt-4 lg:mt-14 text-center p-6">
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
								<p className="font-semibold text-xl text-gradient">Mai Ngọc Đoàn</p>
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
					<div className="flex justify-center items-center flex-col space-y-40">
						<div>
							<p className="text-2xl lg:text-5xl font-semibold text-center px-4">
								Đối với nhà đầu tư về <span className="text-gradient">VNFITE</span>
							</p>

							<div
								style={{
									maxWidth: "1280px",
									width: "90%",
									margin: "30px auto",
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

							<p className="p-4 font-normal text-base mt-2 sm:mt-14 flex flex-col space-y-7 max-w-screen-xl w-[90%] mx-auto">
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
