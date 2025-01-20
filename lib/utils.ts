/* eslint-disable @typescript-eslint/no-unused-vars */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
		throw new Error(`HTTP error! Status: ${rawData.status}`);
	}

	const data = await rawData.json();
	return data;
};

const ENV_Test = {
	baseURL: "http://42.113.122.119:2993",
	imageServer: "http://42.113.122.119:70",
};
// eslint-disable-next-line no-unused-vars
const ENV_Live = {
	baseURL: "https://service-vnfite.com.vn/cms/v2",
	imageServer: "http://42.113.122.118:70",
};

class HelpersUtil {
	envMode = ENV_Live;
}

export const WebUtils = new HelpersUtil();

// 0 cas nhaa 1 doanh nghiep
