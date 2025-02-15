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
import { useEffect } from "react";
import { keyToValue, simpleFetchFunction } from "@/lib/utils";
import { WebUtils } from "@/lib/utils";
// import { jobList } from "@/app/news/data";
// import { useRouter } from "next/navigation";

import { IJob } from "./ListJobs";
type ApplicationData = {
	name: string;
	phoneNumber: string;
	email: string;
	location: string;
	introduction: string;
	hiringJobId: string;
	fileCv: File | null;
	description: string;
};

const KeyValueRender = ({
	value,
	title,
	Icon,
}: {
	value: string | undefined;
	title: string;
	Icon: ElementType;
}) => {
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
	// const jobDetail = jobList.find((item) => item.id === Number(jobId));

	const [jobDetail, setJobDetail] = useState<IJob>(); // khong co khong co

	useEffect(() => {
		const fetchData = async () => {
			const res = await simpleFetchFunction(`/hiring/${jobId}`);
			if (res.result.isOK) {
				setJobDetail(res.data);
			}
		};
		fetchData();
	}, [jobId]);
	const { data, updateFields, currentStep, nextStep, prevStep } = useFormState<ApplicationData>({
		name: "",
		phoneNumber: "",
		email: "",
		location: "",
		introduction: "",
		hiringJobId: jobId,
		fileCv: null,
		description: "",
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
		updateFields({ fileCv: file });
	}
	async function handleSubmit() {
		const formData = new FormData();

		const applyJobRequest = {
			name: data.name,
			phoneNumber: data.phoneNumber,
			email: data.email,
			location: data.location,
			introduction: data.introduction,
			hiringJobId: data.hiringJobId,
		};

		formData.append("applyJobRequest", JSON.stringify(applyJobRequest));
		if (data.fileCv) {
			formData.append("fileCv", data.fileCv);
		}

		const res = await fetch(`${WebUtils.envMode.baseURL}/apply/apply-job`, {
			method: "POST",
			headers: {
				transactionId: "1234",
			},
			body: formData,
		});
		if (res.ok) {
			nextStep();
		}
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
							{jobDetail?.name ||
								"Chuyên viên Quan hệ Khách hàng Cá nhân - Quảng Nam (Khu vực Duy Xuyên, Điện Bàn)"}
						</div>
						<div className="flex flex-col sm:flex-row flex-wrap relative w-full mt-12 px-7">
							<KeyValueRender
								value={keyToValue(jobDetail?.workingForm || "Toàn thời gian")}
								title="Hình thức làm việc"
								Icon={Clock}
							/>
							<KeyValueRender
								value={jobDetail?.degree || "Đại học"}
								title="Bằng cấp"
								Icon={GraduationCap}
							/>
							<KeyValueRender
								value={keyToValue(jobDetail?.position || "Nhân viên")}
								title="Cấp bậc"
								Icon={UserRound}
							/>
							<KeyValueRender value={jobDetail?.experience} title="Kinh nghiệm" Icon={Star} />
							<KeyValueRender value={jobDetail?.salary} title="Lương" Icon={CircleDollarSign} />
							<KeyValueRender
								value={
									Array.isArray(jobDetail?.location)
										? jobDetail?.location.join(" - ")
										: jobDetail?.location
								}
								title="Địa chỉ"
								Icon={MapPin}
							/>
						</div>
						<div className="px-7">
							<div className="font-semibold text-xl mt-8">Mô tả làm việc</div>
							<div dangerouslySetInnerHTML={{ __html: jobDetail?.description || "" }} />
							{/* <div className="">
								{jobDetail?.description?.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div>

							<div className="font-semibold text-xl mt-8">Yêu cầu ứng viên</div>
							<div className="">
								{jobDetail?.requirements?.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div>
							<div className="font-semibold text-xl mt-8">Quyền lợi</div>
							<div className="">
								{jobDetail?.benefit?.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div>

							<div className="font-semibold text-xl mt-8">Địa chỉ làm việc</div>
							<div className="">
								{jobDetail?.detailLocation?.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div> */}

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
								<Label htmlFor="name" className="mr-4 min-w-16">
									Họ và tên :
								</Label>
								<Input
									id="name"
									value={data.name}
									onChange={(e) => updateFields({ name: e.target.value })}
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
								<Label htmlFor="phoneNumber" className="min-w-16 mr-4">
									SĐT
								</Label>
								<Input
									id="phoneNumber"
									type="tel"
									value={data.phoneNumber}
									onChange={(e) => updateFields({ phoneNumber: e.target.value })}
									required
								/>
							</div>

							<div className="space-y-2 flex items-center">
								<Label htmlFor="location" className="min-w-16 mr-4">
									Địa chỉ
								</Label>
								<Select
									value={data.location}
									onValueChange={(value) => updateFields({ location: value })}
								>
									<SelectTrigger id="location" className="w-full">
										<SelectValue placeholder="Chọn thành phố" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="65ebe5b0-3ba4-4a39-987c-da4aae70dc76">Hà Nội</SelectItem>
										<SelectItem value="4f0f6956-27dd-4076-9e6c-fbca2514a81e">
											Hồ Chí Minh
										</SelectItem>
										<SelectItem value="1eafc872-465b-43f5-a938-c05c5bfc01ab">Đà Nẵng</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div className="px-3 md:grid grid-cols-2 gap-10">
							<div className="mt-3 md:mt-0 md:space-y-2">
								<Label>Upload CV</Label>
								<DragDropFileUpload
									onFileUpload={handleFileUpload}
									fileCv={data.fileCv}
									setFileCv={(file) => updateFields({ fileCv: file })}
								/>
								{data.fileCv && (
									<p className="text-sm text-gray-600">File bạn đã tải lên: {data.fileCv.name}</p>
								)}
							</div>

							<div className="mt-3 md:mt-0 space-y-2">
								<Label>Vài dòng giới thiệu về bản thân với VNFITE</Label>
								<Textarea
									className="w-full"
									rows={6}
									value={data.introduction}
									onChange={(e) => updateFields({ introduction: e.target.value })}
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
