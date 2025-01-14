import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const Insure = () => {
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
        <div className="mt-12 lg:mt-28">
          <p className="text-2xl lg:text-5xl font-semibold text-center">
            Giới thiệu về <span className="text-gradient">VNFITE</span>
          </p>

          <div className="flex flex-col lg:flex-row mt-28 max-w-[1280px] space-y-28 space-x-0 lg:space-y-0 lg:space-x-7 mx-auto px-8">
            <div className="bg-[#FFF8F8] max-w-[405px] w-full h-[433px] rounded-3xl border border-[#F84F4F] relative group">
              <p className="text-xl text-center font-semibold pt-28">
                Bảo hiểm sức khỏe
              </p>
              <div className="text-[#4D4D4D] px-6 space-y-4 pt-6 font-normal">
                <p>Chi trả chi phí khám chữa bệnh nội, ngoại trú</p>
                <p>Cho trẻ từ 15 ngày đến người lớn 70 tuổi</p>
                <p>Bồi thường online siêu tốc</p>
                <p>Bảo lãnh tại hơn 200 bệnh viện</p>
              </div>
              <Link
                href={"/insure/health-insurance"}
                className="absolute left-1/2 bottom-10 -translate-x-1/2 font-semibold text-gradient text-center underline z-10 cursor-pointer"
              >
                Xem chi tiết
              </Link>

              <div className="absolute w-40 h-40 bg-white rounded-4xl top-[-80px] left-1/2 -translate-x-1/2 flex items-center justify-center border border-[#F84F4F] z-0">
                <div className="w-32 h-32 bg-grad rounded-3xl flex items-center justify-center overflow-hidden z-50 group-hover:translate-y-[-20px] transition-all duration-300 ease-in-out">
                  <div className="w-20 h-20">
                    <Image
                      src="/images/insure/HealthInsure.png"
                      alt="HealthInsure"
                      layout="responsive"
                      width={128}
                      height={128}
                    />
                  </div>
                </div>
                <div className="absolute bg-white w-44 h-20 -top-[2px] z-10" />
              </div>
            </div>

            <div className="bg-[#FFF8F8] max-w-[405px] w-full h-[433px] rounded-3xl border border-[#F84F4F] relative group">
              <p className="text-xl text-center font-semibold pt-28">
                Bảo hiểm xe cơ giới
              </p>
              <div className="text-[#4D4D4D] px-6 space-y-4 pt-6 font-normal">
                <p>Đền bù chi phí khắc phục thiệt hại của xe</p>
                <p>Hỗ trợ chi phí sửa chữa thiết bị trên xe</p>
                <p>Bồi thường siêu tốc</p>
                <p>Bảo lãnh tại 1500 gara</p>
              </div>
              <div className="absolute left-1/2 bottom-10 -translate-x-1/2 font-semibold text-gradient text-center pt-16 underline cursor-pointer">
                Xem chi tiết
              </div>

              <div className="absolute w-40 h-40 bg-white rounded-4xl top-[-80px] left-1/2 -translate-x-1/2 flex items-center justify-center border border-[#F84F4F] z-0">
                <div className="w-32 h-32 bg-grad rounded-3xl flex items-center justify-center overflow-hidden z-50 group-hover:translate-y-[-20px] transition-all duration-300 ease-in-out">
                  <div className="w-20 h-20">
                    <Image
                      src="/images/insure/CarInsure.png"
                      alt="HealthInsure"
                      layout="responsive"
                      width={128}
                      height={128}
                    />
                  </div>
                </div>
                <div className="absolute bg-white w-44 h-20 -top-[2px] z-10" />
              </div>
            </div>

            <div className="bg-[#FFF8F8] max-w-[405px] w-full h-[433px] rounded-3xl border border-[#F84F4F] relative group">
              <p className="text-xl text-center font-semibold pt-28">
                Bảo hiểm toàn diện ngôi nhà
              </p>
              <div className="text-[#4D4D4D] px-6 space-y-4 pt-6 font-normal">
                <p>Chi trả toàn bộ cho những thiệt hại cháy nổ, ngập lụt</p>
                <p>Áp dụng cho chủ nhà, người thuê nhà, chung cư</p>
                <p>Chi trả tối đa 20 Tỷ đồng/vụ</p>
              </div>
              <div className="absolute left-1/2 bottom-10 -translate-x-1/2 font-semibold text-gradient text-center pt-16 underline cursor-pointer">
                Xem chi tiết
              </div>

              <div className="absolute w-40 h-40 bg-white rounded-4xl top-[-80px] left-1/2 -translate-x-1/2 flex items-center justify-center border border-[#F84F4F] z-0">
                <div className="w-32 h-32 bg-grad rounded-3xl flex items-center justify-center overflow-hidden z-50 group-hover:translate-y-[-20px] transition-all duration-300 ease-in-out">
                  <div className="w-20 h-20">
                    <Image
                      src="/images/insure/HomeInsure.png"
                      alt="HealthInsure"
                      layout="responsive"
                      width={128}
                      height={128}
                    />
                  </div>
                </div>
                <div className="absolute bg-white w-44 h-20 -top-[2px] z-10" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-28 max-w-[1280px] px-6">
          <p className="text-2xl lg:text-5xl font-semibold text-center mb-8 lg:mb-16">
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

            <div className="w-full md:w-3/5 mt-8 md:mt-0 px-4 sm:px-10 md:px-0 space-y-9">
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

export default Insure;
