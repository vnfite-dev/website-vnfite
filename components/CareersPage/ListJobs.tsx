"use client";
import { useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { BriefcaseBusiness, MapPin, PenLine, Search } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ApplicationModal } from "./ApplicationModal";
const jobList = [
	{
		title: "Frontend Developer (Fresher/Junior)",
		tags: ["Full-time", "Nhân viên"],
		range: "15,000,000 - 20,000,000 VND",
	},
	{
		title: "Backend Developer (Junior)",
		tags: ["Full-time", "Nhân viên"],
		range: "18,000,000 - 25,000,000 VND",
	},
	{
		title: "Full-stack Developer (Intern)",
		tags: ["Part-time", "Thực tập"],
		range: "5,000,000 - 8,000,000 VND",
	},
	{
		title: "UI/UX Designer",
		tags: ["Contract", "Remote"],
		range: "10,000,000 - 15,000,000 VND",
	},
	{
		title: "DevOps Engineer",
		tags: ["Full-time", "Senior"],
		range: "25,000,000 - 35,000,000 VND",
	},
];

const JobItem = ({
	title = "Frontend Developer (Fresher/Junior)",
	tags = ["Full-time", "Nhân viên"],
	range = "15,000,000 - 20,000,000 VND",
	setIsOpen = () => {},
}: {
	title?: string;
	tags?: string[];
	range?: string;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div
			onClick={() => setIsOpen(true)}
			className="w-full border-t border-b border-dashed cursor-pointer border-red-400 group "
		>
			<div className="flex py-6 px-4  justify-between items-center group-hover:bg-customPink transition-colors duration-200">
				<div>
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
					<div className="mt-4 flex text-gray-600 items-center group-hover:text-red-400">
						<MapPin size={20} className="mr-1 group-hover:text-red-400" /> <span>Hà Nội</span>{" "}
						<span className="mx-2">-</span>
						<PenLine size={20} className="mr-1" /> <span>Hybrid</span>
					</div>
				</div>

				<div className="flex gap-4 w-[30%] text-left">
					<span className="font-medium text-base text-gray-600 group-hover:font-semibold">
						Mức lương :
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
	const [isOpen, setIsOpen] = useState(false);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Submitted");
	};
	return (
		<div className="">
			<div className="w-full bg-grad p-[1.5px] rounded-xl">
				<div className="bg-white w-full h-full pb-6 rounded-[11px]">
					<div className="text-center mt-6 font-semibold text-xl">
						Cùng nhau là thành viên của <span className="text-gradient">VNFITE</span>
					</div>

					<div className="mt-8">
						<form onSubmit={handleSubmit} className=" flex gap-8 justify-between px-20">
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
											<SelectItem value="apple">Apple</SelectItem>
											<SelectItem value="banana">Banana</SelectItem>
											<SelectItem value="blueberry">Blueberry</SelectItem>
											<SelectItem value="grapes">Grapes</SelectItem>
											<SelectItem value="pineapple">Pineapple</SelectItem>
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
											<SelectItem value="apple">Apple</SelectItem>
											<SelectItem value="banana">Banana</SelectItem>
											<SelectItem value="blueberry">Blueberry</SelectItem>
											<SelectItem value="grapes">Grapes</SelectItem>
											<SelectItem value="pineapple">Pineapple</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>

							<Button className="bg-grad rounded-xl px-12">Tìm kiếm</Button>
						</form>
					</div>
				</div>
			</div>
			<div className="mt-28">
				{jobList.map((item, index) => {
					return (
						<JobItem
							key={index}
							range={item.range}
							tags={item.tags}
							title={item.title}
							setIsOpen={setIsOpen}
						/>
					);
				})}

				<ApplicationModal isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>

			<div className="mt-3 flex justify-between">
				<div className="">
					Trang <span className="text-gradient font-semibold">3</span> trên tổng số 12 trang
				</div>

				<div className="">Pagination</div>
			</div>
		</div>
	);
};

export default ListJobs;
