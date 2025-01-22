"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
	({ className, children }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("z-10 flex size-16 items-center justify-center rounded-fullp-3", className)}
			>
				{children}
			</div>
		);
	}
);

Circle.displayName = "Circle";

const CircleMain = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
	({ className, children }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("z-10 flex size-52 items-center justify-center rounded-full p-3", className)}
			>
				{children}
			</div>
		);
	}
);

CircleMain.displayName = "CircleMain";

export default function AnimatedBeamDemo() {
	const containerRef = useRef<HTMLDivElement>(null);
	const div1Ref = useRef<HTMLDivElement>(null);
	const div2Ref = useRef<HTMLDivElement>(null);
	const div3Ref = useRef<HTMLDivElement>(null);
	const div4Ref = useRef<HTMLDivElement>(null);
	const div5Ref = useRef<HTMLDivElement>(null);
	const div6Ref = useRef<HTMLDivElement>(null);
	const div7Ref = useRef<HTMLDivElement>(null);

	return (
		<div
			className="relative flex h-[450px] w-full items-center justify-center overflow-hidden rounded-lg bg-background px-10 pb-28 pt-0"
			ref={containerRef}
		>
			<div className="flex size-full flex-col max-w-sm lg:max-w-lg max-h-[200px] items-stretch justify-between gap-3">
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div1Ref} className="size-16 relative">
						<Icon.s1 />
						<div className="absolute top-3 xl:-top-2 right-20 w-28 md:w-32 lg:w-36 xl:w-72 2xl:w-80 p-1">
							<p className="font-semibold text-base text-end">Uy tín và bảo mật</p>
							<p className="hidden xl:block font-normal text-base text-[#666666] text-end">
								Mọi giao dịch đều được bảo vệ bởi các tiêu chuẩn bảo mật cao nhất, đảm bảo an toàn
								thông tin.
							</p>
						</div>
					</Circle>
					<Circle ref={div5Ref} className="size-16 relative">
						<Icon.s5 />
						<div className="absolute top-3 xl:-top-2 left-20 w-28 md:w-32 lg:w-36 xl:w-72 2xl:w-80 p-1">
							<p className="font-semibold text-base text-start">Khách hàng đông đảo</p>
							<p className="hidden xl:block font-normal text-base text-[#666666] text-start">
								Với hàng ngàn khách hàng đang sử dụng dịch vụ chúng tôi sẵn sàng đâu tư cho bạn bất cú
								khi nào bạn cần.
							</p>
						</div>
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div2Ref} className="size-16 relative">
						<Icon.s2 />
						<div className="absolute top-3 xl:-top-2 right-20 w-28 md:w-32 lg:w-36 xl:w-72 2xl:w-80 p-1">
							<p className="font-semibold text-base text-end">Đầu tư</p>
							<p className="hidden xl:block font-normal text-base text-[#666666] text-end">
								Nhanh chóng thuận tiện, lãi suất cao.
							</p>
						</div>
					</Circle>
					<CircleMain ref={div4Ref} className="size-52 pb-14">
						<Icon.vnfite />
					</CircleMain>
					<Circle ref={div6Ref} className="size-16 relative">
						<Icon.s4 />
						<div className="absolute top-3 xl:-top-2 left-20 w-28 md:w-32 lg:w-36 xl:w-72 2xl:w-80 p-1">
							<p className="font-semibold text-base text-start">Tăng trưởng bền vững</p>
							<p className="hidden xl:block font-normal text-base text-[#666666] text-start">
								Các giải pháp tài chính tại VNFITE được thiết kế để hỗ trợ cả nhà đầu tư và doanh
								nghiệp phát triển lâu dài.
							</p>
						</div>
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div3Ref} className="size-16 relative">
						<Icon.s3 />
						<div className="absolute top-3 xl:-top-2 right-20 w-28 md:w-32 lg:w-36 xl:w-72 2xl:w-80 p-1">
							<p className="font-semibold text-base text-end">Đội ngũ chuyên gia hàng đầu</p>
							<p className="hidden xl:block font-normal text-base text-[#666666] text-end">
								Am hiểu về tài chính và công nghệ, sẵn sàng hỗ trợ từng bước trên hành trình của bạn.
							</p>
						</div>
					</Circle>
					<Circle ref={div7Ref} className="size-16 relative">
						<Icon.s6 />
						<div className="absolute top-3 xl:-top-2 left-20 w-28 md:w-32 lg:w-36 xl:w-72 2xl:w-80 p-1">
							<p className="font-semibold text-base text-start">Dễ dàng tiện lợi</p>
							<p className="hidden xl:block font-normal text-base text-[#666666] text-start">
								Quy trình đơn giản, trực tuyến hóa toàn bộ trải nghiệm từ đăng ký đến quản lý tài
								chính.
							</p>
						</div>
					</Circle>
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div4Ref}
				curvature={-140}
				endYOffset={-30}
			/>
			<AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div4Ref}
				curvature={140}
				endYOffset={30}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div4Ref}
				curvature={-140}
				endYOffset={-30}
				reverse
			/>
			<AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div7Ref}
				toRef={div4Ref}
				curvature={140}
				endYOffset={30}
				reverse
			/>
		</div>
	);
}

const Icon = {
	vnfite: () => <Image src="/images/home/logoStack.png" alt="VNFITE" width={201} height={188} />,
	blueglobe: () => <Image src="/images/home/blueglobe.png" alt="BlueGlobe" width={65} height={65} />,
	s1: () => <Image src="/icons/home/s1_1.svg" alt="s1" width={65} height={65} />,
	s2: () => <Image src="/icons/home/s1_2.svg" alt="s2" width={65} height={65} />,
	s3: () => <Image src="/icons/home/s1_3.svg" alt="s3" width={65} height={65} />,
	s4: () => <Image src="/icons/home/s1_4.svg" alt="s4" width={65} height={65} />,
	s5: () => <Image src="/icons/home/s1_5.svg" alt="s5" width={65} height={65} />,
	s6: () => <Image src="/icons/home/s1_6.svg" alt="s6" width={65} height={65} />,
};
