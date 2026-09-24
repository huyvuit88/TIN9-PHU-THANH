const T9={
topics:[
{id:1,name:"Máy tính và cộng đồng",desc:"Nền tảng về thế giới kĩ thuật số."},
{id:2,name:"Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",desc:"Tìm kiếm, đánh giá và sử dụng thông tin."},
{id:3,name:"Đạo đức, pháp luật và văn hóa trong môi trường số",desc:"Sử dụng môi trường số an toàn, có trách nhiệm."},
{id:4,name:"Ứng dụng tin học",desc:"Mô phỏng, trình bày, bảng tính hoặc video."},
{id:5,name:"Giải quyết vấn đề với sự trợ giúp của máy tính",desc:"Tư duy giải quyết vấn đề và lập trình."},
{id:6,name:"Hướng nghiệp với tin học",desc:"Kết nối Tin học với thế giới nghề nghiệp."}
],
lessons:[
["1",1,"Bài 1","Thế giới kĩ thuật số"],
["2",2,"Bài 2","Thông tin trong giải quyết vấn đề"],
["3",2,"Bài 3","Thực hành: Đánh giá chất lượng thông tin"],
["4",3,"Bài 4","Một số vấn đề pháp lí về sử dụng dịch vụ Internet"],
["5",4,"Bài 5","Tìm hiểu phần mềm mô phỏng"],
["6",4,"Bài 6","Thực hành: Khai thác phần mềm mô phỏng"],
["7",4,"Bài 7","Trình bày thông tin trong trao đổi và hợp tác"],
["8",4,"Bài 8","Thực hành: Sử dụng công cụ trực quan trình bày thông tin trong trao đổi và hợp tác"],
["9a",4,"Bài 9a","Sử dụng công cụ xác thực dữ liệu","9a"],
["10a",4,"Bài 10a","Sử dụng hàm COUNTIF","9a"],
["11a",4,"Bài 11a","Sử dụng hàm SUMIF","9a"],
["12a",4,"Bài 12a","Sử dụng hàm IF","9a"],
["13a",4,"Bài 13a","Hoàn thiện bảng tính quản lí tài chính gia đình","9a"],
["9b",4,"Bài 9b","Các chức năng chính của phần mềm làm video","9b"],
["10b",4,"Bài 10b","Chuẩn bị dữ liệu và dựng video","9b"],
["11b",4,"Bài 11b","Thực hành: Dựng video theo kịch bản","9b"],
["12b",4,"Bài 12b","Hoàn thành việc dựng video","9b"],
["13b",4,"Bài 13b","Biên tập và xuất video","9b"],
["14",5,"Bài 14","Giải quyết vấn đề"],
["15",5,"Bài 15","Bài toán tin học"],
["16",5,"Bài 16","Thực hành: Lập chương trình máy tính"],
["17",6,"Bài 17","Tin học và thế giới nghề nghiệp"]
].map(x=>({id:x[0],topic:x[1],code:x[2],title:x[3],branch:x[4]||""})),
levels:[
{id:"support",name:"Cần hỗ trợ",color:"#c0392b",desc:"Củng cố kiến thức nền và luyện từng bước."},
{id:"standard",name:"Đạt chuẩn",color:"#b7791f",desc:"Củng cố và tăng bài vận dụng."},
{id:"advanced",name:"Khá giỏi",color:"#138a4b",desc:"Thử thách, dự án và mở rộng."}
],
questions:[
{id:"q1",lesson:"1",text:"Công nghệ số hỗ trợ con người trong những lĩnh vực nào?",opts:["Học tập, làm việc và đời sống","Chỉ giải trí","Chỉ in tài liệu","Không có tác động"],ans:0},
{id:"q2",lesson:"1",text:"Đặc điểm quan trọng của thế giới kĩ thuật số là gì?",opts:["Thông tin có thể được tạo lập, lưu trữ và trao đổi bằng công nghệ số","Chỉ sử dụng giấy","Không thể chia sẻ dữ liệu","Không cần thiết bị số"],ans:0},
{id:"q3",lesson:"2",text:"Khi giải quyết một vấn đề, bước đầu tiên nên làm gì?",opts:["Xác định và hiểu rõ vấn đề","Viết chương trình ngay","Chia sẻ kết quả ngay","Xóa dữ liệu"],ans:0},
{id:"q4",lesson:"2",text:"Thông tin nào có giá trị hơn khi giải quyết vấn đề?",opts:["Thông tin phù hợp, chính xác và đáng tin cậy","Thông tin có tiêu đề gây chú ý","Thông tin được chia sẻ nhiều nhất","Thông tin không có nguồn"],ans:0},
{id:"q5",lesson:"3",text:"Một cách kiểm tra độ tin cậy của thông tin là gì?",opts:["Đối chiếu nhiều nguồn","Chỉ đọc tiêu đề","Tin ngay bình luận","Chia sẻ ngay"],ans:0},
{id:"q6",lesson:"3",text:"Khi đánh giá một nguồn thông tin, nên chú ý điều gì?",opts:["Nguồn, tác giả, thời điểm và bằng chứng","Màu sắc trang web","Số lượng hình ảnh","Độ dài tiêu đề"],ans:0},
{id:"q7",lesson:"4",text:"Khi sử dụng nội dung của người khác trên Internet cần chú ý điều gì?",opts:["Quyền sử dụng và bản quyền","Chỉ màu sắc","Tên tệp","Độ phân giải"],ans:0},
{id:"q8",lesson:"4",text:"Hành vi nào thể hiện sử dụng Internet có trách nhiệm?",opts:["Tôn trọng quyền riêng tư và bản quyền","Đăng thông tin cá nhân của người khác","Sao chép mọi nội dung","Chia sẻ thông tin chưa kiểm chứng"],ans:0},
{id:"q9",lesson:"5",text:"Phần mềm mô phỏng có tác dụng gì?",opts:["Mô phỏng đối tượng hoặc quá trình trong môi trường số","Chỉ dùng để gõ văn bản","Chỉ dùng để nghe nhạc","Chỉ dùng để lưu ảnh"],ans:0},
{id:"q10",lesson:"6",text:"Khi khai thác phần mềm mô phỏng, người học nên làm gì?",opts:["Quan sát, thay đổi tham số và rút ra nhận xét","Chỉ xem mà không thao tác","Xóa dữ liệu","Không cần quan sát kết quả"],ans:0},
{id:"q11",lesson:"7",text:"Công cụ trực quan giúp ích gì khi trình bày thông tin?",opts:["Giúp thông tin dễ quan sát và dễ hiểu hơn","Làm thông tin khó hiểu hơn","Xóa toàn bộ nội dung","Không có tác dụng"],ans:0},
{id:"q12",lesson:"8",text:"Khi trình bày thông tin bằng biểu đồ, cần lựa chọn loại biểu đồ phù hợp với dữ liệu.",opts:["Đúng","Sai","Không liên quan","Chỉ áp dụng cho văn bản"],ans:0},
{id:"q13",lesson:"9a",text:"Xác thực dữ liệu trong bảng tính dùng để làm gì?",opts:["Kiểm soát dữ liệu được nhập","Trang trí bảng","Xóa công thức","Tắt bảng tính"],ans:0},
{id:"q14",lesson:"10a",text:"Hàm COUNTIF dùng để làm gì?",opts:["Đếm các ô thỏa mãn điều kiện","Tính tổng theo điều kiện","Tạo biểu đồ","Sắp xếp dữ liệu"],ans:0},
{id:"q15",lesson:"11a",text:"Hàm SUMIF dùng để làm gì?",opts:["Tính tổng các giá trị thỏa mãn điều kiện","Đếm theo điều kiện","Tạo trang tính","Đổi tên tệp"],ans:0},
{id:"q16",lesson:"12a",text:"Hàm IF thường được sử dụng để làm gì?",opts:["Xử lí dữ liệu theo điều kiện","Tạo thư mục","Nén tệp","Vẽ hình"],ans:0},
{id:"q17",lesson:"14",text:"Phân tích vấn đề giúp người giải quyết vấn đề làm gì?",opts:["Xác định yêu cầu và hướng giải quyết","Tăng kích thước màn hình","Đổi mật khẩu","Tạo tài khoản"],ans:0},
{id:"q18",lesson:"15",text:"Trong một bài toán tin học, Input là gì?",opts:["Dữ liệu vào","Kết quả","Tên chương trình","Màu giao diện"],ans:0},
{id:"q19",lesson:"16",text:"Sau khi viết chương trình nên thực hiện bước nào?",opts:["Chạy thử và kiểm tra","Xóa chương trình","Chia sẻ ngay","Đóng máy"],ans:0},
{id:"q20",lesson:"17",text:"Năng lực nào hữu ích trong nhiều nghề nghiệp liên quan đến Tin học?",opts:["Giải quyết vấn đề và sử dụng công nghệ","Chỉ tốc độ gõ","Chỉ ghi nhớ lệnh","Chỉ thiết kế hình ảnh"],ans:0}
],
essayQuestions:[
{id:"tl1",text:"Em hãy trình bày các bước cơ bản để đánh giá độ tin cậy của một thông tin trên Internet."},
{id:"tl2",text:"Em hãy nêu một tình huống thực tế có thể sử dụng bảng tính để giải quyết vấn đề và mô tả cách thực hiện."},
{id:"tl3",text:"Em hãy trình bày cách xác định Input, Process và Output khi giải quyết một bài toán tin học."}
]
};
