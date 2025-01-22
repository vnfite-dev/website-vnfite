const itemProduct = [
  {
    id: 2,
    title: "Gọi vốn siêu tốc",
    info: `Số tiền vay tối đa: 15,000,000 VND (Mười lăm triệu đồng).
      Trả gốc: Từng lần/Gốc trả cuối kỳ. Tiền lãi được trừ ngay vào vốn gốc sau khi nhận nợ.
      Trả lãi: Lãi trả 01 lần vào ngày nhận nợ, tiền lãi được trừ ngay vào vốn gốc sau khi nhận nợ.
      Đăng ký trực tuyến: Cung cấp CMND/CCCD, số điện thoại cá nhân và số tham chiếu (3 người thân, 1 bạn bè/đồng nghiệp)`,
    time: `Thời hạn gọi vốn: 7 ngày, 9 ngày hoặc 15 ngày.
      Duyệt hồ sơ nhanh: Phê duyệt trong 15 phút.`,
    condition: `Công dân Việt Nam từ 20 - 60 tuổi.
      Điểm xếp hạng tín nhiệm khách hàng (Scoring) theo tiêu chí của Mobiphone, các đối tác liên quan và quy định của VNFITE.`,
  },
  {
    id: 3,
    title: "Gọi vốn cho nhân viên văn phòng",
    info: `Số tiền vay tối đa: 30,000,000 VND (Ba mươi triệu đồng).
      Đăng ký: Cung cấp CMND/CCCD, số điện thoại cá nhân, số tham chiếu (3 người thân, 1 bạn bè/đồng nghiệp), và chứng từ chứng minh thu nhập (hợp đồng lao động, sao kê lương 3 tháng gần nhất)
      Trả gốc: Phân kỳ hàng tháng.
      Trả lãi: Hàng tháng theo dư nợ thực tế: Tiền lãi = [(số tiền vay * lãi suất nhận vốn * số ngày nhận nợ)] / (365 ngày)`,
    time: `Thời hạn gọi vốn: Từ 1 - 6 tháng.`,
    condition: `Công dân Việt Nam từ 18 - 60 tuổi, là nhân viên văn phòng có hợp đồng lao động, cư trú tại các tỉnh thành do VNFITE quy định.
      Điểm tín nhiệm tối thiểu 450.
      Thu nhập trung bình 3 tháng gần nhất từ 4,5 triệu đồng/tháng, với nguồn trả nợ tính bằng 40% thu nhập chứng minh được.`,
  },
  {
    id: 4,
    title: "Gọi vốn cho công nhân",
    info: `Số tiền vay tối đa: 20,000,000 VND (Hai mươi triệu đồng).
      Đăng ký: Cung cấp CMND/CCCD, số điện thoại cá nhân, số tham chiếu (3 người thân, 1 bạn bè/đồng nghiệp), và chứng từ chứng minh thu nhập (hợp đồng lao động, sao kê lương 3 tháng gần nhất)
      Trả gốc: Phân kỳ hàng tháng.
      Trả lãi: Hàng tháng theo dư nợ thực tế`,
    time: `Thời hạn gọi vốn: Từ 1 - 6 tháng.`,
    condition: `Công dân Việt Nam từ 18 - 60 tuổi, là công nhân có hợp đồng lao động, cư trú tại khu vực VNFITE quy định.
      Điểm tín nhiệm tối thiểu 450.
      Thu nhập trung bình 3 tháng gần nhất từ 4 triệu đồng/tháng, nguồn trả nợ tính 40% thu nhập chứng minh được.`,
  },
  {
    id: 5,
    title: "Gọi vốn dành cho khách hàng doanh nghiệp",
    info: `Số tiền vay tối đa: 1 tỷ đồng.
      Trả gốc: Phân kỳ hàng tháng.
      Trả lãi: Hàng tháng theo dư nợ thực tế`,
    time: `Thời hạn gọi vốn: Từ 1 năm - 3 năm`,
    condition: `Đăng ký KD
      Cccd của chủ doanh nghiệp và các cổ đông >20%
      Báo cáo tài chính thuế, nội bộ 2023,2024 
      Nhu cầu vốn và mục đích sử dụng vốn`,
  },
  {
    id: 6,
    title: "Gọi vốn cho hộ kinh doanh",
    info: `Số tiền vay tối đa: 300 triệu Việt Nam đồng
      Trả gốc: Phân kỳ hàng tháng.
      Trả lãi: Hàng tháng theo dư nợ thực tế`,
    time: `Thời hạn gọi vốn: 3 tháng - 1 năm`,
    condition: `Các cá thể tại các trung tâm thương mại, khu phố, chợ sầm uất có thời gian hoạt động kinh doanh tối thiểu 06 tháng trở lên.
      Các hộ kinh doanh này không thuộc các ngành nghề kinh doanh bị cấm, thuộc các nhóm ngành nghề kinh doanh theo định hướng của VNFITE theo từng thời kỳ, đại diện kinh doanh cũng chưa từng phát sinh nợ nhóm 2 trở lên trong vòng 12 tháng tính từ thời điểm xét duyệt gọi vốn`,
  },
  {
    id: 7,
    title: "Gọi vốn cho hộ kinh doanh online",
    info: `Số tiền vay tối đa: 100 triệu Việt Nam đồng
      Trả gốc: Phân kỳ hàng tháng.
      Trả lãi: Hàng tháng theo dư nợ thực tế`,
    time: `Thời hạn gọi vốn: 3 tháng - 1 năm`,
    condition: `Các gian hàng kinh doanh trên các trang web thương mại điện tử tối thiểu từ 06 tháng trở lên.
      Đại diện kinh doanh chưa từng phát sinh nợ nhóm 2 trở lên trong vòng 12 tháng tính đến thời điểm xét duyệt gọi vốn và có đầy đủ năng lực pháp lý.`,
  },
];

export default itemProduct;
