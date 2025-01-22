"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useIsMobile, useAppLink } from "@/hooks/helper";

const DownloadButton = ({ children }: { children?: React.ReactNode }) => {
	const isMobile = useIsMobile();
	const appLink = useAppLink();
	return (
		<Link href={isMobile ? appLink : "#footer"} target="_self">
			<Button className="btn-primary mt-12 mx-auto">{children || "Tải ứng dụng"}</Button>
		</Link>
	);
};

export default DownloadButton;
