import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import BoxReveal from "../ui/box-reveal";
import Link from "next/link";
const Banner = () => {
	return (
		<div className="max-w-[1280px] mx-auto flex font-sfpro pb-20 xl:pb-[190px] px-4 ">
			<div className="w-full lg:w-1/2 relative ">
				<div className="relative z-10">
					<p className="text-gradient font-semibold green-underline text-xl">Dịch vụ khách hàng</p>
				</div>

				<div className="mt-10 font-ambrose text-5xl leading-[61px] relative">
					<BoxReveal duration={0.5}>
						<p className="uppercase ">
							SÀN <span className="text-gradient">Giao dịch</span>
						</p>
					</BoxReveal>

					<BoxReveal duration={0.8}>
						<p className="mt-6 font-sfpro font-semibold	">
							<span className="text-gradient">P2P</span> hàng đầu Việt Nam
						</p>
					</BoxReveal>

					<div className="w-full lg:w-3/5">
						<BoxReveal duration={0.6}>
							<p className="font-sfpro font-medium text-[16px] leading-5 mt-5">
								Cùng VNFITE - Làm chủ tương lai tài chính của bạn. Ứng dụng tài chính công nghệ nhanh,
								tiện lợi, lãi suất thấp hàng đầu Việt Nam.{" "}
							</p>
						</BoxReveal>
					</div>
				</div>

				<BoxReveal duration={0.6}>
					<div className="mt-8 flex gap-4 items-center">
						<div className="bg-[#D1A506] px-2 py-1 rounded-2xl flex">
							{[...Array(5)].map((_, i) => {
								return (
									<Image
										src={"/icons/home/star.svg"}
										className="mr-2.5"
										alt="star"
										width={24}
										height={24}
										key={i}
									/>
								);
							})}

							<div className="font-semibold text-[12px] p-1.5 bg-gray-600 rounded-xl text-white leading-[14px]">
								4.9
							</div>
						</div>
						<div className="text-[12px] text-start">Hơn 100K khách hàng</div>
					</div>
				</BoxReveal>

				<BoxReveal duration={0.6}>
					<div className="mt-4">
						<p className="text-sm">Hơn 10.000 khoảng gọi vốn đang chờ bạn đầu tư.</p>
					</div>
				</BoxReveal>

				<div className="mt-12">
					<Link href="#contactbox">
						<Button className="btn-primary !h-14 text-[16px] font-semibold rounded-[32px] px-10 py-3.5">
							Liên hệ với chúng tôi
						</Button>
					</Link>
				</div>
			</div>

			{/* Right banner */}
			<div className="hidden lg:flex w-1/2 justify-end relative">
				<div className="relative left-10 pt-4">
					<div className="bg-grad p-[1px] rounded-[33px]">
						<div className="relative w-[216px] h-[216px]">
							<Image
								className="rounded-[32px] object-cover"
								src="/images/home/1.png"
								alt="banner-girl"
								fill
							/>
						</div>
					</div>
					<div className="relative bg-grad p-[1px] rounded-[17px] mt-[104px] z-50 w-fit left-5">
						<div className="bg-white p-2 rounded-2xl flex gap-4 justify-start items-center">
							<div className="bg-grad px-1.5 py-2.5 w-fit opacity-80 rounded-lg">
								<Image src={"/icons/home/chart.svg"} alt="chart" width={36} height={27} />
							</div>
							<div className="pr-4">
								<p className="text-gray-600 text-sm">Lãi suất</p>
								<div className="text-gradient font-semibold">14 - 18%/năm</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative skew-y-6 overflow-hidden rounded-[40px] w-[404px] h-[490px] shadow-custom z-20">
					<div className="-skew-y-6  h-full w-full scale-[1.08] relative left-3">
						<Image src="/images/home/banner-right.png" alt="banner-girl" width={380} height={400} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
