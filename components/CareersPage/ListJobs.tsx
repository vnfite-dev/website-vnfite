"use client";
import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { BriefcaseBusiness, MapPin, PenLine, Search } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useRouter } from "next/navigation";
import { simpleFetchFunction } from "@/lib/utils";
import { keyToValue } from "@/lib/utils";

const JobItem = ({
	name = "Frontend Developer (Fresher/Junior)",
	id = "1",
	location = "Hà Nội",
	workingForm = "Full-time",
	salary = "15,000,000 - 20,000,000 VND",
	experience = "Fresher/Junior",
	position = "Nhân viên",
	workModel = "Hybrid",
}: // setIsOpen = () => {},
{
	id?: string;
	name?: string;
	salary?: string;
	location?: string;
	workingForm?: string;
	experience?: string;
	position?: string;
	workModel?: string;
}) => {
	const router = useRouter();

	const tags = [workingForm, experience, position];
	return (
		<div
			onClick={() => router.push(`/careers/${id}`)}
			className="w-full border-t border-b border-dashed cursor-pointer border-red-400 group "
		>
			<div className="flex flex-col md:flex-row py-6 px-4 md:justify-between items-start md:items-center group-hover:bg-customPink transition-colors duration-200">
				<div className="">
					<div className="">
						<div className="text-xl font-semibold group-hover:text-gradient  transition-colors duration-200">
							{name}
						</div>
						<div className="text-sm flex gap-3 mt-2 font-normal">
							{tags.map((item, index) => (
								<div key={index} className="bg-grad p-[1px] rounded-sm">
									<div className="bg-white rounded-sm px-2 py-1 group-hover:bg-transparent">
										<span className="text-gradient group-hover:text-white">
											{keyToValue(item)}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="mt-4 flex text-gray-600 items-center group-hover:text-red-400">
						<MapPin size={20} className="mr-1 group-hover:text-red-400" />{" "}
						<span>{Array.isArray(location) ? location.join(" - ") : location}</span>{" "}
						<span className="mx-2">-</span>
						<PenLine size={20} className="mr-1" /> <span>{keyToValue(workModel)}</span>
					</div>
				</div>

				<div className="flex gap-4 text-left mt-3 md:mt-0">
					<span className=" font-medium text-base text-gray-600 group-hover:font-semibold w-fit">
						Mức lương:
					</span>
					<span className="text-gradient font-semibold group-hover:font-bold">{salary}</span>
				</div>
			</div>
		</div>
	);
};

export interface IJob {
	name: string;
	salary: string;
	location: string;
	workingForm: string;
	experience: string;
	hiringJobId: string;
	position: string;
	workModel: string;
	degree: string;
	description: string;
	locations: string[];
}

const ListJobs = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		industryType: "",
		locationId: "",
	});

	const [jobs, setJobs] = useState<IJob[]>([]);
	console.log(jobs);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const res = await simpleFetchFunction(
				`/hiring/?pageSize=&pageNumber=0&industryTyp=&name=&locationId=`
			);
			if (res) setJobs(res.data.hiringJobs.filter((job) => job.status == 0));
			else {
				setJobs([]);
			}
			setIsLoading(false);
		};

		fetchData();
	}, []);
	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setIsLoading(true);
		const res = await simpleFetchFunction(
			`/hiring/?pageSize=&pageNum=0&name=${formData.name}&industryType=${formData.industryType}&locationId=${formData.locationId}`
		);

		setJobs(res.data.hiringJobs);
		setIsLoading(false);
	}
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
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								/>
							</div>
							<div className="relative h-fit w-full">
								<BriefcaseBusiness className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 h-4 w-4" />

								<Select onValueChange={(e) => setFormData({ ...formData, industryType: e })}>
									<SelectTrigger className="pl-9 h-10 rounded-xl border border-gray-300 bg-white shadow-sm">
										<SelectValue placeholder="Ngành nghề" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{/* <SelectLabel>Fruits</SelectLabel> */}
											<SelectItem value="1">IT</SelectItem>
											<SelectItem value="2">Marketing</SelectItem>
											<SelectItem value="3">Nhân sự</SelectItem>
											<SelectItem value="4">Kinh doanh</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div className="relative h-fit w-full">
								<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 h-4 w-4" />

								<Select onValueChange={(e) => setFormData({ ...formData, locationId: e })}>
									<SelectTrigger className="pl-9 h-10 rounded-xl border border-gray-300 bg-white shadow-sm  placeholder:text-red-400">
										<SelectValue
											className="text-gray-400 data-[placeholder]:text-gray-400"
											placeholder="Vị trí"
										/>
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value="65ebe5b0-3ba4-4a39-987c-da4aae70dc76">
												Hà Nội
											</SelectItem>
											<SelectItem value="4f0f6956-27dd-4076-9e6c-fbca2514a81e">
												Hồ Chí Minh
											</SelectItem>
											<SelectItem value="1eafc872-465b-43f5-a938-c05c5bfc01ab">
												Đà Nẵng
											</SelectItem>
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
				{isLoading ? (
					<div className="w-full h-full flex justify-center items-center">
						<div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-customPink" />
					</div>
				) : jobs.length === 0 ? (
					<div className="text-center mt-6 font-semibold text-xl text-gradient">
						Hiện tại chưa có công việc nào
					</div>
				) : (
					jobs.map((item, index) => {
						return (
							<JobItem
								key={index}
								salary={item.salary}
								name={item.name}
								id={item.hiringJobId}
								location={item.location}
								workingForm={item.workingForm}
								experience={item.experience}
								workModel={item.workModel}
								position={item.position}
							/>
						);
					})
				)}
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
