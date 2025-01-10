import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Props {
	max: number;
	value: number;
	min: number;
	gaugePrimaryColor: string;
	gaugeSecondaryColor: string;
	className?: string;
}

export default function AnimatedCircularProgressBar({
	max = 100,
	min = 0,
	value = 0,
	gaugePrimaryColor,
	gaugeSecondaryColor,
	className,
}: Props) {
	const radius = 45; // Bán kính vòng tròn
	const circumference = 2 * Math.PI * radius; // Chu vi của vòng tròn
	const currentPercent = Math.round(((value - min) / (max - min)) * 100);
	const strokeDashoffset = circumference - (currentPercent / 100) * circumference; // Offset cho stroke

	return (
		<div
			className={cn(
				"relative size-[120px] text-lg font-semibold flex items-center justify-center",
				className
			)}
		>
			<svg className="size-full transform -rotate-90" viewBox="0 0 100 100">
				{/* Vòng tròn nền */}
				<circle
					cx="50"
					cy="50"
					r={radius}
					strokeWidth="10"
					fill="transparent"
					stroke={gaugeSecondaryColor}
				/>
				{/* Vòng tròn tiến trình */}
				<circle
					cx="50"
					cy="50"
					r={radius}
					strokeWidth="10"
					fill="transparent"
					stroke={gaugePrimaryColor}
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
					style={{
						transition: "stroke-dashoffset 1s ease-in-out",
					}}
				/>
			</svg>
			{/* Hiển thị phần trăm giữa vòng tròn */}
			<span className="absolute text-center text-4xl text-gradient font-extrabold">
				{value != 99 ? value / 33 : <Check strokeWidth={4} color="#F84F4F" size={40} className="w-fit" />}
			</span>
		</div>
	);
}
