// import { ApplicationModal } from "@/components/CareersPage/ApplicationModal";
async function JobDetail({ params }: { params: { jobId: string } }) {
	// const { jobId } = await params; // Không cần await vì params không phải là Promise
	// return (
	// 	<div className="max-w-[1280px] mt-8 mx-auto">
	// 		<ApplicationModal jobId={"1"} />;
	// 	</div>
	// );
	return <div>Hello {params.jobId}</div>;
}

export default JobDetail;
