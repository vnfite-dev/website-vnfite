"use client";
import { useState } from "react";

import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight, Mail, Phone, User } from "lucide-react";
const ContactBox = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);
	};
	return (
		<div className="w-full px-[6.25%]">
			<div className="bg-customPink py-20 px-[11.3%] flex justify-between gap-20">
				<div className="mt-16 w-[438px] h-[438px] aspect-square relative">
					<Image className="object-cover w-auto h-full" src="/images/home/contact.png" alt="icon" fill />
				</div>

				<div className="max-w-[750px]">
					<div className="relative z-10 text-center">
						<p className="text-gradient text-base green-underline">Thông tin nhận tư vấn</p>
					</div>
					<div className="text-5xl leading-[70px] mt-3">
						Bạn đang quan tâm đến sản phẩm của{" "}
						<span className="text-gradient font-semibold ">VNFITE</span>.
					</div>
					<div className="">
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
									className="pl-14 h-12 rounded-full border-0 bg-white shadow-sm"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								/>
							</div>
							<div className="relative">
								<Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
								<div className="absolute left-12 top-1/2 -translate-y-1/2 w-[1px] h-5 bg-gray-100"></div>

								<Input
									type="tel"
									placeholder="Số điện thoại"
									className="pl-14 h-12 rounded-full border-0 bg-white shadow-sm"
									value={formData.phone}
									onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
								/>
							</div>
							<div className="relative">
								<Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
								<div className="absolute left-12 top-1/2 -translate-y-1/2 w-[1px] h-5 bg-gray-100"></div>

								<Input
									type="email"
									placeholder="Email"
									className="pl-14 h-12 rounded-full border-0 bg-white shadow-sm"
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
	);
};

export default ContactBox;
