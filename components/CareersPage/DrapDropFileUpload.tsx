"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

interface DragDropFileUploadProps {
	onFileUpload: (file: File) => void;
}

export function DragDropFileUpload({ onFileUpload }: DragDropFileUploadProps) {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			if (acceptedFiles && acceptedFiles.length > 0) {
				onFileUpload(acceptedFiles[0]);
			}
		},
		[onFileUpload]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"application/pdf": [".pdf"],
			"application/msword": [".doc"],
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
		},
		multiple: false,
	});

	return (
		<div
			{...getRootProps()}
			className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
				isDragActive ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary"
			}`}
		>
			<input {...getInputProps()} />
			<Upload className="mx-auto h-10 w-12 text-gray-400" />
			<p className="mt-2 text-sm text-gray-600">
				{isDragActive ? "Drop the file here" : "Drag 'n' drop your CV here, or click to select a file"}
			</p>
			<p className="mt-1 text-xs text-gray-500">Supported formats: PDF, DOC, DOCX</p>
		</div>
	);
}
