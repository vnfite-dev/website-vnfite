"use client";
import { useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { BriefcaseBusiness, MapPin, PenLine, Search } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useRouter } from "next/navigation";
import { jobList } from "@/app/news/data";

const JobItem = ({
	title = "Frontend Developer (Fresher/Junior)",
	id = 1,
	tags = ["Full-time", "Nhân viên"],
	range = "15,000,000 - 20,000,000 VND",
}: // setIsOpen = () => {},
{
	id?: number;
	title?: string;
	tags?: string[];
	range?: string;
}) => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push(`/careers/${id}`)}
			className="w-full border-t border-b border-dashed cursor-pointer border-red-400 group "
		>
			<div className="flex flex-col md:flex-row py-6 px-4 md:justify-between items-start md:items-center group-hover:bg-customPink transition-colors duration-200">
				<div className="">
					<div className="">
						<div className="text-xl font-semibold group-hover:text-gradient  transition-colors duration-200">
							{title}
						</div>
						<div className="text-sm flex gap-3 mt-2 font-normal">
							{tags.map((item, index) => (
								<div key={index} className="bg-grad p-[1px] rounded-sm">
									<div className="bg-white rounded-sm px-2 py-1 group-hover:bg-transparent">
										<span className="text-gradient group-hover:text-white">{item}</span>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="mt-4 flex text-gray-600 items-center group-hover:text-red-400">
						<MapPin size={20} className="mr-1 group-hover:text-red-400" /> <span>Hà Nội</span>{" "}
						<span className="mx-2">-</span>
						<PenLine size={20} className="mr-1" /> <span>Hybrid</span>
					</div>
				</div>

				<div className="flex gap-4 text-left mt-3 md:mt-0">
					<span className=" font-medium text-base text-gray-600 group-hover:font-semibold w-fit">
						Mức lương:
					</span>
					<span className="text-gradient font-semibold group-hover:font-bold">{range}</span>
				</div>
			</div>
		</div>
	);
};

const ListJobs = () => {
	const [formData, setFormData] = useState({
		query: "",
		field: "",
		location: "",
	});
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Submitted");
	};
	return (
		<div className="">
			<div className="w-full bg-grad p-[1.5px] rounded-xl transform -translate-y-1/2">
				<div className="bg-white w-full h-full pb-6 rounded-[11px]">
					<div className="text-center mt-6 font-semibold text-xl">
						Cùng nhau là thành viên của <span className="text-gradient">VNFITE</span>
					</div>

					<div className="mt-8">
						<form
							onSubmit={handleSubmit}
							className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 justify-center lg:justify-between px-4 lg:px-20"
						>
							<div className="relative h-fit w-full">
								<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 h-4 w-4" />
								<Input
									type="text"
									placeholder="Tìm kiếm"
									className="pl-9 h-10 rounded-xl border border-gray-300 bg-white shadow-sm"
									value={formData.query}
									onChange={(e) => setFormData({ ...formData, query: e.target.value })}
								/>
							</div>
							<div className="relative h-fit w-full">
								<BriefcaseBusiness className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 h-4 w-4" />

								<Select>
									<SelectTrigger className="pl-9 h-10 rounded-xl border border-gray-300 bg-white shadow-sm">
										<SelectValue placeholder="Ngành nghề" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{/* <SelectLabel>Fruits</SelectLabel> */}
											<SelectItem value="apple">Technology</SelectItem>
											<SelectItem value="banana">Marketing</SelectItem>
											<SelectItem value="blueberry">Sale</SelectItem>
											<SelectItem value="grapes">Back Office</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div className="relative h-fit w-full">
								<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 h-4 w-4" />

								<Select>
									<SelectTrigger className="pl-9 h-10 rounded-xl border border-gray-300 bg-white shadow-sm  placeholder:text-red-400">
										<SelectValue
											className="text-gray-400 data-[placeholder]:text-gray-400"
											placeholder="Vị trí"
										/>
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value="HANOI">Hà Nội</SelectItem>
											<SelectItem value="SAIGON">Sài Gòn</SelectItem>
											<SelectItem value="DANANG">Đà Nẵng</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>

							<Button className="btn-primary !h-10 !rounded-xl px-12 col-span-1 md:col-span-3 lg:col-span-1">
								Tìm kiếm
							</Button>
						</form>
					</div>
				</div>
			</div>
			<div className="-mt-10 lg:mt-12">
				{jobList.map((item, index) => {
					return (
						<JobItem
							key={index}
							range={item.range}
							tags={item.tags}
							title={item.shortTitle}
							id={item.id}
						/>
					);
				})}
			</div>
			{/* 
			<div className="mt-3 flex justify-between">
				<div className="">
					Trang <span className="text-gradient font-semibold">3</span> trên tổng số 12 trang
				</div>

				<div className="">Pagination</div>
			</div> */}
		</div>
	);
};

export default ListJobs;
