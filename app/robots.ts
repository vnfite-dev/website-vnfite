import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/admin/", "/api/", "/auth/", "/checkout/", "/dashboard/", "/*.json$"],
		},
		sitemap: "https://vnfite.com.vn/sitemap.xml",
	};
}
