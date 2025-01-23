"use client";

import { cn } from "@/lib/utils";
import { useCheckOS, useIsMobile } from "@/hooks/helper";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import AnimatedBeamDemo from "./AnimatedBeam";

const CheckItem = ({ title, content }: { title: string; content: string }) => {
	return (
		<div className="flex gap-3">
			<div className="min-w-6">
				<Image src={"/icons/home/RedCheck.svg"} width={24} height={24} alt="Red Check" />
			</div>
			<div className="text-left">
				<p className="mb-2 text-base leading-5 md:font-semibold">{title}</p>
				<p className="hidden md:block text-gray-600 max-w-[366px]">{content}</p>
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
	// const [deviceInfo, setDeviceInfo] = useState<{
	// 	isMobile: boolean;
	// 	os: string;
	// }>({
	// 	isMobile: false,
	// 	os: "none",
	// });
	useEffect(() => {
		// setDeviceInfo({
		// 	isMobile: isMobile(),
		// 	os: checkOS(),
		// });
		const handleScroll = () => {
			if (item.current) {
				const rect = item.current.getBoundingClientRect();
				const stickyStart = rect.top <= 100 + 20 * stack; // Sticky when it reaches the top
				setIsSticky(stickyStart);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			ref={item}
			className={cn(
				"w-full h-[100vh] relative text-center pt-1 rounded-[20px] md:rounded-[64px] overflow-y-hidden",
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
	index = 1,
}: {
	leftToRight?: boolean;
	title: string;
	content: string;
	index: number;
}) => {
	return (
		<div
			className={cn(
				"flex flex-col md:flex-row items-center gap-4 min-h-32",
				leftToRight ? "md:justify-start" : "md:justify-end"
			)}
		>
			{/* Hình ảnh chỉ hiện ở vị trí tương ứng */}
			<div
				className={cn(
					"min-w-10 md:min-w-[65px]",
					// { "order-2 md:order-none": !leftToRight } // Đảo vị trí khi cần
					leftToRight ? "order-none" : "order-none md:order-2"
				)}
			>
				<Image src={`/icons/home/s1_${index}.svg`} alt="globe" width={65} height={65} />
			</div>

			{/* Nội dung văn bản */}
			<div className={cn("max-w-[250px] text-center", leftToRight ? "md:text-left" : "md:text-right")}>
				<p className="font-semibold">{title}</p>
				<p className="text-gray-600 content hidden md:inline-block">{content}</p>
			</div>
		</div>
	);
};

const Stack = () => {
	const os = useCheckOS();
	const isMobile = useIsMobile();
	return (
		<div className="w-full px-1 md:px-[6%]" suppressHydrationWarning={true}>
			{/* Stack 1 */}
			{/* <div
            ref={firstStackItem}
            className={`w-full h-[100vh] bg-pink-stack ${isSticky ? "sticky top-0 z-10" : ""}`}
        ></div> */}

			{/* Stack 1 */}

			<StackItem pinkBackground={true} stack={0}>
				<div className="flex flex-col sm:hidden pt-10 md:pt-20">
					<div className="relative z-10">
						<p className="text-gradient font-semibold green-underline after:w-[120%]">Lý do</p>
						<div className="mt-4 text-3xl md:text-5xl">
							Tại sao bạn nên sử dụng <span className="text-gradient font-bold">VNFITE</span>
						</div>
					</div>

					<div className="mt-12 md:mt-32 flex px-5 md:px-[12%] justify-between">
						<div className="flex flex-col gap-8 pr-1 w-1/2 md:w-auto">
							<Stack1Info
								leftToRight={false}
								title="Uy tín và bảo mật"
								content="Mọi giao dịch đều được bảo vệ bởi các tiêu chuẩn bảo mật cao nhất, đảm bảo an toàn thông tin."
								index={1}
							/>

							<Stack1Info
								leftToRight={false}
								title="Đầu tư"
								content="Nhanh chóng thuận tiện, lãi suất cao"
								index={2}
							/>

							<Stack1Info
								leftToRight={false}
								title="Đội ngũ chuyên gia hàng đầu"
								content="Am hiểu về tài chính và công nghệ, sẵn sàng hỗ trợ từng bước trên hành trình của bạn."
								index={3}
							/>
						</div>
						<div className="hidden md:block">
							<Image src={"/images/home/banner-rightgirl.png"} width={300} height={200} alt="stack1" />
						</div>
						<div className="flex flex-col gap-8 pl-1 w-1/2 md:w-auto">
							<Stack1Info
								leftToRight={true}
								title="Dễ dàng tiện lợi"
								content="Mọi giao dịch đều được bảo vệ bởi các tiêu chuẩn bảo mật cao nhất, đảm bảo an toàn thông tin."
								index={4}
							/>

							<Stack1Info
								leftToRight={true}
								title="Khách hàng đông đảo"
								content="Nhanh chóng thuận tiện, lãi suất cao"
								index={5}
							/>

							<Stack1Info
								leftToRight={true}
								title="Tăng trưởng bền vững"
								content="Am hiểu về tài chính và công nghệ, sẵn sàng hỗ trợ từng bước trên hành trình của bạn."
								index={5}
							/>
						</div>
					</div>
				</div>
				<div className="hidden sm:flex sm:flex-col pt-10 md:pt-20">
					<div className="relative z-10">
						<p className="text-gradient font-semibold green-underline after:w-[120%]">Lý do</p>
						<div className="mt-4 text-3xl md:text-5xl">
							Tại sao bạn nên sử dụng <span className="text-gradient font-bold">VNFITE</span>
						</div>
					</div>
					<AnimatedBeamDemo />
				</div>
			</StackItem>

			{/* Stack 2 */}
			<StackItem pinkBackground={false} stack={1}>
				<div className="w-full flex flex-col md:flex-row mt-10 md:mt-20 px-5 sm:px-[12%] ">
					<div className="w-full md:w-1/2">
						<div className="relative z-10">
							<p className="text-gradient font-semibold green-underline">Giá trị</p>
							<p className="text-3xl md:text-5xl text-left mt-4 ">
								Giá trị mà{" "}
								<span className="text-gradient font-semibold md:leading-[72px]">VNFITE</span> mang lại
								cho khách hàng
							</p>
						</div>

						<div className="mt-6 md:mt-16 flex flex-col gap-6">
							<CheckItem
								title="Tiếp cận nguồn vốn dễ dàng và nhanh chóng"
								content="Với quy trình đơn giản và công nghệ hiện đại, VNFITE giúp khách hàng dễ dàng tiếp cận các sản phẩm tài chính chỉ trong vài phút, mọi lúc, mọi nơi. Chúng tôi cam kết mang đến trải nghiệm thuận tiện và tiết kiệm thời gian nhất cho người dùng. "
							/>

							<CheckItem
								title="Thông tin minh bạch và an toàn"
								content="VNFITE đảm bảo mọi thông tin đều rõ ràng, chi tiết và dễ hiểu, giúp khách hàng an tâm trong mọi giao dịch. Hệ thống bảo mật tiên tiến bảo vệ tuyệt đối dữ liệu cá nhân và tài sản tài chính của người dùng. "
							/>

							<CheckItem
								title="Giải pháp tài chính linh hoạt"
								content="Chúng tôi cung cấp các sản phẩm tài chính đa dạng, từ tích lũy đến vay vốn, được tùy chỉnh để phù hợp với nhu cầu và khả năng của từng khách hàng. VNFITE là đối tác tin cậy giúp bạn quản lý tài chính hiệu quả. "
							/>
						</div>
					</div>
					<div className="w-full mt-6 md:mt-0 md:w-1/2 flex justify-end">
						<div className=""></div>
						<div className="w-[400px] h-52 md:h-[500px] relative">
							<Image
								className="object-cover"
								src={"/images/home/banner-rightgirl.png"}
								fill
								alt="Right"
							/>
						</div>
					</div>
				</div>
			</StackItem>
			<StackItem pinkBackground={true} stack={2}>
				<div className="w-full flex flex-col md:flex-row  mt-10 md:mt-20 px-5 sm:px-[12%] ">
					<div className="w-full md:w-1/2 flex justify-start relative order-2 md:order-none">
						<div className="w-[435px] h-52 md:h-[500px] relative mt-4 md:mt-0">
							<Image
								className="rounded-tl-[64px] rounded-br-[64px] rounded-tr-4xl rounded-bl-4xl"
								src={"/images/home/money.png"}
								fill
								alt="Right"
							/>
						</div>
					</div>
					<div className="w-full md:w-1/2">
						<div className="relative z-10">
							<p className="text-gradient font-semibold green-underline">
								Quản lý tài chính thông minh
							</p>
							<p className="text-3xl md:text-5xl text-left mt-4 ">
								Cách quản lý tài chính của bạn hiệu quả thông qua
								<span className="text-gradient font-semibold md:leading-[72px]"> VNFITE</span>
							</p>
						</div>

						<div className="mt-4 md:mt-16 flex flex-col gap-6">
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
				<div className="w-full flex flex-col md:flex-row mt-10 md:mt-20 px-5 sm:px-[12%] ">
					<div className="mx-auto w-1/2 order-2 md:order-none md:w-1/2 md:mx-0 flex justify-start relative">
						<div className="absolute top-24 left-4 animation-breathing w-[100px] h-[100px] md:w-[400px] md:h-[500px]">
							<Image className="" src={"/icons/home/dashborder.svg"} alt="Right" fill />
							<div className="absolute -right-8 bottom-4 animation-bounce">
								<Image src={"/images/home/rectangle.png"} width={350} height={500} alt="Right" />
							</div>
						</div>
						<div className="relative -top-36  md:-top-8 right-8 w-[620px] h-[500px]">
							<Image
								className="animation-breathing rounded-tl-[64px] rounded-br-[64px] rounded-tr-4xl rounded-bl-4xl"
								src={"/images/home/phonemockup.svg"}
								fill
								alt="Right"
							/>
						</div>
					</div>
					<div className="w-full md:w-1/2">
						<div className="relative z-10">
							<p className="text-gradient font-semibold green-underline">Quản lý tài chính</p>
							<p className="text-3xl md:text-5xl text-left mt-4 ">
								Cách quản lý tài chính của bạn hiệu quả thông qua
								<span className="text-gradient font-semibold md:leading-[72px]"> VNFITE</span>
							</p>
						</div>

						<div className="mt-8 md:mt-16 flex flex-col gap-6">
							<CheckItem
								title="Giao diện thân thiện"
								content="Bạn không còn lo lắng về khoản chi tiêu vượt quá kiểm soát."
							/>

							<CheckItem
								title="Tính linh hoạt cao"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>

							<CheckItem
								title="Tốc độ xử lý nhanh chóng"
								content="Khách hàng có thể đăng kí khoản vay nhanh chóng tại ứng dụng VNFITE. "
							/>
						</div>
					</div>
				</div>
			</StackItem>

			{/* Ẩn cái hướng dẫn này ở màn mobile */}
			<div className="">
				<StackItem pinkBackground={true} stack={4}>
					<div className=" mt-10 md:mt-20  px-5 md:px-[12%] h-fit">
						<div className="relative z-10">
							<p className="text-gradient font-semibold green-underline after:w-[120%]">
								Tải ứng dụng
							</p>
							<div className="mt-4 text-3xl  md:text-5xl">
								Hướng dẫn cài đặt ứng dụng <span className="text-gradient font-bold">VNFITE</span>
							</div>
						</div>
						<div className="mt-12 md:mt-32 flex relative md:px-[8%] justify-between md:gap-8">
							{(os === "ANDROID" || isMobile == false) && (
								<div className="flex flex-col gap-8 w-1/2">
									<p className="text-xl">
										Hệ điều hành <span className="font-semibold">Android</span>
									</p>
									<CheckItem
										title="Nhấn vào nút “cài đặt” để tải ứng dụng về máy, tiếp theo mở ứng dụng."
										content="Tìm kiếm từ khoá “VNFITE” trên thanh tìm kiếm của ứng dụng hoặc ấn vào nút Tải ứng dụng."
									/>
									<p className="sm:hidden text-gray-500 -my-6 text-start pl-7">
										Tìm kiếm từ khoá “VNFITE” trên thanh tìm kiếm của ứng dụng hoặc ấn vào nút Tải
										ứng dụng.
									</p>

									<CheckItem
										title="Cài đặt ứng dụng"
										content="Nhấn vào nút “cài đặt” để tải ứng dụng về máy, tiếp theo mở ứng dụng."
									/>
									<p className="sm:hidden text-gray-500 -my-6 text-start pl-7">
										Nhấn vào nút “cài đặt” để tải ứng dụng về máy, tiếp theo mở ứng dụng.
									</p>

									<CheckItem
										title="Đăng kí tài khoản"
										content="Yêu cầu bạn phải nhập số CCCD, tiếp theo xác minh EKYC để tạo tài khoản VNFITE. Sau khi hoàn thành các bước trên, vui lòng đăng nhập và trải nghiệp những dịch vụ hấp dẫn từ VNFITE. "
									/>
									<p className="sm:hidden text-gray-500 -my-6 text-start pl-7">
										Yêu cầu bạn phải nhập số <span className="font-semibold">CCCD</span>, tiếp theo
										xác minh EKYC để tạo tài khoản VNFITE. Sau khi hoàn thành các bước trên, vui
										lòng đăng nhập và trải nghiệp những dịch vụ hấp dẫn từ VNFITE.
									</p>
								</div>
							)}
							<div className="md:w-[400px] md:h-[350px] hidden sm:block">
								<Image src={"/icons/home/QR_STACK.svg"} width={400} height={350} alt="step1" />
							</div>

							{(os === "IOS" || isMobile == false) && (
								<div className="flex flex-col gap-8 w-1/2">
									<div className="">
										<p className="text-xl">
											Hệ điều hành <span className="font-semibold">IOS</span>
										</p>
									</div>
									<CheckItem
										title="Mở ứng dụng Appstore trên điện thoại của bạn"
										content="Tìm kiếm từ khoá “VNFITE” trên thanh tìm kiếm của ứng dụng hoặc truy cập vào đường link."
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
							)}
						</div>
					</div>
				</StackItem>
			</div>
			{/* <div className="w-full h-[100vh] bg-yellow-stack z-20 relative"></div> */}
		</div>
	);
};
export default Stack;
