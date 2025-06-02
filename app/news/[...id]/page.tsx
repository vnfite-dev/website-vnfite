/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { Clock, Share2 } from "lucide-react";
import { detailNews, detailPromotion } from "../data";
// import { useParams, useRouter } from "next/navigation";
import { simpleFetchFunction } from "@/lib/utils";
import Link from "next/link";
import Head from "next/head";

interface NewsItem {
	id: string;
	urlImage: string;
	createdDate: string | number | Date;
	mainTitle: string;
	content: string;
	subImage: string;
}

const fetchNewsData = async (type: number) => {
	const data = await simpleFetchFunction(`/get-news?pageSize=10&pageNumber=0&type=${type}`);
	return data.data.data;
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
		<Link className="flex gap-4 border-b border-b-[#E6E6E6] pb-4 cursor-pointer" href={`/news/${id}`}>
			<div className="w-20 h-20 min-w-20 min-h-20 overflow-hidden relative rounded-lg">
				<Image
					src={urlImage || "/images/news/suggestedNew.jpg"}
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
					{formatDate(createdDate || "")}
				</div>
			</div>
		</Link>
	);
};

const getNewsData = async (id: string) => {
	const newsData = await fetchNewsData(3);
	const promotionData = await fetchNewsData(0);

	const allNews = [...(newsData || []), ...(promotionData || []), ...detailNews, ...detailPromotion];
	const news = allNews.find((item: NewsItem) => item.id === id);

	return {
		news,
		relatedNews: allNews.filter((item: NewsItem) => item.id !== id).slice(0, 5) || [],
	};
};
const NewsDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	const { news, relatedNews } = await getNewsData(id[0].split('_')[1]);

	const formattedDetail = (detail: string | undefined) => {
		if (!detail) return null;
		return detail.split("\n").map((line, index) => (
			<span key={index}>
				{line}
				<br />
			</span>
		));
	};

	const fixFigureWidth = news?.content.replaceAll(
		/<figure([^>]*?)style="[^"]*?width:\s*[\d.]+%[^"]*?"([^>]*?)>/g,
		'<figure$1style="width:100%;"$2>'
	).replaceAll(
		"http://42.113.122.118:70/",
		"https://vnfite.com.vn/static/upload/"
	)

	const slugify = (str: string) =>
		str
			.toLowerCase()
			.normalize("NFD")                     
			.replace(/[\u0300-\u036f]/g, "")     
			.replace(/[^a-z0-9]+/g, "-")        
			.replace(/^-+|-+$/g, "");   
		
	return (
		<>
			<Head>
				<title>{news?.mainTitle}</title>
				<meta property="og:title" content={news?.mainTitle || "VNFiTE - Tin tức"} />
				<meta
					property="og:description"
					content={news?.content?.slice(0, 160).replace(/(<([^>]+)>)/gi, "") || "Thông tin chi tiết từ VNFiTE"}
				/>
				<meta property="og:image" content={news?.urlImage || "https://vnfite.com.vn/static/upload/images/news/h1.JPG"} />
				<meta property="og:url" content={`https://vnfite.com.vn/news/${slugify(news.mainTitle || "")}_${news?.id}`} />
				<meta property="og:type" content="article" />
			</Head>

			<div className="px-[8%] lg:px-[6%] xl:px-[10%] 2xl:px-[16.7%] my-28 flex flex-col lg:flex-row">
				<div className="font-semibold text-2xl lg:pr-10 xl:pr-14 w-full lg:w-[70%] 2xl:w-[65%]">
					{news?.mainTitle}
					<div className="flex gap-12 mt-4 items-center text-sm">
						<div className="flex items-center gap-3">
							<Clock />
							<p className="text-gray-600">{formatDate(news?.createdDate || Date.now())}</p>
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
					{fixFigureWidth?.includes("<p>") ? (
						<div
							className="mt-4 text-base font-medium text-gray-700"
							dangerouslySetInnerHTML={{
								__html: fixFigureWidth || `Không tìm thấy nội dung cho tin tức này`,
							}}
						/>
					) : (
						<div className="mt-4 text-base font-medium text-gray-700">
							{formattedDetail(news?.content)}
						</div>
					)}
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
						<div className="text-2xl font-semibold text-center ">Tin tức liên quan</div>

						<div className="mt-4 lg:mt-12 space-y-4 lg:border-l-4 lg:border-gray-500 lg:pl-12 xl:pl-16">
							{relatedNews.slice(1, 5).map(
								(
									news: React.JSX.IntrinsicAttributes & {
										urlImage?: string;
										mainTitle?: string;
										createdDate?: string;
										id?: string;
									},
									index: React.Key | null | undefined
								) => (
									<SuggestedNew key={index} {...news} />
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsDetail;
