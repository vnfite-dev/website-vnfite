import InvestDashboard from "@/components/InvestPage/InvestDashboard";
import InvestInfo from "@/components/InvestPage/InvestInfo";
import React from "react";

const Invest = () => {
	return (
		<>
			<div className="mx-auto md:max-w-[1200px] lg:max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px]">
				<div className="">
					<InvestDashboard />
				</div>
			</div>
			<div className="mt-28">
				<InvestInfo />
			</div>
		</>
	);
};

export default Invest;
