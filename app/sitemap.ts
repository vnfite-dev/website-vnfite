import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Lấy danh sách sản phẩm từ API hoặc cơ sở dữ liệu
	// Giả định rằng bạn có một API endpoint để lấy danh sách sản phẩm
	const productsResponse = await fetch("https://vnfite.com.vn/api/products");
	const products = await productsResponse.json();

	// Tạo entries cho từng sản phẩm
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const productEntries = products.map((product: any) => ({
		url: `https://vnfite.com.vn/products/${product.slug}`,
		lastModified: new Date(product.updatedAt || new Date()),
		changeFrequency: "weekly" as const,
		priority: 0.8,
	}));

	// Các trang tĩnh chính của website theo cấu trúc mới
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
	return [...staticPages, ...productEntries];
}
