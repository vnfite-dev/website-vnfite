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
                <div className="mt-28 w-full max-w-[1280px] px-10">
                    <p className="text-5xl font-semibold text-center">
                        Bảo hiểm sức khỏe
                    </p>

                    <div className="text-left text-2xl font-medium bg-grad pl-[3px] mb-2 mt-20">
                        <p className="bg-white w-full pl-2 text-start">
                            Thông tin sản phẩm
                        </p>
                    </div>

                    <div className="mt-8 max-w-[1280px] flex justify-between items-center text-base">
                        <div className="bg-grad max-w-[405px] w-[30%] min-h-[220px] rounded-3xl p-[2px]">
                            <div className="bg-white w-full h-full rounded-[22px] ">
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

                        <div className="bg-grad max-w-[405px] w-[30%] min-h-[220px] rounded-3xl p-[2px]">
                            <div className="bg-white w-full h-full rounded-[22px] ">
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

                        <div className="bg-grad max-w-[405px] w-[30%] min-h-[220px] rounded-3xl p-[2px]">
                            <div className="bg-white w-full h-full rounded-[22px] ">
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
                </div>

                <div className="mt-28 max-w-[1280px] px-6">
                    <p className="text-5xl font-semibold text-center mb-16">
                        Ưu đãi khi mua bảo hiểm tại{" "}
                        <span className="text-gradient">VNFITE</span>
                    </p>

                    <div className="flex flex-col md:flex-row md:space-x-14 items-center md:items-start">
                        <div className="w-full md:w-2/5">
                            <div className="max-w-[437px] w-[80%] md:w-[100%] mx-auto">
                                <Image
                                    src="/images/insure/Advantage.png"
                                    alt="Advantage"
                                    layout="responsive"
                                    width={437}
                                    height={469}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-3/5 mt-8 md:mt-0 md:px-0 space-y-9">
                            <div className="flex items-center space-x-4">
                                <div className="rounded-full bg-grad min-w-6 h-6 text-white font-light">
                                    &#10004;
                                </div>

                                <p style={{ color: "#4D4D4D" }}>
                                    Mua trực tiếp ngay trên ứng dụng VNFITE
                                </p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="rounded-full bg-grad min-w-6 h-6 text-white font-light">
                                    &#10004;
                                </div>

                                <p style={{ color: "#4D4D4D" }}>
                                    Bảo hiểm được liên kết với khoản vay VNFITE giúp bảo vệ tài
                                    chính rủi ro mất khả năng trả nợ
                                </p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="rounded-full bg-grad min-w-6 h-6 text-white font-light">
                                    &#10004;
                                </div>

                                <p style={{ color: "#4D4D4D" }}>
                                    Khách hàng có thể dễ dàng yêu cầu bồi thường hoặc tra cứu
                                    trạng thái xử lý tại VNFITE.
                                </p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="rounded-full bg-grad min-w-6 h-6 text-white font-light">
                                    &#10004;
                                </div>

                                <p style={{ color: "#4D4D4D" }}>
                                    Bảo vệ và an tâm trước rủi ro trong cuộc sống, đặc biệt khi đi
                                    kèm với các dịch vụ tài chính
                                </p>
                            </div>

                            <div className="flex space-x-4">
                                <div className="rounded-full bg-grad min-w-6 h-6 text-white font-light">
                                    &#10004;
                                </div>

                                <div style={{ color: "#4D4D4D" }}>
                                    Các ưu đãi kèm theo khi mua bảo hiểm MIC qua VNFITE <br />
                                    <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                                        <li>Giảm giá phí bảo hiểm.</li>
                                        <li>Tích điểm thưởng hoặc hoàn tiền trên ứng dụng. </li>
                                        <li>
                                            Các chương trình khuyến mãi dành riêng cho khách hàng sử
                                            dụng VNFITE.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-28 px-6">
                    <p className="text-5xl font-semibold text-center">
                        Giải đáp khi mua bảo hiểm tại{" "}
                        <span className="text-gradient">VNFITE</span>
                    </p>
                </div>
                <div className="w-full px-[12%] lg:px-[16.7%] mt-16">
                    <Accordion type="single" collapsible>
                        {questionsData.map((item, index) => (
                            <AccordionItem value={`value-${index}`} key={index}>
                                <AccordionTrigger className="text-xl font-medium">
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
