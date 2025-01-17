"use client";

import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "./dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	const handleOpenchange = () => {
		router.back();
	};

	return (
		<Dialog defaultOpen={true} open={true} onOpenChange={handleOpenchange}>
			<DialogOverlay>
				<DialogContent className="max-w-[100%] xl:max-w-[65%] max-h-[83%] xl:max-h-[80%] overflow-y-scroll no-scrollbar px-0 md:px-5">
					<VisuallyHidden>
						<DialogTitle>Hidden Title for Screen Readers</DialogTitle>
					</VisuallyHidden>
					{children}
				</DialogContent>
			</DialogOverlay>
		</Dialog>
	);
}
