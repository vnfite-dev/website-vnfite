"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const CheckItem = ({ title, content }: { title: string; content: string }) => {
	return (
		<div className="flex gap-3">
			<div className="">
				<Image src={"/icons/home/RedCheck.svg"} width={24} height={24} alt="Red Check" />
			</div>
			<div className="text-left">
				<p className="mb-2 text-base leading-5 font-semibold">{title}</p>
				<p className=" text-gray-600 max-w-[366px]">{content}</p>
			</div>
		</div>
	);
};

const StackItem = ({
	children,
	pinkBackground = false,
	stack = 0,
}: {
	children: React.ReactNode;
	pinkBackground?: boolean;
	stack: number;
}) => {
	const item = useRef<HTMLDivElement>(null);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (item.current) {
				const rect = item.current.getBoundingClientRect();
				const stickyStart = rect.top <= 100 + 20 * stack; // Sticky when it reaches the top
				setIsSticky(stickyStart);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [stack]);

	return (
		<div
			ref={item}
			className={cn(
				"w-full h-[100vh] relative text-center pt-1 rounded-[64px]",
				pinkBackground ? "bg-pink-stack" : "bg-yellow-stack",
				{
					sticky: isSticky,
				}
			)}
			style={{
				top: `${80 + stack * 20}px`,
				zIndex: stack * 10 + 1,
			}}
		>
			{children}
		</div>
	);
};

const Stack1Info = ({
	leftToRight = true,
	title,
	content,
}: {
	leftToRight?: boolean;
	title: string;
	content: string;
}) => {
	return (
		<div className={cn("flex items-center gap-4", leftToRight ? "justify-start" : "justify-end")}>
			{leftToRight == true && (
				<div className="">
					<Image src="/images/home/blueglobe.png" alt="globe" width={65} height={65} />
				</div>
			)}
			<div
				className={cn("max-w-[250px] text-right", {
					"text-left": leftToRight,
				})}
			>
				<p className="font-semibold">{title}</p>
				<p className="text-gray-600 content">{content}</p>
			</div>

			{leftToRight == false && (
				<div className="">
					<Image src="/images/home/blueglobe.png" alt="globe" width={65} height={65} />
				</div>
			)}
		</div>
	);
};

const Stack = () => {
	return (
		<div className="w-full px-[6%]">
			{/* Stack 1 */}
			{/* <div
				ref={firstStackItem}
				className={`w-full h-[100vh] bg-pink-stack ${isSticky ? "sticky top-0 z-10" : ""}`}
			></div> */}

			{/* Stack 1 */}

			<StackItem pinkBackground={true} stack={0}>
				<div className="pt-20">
					<div className="relative z-10">
						<p className="text-gradient font-semibold green-underline after:w-[120%]">Lý do</p>
						<div className="mt-4 text-5xl">
							Tại sao bạn nên sử dụng <span className="text-gradient font-bold">VNFITE</span>
						</div>
					</div>

					<div className="mt-32 flex px-[12%] justify-between">
						<div className="flex flex-col gap-8">
							<Stack1Info
								leftToRight={false}
								title="Uy tín và bảo mật"
								content="Mọi giao dịch đều được bảo vệ bởi các tiêu chuẩn bảo mật cao nhất, đảm bảo an toàn thông tin."
							/>

							<Stack1Info
								leftToRight={false}
								title="Đầu tư"
								content="Nhanh chóng thuận tiện, lãi suất cao"
							/>

							<Stack1Info
								leftToRight={false}
								title="Đội ngũ chuyên gia hàng đầu"
								content="Am hiểu về tài chính và công nghệ, sẵn sàng hỗ trợ từng bước trên hành trình của bạn."
							/>
						</div>
						<div className="">
							<div className="bg-gray-200 h-20 w-[300px] rounded-full"></div>
						</div>
						<div className="flex flex-col gap-8">
							<Stack1Info
								leftToRight={true}
								title="Uy tín và bảo mật"
								content="Mọi giao dịch đều được bảo vệ bởi các tiêu chuẩn bảo mật cao nhất, đảm bảo an toàn thông tin."
							/>

							<Stack1Info
								leftToRight={true}
								title="Đầu tư"
								content="Nhanh chóng thuận tiện, lãi suất cao"
							/>

							<Stack1Info
								leftToRight={true}
								title="Đội ngũ chuyên gia hàng đầu"
								content="Am hiểu về tài chính và công nghệ, sẵn sàng hỗ trợ từng bước trên hành trình của bạn."
							/>
						</div>
					</div>
				</div>
			</StackItem>

			{/* Stack 2 */}
			<StackItem pinkBackground={false} stack={1}>
				<div className="w-full flex mt-20 px-[12%] ">
					<div className="w-1/2">
						<div className="relative z-10">
							<p className="text-gradient font-semibold green-underline">Giá trị</p>
							<p className="text-5xl text-left mt-4">
								Giá trị mà <span className="text-gradient font-semibold leading-[72px]">VNFITE</span>{" "}
								mang lại cho khách hàng
							</p>
						</div>

						<div className="mt-16 flex flex-col gap-6">
							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>

							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>

							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>
						</div>
					</div>
					<div className="w-1/2 flex justify-end">
						<div className=""></div>
						<div className="">
							<Image src={"/images/home/banner-rightgirl.png"} width={400} height={500} alt="Right" />
						</div>
					</div>
				</div>
			</StackItem>
			<StackItem pinkBackground={true} stack={2}>
				<div className="w-full flex mt-20 px-[12%] ">
					<div className="w-1/2 flex justify-start">
						<div className=""></div>
						<div>
							<Image
								className="rounded-tl-[64px] rounded-br-[64px] rounded-tr-4xl rounded-bl-4xl"
								src={"/images/home/money.png"}
								width={435}
								height={500}
								alt="Right"
							/>
						</div>
					</div>
					<div className="w-1/2">
						<div className="relative z-10">
							<p className="text-gradient font-semibold green-underline">
								Quản lý tài chính thông minh
							</p>
							<p className="text-5xl text-left mt-4">
								Cách quản lý tài chính của bạn hiệu quả thông qua
								<span className="text-gradient font-semibold leading-[72px]"> VNFITE</span>
							</p>
						</div>

						<div className="mt-16 flex flex-col gap-6">
							<CheckItem
								title="Quản lý tài chính chủ động"
								content="Bạn không còn lo lắng về khoản chi tiêu vượt quá kiểm soát."
							/>

							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>

							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>
						</div>
					</div>
				</div>
			</StackItem>
			<StackItem pinkBackground={false} stack={3}>
				<div className="w-full flex mt-20 px-[12%] ">
					<div className="w-1/2 flex justify-start relative">
						{/* <div className="border-dashed w-[400px] aspect-square border border-red-500 animation-breathing absolute top-40 left-3 rounded-[70px]">
							<div className="bg-grad absolute rounded-[70px] -right-12  w-[350px] h-72 animation-bounce"></div>
						</div> */}

						<div className="absolute top-24 left-4 animation-breathing">
							<Image
								className=""
								src={"/icons/home/dashborder.svg"}
								width={400}
								height={500}
								alt="Right"
							/>
							<div className="absolute -right-8 bottom-4 animation-bounce">
								<Image src={"/images/home/rectangle.png"} width={350} height={500} alt="Right" />
							</div>
						</div>
						<div className="relative -top-8 right-8">
							<Image
								className="animation-breathing rounded-tl-[64px] rounded-br-[64px] rounded-tr-4xl rounded-bl-4xl"
								src={"/images/home/phonemockup.svg"}
								width={620}
								height={500}
								alt="Right"
							/>
						</div>
					</div>
					<div className="w-1/2">
						<div className="relative z-10">
							<p className="text-gradient font-semibold green-underline">Quản lý tài chính</p>
							<p className="text-5xl text-left mt-4">
								Cách quản lý tài chính của bạn hiệu quả thông qua
								<span className="text-gradient font-semibold leading-[72px]"> VNFITE</span>
							</p>
						</div>

						<div className="mt-16 flex flex-col gap-6">
							<CheckItem
								title="Quản lý tài chính chủ động"
								content="Bạn không còn lo lắng về khoản chi tiêu vượt quá kiểm soát."
							/>

							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>

							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>
						</div>
					</div>
				</div>
			</StackItem>
			<StackItem pinkBackground={true} stack={4}>
				<div className="pt-20">
					<div className="relative z-10">
						<p className="text-gradient font-semibold green-underline after:w-[120%]">Tải ứng dụng</p>
						<div className="mt-4 text-5xl">
							Hướng dẫn cài đặt ứng dụng <span className="text-gradient font-bold">VNFITE</span>
						</div>
					</div>

					<div className="mt-32 flex relative px-[12%] justify-between gap-8">
						<div className="flex flex-col gap-8">
							<div className="">
								<p className="text-xl">
									Hệ điều hành <span className="font-semibold">Anroid</span>
								</p>
							</div>
							<CheckItem
								title="Quản lý tài chính chủ động"
								content="Bạn không còn lo lắng về khoản chi tiêu vượt quá kiểm soát."
							/>

							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>

							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>
						</div>
						<div className="">
							<div className="bg-gray-200 h-full  rounded-full"></div>
						</div>
						<div className="flex flex-col gap-8">
							<div className="">
								<p className="text-xl">
									Hệ điều hành <span className="font-semibold">IOS</span>
								</p>
							</div>
							<CheckItem
								title="Mở ứng dụng CH Play trên điện thoại của bạn"
								content="Tìm kiếm từ khoá “VNFITE” trên thanh tìm kiếm của ứng dụng hoặc truy cập vào đường link (........)."
							/>

							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>

							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>
						</div>
					</div>
				</div>
			</StackItem>
			{/* <div className="w-full h-[100vh] bg-yellow-stack z-20 relative"></div> */}
		</div>
	);
};

export default Stack;
