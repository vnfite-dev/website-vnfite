import Benefits from "@/components/CareersPage/Benefits";
import ListJobs from "@/components/CareersPage/ListJobs";

const CareersPage = () => {
	return (
		<div className="max-w-[1280px] px-2 mx-auto">
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
