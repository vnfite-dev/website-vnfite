'use client';

import Image from "next/image";
import { Clock, Share2 } from "lucide-react";
import React from "react";
import { detailNews } from "../data";
import { useParams, useRouter } from "next/navigation";

const SuggestedNew = ({
	image = "/images/news/suggestedNew.jpg",
	title = "P2P Lending hút nhà đầu tư thời công nghệ 4.0",
	time = "17:30 - 26/12/2024",
	id = 1,
}: {
	image?: string;
	title?: string;
	time?: string;
	id?: number;
}) => {
	const router = useRouter();

	const navigateToDetail = (id: number) => {
		router.push(`/news/${id}`);
	};

	return (
		<div className="flex gap-4 border-b border-b-[#E6E6E6] pb-4 cursor-pointer" onClick={() => navigateToDetail(id)}>
			<div className="w-20 h-20 min-w-20 min-h-20 overflow-hidden relative rounded-lg">
				<Image src={image} alt="Ảnh tin tức" objectFit="cover" layout="fill" className="" />
			</div>
			<div className="">
				<div className="font-medium text-base">{title}</div>
				<div className="flex justify-start items-center gap-2 text-[12px] mt-1">
					<Clock size={14} />
					{time}
				</div>
			</div>
		</div>
	);
};

const NewsDetail = () => {
	const { id } = useParams();

	console.log(id);
	if (!id || id.length === 0) {
		// Xử lý khi id không tồn tại hoặc không hợp lệ
		return <div>Error: Invalid ID</div>;
	}

	const news = detailNews.find((_) => _.id === Number(id[0]));

	const formattedDetail = news?.detail.split('\n').map((line, index) => (
		<span key={index}>{line}<br /></span>
	));

	return (
		<div className="px-[8%] lg:px-[6%] xl:px-[10%] 2xl:px-[16.7%] my-28 flex flex-col lg:flex-row">
			<div className="font-semibold text-2xl lg:pr-10 xl:pr-14 w-full lg:w-[70%] 2xl:w-[65%]">
				{news?.title}
				<div className="flex gap-12 mt-4 items-center text-sm">
					<div className="flex items-center gap-3">
						<Clock />
						<p className="text-gray-600">{news?.time}</p>
					</div>

					<div className="flex gap-3 items-center">
						<Share2 />
						<p>Chia sẻ</p>
					</div>
				</div>
				<div className="w-full mt-6 mx-auto">
					<Image
						src={news?.image ?? ''}
						alt="rich"
						width={764}
						height={573}
					/>
				</div>
				<div className="mt-4 text-base font-medium text-gray-700">
					{formattedDetail || `Ngày 6/11 vừa qua, tại Cung Trí Thức, Thành phố Hà Nội, Câu Lạc Bộ Doanh Nhân Việt Nam - Asean
					Global đã tổ chức lễ bổ nhiệm các lãnh đạo mới và công bố kế hoạch xúc tiến thương mại tại Úc
					vào năm 2025. Buổi lễ đã thu hút sự tham gia của đông đảo doanh nhân, các lãnh đạo CLB, cùng
					nhiều khách mời, trong đó có ông Nguyễn Ngọc Quang, Chủ tịch Hiệp hội Doanh nghiệp Nhỏ và Vừa
					Ngành Nghề Nông Thôn Việt Nam (Varisme), và ông Đặng Đình Đức, Trưởng Ban Kinh Tế của Varisme.
					Trong buổi lễ, Th.S Nguyễn Ngân, Chủ tịch CLB Doanh Nhân Việt Nam - Asean Global, đã chính thức
					tuyên bố các quyết định bổ nhiệm lãnh đạo mới của CLB, nhằm tạo ra một đội ngũ điều hành mạnh
					mẽ và đoàn kết hơn, tiếp tục dẫn dắt CLB phát triển vững mạnh. Cùng với đó, bà Nguyễn Ngân đã
					trình bày chi tiết về kế hoạch xúc tiến thương mại tại Úc vào năm 2025, đánh dấu một bước ngoặt
					quan trọng trong chiến lược quốc tế hóa và kết nối doanh nghiệp Việt Nam với thị trường toàn
					cầu. Phát biểu tại sự kiện, ông Nguyễn Ngọc Quang, Chủ tịch Varisme, đã ghi nhận và đánh giá
					cao những đóng góp thiết thực của Câu Lạc Bộ Doanh Nhân Việt Nam - Asean Global vào nền kinh tế
					Việt Nam, đồng thời bày tỏ sự hỗ trợ mạnh mẽ của Hiệp hội Doanh nghiệp Nhỏ và Vừa Ngành Nghề
					Nông Thôn trong việc thúc đẩy các chương trình xúc tiến thương mại quốc tế. Ông nhấn mạnh rằng,
					dù Việt Nam hiện có rất nhiều sản phẩm chất lượng và phù hợp với nhu cầu của thị trường quốc
					tế, nhưng chưa được quảng bá và xuất khẩu rộng rãi. Vì vậy, việc Câu Lạc Bộ triển khai chương
					trình xúc tiến thương mại tại Úc và các thị trường quốc tế khác sẽ góp phần quan trọng vào việc
					nâng cao giá trị thương hiệu Việt Nam. Chương trình cũng chứng kiến sự chia sẻ của nhiều doanh
					nhân, đại diện cho các doanh nghiệp hoạt động trong các lĩnh vực khác nhau, cùng với mong muốn
					chung tay thúc đẩy sự phát triển bền vững, đồng thời thể hiện sự tin tưởng vào định hướng và sự
					lãnh đạo của CLB trong các hoạt động xúc tiến thương mại quốc tế sắp tới. VNFITE xin gửi lời
					chúc mừng chân thành đến Câu Lạc Bộ Doanh Nhân Việt Nam - Asean Global và Ban Lãnh Đạo của CLB.
					Chúng tôi tin rằng với sự nhiệt huyết và cam kết của các thành viên, CLB sẽ tiếp tục gặt hái
					nhiều thành công trong các hoạt động xúc tiến thương mại, đưa sản phẩm Việt Nam ra thế giới và
					tạo ra những cơ hội mới cho cộng đồng doanh nhân Việt Nam. Một số hình ảnh tại buổi lễ:`}
				</div>
				<div className="w-full h-auto relative mt-6">
					<Image
						// width={764}
						// height={573}
						fill
						src={"/images/news/newDetail.png"}
						className="object-cover"
						alt="news"
					/>
				</div>
			</div>

			{/* LEFT BAR */}
			<div className="w-full lg:w-[30%] 2xl:w-[35%]">
				<div className="text-2xl font-semibold text-center">Tin tức liên quan</div>

				<div className="mt-4 lg:mt-12 space-y-4 lg:border-l-2 lg:border-gray-300 lg:pl-12 xl:pl-16">
					{detailNews.slice(1, 5).map((news, index) => (<SuggestedNew key={index} {...news} />))}
				</div>
			</div>
		</div>
	);
};

export default NewsDetail;
