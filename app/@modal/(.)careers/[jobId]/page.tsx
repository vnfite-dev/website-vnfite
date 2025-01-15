import { Modal } from "@/components/ui/modal";
import { ApplicationModal } from "@/components/CareersPage/ApplicationModal";
async function JobDetail({ params }: { params: Promise<{ jobId: string }> }) {
	const { jobId } = await params; // Không cần await vì params không phải là Promise
	return (
		<Modal>
			<ApplicationModal jobId={jobId} />
		</Modal>
	);
}

export default JobDetail;
