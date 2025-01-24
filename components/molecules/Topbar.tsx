import Image from "next/image";
import Link from "next/link";

interface IconLinkProps {
	href: string;
	src: string;
	alt: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, src, alt }) => (
	<Link href={href} target="_blank">
		<Image src={src} width={24} height={24} alt={alt} />
	</Link>
);

const Topbar = () => {
	return (
		<div className="hidden md:flex text-[12px] text-white w-full  justify-center lg:justify-between items-center font-inter bg-gradient-to-r from-[#E82F2F] to-[#E0694F] rounded-b-2xl h-12 md:px-[120px] py-4">
			<div className="hidden lg:flex justify-around gap-12">
				<div className="flex items-center gap-2">
					<Image src={"/icons/topbar/headset.svg"} width={16} height={16} alt="headset" />
					<p>Hotline : 024.3367.6699</p>
				</div>
				<div className="flex items-center">
					<Image src={"/icons/topbar/location.svg"} width={16} height={16} alt="location" />
					<p>4A Vương Thừa Vũ, Thanh Xuân, Hà Nội</p>
				</div>
			</div>

			<div className=" font-semibold text-sm leading-4 font-sfpro">KẾT NỐI NGUỒN VỐN SIÊU TỐC</div>

			<div className="hidden xl:flex gap-12">
				<div className="flex items-center gap-2">
					<Image src={"/icons/topbar/globe.svg"} width={16} height={16} alt="globe" />
					<p>Tiếng Việt</p>
				</div>
				<div className="flex items-center">
					<p>Theo dõi chúng tôi:</p>
					<div className="flex gap-3.5 ml-2">
						<IconLink href="#" src="/icons/topbar/facebookWhite.svg" alt="facebook" />
						<IconLink href="#" src="/icons/topbar/tiktokWhite.svg" alt="tiktok" />
						<IconLink href="#" src="/icons/topbar/youtubeWhite.svg" alt="youtube" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
