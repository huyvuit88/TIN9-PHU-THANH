const T9={
topics:[
{id:1,name:"Máy tính và cộng đồng",desc:"Nền tảng về thế giới kĩ thuật số."},
{id:2,name:"Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",desc:"Tìm kiếm, đánh giá và sử dụng thông tin."},
{id:3,name:"Đạo đức, pháp luật và văn hóa trong môi trường số",desc:"Sử dụng môi trường số an toàn, có trách nhiệm."},
{id:4,name:"Ứng dụng tin học",desc:"Mô phỏng, trình bày, bảng tính hoặc video."},
{id:5,name:"Giải quyết vấn đề với sự trợ giúp của máy tính",desc:"Tư duy giải quyết vấn đề và lập trình."},
{id:6,name:"Hướng nghiệp với tin học",desc:"Kết nối Tin học với thế giới nghề nghiệp."}],
lessons:[
["1",1,"Bài 1","Thế giới kĩ thuật số"],["2",2,"Bài 2","Thông tin trong giải quyết vấn đề"],["3",2,"Bài 3","Thực hành: Đánh giá chất lượng thông tin"],["4",3,"Bài 4","Một số vấn đề pháp lí về sử dụng dịch vụ Internet"],["5",4,"Bài 5","Tìm hiểu phần mềm mô phỏng"],["6",4,"Bài 6","Thực hành: Khai thác phần mềm mô phỏng"],["7",4,"Bài 7","Trình bày thông tin trong trao đổi và hợp tác"],["8",4,"Bài 8","Thực hành: Sử dụng công cụ trực quan trình bày thông tin trong trao đổi và hợp tác"],["9a",4,"Bài 9a","Sử dụng công cụ xác thực dữ liệu","9a"],["10a",4,"Bài 10a","Sử dụng hàm COUNTIF","9a"],["11a",4,"Bài 11a","Sử dụng hàm SUMIF","9a"],["12a",4,"Bài 12a","Sử dụng hàm IF","9a"],["13a",4,"Bài 13a","Hoàn thiện bảng tính quản lí tài chính gia đình","9a"],["9b",4,"Bài 9b","Các chức năng chính của phần mềm làm video","9b"],["10b",4,"Bài 10b","Chuẩn bị dữ liệu và dựng video","9b"],["11b",4,"Bài 11b","Thực hành: Dựng video theo kịch bản","9b"],["12b",4,"Bài 12b","Hoàn thành việc dựng video","9b"],["13b",4,"Bài 13b","Biên tập và xuất video","9b"],["14",5,"Bài 14","Giải quyết vấn đề"],["15",5,"Bài 15","Bài toán tin học"],["16",5,"Bài 16","Thực hành: Lập chương trình máy tính"],["17",6,"Bài 17","Tin học và thế giới nghề nghiệp"]].map(x=>({id:x[0],topic:x[1],code:x[2],title:x[3],branch:x[4]||""})),
levels:[
{id:"support",name:"Cần hỗ trợ",color:"#c0392b",desc:"Củng cố kiến thức nền và luyện từng bước."},
{id:"standard",name:"Đạt chuẩn",color:"#b7791f",desc:"Củng cố và tăng bài vận dụng."},
{id:"advanced",name:"Khá giỏi",color:"#138a4b",desc:"Thử thách, dự án và mở rộng."}],
questions:[
{id:"q1",lesson:"1",text:"Công nghệ số hỗ trợ điều gì?",opts:["Học tập và đời sống","Chỉ giải trí","Chỉ in tài liệu","Không có tác động"],ans:0},
{id:"q2",lesson:"2",text:"Khi giải quyết vấn đề, bước nào nên làm trước?",opts:["Hiểu rõ yêu cầu","Viết mã ngay","Chia sẻ ngay","Xóa dữ liệu"],ans:0},
{id:"q3",lesson:"3",text:"Một cách kiểm tra độ tin cậy của thông tin là?",opts:["Đối chiếu nhiều nguồn","Tin tiêu đề","Chỉ đọc bình luận","Chia sẻ ngay"],ans:0},
{id:"q4",lesson:"4",text:"Khi sử dụng nội dung của người khác cần chú ý?",opts:["Quyền sử dụng và bản quyền","Chỉ màu sắc","Tên file","Độ phân giải"],ans:0},
{id:"q5",lesson:"9a",text:"Xác thực dữ liệu dùng để?",opts:["Kiểm soát dữ liệu nhập","Trang trí bảng","Xóa công thức","Tắt bảng tính"],ans:0},
{id:"q6",lesson:"10a",text:"COUNTIF dùng để?",opts:["Đếm theo điều kiện","Tính tổng theo điều kiện","Tạo biểu đồ","Sắp xếp"],ans:0},
{id:"q7",lesson:"11a",text:"SUMIF dùng để?",opts:["Tính tổng theo điều kiện","Đếm theo điều kiện","Tạo trang tính","Đổi tên file"],ans:0},
{id:"q8",lesson:"12a",text:"IF thường dùng để?",opts:["Xử lí theo điều kiện","Tạo thư mục","Nén file","Vẽ hình"],ans:0},
{id:"q9",lesson:"14",text:"Phân tích vấn đề giúp gì?",opts:["Xác định cách giải quyết","Tăng kích thước màn hình","Đổi mật khẩu","Tạo tài khoản"],ans:0},
{id:"q10",lesson:"15",text:"Input của bài toán là?",opts:["Dữ liệu vào","Kết quả","Tên chương trình","Màu giao diện"],ans:0},
{id:"q11",lesson:"16",text:"Sau khi viết chương trình nên?",opts:["Chạy thử và kiểm tra","Xóa mã","Chia sẻ ngay","Đóng máy"],ans:0},
{id:"q12",lesson:"17",text:"Năng lực hữu ích trong nhiều nghề số?",opts:["Giải quyết vấn đề và công nghệ","Chỉ tốc độ gõ","Chỉ nhớ lệnh","Chỉ thiết kế"],ans:0}]
};