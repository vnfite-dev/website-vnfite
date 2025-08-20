"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const InfoBlock = ({ image, content }: { image: string; content: string }) => {
	return (
		<div className="flex justify-center">
			<div className="bg-grad rounded-3xl w-full  p-[1px] h-[252px] max-w-[292px] ">
				<div className="w-full flex flex-col justify-center items-center gap-6 bg-customPink rounded-3xl p-6 h-[250px]">
					<Image src={image} alt="image" width={100} height={100} />
					<div className="text-center text-gradient text-lg font-semibold">{content}</div>
				</div>
			</div>
		</div>
	);
};

const AnimateBlock = ({
	image = "/images/invest/office.jpg",
	content = [
		"Đến với VNFITE, bạn không chỉ là khách hàng mà còn là một nhà đầu tư thông thái, chúng tôi sẽ giúp bạn thực hiện điều đó, hãy đến với chúng tôi ngay bây giờ.",
		"Chỉ từ 500.000VNĐ, bạn đã có thể trở thành nhà đầu tư.",
		"Không yêu cầu kiến thức chuyên sâu, dễ dàng giao dịch.",
		"Đang đang ở độ tuổi nào hay bất kì ai đều có VNFITE kế bên bạn.",
	],
	title = "Hình thức đầu tư đơn giản",
	reversed = false,
}: {
	image?: string;
	content?: string[];
	title?: string;
	reversed?: boolean;
}) => {
	const blockControls = useAnimation();
	const imageControls = useAnimation();
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						blockControls.start({ scale: 1 });
						imageControls.start({ scale: 1.1 });
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
	}, [blockControls, imageControls]);

	return (
		<div className={cn("mt-20 relative w-fit")} ref={sectionRef}>
			<p
				className={cn(
					"mb-8 font-semibold text-2xl relative text-center lg:text-start",
					reversed ? "lg:left-96 xl:left-64" : "lg:left-8 xl:left-28"
				)}
			>
				{title}
			</p>
			<div className="w-fit lg:w-[680px] bg-grad relative p-8 rounded-4xl">
				<div className="text-white z-30">
					<p className="text-base">{content[0]}</p>
					<div className="mt-6 flex flex-col gap-3">
						<div className="inline-flex gap-2">
							<Image src="/icons/invest/whiteCheck.svg" alt="image" width={24} height={24} />
							<p>{content[1]}</p>
						</div>
						<div className="inline-flex gap-2">
							<Image src="/icons/invest/whiteCheck.svg" alt="image" width={24} height={24} />
							<p>{content[2]}</p>
						</div>

						<div className="inline-flex gap-2">
							<Image src="/icons/invest/whiteCheck.svg" alt="image" width={24} height={24} />
							<p>{content[3]}</p>
						</div>
					</div>
				</div>
			</div>

			<div className="hidden lg:block">
				<div
					className={cn(
						"top-1/2 -z-10 -translate-y-1/2 rounded-3xl p-[1px] :bg-grad absolute",
						reversed
							? "-translate-x-1/3 left-0 xl:-translate-x-2/3"
							: "right-0 xl:translate-x-2/3 translate-x-1/3"
					)}
				>
					<Image src={image} className="rounded-3xl" alt="image" width={547} height={411} />
				</div>
			</div>
		</div>
	);
};

const InvestInfo = () => {
	const faq = [
		{
			question: "Tôi cần chuẩn bị những gì để bắt đầu đầu tư tại VNFITE?",
			answer:
				"Bạn chỉ cần có một tài khoản tại VNFITE và sẵn sàng với một số vốn nhỏ ban đầu để bắt đầu đầu tư.",
		},
		{
			question: "VNFITE phù hợp với những ai?",
			answer:
				"VNFITE phù hợp với tất cả những người muốn đầu tư an toàn, từ người mới bắt đầu đến các nhà đầu tư có kinh nghiệm.",
		},
		{
			question: "Lợi nhuận đầu tư được tính như thế nào?",
			answer:
				"Lợi nhuận được tính dựa trên hiệu suất của khoản đầu tư và được thông báo rõ ràng trong từng sản phẩm đầu tư của bạn.",
		},
		{
			question: "Đầu tư qua VNFITE có an toàn không?",
			answer:
				"VNFITE cam kết bảo mật thông tin và tuân thủ các quy định tài chính để đảm bảo an toàn cho nhà đầu tư.",
		},
		{
			question: "Tôi có thể rút vốn trước hạn không?",
			answer:
				"Bạn có thể rút vốn trước hạn trong một số sản phẩm đầu tư, nhưng có thể áp dụng phí rút sớm tùy thuộc vào điều kiện của sản phẩm.",
		},
		{
			question: "VNFITE hỗ trợ những phương thức thanh toán nào?",
			answer:
				"VNFITE hỗ trợ các phương thức thanh toán phổ biến như chuyển khoản ngân hàng và thanh toán qua ví điện tử.",
		},
		{
			question: "Làm cách nào để theo dõi hiệu suất đầu tư của tôi?",
			answer:
				"Bạn có thể theo dõi hiệu suất đầu tư chi tiết thông qua bảng điều khiển trên ứng dụng hoặc website VNFITE.",
		},
		{
			question: "Tôi có thể liên hệ hỗ trợ khách hàng của VNFITE bằng cách nào?",
			answer:
				"Bạn có thể liên hệ với VNFITE qua email, hotline hoặc live chat trên website chính thức của chúng tôi.",
		},
	];

	return (
		<div>
			<div className="bg-investMidBanner w-full h-fit bg-cover pb-12">
				<div className="text-center text-white text-4xl md:text-5xl font-semibold pt-6">
					Lợi ích khi đầu tư vào <span className="text-gradient">VNFITE</span>
				</div>
				<div className="mt-8 md:mt-24 px-[10%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8">
					<InfoBlock image="/icons/invest/infoblock1.svg" content="Lãi suất cao, đầu tư nhanh chóng" />
					<InfoBlock
						image="/icons/invest/infoblock2.svg"
						content="Phù hợp với toàn bộ khách hàng tại VNFITE"
					/>
					<InfoBlock image="/icons/invest/infoblock3.svg" content="An toàn, bảo mật cao" />
					<InfoBlock image="/icons/invest/infoblock4.svg" content="Đa dạng sản phẩm đầu tư" />
				</div>
			</div>

			<div className="mt-12 md:mt-28 py-10 px-2 xl:px-[14%] 2xl:px-[16.7%]">
				<div className="text-5xl font-semibold text-center">
					Vì sao bạn nên đầu tư vào <span className="text-gradient">VNFITE</span>
				</div>

				<div className="flex flex-col lg:gap-44 md:px-10">
					<AnimateBlock image="/images/invest/ablock11.png" />
					{/* <AnimateBlock /> */}
					<div className="md:self-end">
						<AnimateBlock
							image="/images/invest/ablock22.png"
							reversed={true}
							title="An toàn, nhanh chóng"
							content={[
								"Tại VNFITE, mỗi nhân viên đều được đảm bảo môi trường làm việc lý tưởng cùng với chế độ đãi ngộ toàn diện, giúp nhân viên phát triển sự nghiệp bền vững trong công việc.",
								"Các khoản Gọi vốn được thẩm định ký lưỡng.",
								"Chủ gọi vốn phải đủ thủ tục về mặt chính sách như mua bảo hiểm trước khi gọi vốn, không nợ xấu",
								"Với lượng khách hàng lớn mạnh và cộng đồng rộng rãi giúp cho các khoản đầu được được giải ngân nhanh hơn.",
							]}
						/>
					</div>

					<AnimateBlock
						image="/images/invest/ablock33.png"
						title="Hiệu quả & An toàn đầu tư"
						content={[
							"Đến với VNFITE, bạn không chỉ tìm thấy một công việc, mà còn là một cộng đồng gắn kết, cùng nhau chinh phục những thử thách và tạo nên giá trị bền vững. ",
							"Lãi suất lên đến 20%/năm",
							"Nhà đầu tư có thể chuyển nhượng sản phẩm đầu tư bất cứ khi nào.",
							"Sản phẩm đầu tư đa dạng.",
						]}
					/>
				</div>

				<div className="mt-12 lg:mt-40  flex items-center">
					<div className="hidden lg:block gradient-line w-full max-h-[3px] overflow-hidden"></div>
					<div className="w-full text-gradient overflow-visible text-center lg:min-w-[480px] px-2 text-xl font-semibold">
						Hãy là một nhà đầu tư lớn VNFITE ngay hôm nay
					</div>
					<div className="hidden lg:block gradient-line-reversed w-full max-h-[3px] overflow-hidden"></div>
				</div>

				<div className="text-center mt-28 text-4xl md:text-5xl font-semibold">
					Bạn hỏi <span className="text-gradient">VNFITE</span> trả lời
				</div>
				<Accordion type="single" collapsible className="mt-4 md:mt-16">
					{faq.map((item, index) => (
						<AccordionItem value={`value-${index}`} key={index}>
							<AccordionTrigger className="text-xl font-medium">{item.question}</AccordionTrigger>
							<AccordionContent className="pl-4 text-gray-700">{item.answer}</AccordionContent>
						</AccordionItem>
					))}
					{/* <AccordionItem value="item-1">
						<AccordionTrigger className="text-xl font-medium">
							1. Khách hàng gọi vốn đạt yêu cầu?
						</AccordionTrigger>
						<AccordionContent className="pl-4 text-gray-700"></AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2 font-sfpro">
						<AccordionTrigger className="text-xl font-medium">2. Hồ sơ yêu cầu</AccordionTrigger>
						<AccordionContent className="pl-4 text-gray-700">
							1. Chứng minh nhân dân/ Thẻ căn cước công dân người gọi vốn.
							<br />
							2. Số điện thoại cá nhân.
							<br />
							3. Số điện thoại tham chiếu: 03 người thân là bố mẹ hoặc anh chị em ruột hoặc vợ chồng và
							01 số điện thoại là bạn bè hoặc đồng nghiệp.
							<hr />
							4. Cho phép VNFITE truy cập mạng xã hội của khách hàng vay như zalo, facebook.
							<br />
							5. Chứng từ chứng minh nguồn thu nhập: -Nguồn thu nhập từ lương:
							<div className="pl-3">
								- Hợp đồng lao động/ quyết định bổ nhiệm, thẻ bảo hiểm y tế, sao kê tài khoản nhận
								lương hoặc xác nhận thu nhập 3 tháng gần nhất.
								<br />
								- Nguồn thu nhập từ việc cho thuê tài sản: Chứng từ chứng minh sở hữu tài sản ( Sổ đỏ,
								đăng ký xe…), hợp đồng cho thuê tài sản, sao kê tài khoản có đóng dấu ngân hàng/ phiếu
								thu chi tiền mặt 03 tháng gần nhất.
								<br />
								-Đối với các nguồn thu khác: Sẽ do Giám đốc Khối duyệt xem xét chấp nhận nguồn thu hợp
								lý.
							</div>
						</AccordionContent>
					</AccordionItem> */}
				</Accordion>
			</div>
		</div>
	);
};

export default InvestInfo;
