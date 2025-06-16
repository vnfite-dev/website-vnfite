import React from "react";
import Image from "next/image";
import Marquee from "../ui/marquee";

const PartnerItem = ({ partner = "vnpt" }: { partner: string }) => {
	const urlString = "/icons/home/pn_" + partner + ".svg";

	return (
		<div className="group py-6 px-6 w-[250px] border border-red-400 rounded-lg bg-white shadow-md dark:border-slate-800 dark:bg-slate-950">
			<div className="h-16 relative">
				<Image
					src={urlString}
					alt="logo"
					fill
					// className="object-contain h-[64px] w-auto transition-all duration-300 filter grayscale group-hover:grayscale-0"
					className="object-contain h-[64px] w-auto transition-all duration-300 "
					sizes="(max-width: 768px) 50px, 64px" // Adjust as per your breakpoints
				/>
			</div>
		</div>
	);
};

const PartnersList = () => {
	return (
		<div>
			<div className="relative z-10 text-center">
				<p className="text-gradient font-semibold green-underline">Đối tác</p>

				<p className="mt-3 text-3xl md:text-5xl leading-10 md:leading-[70px]">
					Một số đối tác uy tín của <span className="text-gradient font-semibold">VNFITE</span>
				</p>
			</div>

			{/* <div className="mt-16 px-[15%] flex flex-wrap justify-around gap-3">
				<PartnerItem partner="vnpt" />
				<PartnerItem partner="tnex" />
				<PartnerItem partner="mbbank" />
				<PartnerItem partner="finy" />
				<PartnerItem partner="f88" />
				<PartnerItem partner="pvcombank" />
				<PartnerItem partner="baominh" />
				<PartnerItem partner="chubb" />
			</div> */}
			<div className="relative flex mt-16 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
				<Marquee pauseOnHover className="[--duration:80s]">
					<PartnerItem partner="vnpt" />
					{/* <PartnerItem partner="tnex" /> */}
					<PartnerItem partner="mbbank" />
					{/* <PartnerItem partner="finy" /> */}
					<PartnerItem partner="f88" />
					<PartnerItem partner="pvcombank" />
					<PartnerItem partner="baominh" />
					<PartnerItem partner="chubb" />
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:80s]">
					{/* <PartnerItem partner="chubb" />
					<PartnerItem partner="baominh" />
					<PartnerItem partner="pvcombank" />
					<PartnerItem partner="f88" />
					<PartnerItem partner="finy" />
					<PartnerItem partner="mbbank" />
					<PartnerItem partner="tnex" />
					<PartnerItem partner="vnpt" /> */}

					<PartnerItem partner="vnpt" />
					{/* <PartnerItem partner="tnex" /> */}
					<PartnerItem partner="mbbank" />
					{/* <PartnerItem partner="finy" /> */}
					<PartnerItem partner="f88" />
					<PartnerItem partner="pvcombank" />
					<PartnerItem partner="baominh" />
					<PartnerItem partner="chubb" />
				</Marquee>
			</div>
		</div>
	);
};

export default PartnersList;
