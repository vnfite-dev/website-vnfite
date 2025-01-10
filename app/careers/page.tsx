import Benefits from "@/components/CareersPage/Benefits";
import ListJobs from "@/components/CareersPage/ListJobs";

const CareersPage = () => {
	return (
		<div className="mx-[16.7%]">
			<div className="">
				<ListJobs />
			</div>
			<div className="mt-28 ">
				<Benefits />
			</div>
		</div>
	);
};

export default CareersPage;
