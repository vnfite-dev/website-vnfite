import Image from "next/image";
import React from "react";

const dayList = [
	{
		title: "Giờ giải lao",
		describe: [
			"Nhân viên có thể tham gia các hoạt động giải trí tại VNFITE sau những phút giây làm việc căng thẳng",
		],
	},
	{
		title: "Hoạt động giải trí Sport",
		describe: [
			"Các câu lạc bộ game trong công ty được phát triển mạnh mẽ, tạo sân chơi hấp dẫn cho nhân viên giao lưu, thư giãn sau giờ làm việc.",
			// "Các CLB game trong công ty được phát triển mạnh mẽ, giúp gắn kết đồng nghiệp và nâng cao tinh thần đồng đội."
		],
	},

	{
		title: "Thứ 6 cuối tuần vui vẻ",
		describe: [
			"Vào ngày thứ 6 hằng tuần VNFITE liên hoan ăn uống và có những trò chơi giúp giải toả năng lượng vào cuối tuần.",
			"Có những trò chơi vui vẻ nhận các phần thưởng lớn cùng VNFITE.",
		],
	},
];
const benefitTitle = [
	"Teambuilding, Happytime",
	"Làm việc sáng tạo",
	"Tham gia các dự án lớn",
	"Phát triển bản thân tốt",
	"Hoạt động thể thao",
	"Môi trường chuyên nghiệp",
	"Chế độ lương thưởng hấp dẫn",
	"Thời gian nghỉ phép linh hoạt",
];

const Item = ({ index, title }: { index: number; title: string }) => {
	return (
		<div className="max-h-60 md:max-h-none aspect-square flex justify-center items-center rounded-3xl shadow-benefit py-6 px-4 flex-col gap-3 md:gap-10 min-w-[240px]">
			<div>
				<Image
					src={`icons/careers/b${index}.svg`}
					alt="benefit"
					width={100}
					height={100}
					className="h-14 w-14 md:h-20 md:w-20 lg:w-28 lg:h-28"
				/>
			</div>
			<div className="text-gray-600 text-xl font-semibold text-center">{title}</div>
		</div>
	);
};
const Benefits = () => {
	return (
		<div>
			<div className="text-center font-semibold text-4xl md:text-5xl md:leading-[72px]">
				Các đãi ngộ <span className="text-gradient">VNFITE</span> dành cho bạn
			</div>

			<div className="mt-8 grid w-full grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-2 md:gap-8">
				{benefitTitle.map((item, index) => (
					<div key={index + 1} className="flex justify-center">
						<Item key={index} index={index + 1} title={item} />
					</div>
				))}
			</div>

			<div className="text-center font-semibold text-3xl md:text-5xl leading-10 md:leading-[72px] mt-28">
				Cuộc sống thường ngày tại <span className="text-gradient">VNFITE</span>
			</div>

			<div className="mt-2 md:mt-8 flex flex-col md:flex-row justify-between items-start gap-6">
				<div className="w-1/2 relative md:pb-[56.25%]">
					{" "}
					{/* 16:9 = 9 / 16 = 56.25% */}
					<Image src="/images/careers/lifeInDay.png" alt="lid" fill className="object-contain" />
				</div>
				<div className="w-full md:w-1/2 flex justify-end md:pt-16 md:pl-16 px-2">
					<div className="flex flex-col gap-10">
						{dayList.map((item, index) => (
							<div key={index} className="flex flex-col gap-2">
								<div className="text-gradient font-semibold text-xl leading-10 flex gap-3">
									<Image
										src={`/icons/home/RedCheck.svg`}
										width={24}
										height={24}
										alt="check"
									/>
									{item.title}
								</div>
								<div className="flex flex-col gap-4">
									{item.describe.map((item, index) => (
										<div
											key={index}
											className="text-gray-600 text-base font-medium ml-10"
										>
											{item}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
