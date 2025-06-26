"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import ButtonArrow from "@/components/molecules/ButtonArrow";
import "./style.css";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { ChevronRight, Clock } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const youtubeLinkList = [
	{ link: "t73Es9jjd2w", title: "Có nên đầu tư vào P2P Lending? Khách hàng nói gì về mô hình cho vay ngang hàng?", createdAt: "13/06/2025" }, 
	{ link: "rMHIYr0ZAZs", title: "MÔ HÌNH P2P LENDING LÀ GÌ?", createdAt: "22/05/2025" },
	{ link: "UimIynuenP0", title: "Lễ ký kết chiến lược toàn diện giữa VNFITE và CTCP XNK Nông sản thực phẩm An Giang", createdAt: "08/02/2025" },
	{ link: "MrobLW0HA-I", title: "Bạn sở hữu xe nhưng cần một giải pháp tài chính tiện lợi?", createdAt: "07/02/2025" },
]

const newspaperLinkList = [
	{
		title: "VNFITE: Áp dụng minh bạch mô hình cho vay ngang hàng theo Nghị định 94/2025",
		link: "https://baodautu.vn/vnfite-ap-dung-minh-bach-mo-hinh-cho-vay-ngang-hang-theo-nghi-dinh-942025-d306479.html?gidzl=AUNj3HxScpeZ-Ea86CAREI7zwGa1pfqwDgBf25oUd6asz-nQ29pEQp-dwLO6ovqsQVNe16KE2aC55TcMEW&gidzl=s6JJ24UuDM7TUze7GwOzPjnzrWzPysqun7-4K0wYQ3MMV8C5NA0yOSTzq0ODg6fZdts52sAhxTvHGBezRW",
		des: "Ngày 1/7/2025, Nghị định 94/2025/NĐ-CP về cơ chế thử nghiệm có kiểm soát trong lĩnh vực ngân hàng chính thức có hiệu lực. Đây là cơ hội để VNFITE minh bạch hóa mô hình cho vay ngang hàng trong hệ sinh thái tài chính số.",
		dateAndSource: "1/7/2025 | Báo Đầu Tư"
	},
	{
		title: "Công ty CP Công nghệ VNFITE Việt Nam tặng quà trung thu cho bệnh nhi tại Bệnh viện Đa khoa tỉnh Phú Thọ",
		link: "https://benhviendakhoatinhphutho.vn/cong-ty-cp-cong-nghe-vnfite-viet-nam-tang-qua-trung-thu-cho-benh-nhi-kho-khan-tai-benh-vien-da-khoa-tinh-phu-tho/",
		des: "Với mong muốn mang đến cho các bệnh nhi một mùa Trung thu ý nghĩa và  tràn ngập tình yêu thương, sáng ngày 14/09/2024, đại diện Công ty Cổ phần Công nghệ Tài chính VNFITE Việt Nam phối hợp Tổ Công tác xã hội đã trao tặng những món quà thiết thực cho các em nhỏ đang điều trị tại Khoa Huyết học lâm sàng – Bệnh viện Đa khoa tỉnh Phú Thọ.",
		dateAndSource: "14/09/2024 | Bệnh viện Đa khoa tỉnh Phú Thọ"
	},
	{
		title: "VNFITE: Sợi dây kết nối nguồn vốn hiệu quả",
		link: "https://thegioitieudungonline.com/vnfite-soi-day-ket-noi-nguon-von-hieu-qua/",
		des: "Với đội ngũ lãnh đạo dày dạn kinh nghiệm cùng hệ thống quản trị rủi ro hiệu quả, VNFITE đang dần khẳng định vị thế của mình trên thị trường tài chính nói chung và thị trường Fintech (Công nghệ tài chính) nói riêng. Hướng tới mục tiêu kết nối nhanh chóng và an toàn, VNFITE đã và đang dần chứng minh là một trong những kênh kết nối vốn hiệu quả cho các cá nhân, hộ kinh doanh và các doanh nghiệp vừa và nhỏ SMEs.",
		dateAndSource: "15/08/2024 | Thế Giới Tiêu Dùng Online"
	},
	{
		title: "Công ty Cổ phần Công nghệ Tài chính VNFITE Khai trương văn phòng trụ sở mới",
		link: "https://kinhdoanhtre.com/cong-ty-co-phan-cong-nghe-tai-chinh-vnfite-khai-truong-van-phong-tru-so-moi/",
		des: "Sáng 09/03/2024 đánh dấu bước ngoặt của VNFITE bằng việc tổ chức buổi lễ khai trương trụ sở văn phòng mới nhằm hiện thực hóa mục tiêu chiến lược phát triển trong năm 2024.",
		dateAndSource: "09/03/2024 | Kinh Doanh Trẻ"
	}
]

const truncateText = (text: string, length: number) => {
		return text.length > length ? text.slice(0, length) + "..." : text;
};

const CardBoardOfDirector = ({
  name,
  title,
  image,
  description,
}: {
  name: string;
  title: string;
  image: string;
  description: string;
}) => {
	const [show, setShow] = useState(false);
	return (
		<div className="sm:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)] flex justify-center">
			<div className="flex flex-col items-center p-3 rounded-2xl shadow-custom">
				<Image src={`/images/about/${image}.jpg`}alt="About History VNFITE" width={264} height={264} />
				<p className="font-semibold text-xl text-gradient mt-3">{name}</p>
				<p className="font-medium text-base pt-3">{title}</p>
				<button
					onClick={() => setShow(!show)}
					className="mt-2 text-sm text-blue-600 hover:underline transition"
				>
					{show ? "Thu gọn" : "Xem thêm"}
				</button>

				<div
					className={`transition-all duration-300 ease-in-out text-sm text-gray-600 text-center mt-2 overflow-hidden ${
					show ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					{description}
				</div>
			</div>
		</div>
	)
}

const About = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [show, setShow] = useState(0);
	const [isShowIntro, setIsShowIntro] = useState(false);
	const [api, setApi] = useState<CarouselApi>();
	const [colorClick, setColorClick] = useState(4);
	const [showVideo, setShowVideo] = useState(false);

	const [visibleCount, setVisibleCount] = useState(4);

	const handleResize = () => {
		const width = window.innerWidth;
		if (width >= 1024) {
			setVisibleCount(4);
		} else if (width >= 768) {
			setVisibleCount(3);
		} else if (width >= 480) {
			setVisibleCount(2);
		} else {
			setVisibleCount(1);
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
		window.removeEventListener("resize", handleResize);
		};
	}, []);

	const truncateText = (text: string, length: number) => {
		return text.length > length ? text.slice(0, length) + "..." : text;
	};

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

							{
								showVideo ? (
									<div className="relative w-[90%] my-6 mx-auto h-0 pb-[56.25%]">
										<iframe
											className="absolute top-0 left-0 w-full h-full rounded-xl"
											src="https://www.youtube.com/embed/SO5TY8MuUac?autoplay=1&cc_load_policy=0"
											title="YouTube VNFITE"
											frameBorder="0"
											allow="autoplay; encrypted-media"
											allowFullScreen
										/>
									</div>
								) : (
									<div className="max-w-[1280px] w-[90%] my-6 mx-auto relative">
										<Image
											src="/images/about/AboutIntro2.jpg"
											alt="About Intro"
											layout="responsive"
											width={1280}
											height={720}
											priority
										/>
										<Image
											src="/icons/about/play.svg"
											alt="Play Icon"
											className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
											width={64}
											height={64}
											onClick={() => setShowVideo(true)}
											loading="eager"
											priority
											aria-label="Play Video"
										/>
									</div>
								)
							}
							
							<p className="sm:p-4 font-normal text-base mt-0 lg:mt-14 flex flex-col space-y-7 max-w-screen-xl w-[90%] mx-auto">
								<span>
									VNFITE là một trong những nền tảng cho vay ngang hàng (P2P Lending) lớn
									tại Việt Nam, đóng vai trò kết nối giữa nhà đầu tư và người vay. Được
									thành lập từ năm 2020, VNFITE đã trở thành một đơn vị tiên phong trong
									lĩnh vực công nghệ tài chính tại Việt Nam, giúp đơn giản hóa quy trình vay
									vốn và đầu tư với công nghệ hiện đại. <br />
								</span>

								{/* <span>
									Công ty Cổ phần Công nghệ Tài chính VNFITE là một trong các đơn vị tiên phong và uy
									tín hàng đầu cung cấp giải pháp công nghệ tài chính, kết nối giữa các nhà đầu tư và
									nhà gọi vốn.
								</span> */}

								{isShowIntro && (
									<>
										<span>
											Phân khúc khách hàng của VNFITE là cá nhân (30 triệu khách hàng)
											hộ kinh doanh (gần 1 triệu khách hàng) và doanh nghiệp vừa và nhỏ
											SME (bao gồm cả mir SME) khoảng 0,5 triệu khách hàng.Đặc biệt định
											hướng vào phân khúc cho người dân vùng nông thôn, người nghèo chưa
											có điều kiện tiếp cận dịch vụ tài chính ngân hàng với ứng dụng
											công nghệ cao.
										</span>

										<span>
											Hướng đến nhóm khách hàng tài chính vi mô, để mọi người dân đều có
											thể sử dụng dịch vụ. Mang tính an sinh xã hội và phổ cập tài chính
											rộng khắp cho người dân. Có tính nhân văn lớn.Sở hữu đội ngũ nhân
											viên chuyên nghiệp, giàu kinh nghiệm trong lĩnh vực tài chính ngân
											hàng, VNFITE mang đến một kênh đầu tư hiệu quả, an toàn vì cuộc
											sống tốt đẹp phát triển thịnh vượng cho các nhà đầu tư trên mọi
											miền tổ quốc.
										</span>

										<span>
											Dưới sự dẫn dắt của Hội Đồng Quản Trị, tuy mới thành lập nhưng
											VNFITE đang dần khẳng định vị thế của mình trên thị trường Fintech
											nói chung và thị trường tài chính nói chung. Với mục tiêu kết nối
											nhanh chóng và an toàn, VNFITE đã và đang ứng dụng một cách triệt
											để công nghệ 4.0, kết nối trực tiếp các nhà đầu tư và người kêu
											gọi vốn, dần chứng minh mình là một trong những kênh dẫn vốn hiệu
											quả cho các hộ kinh doanh, các doanh nghiệp vừa và nhỏ.
										</span>

										<span>
											Với phương châm đặt lợi ích của khách hàng lên hàng đầu, VNFITE
											tin rằng chỉ có mang lại giá trị thiết thực cho khách hàng mới là
											giá trị cốt lõi của doanh nghiệp tài chính nói riêng và các doanh
											nghiệp nói chung
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
						<div className="w-full md:w-auto ">
							<p className="text-2xl lg:text-5xl font-semibold text-center">
								Lịch sử phát triển
							</p>

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
															(colorClick === index
																? " bg-grad "
																: " bg-gray-500 ")
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
																colorClick === index
																	? "text-gradient"
																	: "text-[#B3B3B3]"
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
								Là sợi dây kết nối giữa nhà đầu tư và nhà huy động, tạo ra sân chơi an toàn
								giao thương tài chính, tạo lợi ích cho các bên đồng thời tạo sự phát triển bền
								vững cho xã hội.
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
									<div style={{ width: "56px", height: "auto" }}>
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

						<div>
							<p className="text-2xl lg:text-5xl font-semibold text-center px-4">
								Báo chí nói về <span className="text-gradient">VNFITE</span>
							</p>

							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-0 sm:px-4 m-10">
								{newspaperLinkList.map((item, index) => (
								<a
									key={index}
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-all bg-white"
								>
									<Image
										src={`/images/about/newspaper${index + 1}.jpg`}
										alt={`Newspaper ${index + 1}`}
										width={300}
										height={200}
										className="w-full h-56 object-cover rounded-lg mb-4"
									/>
									<p className="text-sm text-gray-400 mb-1">{item.dateAndSource}</p>
									<h3 className="font-semibold text-lg mb-2">{item.title}</h3>
									<p className="text-sm text-gray-600">{truncateText(item.des, 150)}</p>
								</a>
								))}
							</div>
						</div>

						{/* 1.4. Khám phá */}
						<div className="bg-red w-full">
							<p className="text-2xl lg:text-5xl font-semibold text-center px-4">
								Khám phá
							</p>
							<div className="flex justify-end">
								<button
									onClick={() => window.open("https://www.youtube.com/@vnfitevietnam9932/shorts", "_blank")}
									className="py-2 mx-2 sm:mx-5 text-gradient rounded-lg mt-4 sm:mt-8 lg:mt-12"
								>
									Xem thêm video {'>'}
								</button>
							</div>
							<div className="flex items-start justify-center flex-row w-full px-6 gap-6">
								{
									youtubeLinkList.slice(0, visibleCount).map((item, index) => (
										<div className="w-[80%] sm:w-[46%] lg:w-[21%] mx-auto relative" key={index}>
											<iframe
												className="w-full aspect-[1/2] rounded-xl"
												src={"https://www.youtube.com/embed/" + item.link}
												title="YouTube VNFITE"
												frameBorder="0"
												allow="autoplay; encrypted-media"
												allowFullScreen
											/>
											<div className="absolute bottom-0 left-0 right-0 text-white p-4 rounded-b-xl bg-gradient-to-t from-[#FF4848] to-transparent pointer-events-none">
												<p className="font-semibold">{truncateText(item.title, 60)}</p>
												<div className="flex items-center gap-3 text-sm mt-2">
													<Clock width={20} height={20}/>
													<p>{item.createdAt}</p>
												</div>
											</div>
										</div>
									))
								}
							</div>
						</div>
					</div>
				)}

				{/* 2. Ban lãnh đạo */}
				{show === 1 && (
					<div className="flex flex-col justify-center item-center gap-x-[30px] gap-y-10 max-w-[1000px] m-auto">
						<div className="w-full flex flex-row justify-center items-center flex-wrap gap-x-6 gap-y-10 m-auto">
							{/* Item 1 */}
							<CardBoardOfDirector
								name="Trần Quốc Hưng"
								title="Tổng Giám đốc"
								image="BoardOfDirector"
								description="Ông Trần Quốc Hưng từng giữ vị trí giám đốc phòng giao dịch tại VietABank và có hơn 11 năm kinh nghiệm trong lĩnh vực tài chính ngân hàng."
							/>

							{/* Item 2 */}
							<CardBoardOfDirector
								name="Nguyễn Văn Lam"
								title="Phó Tổng Giám Đốc Thường Trực"
								image="BoardOfDirector2"
								description="Tốt nghiệp Thạc sĩ MBA tại Đại học Nam Columbia, Hoa Kỳ, ông Nguyễn Văn Lam từng giữ vị trí Giám đốc Kinh doanh tại công ty Fintech Lendbiz và Giám đốc Đầu tư tại công ty đầu tư 3Gang. Với kinh nghiệm phong phú trong lĩnh vực tài chính và đầu tư, ông hiện đang đảm nhiệm vai trò Phó Giám đốc Thường trực tại VNFITE."
							/>
						</div>

						<div className="w-full flex flex-row justify-center items-center flex-wrap gap-x-6 gap-y-10 m-auto">
							{/* Item 3 */}
							<CardBoardOfDirector
								name="Đỗ Văn Dân"
								title="Giám Đốc Trung Tâm Kinh Doanh"
								image="BoardOfDirector5"
								description="Tốt nghiệp Học viện Ngân hàng, ông Đỗ Văn Dân có hơn 12 năm kinh nghiệm trong lĩnh vực tài chính, từng đảm nhiệm nhiều vị trí quan trọng trong hoạt động kinh doanh và phát triển khách hàng. Hiện ông đang giữ vai trò Giám đốc Trung tâm Kinh doanh tại VNFITE."
							/>

							{/* Item 4 */}
							<CardBoardOfDirector
								name="Nghiêm Khắc Lâm"
								title="Trưởng Bộ Phận Công Nghệ"
								image="BoardOfDirector4"
								description="Ông Nghiêm Khắc Lâm là một chuyên gia công nghệ với hơn 5 năm kinh nghiệm trong lĩnh vực phát triển phần mềm và quản lý dự án công nghệ. Ông từng giữ vị trí Trưởng phòng Công nghệ tại một công ty Fintech hàng đầu và hiện đang đảm nhiệm vai trò Trưởng Bộ phận Công Nghệ tại VNFITE, nơi ông dẫn dắt đội ngũ kỹ thuật phát triển các giải pháp công nghệ tiên tiến."
							/>
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
									Công ty Cổ phần Công nghệ Tài chính VNFITE là một trong các đơn vị tiên
									phong và uy tín hàng đầu cung cấp giải pháp công nghệ tài chính, kết nỗi
									giữa các nhà đầu tư và nhà gọi vốn.
								</span>

								<span className="text-center">
									Phân khúc khách hàng của VNFITE là cá nhân (30 triệu khách hàng) hộ kinh
									doanh (gần 1 triệu khách hàng) và doanh nghiệp vừa và nhỏ SME (bao gồm cả
									miro SME) khoảng 0,5 triệu khách hàng. Đặc biệt định hướng vào phân khúc
									cho người dân vùng nông thôn, người nghèo chưa có điều kiện tiếp cận dịch
									vụ tài chính ngân hàng với ứng dụng công nghệ cao. Hướng đến nhóm khách
									hàng tài chính vi mô, để mọi người dân đều có thể sử dụng dịch vụ. Mang
									tính an sinh xã hội và phổ cập tài chính rộng khắp cho người dân. Có tính
									nhân văn lớn. Sở hữu đội ngũ nhân viên chuyên nghiệp, giàu kinh nghiệm
									trong lĩnh vực tài chính ngân hàng, VNFITE mang đến một kênh đầu tư hiệu
									quả, an toàn vì cuộc sống tốt đẹp phát triển thịnh vượng cho các nhà đầu
									tư trên mọi miền tổ quốc.
								</span>

								<span className="text-center">
									Dưới sự dẫn dắt của Hội Đồng Quản Trị, tuy mới thành lập nhưng VNFITE đang
									dần khẳng định vị thế của mình trên thị trường Fintech nói chung và thị
									trường tài chính nói chung. Với mục tiêu kết nối nhanh chóng và an toàn,
									VNFITE đã và đang ứng dụng một cách triệt để công nghệ 4.0, kết nối trực
									tiếp các nhà đầu tư và người kêu gọi vốn, dần chứng minh mình là một trong
									những kênh dẫn vốn hiệu quả cho các hộ kinh doanh, các doanh nghiệp vừa và
									nhỏ.
								</span>

								<span className="text-center">
									Với phương châm đặt lợi ích của khách hàng lên hàng đầu, VNFITE tin rằng
									chỉ có mang lại giá trị thiết thực cho khách hàng mới là giá trị cốt lõi
									của doanh nghiệp tài chính nói riêng và các doanh nghiệp nói chung.
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
