import HomeSlide from "@/components/molecules/HomeSlide";
import Stack from "@/components/molecules/Stack";
import PartnersList from "@/components/molecules/PartnersList";
import CommunityCmt from "@/components/molecules/CommunityCmt";
import ContactBox from "@/components/molecules/ContactBox";
import NewsList from "@/components/molecules/NewsList";

export default function Home() {
	return (
		<div>
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
