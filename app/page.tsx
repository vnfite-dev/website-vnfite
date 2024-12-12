import Navbar from "@/components/molecules/Navbar";
import Topbar from "@/components/molecules/Topbar";
import Banner from "@/components/molecules/Banner";
import HomeSlide from "@/components/molecules/HomeSlide";
import Stack from "@/components/molecules/Stack";
import PartnersList from "@/components/molecules/PartnersList";
import Footer from "@/components/molecules/Footer";
import CommunityCmt from "@/components/molecules/CommunityCmt";
import ContactBox from "@/components/molecules/ContactBox";
import NewsList from "@/components/molecules/NewsList";

export default function Home() {
	return (
		<div>
			{/* <header className="bg-home-banner pb-[190px]">
				<Topbar />
				<div className="lg:container mx-auto mt-12">
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
			</div> */}
			<footer className="mt-32">
				<Footer />
			</footer>
		</div>
	);
}
