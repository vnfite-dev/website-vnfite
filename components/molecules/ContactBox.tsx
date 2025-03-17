"use client";
import { useState } from "react";

import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ArrowRight, Mail, Phone, User } from "lucide-react";
import { WebUtils } from "@/lib/utils";

const ContactBox = () => {
	const [showSuccessDialog, setShowSuccessDialog] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		phoneNumber: "",
		email: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch(`${WebUtils.envMode.baseURL}/consultation/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					transactionId: "QUANGDEPTRAI",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Failed to submit form");
			}
			setShowSuccessDialog(true);
		} catch (error) {
			console.error("Error submitting form:", error);
			setFormData({
				fullName: "",
				phoneNumber: "",
				email: "",
			});
		}
	};
	return (
		<>
			<div id="contactbox" className="w-full px-1 md:px-[6.25%]">
				{/* <div className="bg-customPink py-20 px-[11.3%] lg:flex lg:justify-between gap-20 rounded-4xl">
					<div className="mt-16 w-60 h-60 md:w-80 md:h-80 lg:w-[438px] lg:h-[438px] aspect-square mx-auto relative"> */}
				<div className="bg-customPink py-8 md:py-20 px-4 md:px-[11.3%] flex justify-between gap-20 rounded-4xl">
					<div className="hidden lg:block mt-16 w-[438px] h-[438px] aspect-square relative ">
						<Image
							className="object-cover w-auto h-full rounded-3xl"
							src="/images/home/contact1.png"
							alt="icon"
							fill
						/>
					</div>

					<div className="max-w-[750px]">
						<div className="relative z-10 text-center">
							<p className="text-gradient text-base green-underline">Thông tin nhận tư vấn</p>
						</div>
						<div className="text-4xl font-semibold lg:text-5xl lg:leading-[70px] mt-3">
							Bạn đang quan tâm đến sản phẩm của{" "}
							<span className="text-gradient font-semibold ">VNFITE</span>
						</div>
						<div className="mt-3">
							Hãy để lại thông tin của bạn để chúng tôi có thể tư vấn một cách chính xác nhất.
						</div>

						<div className="mt-8 ">
							<form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-6">
								<div className="relative">
									<User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
									<div className="absolute left-12 top-1/2 -translate-y-1/2 w-[1px] h-5 bg-gray-100"></div>
									<Input
										type="text"
										placeholder="Họ và tên"
										className="pl-14 h-12 rounded-xl border-0 bg-white shadow-sm"
										value={formData.fullName}
										onChange={(e) =>
											setFormData({ ...formData, fullName: e.target.value })
										}
									/>
								</div>
								<div className="relative">
									<Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
									<div className="absolute left-12 top-1/2 -translate-y-1/2 w-[1px] h-5 bg-gray-100"></div>

									<Input
										type="tel"
										placeholder="Số điện thoại"
										className="pl-14 h-12 rounded-xl border-0 bg-white shadow-sm"
										value={formData.phoneNumber}
										onChange={(e) =>
											setFormData({ ...formData, phoneNumber: e.target.value })
										}
									/>
								</div>
								<div className="relative">
									<Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
									<div className="absolute left-12 top-1/2 -translate-y-1/2 w-[1px] h-5 bg-gray-100"></div>

									<Input
										type="email"
										placeholder="Email"
										className="pl-14 h-12 rounded-xl border-0 bg-white shadow-sm"
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									/>
								</div>
								<Button
									type="submit"
									className="w-full h-12 rounded-full btn-primary hover:from-red-500 hover:to-red-400 text-white font-medium text-lg"
								>
									Đăng kí tư vấn ngay!
									<ArrowRight className="" strokeWidth="4px" />
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
				<DialogContent className="min-h-[200px]">
					<DialogHeader>
						<DialogTitle className="text-gradient text-3xl font-semibold text-center">
							Đăng ký tư vấn thành công!
						</DialogTitle>
					</DialogHeader>
					<p className="text-center">
						Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
					</p>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ContactBox;
