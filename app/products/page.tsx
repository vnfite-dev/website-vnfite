import ContactBox from "@/components/molecules/ContactBox";
import ListProducts from "@/components/ProductsPage/ListProducts";
import Image from "next/image";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const ProductPage = () => {
	return (
		<div className="relative font-sfpro">
			<div className="mt-20 lg:mt-40">
				<ListProducts />
			</div>

			<div className="hidden px-[16.7%] lg:flex justify-center lg:mt-20 relative">
				<Image src={"/images/products/banner-mid.png"} alt="banner" width={2000} height={400} />
			</div>

			<div className="px-8 sm:px-[12%] lg:px-[16.7%] flex mt-10 lg:mt-20 banner gap-28">
				<div className="w-full lg:w-2/3">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-xl font-medium">
								1. Khách hàng gọi vốn đạt yêu cầu?
							</AccordionTrigger>
							<AccordionContent className="pl-4 text-gray-700">
								1. Công dân Việt Nam từ 18 đến 60 tuổi.
								<br />
								2. Là Sỹ quan, chiến sĩ/ bộ đội đang công tác trong các đơn vị/ cơ quan thuộc Bộ Quốc
								Phòng.
								<br />
								3.Địa chỉ cư trú tại các tỉnh thành do VNFITE quy định trong từng thời kỳ.
								<br />
								4. Điểm Xếp hạng tín nhiệm khách hàng (Scoring): Theo tiêu chí của Mobiphone và các
								đối tác liên quan và theo quy định của VNFITE trong từng thời kỳ. Số điểm Scoring tối
								thiểu từ 450 điểm trở lên.
								<br />
								5. Khách hàng có nguồn thu nhập để trả nợ tối thiểu bình quân 03 tháng gần nhất ≥ 7
								triệu đồng/tháng.Nguồn trả nợ được tính bằng 40% nguồn thu nhập chứng minh được.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger className="text-xl font-medium">2. Hồ sơ yêu cầu</AccordionTrigger>
							<AccordionContent className="pl-4 text-gray-700">
								1. Chứng minh nhân dân/ Thẻ căn cước công dân người gọi vốn.
								<br />
								2. Số điện thoại cá nhân.
								<br />
								3. Số điện thoại tham chiếu: 03 người thân là bố mẹ hoặc anh chị em ruột hoặc vợ chồng
								và 01 số điện thoại là bạn bè hoặc đồng nghiệp.
								<hr />
								4. Cho phép VNFITE truy cập mạng xã hội của khách hàng vay như zalo, facebook.
								<br />
								5. Chứng từ chứng minh nguồn thu nhập: -Nguồn thu nhập từ lương:
								<div className="pl-3">
									- Hợp đồng lao động/ quyết định bổ nhiệm, thẻ bảo hiểm y tế, sao kê tài khoản nhận
									lương hoặc xác nhận thu nhập 3 tháng gần nhất.
									<br />
									- Nguồn thu nhập từ việc cho thuê tài sản: Chứng từ chứng minh sở hữu tài sản ( Sổ
									đỏ, đăng ký xe…), hợp đồng cho thuê tài sản, sao kê tài khoản có đóng dấu ngân
									hàng/ phiếu thu chi tiền mặt 03 tháng gần nhất.
									<br />
									-Đối với các nguồn thu khác: Sẽ do Giám đốc Khối duyệt xem xét chấp nhận nguồn thu
									hợp lý.
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className="hidden lg:flex w-1/3">
					<div className="w-full">
						<Image src={"/images/products/question.png"} alt="banner" width={431} height={317} />
					</div>
				</div>
			</div>

			<div className="relative rounded-4xl mt-12 lg:mt-32">
				<ContactBox />
			</div>
		</div>
	);
};

export default ProductPage;
