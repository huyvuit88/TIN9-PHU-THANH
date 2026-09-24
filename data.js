const T9 = {

  topics: [
    {
      id: 1,
      name: "Máy tính và cộng đồng",
      desc: "Nền tảng về thế giới kĩ thuật số."
    },
    {
      id: 2,
      name: "Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
      desc: "Tìm kiếm, đánh giá và sử dụng thông tin."
    },
    {
      id: 3,
      name: "Đạo đức, pháp luật và văn hóa trong môi trường số",
      desc: "Sử dụng môi trường số an toàn, có trách nhiệm."
    },
    {
      id: 4,
      name: "Ứng dụng tin học",
      desc: "Mô phỏng, trình bày, bảng tính hoặc video."
    },
    {
      id: 5,
      name: "Giải quyết vấn đề với sự trợ giúp của máy tính",
      desc: "Tư duy giải quyết vấn đề và lập trình."
    },
    {
      id: 6,
      name: "Hướng nghiệp với tin học",
      desc: "Kết nối Tin học với thế giới nghề nghiệp."
    }
  ],

  lessons: [
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
  ].map(x => ({
    id:x[0],
    topic:x[1],
    code:x[2],
    title:x[3],
    branch:x[4] || ""
  })),

  levels: [
    {
      id:"support",
      name:"Cần hỗ trợ",
      color:"#c0392b",
      desc:"Củng cố kiến thức nền và luyện từng bước."
    },
    {
      id:"standard",
      name:"Đạt chuẩn",
      color:"#b7791f",
      desc:"Củng cố và tăng bài vận dụng."
    },
    {
      id:"advanced",
      name:"Khá giỏi",
      color:"#138a4b",
      desc:"Thử thách, dự án và mở rộng."
    }
  ],

  questions: [

    {
      id:"q1",
      lesson:"1",
      text:"Đặc điểm nào phù hợp với thế giới kĩ thuật số?",
      opts:[
        "Chỉ sử dụng tài liệu giấy",
        "Thông tin có thể được tạo, lưu trữ, xử lí và trao đổi bằng công nghệ số",
        "Không thể chia sẻ dữ liệu",
        "Không cần thiết bị số"
      ],
      ans:1
    },

    {
      id:"q2",
      lesson:"1",
      text:"Công nghệ số có thể hỗ trợ con người trong lĩnh vực nào?",
      opts:[
        "Chỉ giải trí",
        "Chỉ in tài liệu",
        "Học tập, làm việc, giao tiếp và đời sống",
        "Không có tác động"
      ],
      ans:2
    },

    {
      id:"q3",
      lesson:"2",
      text:"Khi bắt đầu giải quyết một vấn đề, việc nào nên được thực hiện trước?",
      opts:[
        "Xác định và hiểu rõ vấn đề",
        "Chia sẻ kết quả ngay",
        "Xóa dữ liệu",
        "Viết chương trình ngay lập tức"
      ],
      ans:0
    },

    {
      id:"q4",
      lesson:"2",
      text:"Thông tin nào có giá trị hơn khi giải quyết vấn đề?",
      opts:[
        "Thông tin có tiêu đề gây chú ý",
        "Thông tin được chia sẻ nhiều nhất",
        "Thông tin không có nguồn",
        "Thông tin phù hợp, chính xác và đáng tin cậy"
      ],
      ans:3
    },

    {
      id:"q5",
      lesson:"3",
      text:"Cách nào giúp kiểm tra độ tin cậy của thông tin trên Internet?",
      opts:[
        "Chỉ đọc tiêu đề",
        "Đối chiếu với các nguồn phù hợp khác",
        "Tin ngay bình luận",
        "Chia sẻ ngay"
      ],
      ans:1
    },

    {
      id:"q6",
      lesson:"3",
      text:"Khi đánh giá một nguồn thông tin, yếu tố nào cần được xem xét?",
      opts:[
        "Màu sắc trang web",
        "Số lượng hình ảnh",
        "Nguồn, tác giả, thời điểm và bằng chứng",
        "Độ dài tiêu đề"
      ],
      ans:2
    },

    {
      id:"q7",
      lesson:"4",
      text:"Khi sử dụng nội dung của người khác trên Internet, cần chú ý điều gì?",
      opts:[
        "Quyền sử dụng và bản quyền",
        "Chỉ màu sắc",
        "Tên tệp",
        "Độ phân giải"
      ],
      ans:0
    },

    {
      id:"q8",
      lesson:"4",
      text:"Hành vi nào thể hiện sử dụng Internet có trách nhiệm?",
      opts:[
        "Đăng thông tin cá nhân của người khác",
        "Sao chép mọi nội dung",
        "Chia sẻ thông tin chưa kiểm chứng",
        "Tôn trọng quyền riêng tư và quyền tác giả"
      ],
      ans:3
    },

    {
      id:"q9",
      lesson:"5",
      text:"Phần mềm mô phỏng chủ yếu có tác dụng gì?",
      opts:[
        "Chỉ dùng để gõ văn bản",
        "Mô phỏng đối tượng hoặc quá trình trong môi trường số",
        "Chỉ dùng để nghe nhạc",
        "Chỉ dùng để lưu ảnh"
      ],
      ans:1
    },

    {
      id:"q10",
      lesson:"6",
      text:"Khi khai thác phần mềm mô phỏng, người học nên làm gì?",
      opts:[
        "Chỉ xem mà không thao tác",
        "Xóa dữ liệu",
        "Quan sát, thay đổi tham số và rút ra nhận xét",
        "Không cần quan sát kết quả"
      ],
      ans:2
    },

    {
      id:"q11",
      lesson:"7",
      text:"Công cụ trực quan có thể giúp việc trình bày thông tin như thế nào?",
      opts:[
        "Giúp thông tin dễ quan sát và dễ hiểu hơn",
        "Làm thông tin khó hiểu hơn",
        "Xóa toàn bộ nội dung",
        "Không có tác dụng"
      ],
      ans:0
    },

    {
      id:"q12",
      lesson:"8",
      text:"Khi sử dụng biểu đồ, lựa chọn loại biểu đồ nên dựa vào dữ liệu và mục đích trình bày.",
      opts:[
        "Sai",
        "Chỉ áp dụng cho văn bản",
        "Đúng",
        "Không liên quan"
      ],
      ans:2
    },

    {
      id:"q13",
      lesson:"9a",
      text:"Xác thực dữ liệu trong bảng tính dùng để làm gì?",
      opts:[
        "Trang trí bảng",
        "Xóa công thức",
        "Tắt bảng tính",
        "Kiểm soát dữ liệu được nhập"
      ],
      ans:3
    },

    {
      id:"q14",
      lesson:"10a",
      text:"Hàm COUNTIF dùng để làm gì?",
      opts:[
        "Đếm các ô thỏa mãn điều kiện",
        "Tính tổng theo điều kiện",
        "Tạo biểu đồ",
        "Sắp xếp dữ liệu"
      ],
      ans:0
    },

    {
      id:"q15",
      lesson:"11a",
      text:"Hàm SUMIF dùng để làm gì?",
      opts:[
        "Đếm theo điều kiện",
        "Tính tổng các giá trị thỏa mãn điều kiện",
        "Tạo trang tính",
        "Đổi tên tệp"
      ],
      ans:1
    },

    {
      id:"q16",
      lesson:"12a",
      text:"Hàm IF thường được sử dụng để làm gì?",
      opts:[
        "Tạo thư mục",
        "Nén tệp",
        "Xử lí dữ liệu theo điều kiện",
        "Vẽ hình"
      ],
      ans:2
    },

    {
      id:"q17",
      lesson:"14",
      text:"Phân tích vấn đề giúp người giải quyết vấn đề làm gì?",
      opts:[
        "Tăng kích thước màn hình",
        "Đổi mật khẩu",
        "Tạo tài khoản",
        "Xác định yêu cầu và hướng giải quyết"
      ],
      ans:3
    },

    {
      id:"q18",
      lesson:"15",
      text:"Trong một bài toán tin học, Input là gì?",
      opts:[
        "Dữ liệu vào",
        "Kết quả",
        "Tên chương trình",
        "Màu giao diện"
      ],
      ans:0
    },

    {
      id:"q19",
      lesson:"16",
      text:"Sau khi viết chương trình, bước nào giúp phát hiện kết quả hoặc lỗi của chương trình?",
      opts:[
        "Xóa chương trình",
        "Chạy thử và kiểm tra",
        "Chia sẻ ngay",
        "Đóng máy"
      ],
      ans:1
    },

    {
      id:"q20",
      lesson:"17",
      text:"Năng lực nào hữu ích trong nhiều nghề nghiệp liên quan đến Tin học?",
      opts:[
        "Chỉ tốc độ gõ",
        "Chỉ ghi nhớ lệnh",
        "Giải quyết vấn đề và sử dụng công nghệ",
        "Chỉ thiết kế hình ảnh"
      ],
      ans:2
    }

  ],

  essayQuestions: [

    {
      id:"tl1",
      text:"Em hãy trình bày các bước cơ bản để đánh giá độ tin cậy của một thông tin trên Internet."
    },

    {
      id:"tl2",
      text:"Em hãy nêu một tình huống thực tế có thể sử dụng bảng tính để giải quyết vấn đề và mô tả cách thực hiện."
    },

    {
      id:"tl3",
      text:"Em hãy trình bày cách xác định Input, Process và Output khi giải quyết một bài toán tin học."
    }

  ]

};
