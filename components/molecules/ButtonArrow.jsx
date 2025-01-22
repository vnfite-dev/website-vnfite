const ButtonArrow = ({ text, onClick }) => {
	return (
		<div className="mt-6 mx-auto">
			<div className="flex items-center justify-between">
				{/* Thân mũi tên */}
				<div className="w-[40%] h-0.5 border-t-2 border-dashed border-[#ef836c]"></div>
				{/* Đầu mũi tên */}
				<div className="w-0 h-0 border-l-[12px] border-t-[6px] border-b-[6px] border-[#f84f4f] border-t-transparent border-b-transparent bg-white"></div>

				<button
					onClick={onClick}
					className="btn-primary py-2 mx-2 sm:mx-5  text-white rounded-lg whitespace-nowrap"
				>
					{text}
				</button>

				<div className="w-0 h-0 border-r-[12px] border-t-[6px] border-b-[6px] border-[#ef836c] border-t-transparent border-b-transparent bg-white"></div>
				<div className="w-[40%] h-0.5 border-t-2 border-dashed border-[#f84f4f]"></div>
			</div>
		</div>
	);
};

export default ButtonArrow;
