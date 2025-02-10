"use client";

import { ElementType } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogHeader } from "@/components/ui/dialog";
import { useFormState } from "../../hooks/useFormState";
import AnimatedCircularProgressBar from "../ui/animated-circular-progress-bar";
import {
	ArrowLeft,
	ArrowRight,
	CheckCircle,
	CircleDollarSign,
	Clock,
	GraduationCap,
	MapPin,
	Share2,
	Star,
	UserRound,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DragDropFileUpload } from "./DrapDropFileUpload";
import { Textarea } from "../ui/textarea";
import { jobList } from "@/app/news/data";
// import { useRouter } from "next/navigation";

type ApplicationData = {
	jobId: string;
	fullName: string;
	email: string;
	phone: string;
	address: string;
	detail: string;
	cv: File | null;
};

const KeyValueRender = ({ value, title, Icon }: { value: string; title: string; Icon: ElementType }) => {
	return (
		<div className="w-full sm:w-1/2 relative flex mt-2">
			<div className="w-2/5 text-gray-600 flex gap-2">
				{Icon && <Icon className="w-5 h-5" />}
				{title} :
			</div>
			<div className="font-semibold ">{value}</div>
		</div>
	);
};

export function ApplicationModal({ jobId }: { jobId: string }) {
	const jobDetail = jobList.find((item) => item.id === Number(jobId));
	const { data, updateFields, currentStep, nextStep, prevStep } = useFormState<ApplicationData>({
		jobId: jobId,
		fullName: "",
		email: "",
		phone: "",
		address: "",
		detail: "",
		cv: null,
	});
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(window.location.href);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 5000);
	};

	function handleFileUpload(file: File) {
		updateFields({ cv: file });
	}
	function handleSubmit() {
		console.log("Application submitted:", data);
		nextStep();
	}

	return (
		<>
			<DialogHeader>
				<div className="flex justify-center items-center flex-col">
					<div className="w-full flex gap-2 items-center">
						<div className="gradient-line w-[45%]"></div>
						<AnimatedCircularProgressBar
							max={100}
							min={0}
							value={(currentStep + 1) * 33}
							gaugePrimaryColor="#F84F4F"
							gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
						/>
						<div className="gradient-line-reversed w-[45%]"></div>
					</div>
					<div className="text-gradient mt-3 text-2xl font-semibold">
						{currentStep === 0
							? "Thông tin tuyển dụng"
							: currentStep === 1
							? "Đăng ký đồng hành"
							: "Ứng tuyển thành công"}
					</div>
				</div>
			</DialogHeader>
			<div className="py-4">
				{currentStep === 0 && (
					<div className="">
						<div className="font-semibold text-2xl px-5 sm:px-1">
							{jobDetail?.title ||
								"Chuyên viên Quan hệ Khách hàng Cá nhân - Quảng Nam (Khu vực Duy Xuyên, Điện Bàn)"}
						</div>
						<div className="flex flex-col sm:flex-row flex-wrap relative w-full mt-12 px-7">
							<KeyValueRender
								value={jobDetail?.type || "Toàn thời gian"}
								title="Hình thức làm việc"
								Icon={Clock}
							/>
							<KeyValueRender
								value={jobDetail?.degree || "Đại học"}
								title="Bằng cấp"
								Icon={GraduationCap}
							/>
							<KeyValueRender
								value={jobDetail?.position || "Nhân viên"}
								title="Vị trí"
								Icon={UserRound}
							/>
							<KeyValueRender value={jobDetail?.exp || "Trên 1 năm"} title="Kinh nghiệm" Icon={Star} />
							<KeyValueRender
								value={jobDetail?.salary || "12.000.000 - 15.000.000 VND"}
								title="Lương"
								Icon={CircleDollarSign}
							/>
							<KeyValueRender value={jobDetail?.location || "Hà Nội"} title="Địa chỉ" Icon={MapPin} />
						</div>
						<div className="px-7">
							<div className="font-semibold text-xl mt-8">Mô tả làm việc</div>
							<div className="">
								{jobDetail?.description?.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div>

							{/* Yeu cau ung vien */}

							<div className="font-semibold text-xl mt-8">Yêu cầu ứng viên</div>
							<div className="">
								{jobDetail?.requirements?.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div>
							{/* Quyen loi */}
							<div className="font-semibold text-xl mt-8">Quyền lợi</div>
							<div className="">
								{jobDetail?.benefit?.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div>

							{/*  */}

							<div className="font-semibold text-xl mt-8">Địa chỉ làm việc</div>
							<div className="">
								{jobDetail?.detailLocation?.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div>

							<div className="mt-6 flex gap-5">
								<Button className="btn-primary" onClick={nextStep}>
									Ứng tuyển ngay
								</Button>
								<div
									onClick={copyToClipboard}
									className="flex gap-2 cursor-pointer items-center font-semibold"
								>
									{copied ? (
										<>
											<CheckCircle color="green" size={24} />
											<p>Đã sao chép</p>
										</>
									) : (
										<>
											<Share2 color="blue" size={24} /> <p>Chia sẻ ngay</p>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
				{currentStep === 1 && (
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
						className="space-y-2 md:space-y-4"
					>
						<div className="px-3 md:grid grid-cols-2 gap-10">
							<div className="space-y-2 flex items-center">
								<Label htmlFor="fullName" className="mr-4 min-w-16">
									Họ và tên :
								</Label>
								<Input
									id="fullName"
									value={data.fullName}
									onChange={(e) => updateFields({ fullName: e.target.value })}
									required
								/>
							</div>
							<div className="space-y-2 flex items-center">
								<Label htmlFor="email" className="mr-4 min-w-16">
									Email
								</Label>
								<Input
									id="email"
									type="email"
									value={data.email}
									onChange={(e) => updateFields({ email: e.target.value })}
									required
								/>
							</div>
						</div>
						<div className="px-3 md:grid grid-cols-2 gap-10">
							<div className="space-y-2 flex items-center">
								<Label htmlFor="phone" className="min-w-16 mr-4">
									SĐT
								</Label>
								<Input
									id="phone"
									type="phone"
									value={data.phone}
									onChange={(e) => updateFields({ phone: e.target.value })}
									required
								/>
							</div>

							<div className="space-y-2 flex items-center">
								<Label htmlFor="address" className="min-w-16 mr-4">
									Địa chỉ
								</Label>
								<Select
									value={data.address}
									onValueChange={(value) => updateFields({ address: value })}
								>
									<SelectTrigger id="address" className="w-full">
										<SelectValue placeholder="Chọn thành phố" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="hanoi">Hà Nội</SelectItem>
										<SelectItem value="hochiminh">Hồ Chí Minh</SelectItem>
										<SelectItem value="danang">Đà Nẵng</SelectItem>
										<SelectItem value="cantho">Cần Thơ</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div className="px-3 md:grid grid-cols-2 gap-10">
							<div className="mt-3 md:mt-0 md:space-y-2">
								<Label>Upload CV</Label>
								<DragDropFileUpload onFileUpload={handleFileUpload} />
								{data.cv && (
									<p className="text-sm text-gray-600">File bạn đã tải lên: {data.cv.name}</p>
								)}
							</div>

							<div className="mt-3 md:mt-0 space-y-2">
								<Label>Vài dòng giới thiệu về bản thân với VNFITE</Label>
								<Textarea
									className="w-full"
									rows={6}
									value={data.detail}
									onChange={(e) => updateFields({ detail: e.target.value })}
								/>
							</div>
						</div>

						<div className="flex justify-between gap-6">
							<Button
								type="button"
								onClick={prevStep}
								className="text-sm py-2 px-16"
								variant="outline"
							>
								<ArrowLeft strokeWidth={4} /> Quay về
							</Button>
							<Button type="submit" className="bg-grad text-sm py-2 px-16">
								Gửi yêu cầu <ArrowRight strokeWidth="4px" />
							</Button>
						</div>
					</form>
				)}
				{currentStep === 2 && (
					<div className="space-y-4">
						<p className="flex justify-center items-center">
							<Image src={"/images/careers/cvsuccess.gif"} alt="Success" width={160} height={160} />
						</p>
						<p className="text-center px-10">
							Cảm ơn bạn đã quan tâm và gửi thông tin ứng tuyển đến VNFITE! Chúng tôi đã nhận được hồ
							sơ của bạn và sẽ xem xét một cách cẩn thận.
						</p>
						{/* <div className="flex justify-center">
									<Button onClick={resetAndClose}>Close</Button>
								</div> */}
					</div>
				)}
			</div>
		</>
	);
}
