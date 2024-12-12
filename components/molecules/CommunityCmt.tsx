// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const CommunityCmt = () => {
	return (
		<div>
			<div className="relative z-10 text-center">
				<p className="text-gradient font-semibold green-underline">Dư luận</p>

				<p className="mt-3 text-5xl leading-[70px]">
					Người dùng nói gì về<span className="text-gradient font-semibold">VNFITE</span>
				</p>
			</div>
			<div className="mt-16 w-full px-[13%]">
				{/* <Carousel
					opts={{
						loop: true,
						align: "start",
					}}
					className="w-full"
				>
					<CarouselContent className="">
						{[...Array(5)].map((items, index) => (
							<CarouselItem key={index} className="pl-4 w-fit md:basis-1/2 lg:basis-1/4">
								<div className="pl-1">
									<SlideItem key={index} />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="w-20 h-20 -left-24 shadow-md" />
					<CarouselNext className="w-20 h-20 -right-24 shadow-md text-3xl font-bold " />
				</Carousel> */}
			</div>
		</div>
	);
};

export default CommunityCmt;
