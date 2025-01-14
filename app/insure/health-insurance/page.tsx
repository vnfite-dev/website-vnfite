import Image from "next/image";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
const HealthInsurance = () => {
    const questionsData = [
        {
            question: "Bảo hiểm trong sản phẩm gọi vốn tại VNFITE là gì?",
            answer:
                "Bảo hiểm trong sản phẩm gọi vốn tại VNFITE là một hình thức bảo vệ tài chính bổ sung, giúp nhà đầu tư an tâm khi tham gia vào các dự án. Các sản phẩm này thường bao gồm bảo hiểm khoản vay hoặc bảo hiểm rủi ro đầu tư nhằm bảo vệ nhà đầu tư trước các trường hợp mất khả năng thanh toán từ bên vay.",
        },
        {
            question:
                "Lợi ích khi mua bảo hiểm trong sản phẩm gọi vốn tại VNFITE là gì?",
            answer:
                "Đây là câu trả lời chi tiết về bảo hiểm trong sản phẩm gọi vốn tại VNFITE...",
        },
        {
            question:
                "Loại bảo hiểm nào được áp dụng cho các sản phẩm gọi vốn tại VNFITE?",
            answer:
                "Đây là câu trả lời chi tiết về bảo hiểm trong sản phẩm gọi vốn tại VNFITE...",
        },
        {
            question: "Làm thế nào để đăng ký bảo hiểm khi đầu tư qua VNFITE?",
            answer:
                "Đây là câu trả lời chi tiết về bảo hiểm trong sản phẩm gọi vốn tại VNFITE...",
        },
        {
            question: "Chi phí bảo hiểm có cao không?",
            answer:
                "Đây là câu trả lời chi tiết về bảo hiểm trong sản phẩm gọi vốn tại VNFITE...",
        },
    ];

    return (
        <div>
            <div className="flex justify-center items-center flex-col ">
                <div className="w-full bg-grad py-10 flex justify-around items-center gap-4 sm:gap-10 md:gap-20 lg:gap-32">
                    <div className="">
                        <Image
                            src={"/icons/home/pn_mic.svg"}
                            alt="logo"
                            height={64}
                            width={100}
                            className="object-contain h-[64px] w-auto  filter brightness-0 invert"
                            sizes="(max-width: 768px) 50px, 64px"
                        />
                    </div>

                    <div>
                        <Image
                            src={"/icons/home/pn_baominh.svg"}
                            alt="logo"
                            height={64}
                            width={100}
                            className="object-contain h-[64px] w-auto  filter brightness-0 invert"
                            sizes="(max-width: 768px) 50px, 64px"
                        />
                    </div>

                    <div>
                        <Image
                            src={"/icons/home/pn_chubb.svg"}
                            alt="logo"
                            height={30}
                            width={100}
                            className="object-contain w-auto  filter brightness-0 invert"
                            sizes="(max-width: 768px) 50px, 64px"
                        />
                    </div>
                </div>
                <div className="mt-10 lg:mt-24 w-full max-w-[1280px] px-10">
                    <p className="text-2xl lg:text-5xl font-semibold text-center">
                        Bảo hiểm sức khỏe
                    </p>

                    <div className="text-left text-lg lg:text-xl font-medium bg-grad pl-[2px] mb-2 mt-8 lg:mt-20">
                        <p className="bg-white w-full pl-2 text-start">
                            Thông tin sản phẩm
                        </p>
                    </div>

                    <div className="mt-4 lg:mt-8 max-w-[1280px] flex flex-col lg:flex-row lg:justify-between items-center text-base space-x-0 lg:space-x-4 space-y-6 lg:space-y-0">
                        <div className="bg-grad max-w-[405px] w-full lg:w-[30%] lg:h-72 xl:h-60 rounded-3xl p-[2px]">
                            <div className="bg-white w-full h-full rounded-[22px] py-8">
                                <p className=" font-medium text-center px-6">
                                    Bảo hiểm sức khoẻ MIC CARE là gì
                                </p>
                                <div className="text-[#4D4D4D] px-6 space-y-4 pt-6 font-normal">
                                    <p>
                                        Bảo hiểm sức khoẻ MIC Care là giải pháp tài chính giúp chi
                                        trả các chi phí khám chữa bệnh nội trú, ngoại trú, thai sản
                                        và bệnh ung thư. Áp dụng cho trẻ từ 15 ngày tuổi và người
                                        lớn đến 70 tuổi
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-grad max-w-[405px] w-full lg:w-[30%] lg:h-72 xl:h-60 rounded-3xl p-[2px]">
                            <div className="bg-white w-full h-full rounded-[22px] py-8">
                                <p className=" text-center font-medium px-6">
                                    Các quyền lợi khi tham gia
                                </p>
                                <div className="text-[#4D4D4D] px-6 space-y-4 pt-6 font-normal">
                                    <p>
                                        MIC Care bảo lãnh viện phí nội ngoại trú, nha khoa, thai sản
                                        áp dụng tất cả hạng thẻ và các chương trình. Con cái mua độc
                                        lập với cha mẹ. Thời gian chờ thai sản ngắn nhất thị trường
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-grad max-w-[405px] w-full lg:w-[30%] lg:h-72 xl:h-60 rounded-3xl p-[2px]">
                            <div className="bg-white w-full h-full rounded-[22px] py-10">
                                <p className=" text-center font-medium px-6">
                                    Tại sao nên tham gia bảo hiểm MIC CARE
                                </p>
                                <div className="text-[#4D4D4D] px-6 space-y-4 pt-6 font-normal">
                                    <p>
                                        Theo Tổng cục thống kê, chi phí bình quân/người khám chữa
                                        bệnh có thể từ 2,5 triệu đến hàng trăm triệu đồng một năm.
                                        Bảo hiểm MIC Care sẽ chia sẻ một phần gánh nặng cùng các gia
                                        đình
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-left text-lg lg:text-xl font-medium bg-grad pl-[2px] mb-2 mt-8 lg:mt-16">
                        <p className="bg-white w-full pl-2 text-start">Thông tin gói tài khoản</p>
                    </div>

                    <div className="mt-4 lg:mt-8 max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-base">
                        <div className="bg-grad max-w-[405px] w-full xl:h-24 rounded-3xl p-[2px] mx-auto">
                            <div className="bg-white w-full h-full rounded-[22px] p-3 flex items-center space-x-2">
                                <div className="w-1/5">
                                    <Image
                                        src={"/images/insure/Coin.png"}
                                        alt="Thông tin gói tài khoản"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div>
                                    <p>Phí chỉ từ</p>
                                    <p className="text-gradient text-xl font-semibold">760.000 VNĐ/năm</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-grad max-w-[405px] w-full xl:h-24 rounded-3xl p-[2px] mx-auto">
                            <div className="bg-white w-full h-full rounded-[22px] p-3 flex items-center space-x-2">
                                <div className="w-1/5">
                                    <Image
                                        src={"/images/products/Time.png"}
                                        alt="Thông tin gói tài khoản"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div>
                                    <p>Bão lãnh viện phí</p>
                                    <p className="text-gradient text-xl font-semibold">+200 bệnh viện</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-grad max-w-[405px] w-full xl:h-24 rounded-3xl p-[2px] mx-auto">
                            <div className="bg-white w-full h-full rounded-[22px] p-3 flex items-center space-x-2">
                                <div className="w-1/5">
                                    <Image
                                        src={"/images/insure/Coin.png"}
                                        alt="Ưu điểm vượt trội"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div>
                                    <p>Tích hợp với bảo hiểm</p>
                                    <p className="text-gradient text-xl font-semibold">Tài chính</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-grad max-w-[405px] w-full xl:h-24 rounded-3xl p-[2px] mx-auto">
                            <div className="bg-white w-full h-full rounded-[22px] p-3 flex items-center space-x-2">
                                <div className="w-1/5">
                                    <Image
                                        src={"/images/products/Time.png"}
                                        alt="Ưu điểm vượt trội"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div>
                                    <p>Quy trình bồi thường</p>
                                    <p className="text-gradient text-xl font-semibold">Minh bạch, nhanh gọn</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-left text-lg lg:text-xl font-medium bg-grad pl-[2px] mb-2 mt-8 lg:mt-20">
                        <p className="bg-white w-full pl-2 text-start">
                            Thông tin gói tài khoản
                        </p>
                    </div>

                    <div className="mt-4 lg:mt-8 max-w-[1280px] flex flex-col lg:flex-row lg:justify-between items-center text-base space-x-0 lg:space-x-4 space-y-6 lg:space-y-0">
                        <div className="bg-grad max-w-[405px] w-full lg:w-[30%] lg:h-[340px] xl:h-80 rounded-3xl p-[2px] group">
                            <div className="bg-white w-full h-full rounded-[22px] py-8 flex justify-start items-center flex-col overflow-hidden">
                                <div>
                                    <Image
                                        src={"/images/insure/LifeInsurance.png"}
                                        alt="Thông tin gói tài khoản"
                                        width={240}
                                        height={180}
                                        className="transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                                <p className="mt-4">Quy tắc bảo hiểm</p>
                                <p className="hidden sm:flex text-gradient underline decoration-[#E0694F] cursor-pointer transform translate-y-24 group-hover:translate-y-3 transition-transform duration-500 ease-in-out">
                                    Xem chi tiết
                                </p>
                                <p className="sm:hidden text-gradient underline decoration-[#E0694F] cursor-pointer pt-2">
                                    Xem chi tiết
                                </p>
                            </div>
                        </div>

                        <div className="bg-grad max-w-[405px] w-full lg:w-[30%] lg:h-[340px] xl:h-80 rounded-3xl p-[2px] group">
                            <div className="bg-white w-full h-full rounded-[22px] py-8 flex justify-start items-center flex-col overflow-hidden">
                                <div>
                                    <Image
                                        src={"/images/insure/PoliceInsurance.png"}
                                        alt="Thông tin gói tài khoản"
                                        width={240}
                                        height={180}
                                        className="transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                                <p className="mt-4">Hướng dẫn bồi thường</p>
                                <p className="hidden sm:flex text-gradient underline decoration-[#E0694F] cursor-pointer transform translate-y-24 group-hover:translate-y-3 transition-transform duration-500 ease-in-out">
                                    Xem chi tiết
                                </p>
                                <p className="sm:hidden text-gradient underline decoration-[#E0694F] cursor-pointer pt-2">
                                    Xem chi tiết
                                </p>
                            </div>
                        </div>

                        <div className="bg-grad max-w-[405px] w-full lg:w-[30%] lg:h-[340px] xl:h-80 rounded-3xl p-[2px] group">
                            <div className="bg-white w-full h-full rounded-[22px] py-8 flex justify-start items-center flex-col overflow-hidden">
                                <div>
                                    <Image
                                        src={"/images/insure/FamilyInsurance.png"}
                                        alt="Thông tin gói tài khoản"
                                        width={240}
                                        height={180}
                                        className="transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                                <p className="mt-4">Quy tắc bảo hiểm</p>
                                <p className="hidden sm:flex text-gradient underline decoration-[#E0694F] cursor-pointer transform translate-y-24 group-hover:translate-y-3 transition-transform duration-500 ease-in-out">
                                    Xem chi tiết
                                </p>
                                <p className="sm:hidden text-gradient underline decoration-[#E0694F] cursor-pointer pt-2">
                                    Xem chi tiết
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 lg:mt-28 px-6">
                    <p className="text-2xl lg:text-5xl font-semibold text-center">
                        Giải đáp khi mua bảo hiểm tại{" "}
                        <span className="text-gradient">VNFITE</span>
                    </p>
                </div>
                <div className="w-full px-[12%] lg:px-[16.7%] mt-6 lg:mt-16">
                    <Accordion type="single" collapsible>
                        {questionsData.map((item, index) => (
                            <AccordionItem value={`value-${index}`} key={index}>
                                <AccordionTrigger className="text-lg sm:text-xl font-medium">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="pl-4 text-gray-700">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default HealthInsurance;
