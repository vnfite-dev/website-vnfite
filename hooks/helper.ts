"use client";
import { useState, useEffect } from "react";

export function useCheckOS() {
	const [os, setOS] = useState("Unknown");

	useEffect(() => {
		const userAgent = navigator.userAgent || navigator.vendor;

		if (/android/i.test(userAgent)) {
			setOS("ANDROID");
		} else if (/iPad|iPhone|iPod/.test(userAgent)) {
			setOS("IOS");
		} else {
			setOS("Unknown");
		}
	}, []);

	return os;
}

export function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const userAgent = navigator.userAgent || navigator.vendor;
		if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return isMobile;
}
export function useAppLink() {
	const [appLink, setAppLink] = useState("");

	useEffect(() => {
		const userAgent = navigator.userAgent || navigator.vendor;

		let os = "Unknown";
		if (/android/i.test(userAgent)) {
			os = "ANDROID";
		} else if (/iPad|iPhone|iPod/.test(userAgent)) {
			os = "IOS";
		}

		if (os === "IOS") {
			setAppLink("https://apps.apple.com/vn/app/vnfite-fintech-p2p-lending/id1610082008?l=vi");
		} else {
			setAppLink("https://play.google.com/store/apps/details?id=com.vnfite.vnfiteapp&hl=vi");
		}
	}, []);

	return appLink;
}
