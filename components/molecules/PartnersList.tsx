import React from "react";
import Image from "next/image";

const PartnerItem = ({ partner = "vnpt" }: { partner: string }) => {
	const urlString = "/icons/home/pn_" + partner + ".svg";

	return (
		<div className="relative group h-[64px] w-[250px]">
			<Image
				src={urlString}
				alt="logo"
				fill
				className="object-contain h-[64px] w-auto transition-all duration-300 filter grayscale group-hover:grayscale-0"
				sizes="(max-width: 768px) 50px, 64px" // Adjust as per your breakpoints
			/>
		</div>
	);
};

const PartnersList = () => {
	return (
		<div>
			<div className="relative z-10 text-center">
				<p className="text-gradient font-semibold green-underline">Đối tác</p>

				<p className="mt-3 text-5xl leading-[70px]">
					Một số đối tác uy tín của <span className="text-gradient font-semibold">VNFITE</span>
				</p>
			</div>

			<div className="mt-16 px-[15%] flex flex-wrap justify-around gap-3">
				<PartnerItem partner="vnpt" />
				<PartnerItem partner="tnex" />
				<PartnerItem partner="mbbank" />
				<PartnerItem partner="finy" />
				<PartnerItem partner="f88" />
				<PartnerItem partner="pvcombank" />
				<PartnerItem partner="baominh" />
				<PartnerItem partner="chubb" />
			</div>
		</div>
	);
};

export default PartnersList;
