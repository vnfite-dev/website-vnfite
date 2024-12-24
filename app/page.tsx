import HomeSlide from "@/components/molecules/HomeSlide";
import Stack from "@/components/molecules/Stack";
import PartnersList from "@/components/molecules/PartnersList";
import CommunityCmt from "@/components/molecules/CommunityCmt";
import ContactBox from "@/components/molecules/ContactBox";
import NewsList from "@/components/molecules/NewsList";
import Banner from "@/components/molecules/Banner";
import Navbar from "@/components/molecules/Navbar";

export default function Home() {
	return (
		<div>
			<header className="bg-home-banner pb-[190px]">
				<div className="lg:container mx-auto pt-10">
					<Navbar />
					<div className="mt-[90px]">
						<Banner />
					</div>
				</div>
			</header>
			<div className="mt-[120px]">
				<HomeSlide />
			</div>
			<div className="mt-32">
				<Stack />
			</div>

			<div className="mt-32">
				<PartnersList />
			</div>

			<div className="mt-32">
				<CommunityCmt />
			</div>

			<div className="mt-32">
				<ContactBox />
			</div>

			<div className="mt-32">
				<NewsList />
			</div>
		</div>
	);
}
