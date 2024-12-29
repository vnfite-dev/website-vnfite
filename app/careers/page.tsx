import Benefits from "@/components/CareersPage/Benefits";
import ListJobs from "@/components/CareersPage/ListJobs";

const CareersPage = () => {
	return (
		<>
			<div className="mx-[16.7%]">
				<ListJobs />
			</div>
			<div className="mt-28 mx-[16.7%]">
				<Benefits />
			</div>
		</>
	);
};

export default CareersPage;
