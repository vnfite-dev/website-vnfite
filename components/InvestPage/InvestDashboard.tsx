"use client";
import { useState } from "react";
import { formatVND } from "@/lib/utils";
import { Slider } from "../ui/slider";

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

	return (
		<div className="mx-auto">
			<div className="bg-grad w-full py-12 flex-col px-5 md:px-[16.7%]">
				<div className="text-center text-white font-semibold text-3xl md:text-5xl">
					Công cụ tính lãi suất mỗi tháng
				</div>

				<div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_300px] w-full text-white justify-between gap-12">
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
							max={21.6}
							onValueChange={(value) => setSliderValues({ ...sliderValues, interest: value })}
						/>
					</div>

					<div className="flex flex-col justify-between items-end">
						<p>Số tiền nhận lãi mỗi tháng</p>
						<div className="text-3xl font-bold">
							{formatVND(
								Math.round(
									((sliderValues.money[0] * sliderValues.term[0] * 30) /
										sliderValues.interest[0] /
										365) *
										0.95
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

			<div className="px-4 md:px-10 xl:px-48 mt-16 flex flex-col lg:flex-row gap-8">
				{/* Khối 1 */}
				<div className="bg-investP2P rounded-3xl bg-cover h-96 w-full flex flex-col justify-center items-center font-semibold text-3xl text-white relative overflow-hidden group aspect-square">
					{/* Dòng đầu tiên */}
					<p className="transition-transform md:absolute top-1/2 left-[40%] duration-500 group-hover:-translate-y-28">
						Đầu tư P2P
					</p>

					{/* Dòng thứ hai */}
					<div className="md:opacity-0  md:translate-y-32 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-500 w-full px-8 md:px-20">
						<ul className="text-left text-base font-normal list-disc list-inside">
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">An toàn, bảo mật cao</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
						</ul>
					</div>
				</div>

				{/* Khối 2 */}
				<div className="bg-investGroup rounded-3xl bg-cover h-96 w-full flex flex-col justify-center items-center font-semibold text-3xl text-white relative overflow-hidden group aspect-square">
					<p className="transition-transform md:absolute top-1/2 left-[40%] duration-500 group-hover:-translate-y-28">
						Đầu tư nhóm
					</p>

					<div className="md:opacity-0  md:translate-y-32 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-500 w-full px-8 md:px-20">
						<ul className="text-left text-base font-normal list-disc list-inside">
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
							<li className="mt-3">Liên kết người đầu tư với người gọi vốn nhanh nhất</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestDashboard;
