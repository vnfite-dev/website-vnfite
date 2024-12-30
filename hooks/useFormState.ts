import { useState } from "react";

export function useFormState<T>(initialState: T) {
	const [data, setData] = useState<T>(initialState);
	const [currentStep, setCurrentStep] = useState(0);

	function updateFields(fields: Partial<T>) {
		setData((prev) => ({ ...prev, ...fields }));
	}

	function nextStep() {
		setCurrentStep((prev) => Math.min(prev + 1, 2));
	}

	function prevStep() {
		setCurrentStep((prev) => Math.max(prev - 1, 0));
	}

	return { data, updateFields, currentStep, nextStep, prevStep, setCurrentStep };
}
