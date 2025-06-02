/* eslint-disable @typescript-eslint/no-unused-vars */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const keyToValue = (key: string) => {
	switch (key) {
		case "1":
			return "IT";
		case "2":
			return "Marketing";
		case "3":
			return "Nhân sự";
		case "4":
			return "Kinh doanh";
		case "fulltime":
			return "Toàn thời gian";
		case "parttime":
			return "Bán thời gian";
		case "intern":
			return "Thực tập";
		case "onsite":
			return "Tại văn phòng";
		case "remote":
			return "Từ xa";
		case "hybrid":
			return "Linh hoạt";
		case "nhanvien":
			return "Nhân viên";
		case "quanlyvien":
			return "Quản lý";
		case "congtacvien":
			return "Cộng tác viên";
		default:
			return key;
	}
};
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatVND = (number: number) => {
	return Number(number)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const simpleFetchFunction = async (url: string) => {
	const rawData = await fetch(`${WebUtils.envMode.baseURL}${url}`, {
		headers: {
			"Content-Type": "application/json",
			transactionId: "QUANGDEPTRAI", // Thêm transactionId vào header
		},
	});

	if (!rawData.ok) {
		// throw new Error(`HTTP error! Status: ${rawData.status}`);
		return undefined;
	}

	const data = await rawData.json();
	return data;
};

const ENV_Test = {
	// baseURL: "http://42.113.122.119:2993",
	baseURL: "http://192.168.1.95:2993",
	imageServer: "http://42.113.122.119:70",
};
// eslint-disable-next-line no-unused-vars
const ENV_Live = {
	baseURL: "https://service.vnfite.com.vn/cms/v2",
	imageServer: "http://42.113.122.118:70",
};

class HelpersUtil {
	envMode = ENV_Live;
}

export const WebUtils = new HelpersUtil();

// 0 cas nhaa 1 doanh nghiep

export const SOCIAL_MEDIA = {
	facebook: "https://www.facebook.com/vnfitevietnam?locale=vi_VN",
	youtube: "https://www.youtube.com/@vnfitevietnam9932",
	tiktok: "https://www.tiktok.com/@vnfite.vn.fintech?lang=vi-VN",
};
