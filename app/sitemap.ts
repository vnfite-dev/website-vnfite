import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Các trang tĩnh chính của website
	const staticPages = [
		{
			url: "https://vnfite.com.vn",
			lastModified: new Date(),
			changeFrequency: "daily" as const,
			priority: 1,
		},
		{
			url: "https://vnfite.com.vn/about",
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.8,
		},
		{
			url: "https://vnfite.com.vn/invest",
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.9,
		},
		{
			url: "https://vnfite.com.vn/careers",
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
		{
			url: "https://vnfite.com.vn/insure",
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.9,
		},
	];

	

	// Kết hợp tất cả các entries
	return [...staticPages];
}
