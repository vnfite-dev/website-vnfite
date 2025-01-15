import { Modal } from "@/components/ui/modal";
import { ApplicationModal } from "@/components/CareersPage/ApplicationModal";
async function JobDetail({ params }: { params: { jobId: string } }) {
	const { jobId } = await params; // Không cần await vì params không phải là Promise
	return (
		<Modal>
			<ApplicationModal jobId={jobId} />
			{/* <div>Hello {jobId}</div> */}
		</Modal>
	);
}

export default JobDetail;
