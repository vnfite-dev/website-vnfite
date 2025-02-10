import Image from "next/image";
import { Clock, Share2 } from "lucide-react";
import React from "react";
import { detailNews } from "../data";
// import { useParams, useRouter } from "next/navigation";
import { simpleFetchFunction } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";

const fetchNewsData = async () => {
	const data = await simpleFetchFunction(
		`/get-news?pageSize=10&pageNumber=0&type=1`
	);
	return data.data;
};

const formatDate = (isoString: string | number | Date) => {
	return new Date(isoString).toLocaleDateString("vi-VN");
};

const SuggestedNew = ({
	urlImage = "/images/news/suggestedNew.jpg",
	mainTitle,
	createdDate,
	id,
}: {
	urlImage?: string;
	mainTitle?: string;
	createdDate?: string;
	id?: string;
}) => {

	return (
		<Link className="flex gap-4 border-b border-b-[#E6E6E6] pb-4 cursor-pointer"
			href={`/news/${id}`}
		>
			<div className="w-20 h-20 min-w-20 min-h-20 overflow-hidden relative rounded-lg">
				<Image
					src={urlImage || '/images/news/suggestedNew.jpg'}
					alt="Ảnh tin tức"
					objectFit="cover"
					layout="fill"
					className=""
				/>
			</div>
			<div className="">
				<div className="font-medium text-base">{mainTitle}</div>
				<div className="flex justify-start items-center gap-2 text-[12px] mt-1">
					<Clock size={14} />
					{formatDate(createdDate || '')}
				</div>
			</div>
		</Link>
	);
};

const NewsDetail = async ({ params }: { params: { id: string[] } }) => {
	// Đảm bảo params được awaited
	if (!params?.id?.[0]) {
		return notFound();
	}

	const newsData = await fetchNewsData();
	const newsList = [...(newsData?.data ?? []), ...detailNews];

	const id = params.id[0];
	const news = newsList.find((_: { id: string }) => _.id === id);
	if (!news) {
		return notFound();
	}

	const formattedDetail = (detail: string | undefined) => {
		if (!detail) return null; // Nếu không có dữ liệu, trả về null tránh lỗi
		return detail.split('\n').map((line, index) => (
			<span key={index}>{line}<br /></span>
		));
	};

	return (
		<div className="px-[8%] lg:px-[6%] xl:px-[10%] 2xl:px-[16.7%] my-28 flex flex-col lg:flex-row">
			<div className="font-semibold text-2xl lg:pr-10 xl:pr-14 w-full lg:w-[70%] 2xl:w-[65%]">
				{news?.mainTitle}
				<div className="flex gap-12 mt-4 items-center text-sm">
					<div className="flex items-center gap-3">
						<Clock />
						<p className="text-gray-600">{formatDate(news?.createdDate)}</p>
					</div>

					<div className="flex gap-3 items-center">
						<Share2 />
						<p>Chia sẻ</p>
					</div>
				</div>
				<div className="w-full mt-6 mx-auto">
					<Image
						src={news?.urlImage || "/images/news/suggestedNew.jpg"}
						alt="rich"
						width={764}
						height={573}
					/>
				</div>
				{
					news?.content.includes("<p>") ?
						(<div
							className="mt-4 text-base font-medium text-gray-700"
							dangerouslySetInnerHTML={{ __html: news?.content || `Không tìm thấy nội dung cho tin tức này` }}
						/>) : (
							<div className="mt-4 text-base font-medium text-gray-700">
								{formattedDetail(news?.content)}
							</div>
						)
				}
				{/* <div
					className="mt-4 text-base font-medium text-gray-700"
					dangerouslySetInnerHTML={{ __html: news?.content || `Không tìm thấy nội dung cho tin tức này` }}
				/> */}

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
				<div className="sticky top-40 lg:top-0 w-full h-auto">
					<div className="text-2xl font-semibold text-center ">
						Tin tức liên quan
					</div>

					<div className="mt-4 lg:mt-12 space-y-4 lg:border-l-2 lg:border-gray-300 lg:pl-12 xl:pl-16">
						{newsList.slice(1, 5).map((news: React.JSX.IntrinsicAttributes & { urlImage?: string; mainTitle?: string; createdDate?: string; id?: string; }, index: React.Key | null | undefined) => (
							<SuggestedNew key={index} {...news} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsDetail;
