import Image from "next/image";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Insure = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null);

  const handleToggle = (index: number) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

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
      question: "Loại bảo hiểm nào được áp dụng cho các sản phẩm gọi vốn tại VNFITE?",
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
      <div className="flex justify-center items-center flex-col space-y-40">
        <div className="mt-28">
          <p className="text-5xl font-semibold text-center">
            Giới thiệu về <span className="text-gradient">VNFITE</span>
          </p>

          <div
            className="flex flex-col lg:flex-row mt-28 max-w-[1280px] space-y-28 space-x-0 lg:space-y-0 lg:space-x-7 mx-auto"
          >
            <div className="bg-[#FFF8F8] max-w-[405px] w-full h-[433px] rounded-3xl border border-[#F84F4F] relative group">
              <p className="text-xl text-center font-semibold pt-28">Bảo hiểm sức khỏe</p>
              <div className="text-[#4D4D4D] px-6 space-y-4 pt-6 font-normal">
                <p>Chi trả chi phí khám chữa bệnh nội, ngoại trú</p>
                <p>
                  Cho trẻ từ 15 ngày đến người lớn 70 tuổi
                </p>
                <p>
                  Bồi thường online siêu tốc
                </p>
                <p>
                  Bảo lãnh tại hơn 200 bệnh viện
                </p>
              </div>
              <div className="absolute left-1/2 bottom-10 -translate-x-1/2 font-semibold text-gradient text-center underline z-10 cursor-pointer">Xem chi tiết</div>

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
              <p className="text-xl text-center font-semibold pt-28">Bảo hiểm xe cơ giới</p>
              <div className="text-[#4D4D4D] px-6 space-y-4 pt-6 font-normal">
                <p>
                  Đền bù chi phí khắc phục thiệt hại của xe
                </p>
                <p>
                  Hỗ trợ chi phí sửa chữa thiết bị trên xe
                </p>
                <p>
                  Bồi thường siêu tốc
                </p>
                <p>
                  Bảo lãnh tại 1500 gara
                </p>
              </div>
              <div className="absolute left-1/2 bottom-10 -translate-x-1/2 font-semibold text-gradient text-center pt-16 underline cursor-pointer">Xem chi tiết</div>

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
              <p className="text-xl text-center font-semibold pt-28">Bảo hiểm toàn diện ngôi nhà</p>
              <div className="text-[#4D4D4D] px-6 space-y-4 pt-6 font-normal">
                <p>Chi trả toàn bộ cho những thiệt hại cháy nổ, ngập lụt</p>
                <p>
                  Áp dụng cho chủ nhà, người thuê nhà, chung cư
                </p>
                <p>
                  Chi trả tối đa 20 Tỷ đồng/vụ
                </p>

              </div>
              <div className="absolute left-1/2 bottom-10 -translate-x-1/2 font-semibold text-gradient text-center pt-16 underline cursor-pointer">Xem chi tiết</div>

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

            <div className="w-full md:w-3/5 mt-4 md:mt-0 md:px-0 space-y-9">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-grad w-6 h-6 text-white font-light">
                  &#10004;
                </div>

                <p style={{ color: "#4D4D4D" }}>
                  Mua trực tiếp ngay trên ứng dụng VNFITE
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-grad w-6 h-6 text-white font-light">
                  &#10004;
                </div>

                <p style={{ color: "#4D4D4D" }}>
                  Bảo hiểm được liên kết với khoản vay VNFITE giúp bảo vệ tài
                  chính rủi ro mất khả năng trả nợ
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-grad w-6 h-6 text-white font-light">
                  &#10004;
                </div>

                <p style={{ color: "#4D4D4D" }}>
                  Khách hàng có thể dễ dàng yêu cầu bồi thường hoặc tra cứu
                  trạng thái xử lý tại VNFITE.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-grad w-6 h-6 text-white font-light">
                  &#10004;
                </div>

                <p style={{ color: "#4D4D4D" }}>
                  Bảo vệ và an tâm trước rủi ro trong cuộc sống, đặc biệt khi đi
                  kèm với các dịch vụ tài chính
                </p>
              </div>

              <div className="flex space-x-4">
                <div className="rounded-full bg-grad w-6 h-6 text-white font-light">
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
          <p className="text-5xl font-semibold text-center mb-16">
            Giải đáp khi mua bảo hiểm tại{" "}
            <span className="text-gradient">VNFITE</span>
          </p>

          <div className="max-w-[1280px] mx-auto px-6">
            {questionsData.map((item, index) => (
              <div key={index} className={index != 0 ? "border-t border-[#E6E6E6]" : ""}>
                <div
                  className="flex justify-between items-center cursor-pointer my-4"
                  onClick={() => handleToggle(index)}
                >
                  <p
                    className={`text-xl transition-colors duration-500 ${isOpen === index ? "text-gradient" : ""
                      }`}
                  >
                    {item.question}
                  </p>
                  <div
                    className={`text-xl font-thin transition-transform duration-500 
                      ${isOpen === index ? "rotate-180" : ""}
                    `}
                    style={{
                      color: "#CF1313",
                    }}
                  >
                    <div style={{
                      transform: "scaleY(0.7)",
                      display: "inline-block"
                    }}>
                      {"v"}
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-2 text-gray-800 overflow-hidden transition-all duration-500 ease-in-out my-4 mx-4
                    ${isOpen === index
                      ? "max-h-[500px] opacity-100 transform translate-y-0"
                      : "max-h-0 opacity-0 transform translate-y-5"
                    }
                  `}
                  style={{
                    transitionProperty: "max-height, opacity, transform",
                    color: "#666666"
                  }}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

};

export default Insure;
