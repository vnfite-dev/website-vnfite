import { simpleFetchFunction, cn, formatVND, WebUtils } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "../ui/progress";
import Image from "next/image";
import DownloadButton from "../molecules/DownloadButton";
export default async function InvestTable() {
	const data = await simpleFetchFunction("/user-loan/get-all-user-loan?sortBy=0");

	if (data.result.isOk === false) {
		return <></>;
	}

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
		<div>
			{/* {data.data?.map((item: { packageName: string }, index: number) => (
				<div key={index} className="w-full bg-white rounded-xl p-6 shadow-sm">
				<div className="text-center mt-6 font-semibold text-xl">{item.packageName}</div>
				</div>
			))} */}

			{/* PC DASHbOARD */}
			<div className="hidden lg:block px-10 xl:px-48 mt-16 ">
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
						{
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							data.data.slice(0, 10).map((data: any) => {
								const randomRate = Math.floor(Math.random() * 1900) + 8000;

								return (
									<TableRow key={data.loanCode} className="text-center ">
										<TableCell className="font-medium text-base">
											{data.loanCode || "VNF00101                                         "}
										</TableCell>
										<TableCell className="text-left pl-10 text-base">{data.packageName}</TableCell>
										<TableCell className="text-base">{formatVND(data.amount) + " VNĐ"}</TableCell>
										<TableCell className="text-base flex justify-center items-center">
											{formatRank(data.creditClass)}
										</TableCell>
										<TableCell className="text-base">{data.interestRate + " /năm"}</TableCell>
										<TableCell className="text-base">{data.period} tháng</TableCell>
										<TableCell className="text-base">
											<div className="flex justify-center items-center gap-3">
												<Progress
													value={Math.floor(Number(randomRate / 100))}
													className="w-4/5 h-4"
												/>
												<div className="text-center text-base">
													{/* {Number(data.moneyInvested / data.amount).toFixed(2) + "%"} */}
													{Number(randomRate / 100).toFixed(2) + "%"}
												</div>
											</div>
										</TableCell>
									</TableRow>
								)
							})
						}
					</TableBody>
				</Table>

				<DownloadButton>
					Tải ứng dụng <span className="hidden sm:inline">để thực hiện giao dịch ngay</span>
				</DownloadButton>
			</div>

			{/* MOBILE DASHbOARD */}

			<div className="lg:hidden flex flex-col gap-3 mx-4 mt-6">
				{
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					data.data?.slice(0, 7).map((item: any, index: number) => (
						<div key={index} className="shadow-md flex justify-between items-center p-2 rounded-xl">
							<div className="flex items-center gap-1">
								<div className="">
									<Image
										src={WebUtils.envMode.imageServer + item.loanPackageImg}
										alt="image"
										width={50}
										height={50}
									/>
								</div>
								<div className="">
									<div className="font-semibold text-[13px]">{item.packageName}</div>
									<div className="text-[11px] text-gray-400 mt-0.5">
										{item.createDate.replace(".0", "")}
									</div>
									<div className="text-[11px]  mt-0.5">
										Lãi suất:
										<span className="text-[#4FAE3F] mx-1">{item.interestRate}%/năm</span>
										<span
											className={cn(
												"font-semibold",
												item.creditClass[0] == "A"
													? "text-[#3390FE]"
													: item.creditClass[0] == "B"
													? "text-[#FFBF01]"
													: "text-[#794719]"
											)}
										>
											({item.creditClass})
										</span>
									</div>
								</div>
							</div>

							<div className="">
								<div
									className={cn(
										"font-bold text-[13px] text-center",
										item.creditClass[0] == "A"
											? "text-[#3390FE]"
											: item.creditClass[0] == "B"
											? "text-[#FFBF01]"
											: "text-[#794719]"
									)}
								>
									{formatVND(item.amount)} VNĐ
								</div>
								<div className="text-[11px] mt-1 text-gray-600 font-semibold text-center">
									Kỳ hạn: {item.period} tháng
								</div>
								<div className="">
									<Progress
										value={Number(data.moneyInvested / data.amount)}
										className={cn("w-full h-[2px] mt-1 ")}
									/>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
}
