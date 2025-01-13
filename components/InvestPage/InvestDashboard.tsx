"use client";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn, formatVND } from "@/lib/utils";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { Slider } from "../ui/slider";
const investmentData = [
	{
		code: "GV001",
		productName: "Dự án Alpha",
		fundingAmount: 50000000,
		rank: "A1",
		interestRate: "8.5%",
		term: "12 tháng",
		investmentRatio: "75",
	},
	{
		code: "GV002",
		productName: "Dự án Beta",
		fundingAmount: 30000000,
		rank: "A2",
		interestRate: "7.2%",
		term: "6 tháng",
		investmentRatio: "60",
	},
	{
		code: "GV003",
		productName: "Dự án Gamma",
		fundingAmount: 40000000,
		rank: "B1",
		interestRate: "6.8%",
		term: "18 tháng",
		investmentRatio: "50",
	},
	{
		code: "GV004",
		productName: "Dự án Delta",
		fundingAmount: 25000000,
		rank: "B2",
		interestRate: "5.9%",
		term: "9 tháng",
		investmentRatio: "80",
	},
	{
		code: "GV005",
		productName: "Dự án Epsilon",
		fundingAmount: 60000000,
		rank: "C1",
		interestRate: "9.0%",
		term: "24 tháng",
		investmentRatio: "90",
	},
	{
		code: "GV006",
		productName: "Dự án Zeta",
		fundingAmount: 20000000,
		rank: "C2",
		interestRate: "4.5%",
		term: "3 tháng",
		investmentRatio: "40",
	},
	{
		code: "GV007",
		productName: "Dự án Theta",
		fundingAmount: 70000000,
		rank: "C3",
		interestRate: "3.8%",
		term: "36 tháng",
		investmentRatio: "65",
	},
];

const InvestDashboard = () => {
	const [sliderValues, setSliderValues] = useState<{
		money: number[];
		term: number[];
		interest: number[];
	}>({
		money: [500000],
		term: [12],
		interest: [8.5],
	});
	const formatRank = (rank: string) => {
		return (
			<div
				className={cn(
					"flex justify-center items-center bg-red-400 rounded-lg text-white font-semibold  py-2 w-12",
					rank.startsWith("A") ? "bg-blue-500" : rank.startsWith("B") ? "bg-[#FFBF01]" : "bg-[#794719]"
				)}
			>
				{rank}
			</div>
		);
	};
	return (
		<div className="mx-auto">
			<div className="bg-grad w-full py-12 flex-col px-[16.7%]">
				<div className="text-center text-white font-semibold text-5xl">
					Công cụ tính lãi suất mỗi tháng
				</div>

				<div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_300px] w-full text-white justify-between gap-12">
					<div className="">
						<div className="text-end">
							<p>Số tiền đầu tư</p>
							<p className="text-xl font-semibold">{formatVND(sliderValues.money[0])} VNĐ</p>
						</div>
						<Slider
							value={sliderValues.money}
							className="mt-2"
							min={500000}
							step={500_000}
							max={10_000_000_000}
							onValueChange={(value) => setSliderValues({ ...sliderValues, money: value })}
						/>
					</div>

					<div className="">
						<div className="text-end">
							<p>Số tháng đầu tư</p>
							<p className="text-xl font-semibold">{sliderValues.term[0]} Tháng</p>
						</div>
						<Slider
							value={sliderValues.term}
							className="mt-2"
							min={1}
							max={36}
							onValueChange={(value) => setSliderValues({ ...sliderValues, term: value })}
						/>
					</div>

					<div className="">
						<div className="text-end">
							<p>Lãi suất</p>
							<p className="text-xl font-semibold">{sliderValues.interest[0]} %/năm</p>
						</div>
						<Slider
							value={sliderValues.interest}
							className="mt-2"
							min={0}
							step={0.1}
							max={30}
							onValueChange={(value) => setSliderValues({ ...sliderValues, interest: value })}
						/>
					</div>

					<div className="flex flex-col justify-between items-end">
						<p>Số tiền nhận lãi mỗi tháng</p>
						<div className="text-3xl font-bold">
							{formatVND(
								Math.round(
									((sliderValues.money[0] / sliderValues.term[0]) * sliderValues.interest[0]) / 100
								)
							)}{" "}
							VNĐ
						</div>
					</div>
				</div>

				<div className="mt-12 text-sm text-center text-white">
					Lãi suất được tính bao gồm phí thu nhập cá nhân 10% lãi suất và phí trước bạn là 5%.
				</div>
			</div>

			<div className="text-center text-5xl font-semibold mt-12">
				Đầu tư cùng <span className="text-gradient">VNFITE</span>
			</div>

			<div className="px-10 lg:px-48 mt-16 flex flex-col lg:flex-row gap-8">
				{/* Khối 1 */}
				<div className="bg-investP2P rounded-3xl bg-cover h-96 w-full flex flex-col justify-center items-center font-semibold text-3xl text-white relative overflow-hidden group aspect-square">
					{/* Dòng đầu tiên */}
					<p className="transition-transform absolute top-1/2 left-[40%] duration-500 group-hover:-translate-y-28">
						Đầu tư P2P
					</p>

					{/* Dòng thứ hai */}
					<div className="opacity-0  translate-y-32 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-500 w-full px-20">
						<ul className="text-left text-base font-normal list-disc list-inside">
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
						</ul>
					</div>
				</div>

				{/* Khối 2 */}
				<div className="bg-investGroup rounded-3xl bg-cover h-96 w-full flex flex-col justify-center items-center font-semibold text-3xl text-white relative overflow-hidden group aspect-square">
					<p className="transition-transform absolute top-1/2 left-[40%] duration-500 group-hover:-translate-y-28">
						Đầu tư nhóm
					</p>

					<div className="opacity-0  translate-y-32 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-500 w-full px-20">
						<ul className="text-left text-base font-normal list-disc list-inside">
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="px-10 lg:px-48 mt-16 ">
				<Table className="min-w-[800px] overflow-scroll">
					{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
					<TableHeader>
						<TableRow className="text-base font-semibold">
							<TableHead className="w-36 text-center">Mã gọi vốn</TableHead>
							<TableHead className="text-center">Tên sản phẩm</TableHead>
							<TableHead className="text-center">Số tiền gọi vốn</TableHead>
							<TableHead className="text-center">Hạng</TableHead>
							<TableHead className="text-center">Lãi suất</TableHead>
							<TableHead className="text-center">Kỳ hạn</TableHead>
							<TableHead className="text-center">Tỉ lệ đầu tư</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{investmentData.map((data) => (
							<TableRow key={data.code} className="text-center ">
								<TableCell className="font-medium text-base">{data.code}</TableCell>
								<TableCell className="text-left pl-4 text-base">{data.productName}</TableCell>
								<TableCell className="text-base">{formatVND(data.fundingAmount) + " VNĐ"}</TableCell>
								<TableCell className="text-base flex justify-center items-center">
									{formatRank(data.rank)}
								</TableCell>
								<TableCell className="text-base">{data.interestRate + " /năm"}</TableCell>
								<TableCell className="text-base">{data.term}</TableCell>
								<TableCell className="text-base">
									<div className="flex justify-center items-center gap-3">
										<Progress value={Number(data.investmentRatio)} className="w-4/5 h-4" />
										<div className="text-center text-base">{data.investmentRatio + "%"}</div>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<Button className="btn-primary mt-12 mx-auto">
					Tải ứng dụng để thực hiện giao dịch ngay <Download />
				</Button>
			</div>
		</div>
	);
};

export default InvestDashboard;
