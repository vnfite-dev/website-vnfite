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
	CircleDollarSign,
	Clock,
	GraduationCap,
	MapPin,
	Share2,
	Star,
	UserRound,
} from "lucide-react";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DragDropFileUpload } from "./DrapDropFileUpload";
import { Textarea } from "../ui/textarea";

type ApplicationData = {
	jobId: string;
	fullName: string;
	email: string;
	phone: string;
	address: string;
	detail: string;
	cv: File | null;
};

const jobDetail = {
	title: "Chuyên viên Quan hệ Khách hàng Cá nhân - Quảng Nam (Khu vực Duy Xuyên, Điện Bàn)",
	type: "Toàn thời gian",
	position: "Nhân viên",
	salary: "12.000.000 - 15.000.000 VND",
	degree: "Đại học",
	exp: "Trên 1 năm",
	location: "Hà Nội",
	description: [
		"Xuất hóa đơn GTGT và hạch toán các nghiệp vụ liên quan đến bán hàng lên phần mềm kế toán.",
		"Tiếp nhận, kiểm tra, xem xét và hướng dẫn các đề nghị thanh toán, đề nghị tạm ứng, phiếu thanh toán công tác phí. ",
		"Kiểm tra tính đầy đủ, hợp lý, hợp lệ, hợp pháp của hóa đơn chứng từ thanh toán.",
		"Giám sát và đôn đốc CBNV quyết toán công nợ.",
		"Phối hợp với các phòng ban liên quan thực hiện đối chiếu công nợ phải thu phải trả định kỳ (6 tháng/1 năm).",
	],

	requirements: [
		"Tốt nghiệp Kế toán hoặc Tài chính doanh nghiệp ",
		"Tiếng Anh trung cấp (Yêu cầu tối thiểu: Đọc hiểu các văn bản hợp đồng tiếng Anh)",
		"Có tối thiểu 3 năm kinh nghiệm trong lĩnh vực kế toán",
		"Có khả năng làm việc độc lập; trung thực, chăm chỉ, cẩn thận, tỉ mỉ",
		"Nắm và hiểu rõ các quy định về tài chính kế toán, chính sách thuế hiện hành",
		"Có kiến thức, kinh nghiệm về các phần hành kế toán nói chung.",
	],

	benefit: [
		"Mức lương: Thỏa thuận",
		"Đóng BHXH ngay khi ký HĐLĐ chính thức, hỗ trợ ăn trưa, gửi xe, khám sức khỏe định kỳ, thưởng các dịp lễ hàng năm.",
		"Thử việc hưởng nguyên lương.",
		"Hưởng tháng lương thứ 13 và xét thưởng theo kết quả công việc định kỳ 6 tháng.",
		"Môi trường làm việc trẻ, năng động, chuyên nghiệp",
	],

	detailLocation: ["Hà Nội: Tầng 6 Tai Tam building, 39A Ngô Quyền, Hàng Bài, Phan Chu Chinh, Hoàn Kiếm"],
};

const KeyValueRender = ({ value, title, Icon }: { value: string; title: string; Icon: ElementType }) => {
	return (
		<div className="w-1/2 relative flex mt-2">
			<div className="w-2/5 text-gray-600 flex gap-2">
				{Icon && <Icon className="w-5 h-5" />}
				{title} :
			</div>
			<div className="font-semibold ">{value}</div>
		</div>
	);
};

export function ApplicationModal({ jobId }: { jobId: string }) {
	const { data, updateFields, currentStep, nextStep, prevStep } = useFormState<ApplicationData>({
		jobId: jobId,
		fullName: "",
		email: "",
		phone: "",
		address: "",
		detail: "",
		cv: null,
	});
	// const [isLoading, setIsLoading] = useState(false);

	// function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
	// 	if (e.target.files && e.target.files[0]) {
	// 		updateFields({ cv: e.target.files[0] });
	// 	}
	// }

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
						<div className="font-semibold text-2xl">{jobDetail.title}</div>
						<div className="flex flex-wrap relative w-full mt-12 px-7">
							<KeyValueRender value={jobDetail.type} title="Hình thức làm việc" Icon={Clock} />
							<KeyValueRender value={jobDetail.degree} title="Bằng cấp" Icon={GraduationCap} />
							<KeyValueRender value={jobDetail.position} title="Vị trí" Icon={UserRound} />
							<KeyValueRender value={jobDetail.exp} title="Kinh nghiệm" Icon={Star} />
							<KeyValueRender value={jobDetail.salary} title="Lương" Icon={CircleDollarSign} />
							<KeyValueRender value={jobDetail.location} title="Địa chỉ" Icon={MapPin} />
						</div>
						<div className="px-7">
							<div className="font-semibold text-xl mt-8">Mô tả làm việc</div>
							<div className="">
								{jobDetail.description.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div>

							{/* Yeu cau ung vien */}

							<div className="font-semibold text-xl mt-8">Yêu cầu ứng viên</div>
							<div className="">
								{jobDetail.requirements.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div>
							{/* Quyen loi */}
							<div className="font-semibold text-xl mt-8">Quyền lợi</div>
							<div className="">
								{jobDetail.benefit.map((item, index) => (
									<p key={index} className="text-gray-700 mt-1">
										{" "}
										- {item}
									</p>
								))}
							</div>

							{/*  */}

							<div className="font-semibold text-xl mt-8">Địa chỉ làm việc</div>
							<div className="">
								{jobDetail.detailLocation.map((item, index) => (
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
								<div className="flex gap-2 cursor-pointer items-center ">
									<Share2 color="blue" size={24} /> <p> Chia sẻ ngay</p>
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
						className="space-y-4"
					>
						<div className="grid grid-cols-2 gap-10">
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
						<div className="grid grid-cols-2 gap-10">
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

						<div className="grid grid-cols-2 gap-10">
							<div className="space-y-2">
								<Label>Upload CV</Label>
								<DragDropFileUpload onFileUpload={handleFileUpload} />
								{data.cv && <p className="text-sm text-gray-600">Selected file: {data.cv.name}</p>}
							</div>

							<div className="space-y-2">
								<Label>Vài dòng giới thiệu về bản thân với VNFITE</Label>
								<Textarea
									className="w-full"
									rows={6}
									value={data.detail}
									onChange={(e) => updateFields({ detail: e.target.value })}
								/>
							</div>
						</div>

						<div className="flex justify-between">
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
