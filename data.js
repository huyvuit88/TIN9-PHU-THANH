const T9 = {

  topics: [
    { id:1, name:"Máy tính và cộng đồng", desc:"Nền tảng về thế giới kĩ thuật số." },
    { id:2, name:"Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", desc:"Tìm kiếm, đánh giá và sử dụng thông tin." },
    { id:3, name:"Đạo đức, pháp luật và văn hóa trong môi trường số", desc:"Sử dụng môi trường số an toàn, có trách nhiệm." },
    { id:4, name:"Ứng dụng tin học", desc:"Mô phỏng, trình bày, bảng tính hoặc video." },
    { id:5, name:"Giải quyết vấn đề với sự trợ giúp của máy tính", desc:"Tư duy giải quyết vấn đề và lập trình." },
    { id:6, name:"Hướng nghiệp với tin học", desc:"Kết nối Tin học với thế giới nghề nghiệp." }
  ],

  lessons: [
    { id:"1", topic:1, code:"Bài 1", title:"Thế giới kĩ thuật số", branch:"" },
    { id:"2", topic:2, code:"Bài 2", title:"Thông tin trong giải quyết vấn đề", branch:"" },
    { id:"3", topic:2, code:"Bài 3", title:"Thực hành: Đánh giá chất lượng thông tin", branch:"" },
    { id:"4", topic:3, code:"Bài 4", title:"Một số vấn đề pháp lí về sử dụng dịch vụ Internet", branch:"" },
    { id:"5", topic:4, code:"Bài 5", title:"Tìm hiểu phần mềm mô phỏng", branch:"" },
    { id:"6", topic:4, code:"Bài 6", title:"Thực hành: Khai thác phần mềm mô phỏng", branch:"" },
    { id:"7", topic:4, code:"Bài 7", title:"Trình bày thông tin trong trao đổi và hợp tác", branch:"" },
    { id:"8", topic:4, code:"Bài 8", title:"Thực hành: Sử dụng công cụ trực quan trình bày thông tin trong trao đổi và hợp tác", branch:"" },
    { id:"9a", topic:4, code:"Bài 9a", title:"Sử dụng công cụ xác thực dữ liệu", branch:"9a" },
    { id:"10a", topic:4, code:"Bài 10a", title:"Sử dụng hàm COUNTIF", branch:"9a" },
    { id:"11a", topic:4, code:"Bài 11a", title:"Sử dụng hàm SUMIF", branch:"9a" },
    { id:"12a", topic:4, code:"Bài 12a", title:"Sử dụng hàm IF", branch:"9a" },
    { id:"13a", topic:4, code:"Bài 13a", title:"Hoàn thiện bảng tính quản lí tài chính gia đình", branch:"9a" },
    { id:"9b", topic:4, code:"Bài 9b", title:"Các chức năng chính của phần mềm làm video", branch:"9b" },
    { id:"10b", topic:4, code:"Bài 10b", title:"Chuẩn bị dữ liệu và dựng video", branch:"9b" },
    { id:"11b", topic:4, code:"Bài 11b", title:"Thực hành: Dựng video theo kịch bản", branch:"9b" },
    { id:"12b", topic:4, code:"Bài 12b", title:"Hoàn thành việc dựng video", branch:"9b" },
    { id:"13b", topic:4, code:"Bài 13b", title:"Biên tập và xuất video", branch:"9b" },
    { id:"14", topic:5, code:"Bài 14", title:"Giải quyết vấn đề", branch:"" },
    { id:"15", topic:5, code:"Bài 15", title:"Bài toán tin học", branch:"" },
    { id:"16", topic:5, code:"Bài 16", title:"Thực hành: Lập chương trình máy tính", branch:"" },
    { id:"17", topic:6, code:"Bài 17", title:"Tin học và thế giới nghề nghiệp", branch:"" }
  ],

  levels: [
    {id:"support",name:"Cần hỗ trợ",color:"#c0392b",desc:"Củng cố kiến thức nền và luyện từng bước."},
    {id:"standard",name:"Đạt chuẩn",color:"#b7791f",desc:"Củng cố và tăng bài vận dụng."},
    {id:"advanced",name:"Khá giỏi",color:"#138a4b",desc:"Thử thách, dự án và mở rộng."}
  ],

  questions: [],
  essayQuestions: []
};

const T9_QUESTION_SEEDS = {
  "1": [
    "Thế giới kĩ thuật số là môi trường trong đó dữ liệu được tạo, lưu trữ, xử lí và trao đổi bằng công nghệ số.",
    "Dữ liệu số có thể được sao chép, truyền tải và xử lí bằng các thiết bị và hệ thống số.",
    "Công nghệ số hỗ trợ học tập, làm việc, giao tiếp và nhiều hoạt động trong đời sống.",
    "Thiết bị số có thể kết nối với mạng để trao đổi dữ liệu và sử dụng dịch vụ số.",
    "Dữ liệu và thông tin số cần được bảo vệ trước nguy cơ mất mát, lộ lọt hoặc sử dụng sai mục đích.",
    "Kĩ năng sử dụng công nghệ số an toàn và có trách nhiệm là một phần quan trọng của công dân số.",
    "Môi trường số tạo điều kiện chia sẻ thông tin nhanh nhưng cũng đòi hỏi kiểm chứng thông tin.",
    "Sử dụng công nghệ số hiệu quả cần kết hợp kiến thức, kĩ năng và ý thức trách nhiệm.",
    "Một lợi ích của số hóa là hỗ trợ lưu trữ và tìm kiếm dữ liệu thuận tiện hơn.",
    "Khi tham gia môi trường số, người dùng cần chú ý quyền riêng tư, an toàn và cách ứng xử phù hợp."
  ],
  "2": [
    "Giải quyết vấn đề cần xác định rõ vấn đề và yêu cầu trước khi lựa chọn thông tin.",
    "Thông tin được sử dụng để hiểu vấn đề, so sánh phương án và hỗ trợ ra quyết định.",
    "Cần xác định loại thông tin cần tìm trước khi thực hiện tìm kiếm.",
    "Từ khóa tìm kiếm nên thể hiện nội dung cốt lõi của nhu cầu thông tin.",
    "Thông tin phù hợp phải đáp ứng đúng câu hỏi hoặc yêu cầu của vấn đề.",
    "Độ chính xác và độ tin cậy của thông tin ảnh hưởng đến chất lượng quyết định.",
    "Có thể đối chiếu nhiều nguồn để giảm nguy cơ sử dụng thông tin sai.",
    "Thông tin cần được chọn lọc thay vì sử dụng mọi kết quả tìm được.",
    "Sau khi thu thập thông tin, cần phân tích và liên hệ với yêu cầu của vấn đề.",
    "Kết quả giải quyết vấn đề nên dựa trên thông tin có căn cứ và phù hợp mục tiêu."
  ],
  "3": [
    "Đánh giá chất lượng thông tin cần xem xét nguồn cung cấp và tác giả.",
    "Thời điểm công bố giúp xác định thông tin có còn phù hợp với vấn đề hay không.",
    "Mục đích của nguồn thông tin có thể ảnh hưởng đến cách nội dung được trình bày.",
    "Bằng chứng và dữ liệu hỗ trợ là căn cứ quan trọng khi đánh giá thông tin.",
    "Có thể kiểm tra chéo thông tin bằng các nguồn độc lập và đáng tin cậy.",
    "Một thông tin được chia sẻ nhiều không đồng nghĩa với thông tin đó chính xác.",
    "Tiêu đề gây chú ý không phải là căn cứ đủ để kết luận nội dung đúng.",
    "Khi nguồn không rõ ràng, cần thận trọng trước khi sử dụng hoặc chia sẻ.",
    "Độ phù hợp của thông tin phụ thuộc vào câu hỏi và mục đích sử dụng.",
    "Đánh giá thông tin giúp hạn chế quyết định dựa trên nội dung sai hoặc thiếu căn cứ."
  ],
  "4": [
    "Khi sử dụng Internet cần tôn trọng quyền tác giả và quyền sử dụng nội dung.",
    "Không nên tự ý sao chép và công bố tác phẩm của người khác như sản phẩm của mình.",
    "Thông tin cá nhân của người khác không nên được công khai khi chưa có căn cứ hoặc sự đồng ý phù hợp.",
    "Điều khoản sử dụng của dịch vụ Internet cần được đọc và tuân thủ.",
    "Hành vi trên Internet vẫn có thể liên quan đến trách nhiệm pháp lí.",
    "Sử dụng tài khoản và dịch vụ số cần tuân thủ quy định của nhà cung cấp và pháp luật.",
    "Chia sẻ nội dung chưa kiểm chứng có thể gây ảnh hưởng đến người khác và cộng đồng.",
    "Cần phân biệt quyền truy cập một nội dung với quyền sao chép hoặc phân phối nội dung đó.",
    "Bảo vệ mật khẩu và thông tin tài khoản là một phần của sử dụng dịch vụ Internet an toàn.",
    "Ứng xử văn minh trên mạng cần tôn trọng người khác và không xâm phạm quyền riêng tư."
  ],
  "5": [
    "Phần mềm mô phỏng tạo môi trường số để mô tả hoặc tái hiện đối tượng, hiện tượng hay quá trình.",
    "Mô phỏng có thể giúp người học quan sát hiện tượng khó thực hiện trực tiếp.",
    "Tham số trong mô phỏng có thể được thay đổi để quan sát sự biến đổi của kết quả.",
    "Mục tiêu của mô phỏng là hỗ trợ tìm hiểu và thử nghiệm trong môi trường được kiểm soát.",
    "Người học cần xác định mục đích trước khi lựa chọn phần mềm mô phỏng.",
    "Kết quả mô phỏng cần được quan sát và phân tích thay vì chỉ xem hình ảnh.",
    "Mô phỏng không đồng nghĩa với hiện thực hoàn toàn; kết quả phụ thuộc mô hình và tham số.",
    "Ghi lại điều kiện và kết quả giúp so sánh các lần thử nghiệm.",
    "Một phần mềm mô phỏng phù hợp phải đáp ứng nội dung và mục tiêu học tập.",
    "Sử dụng mô phỏng hiệu quả cần kết hợp thao tác, quan sát và rút ra nhận xét."
  ],
  "6": [
    "Khai thác phần mềm mô phỏng nên bắt đầu bằng việc xác định nhiệm vụ hoặc câu hỏi cần tìm hiểu.",
    "Cần làm quen với giao diện và các công cụ chính trước khi thực hiện thử nghiệm.",
    "Thay đổi từng tham số giúp dễ xác định ảnh hưởng của từng yếu tố.",
    "Nên ghi lại điều kiện và kết quả để so sánh các lần mô phỏng.",
    "Khi kết quả bất thường, cần kiểm tra tham số và thao tác đã thực hiện.",
    "Có thể lặp lại mô phỏng để kiểm tra một nhận xét.",
    "Quan sát kết quả cần gắn với câu hỏi hoặc giả thuyết ban đầu.",
    "Không nên thay đổi quá nhiều yếu tố cùng lúc nếu mục tiêu là tìm ảnh hưởng của một yếu tố.",
    "Kết quả mô phỏng cần được giải thích dựa trên dữ liệu quan sát được.",
    "Thực hành mô phỏng giúp hình thành kĩ năng thử nghiệm và phân tích kết quả."
  ],
  "7": [
    "Trình bày thông tin cần xác định người nhận và mục đích trao đổi.",
    "Nội dung nên được tổ chức theo cấu trúc rõ ràng để người đọc dễ theo dõi.",
    "Tiêu đề và các đề mục giúp phân chia nội dung thành các phần hợp lí.",
    "Hình ảnh, sơ đồ hoặc bảng có thể hỗ trợ làm rõ thông tin.",
    "Khi hợp tác trực tuyến cần thống nhất cách chia sẻ và chỉnh sửa tài liệu.",
    "Phân quyền phù hợp giúp hạn chế việc chỉnh sửa hoặc chia sẻ ngoài mục đích.",
    "Thông tin trao đổi cần chính xác, ngắn gọn và phù hợp đối tượng.",
    "Cần kiểm tra tài liệu trước khi gửi hoặc công bố.",
    "Công cụ số có thể hỗ trợ nhiều người cùng tạo và trao đổi tài liệu.",
    "Hợp tác hiệu quả cần giao nhiệm vụ và thống nhất thời hạn rõ ràng."
  ],
  "8": [
    "Công cụ trực quan giúp biểu diễn thông tin bằng hình ảnh, sơ đồ, biểu đồ hoặc bố cục trực quan.",
    "Loại biểu đồ cần được lựa chọn theo đặc điểm dữ liệu và mục đích trình bày.",
    "Sơ đồ phù hợp khi cần thể hiện mối quan hệ hoặc cấu trúc giữa các thành phần.",
    "Biểu đồ cột có thể dùng để so sánh các giá trị giữa các nhóm.",
    "Nhãn và tiêu đề giúp người xem hiểu nội dung của hình ảnh hoặc biểu đồ.",
    "Trang trình bày không nên chứa quá nhiều thông tin gây khó quan sát.",
    "Màu sắc và kích thước chữ cần đủ tương phản để dễ đọc.",
    "Dữ liệu trước khi trực quan hóa cần được kiểm tra tính chính xác.",
    "Công cụ trực quan nên làm rõ thông tin chứ không chỉ để trang trí.",
    "Sau khi hoàn thành sản phẩm cần xem thử để phát hiện lỗi trình bày."
  ],
  "9a": [
    "Xác thực dữ liệu dùng để kiểm soát loại dữ liệu hoặc giá trị được phép nhập vào ô.",
    "Xác thực dữ liệu giúp hạn chế lỗi nhập liệu và tạo dữ liệu thống nhất.",
    "Có thể đặt điều kiện cho dữ liệu nhập như số, ngày hoặc danh sách lựa chọn.",
    "Danh sách lựa chọn giúp người dùng chọn giá trị từ các mục đã quy định.",
    "Điều kiện xác thực cần phù hợp với yêu cầu của cột dữ liệu.",
    "Thông báo lỗi giúp người nhập biết dữ liệu không phù hợp với quy tắc.",
    "Cần kiểm tra lại vùng áp dụng trước khi xác thực dữ liệu.",
    "Xác thực dữ liệu không thay thế việc kiểm tra nội dung và ý nghĩa của dữ liệu.",
    "Khi yêu cầu dữ liệu thay đổi, quy tắc xác thực cũng cần được cập nhật.",
    "Sử dụng xác thực dữ liệu góp phần nâng cao chất lượng bảng tính."
  ],
  "10a": [
    "COUNTIF là hàm dùng để đếm số ô trong một vùng thỏa mãn điều kiện.",
    "COUNTIF có hai thành phần chính là vùng cần đếm và điều kiện.",
    "Điều kiện của COUNTIF có thể là một giá trị hoặc biểu thức điều kiện phù hợp.",
    "Kết quả COUNTIF là một số biểu thị số ô thỏa mãn điều kiện.",
    "COUNTIF hữu ích khi cần thống kê số lượng đối tượng theo một tiêu chí.",
    "Vùng đếm phải bao phủ đúng các ô chứa dữ liệu cần kiểm tra.",
    "Điều kiện cần được viết đúng cú pháp để hàm trả kết quả chính xác.",
    "Có thể dùng COUNTIF để đếm số học sinh đạt một mức điểm nhất định.",
    "Khi dữ liệu thay đổi, kết quả COUNTIF có thể được cập nhật theo công thức.",
    "COUNTIF khác SUMIF ở chỗ COUNTIF đếm còn SUMIF tính tổng theo điều kiện."
  ],
  "11a": [
    "SUMIF là hàm dùng để tính tổng các giá trị thỏa mãn một điều kiện.",
    "SUMIF thường có vùng điều kiện, điều kiện và vùng tính tổng.",
    "Vùng điều kiện xác định nơi kiểm tra tiêu chí.",
    "Vùng tính tổng chứa các giá trị được cộng khi điều kiện thỏa mãn.",
    "Kết quả SUMIF là tổng của các giá trị phù hợp với điều kiện.",
    "SUMIF phù hợp khi cần tổng hợp số liệu theo một tiêu chí.",
    "Điều kiện phải được viết đúng để xác định đúng các dòng cần tính.",
    "Có thể dùng SUMIF để tính tổng doanh thu của một nhóm sản phẩm.",
    "Khi dữ liệu nguồn thay đổi, công thức SUMIF có thể cho kết quả mới.",
    "SUMIF tính tổng theo điều kiện, còn COUNTIF đếm số ô theo điều kiện."
  ],
  "12a": [
    "IF là hàm cho phép trả về một kết quả khi điều kiện đúng và kết quả khác khi điều kiện sai.",
    "IF thường gồm điều kiện, giá trị khi đúng và giá trị khi sai.",
    "Điều kiện trong IF có thể dựa trên phép so sánh dữ liệu.",
    "IF giúp tự động phân loại hoặc đưa ra thông báo theo điều kiện.",
    "Kết quả IF phụ thuộc vào việc điều kiện đánh giá đúng hay sai.",
    "Có thể dùng IF để xếp loại đạt hoặc chưa đạt dựa trên điểm số.",
    "Khi điều kiện viết sai, kết quả phân loại có thể sai.",
    "Cần xác định rõ hai trường hợp đúng và sai trước khi viết công thức IF.",
    "IF giúp giảm thao tác phân loại thủ công trong bảng tính.",
    "Có thể kết hợp IF với các phép so sánh để xử lí dữ liệu theo quy tắc."
  ],
  "13a": [
    "Bảng tính quản lí tài chính gia đình cần tổ chức dữ liệu thu và chi rõ ràng.",
    "Nên xác định các cột thông tin cần thiết trước khi nhập dữ liệu.",
    "Công thức giúp tự động tính tổng và hạn chế tính toán thủ công.",
    "Dữ liệu tiền tệ cần được nhập thống nhất để thuận tiện tính toán.",
    "Có thể dùng hàm SUM để tổng hợp các khoản thu hoặc chi.",
    "Có thể dùng IF để phân loại khoản chi theo một điều kiện.",
    "Có thể dùng COUNTIF để đếm số khoản chi thỏa mãn tiêu chí.",
    "Cần kiểm tra công thức bằng một số trường hợp mẫu.",
    "Bảng tính nên có tiêu đề và bố cục dễ theo dõi.",
    "Hoàn thiện bảng tính cần kiểm tra dữ liệu, công thức và cách trình bày."
  ],
  "9b": [
    "Phần mềm làm video cho phép tổ chức hình ảnh, video, âm thanh và văn bản.",
    "Dòng thời gian giúp sắp xếp các thành phần theo trình tự thời gian.",
    "Cắt hoặc chia clip giúp loại bỏ hoặc tách phần nội dung không cần thiết.",
    "Văn bản có thể được dùng để tạo tiêu đề hoặc chú thích trong video.",
    "Âm thanh nền cần phù hợp nội dung và không che lấp lời thoại.",
    "Hiệu ứng chuyển cảnh giúp nối các cảnh nhưng cần sử dụng hợp lí.",
    "Có thể thay đổi thời lượng và vị trí của các thành phần trên dòng thời gian.",
    "Xem trước giúp phát hiện lỗi hình ảnh, âm thanh và trình tự.",
    "Dự án video cần được lưu thường xuyên để tránh mất công việc.",
    "Chức năng xuất video tạo tệp sản phẩm có thể phát hoặc chia sẻ."
  ],
  "10b": [
    "Dựng video nên bắt đầu từ việc xác định mục tiêu và kịch bản.",
    "Tư liệu video gồm hình ảnh, video clip, âm thanh và văn bản phù hợp.",
    "Tư liệu cần được chọn lọc theo nội dung và thời lượng dự kiến.",
    "Sắp xếp tệp tư liệu khoa học giúp dựng video nhanh và ít nhầm lẫn.",
    "Kịch bản xác định trình tự nội dung và các thành phần cần xuất hiện.",
    "Dòng thời gian là nơi sắp xếp các cảnh theo trình tự.",
    "Âm thanh và hình ảnh cần được kiểm tra tương thích trước khi hoàn thiện.",
    "Tên tệp rõ ràng giúp quản lí nhiều tư liệu hiệu quả.",
    "Cần tôn trọng quyền sử dụng đối với tư liệu lấy từ Internet.",
    "Xem trước bản dựng giúp phát hiện vấn đề trước khi xuất video."
  ],
  "11b": [
    "Dựng video theo kịch bản là đưa tư liệu vào dự án theo trình tự đã thiết kế.",
    "Cần sắp xếp các cảnh theo đúng mạch nội dung của kịch bản.",
    "Có thể cắt clip để giữ lại phần nội dung cần thiết.",
    "Âm thanh cần được đặt đúng vị trí và kiểm tra mức âm lượng.",
    "Văn bản trên video cần dễ đọc và xuất hiện đúng thời điểm.",
    "Chuyển cảnh nên phục vụ mạch nội dung thay vì lạm dụng hiệu ứng.",
    "Xem trước từng đoạn giúp phát hiện lỗi sớm.",
    "Có thể điều chỉnh thời lượng cảnh để phù hợp kịch bản.",
    "Khi thay đổi tư liệu cần kiểm tra lại sự liên kết giữa các cảnh.",
    "Một bản dựng tốt cần bám mục tiêu và nội dung của kịch bản."
  ],
  "12b": [
    "Hoàn thành video cần kiểm tra đầy đủ hình ảnh, âm thanh, văn bản và trình tự.",
    "Nội dung video cần phù hợp với kịch bản đã xây dựng.",
    "Cần kiểm tra lỗi chính tả của văn bản xuất hiện trong video.",
    "Âm thanh cần rõ và có mức âm lượng phù hợp.",
    "Hình ảnh cần hiển thị đúng tỉ lệ và không bị che khuất bất hợp lí.",
    "Thời lượng video cần phù hợp với mục đích sử dụng.",
    "Xem trước toàn bộ video là bước quan trọng trước khi xuất.",
    "Cần lưu phiên bản hoàn chỉnh và có thể giữ một bản dự phòng.",
    "Nếu phát hiện lỗi, nên chỉnh sửa dự án trước khi xuất tệp cuối.",
    "Sản phẩm hoàn chỉnh phải đáp ứng cả nội dung và yêu cầu kĩ thuật."
  ],
  "13b": [
    "Biên tập video là quá trình chỉnh sửa để hoàn thiện nội dung và hình thức sản phẩm.",
    "Có thể cắt bỏ đoạn thừa để video ngắn gọn và đúng mục tiêu.",
    "Âm thanh có thể được điều chỉnh để cân bằng giữa nhạc nền và lời nói.",
    "Văn bản cần được kiểm tra vị trí, thời lượng và khả năng đọc.",
    "Xuất video là tạo tệp sản phẩm từ dự án dựng.",
    "Thiết lập định dạng và chất lượng xuất cần phù hợp mục đích sử dụng.",
    "Cần xem trước sản phẩm sau biên tập trước khi xuất.",
    "Tên tệp xuất nên rõ ràng để dễ quản lí và chia sẻ.",
    "Chất lượng video phụ thuộc cả nội dung biên tập và thiết lập xuất.",
    "Cần giữ lại tệp dự án nếu muốn tiếp tục chỉnh sửa sau này."
  ],
  "14": [
    "Giải quyết vấn đề cần xác định rõ vấn đề trước khi chọn giải pháp.",
    "Phân tích vấn đề giúp xác định yêu cầu và các yếu tố liên quan.",
    "Có thể đề xuất nhiều phương án trước khi lựa chọn cách thực hiện.",
    "Tiêu chí đánh giá giúp so sánh các phương án giải quyết.",
    "Thuật toán là mô tả các bước có thứ tự để thực hiện một nhiệm vụ.",
    "Sau khi thực hiện cần kiểm tra kết quả so với yêu cầu ban đầu.",
    "Nếu kết quả chưa phù hợp, cần xác định nguyên nhân và điều chỉnh giải pháp.",
    "Máy tính hỗ trợ xử lí các công việc theo quy trình được mô tả rõ.",
    "Giải quyết vấn đề hiệu quả cần chia vấn đề phức tạp thành phần nhỏ khi cần.",
    "Kiểm thử giúp phát hiện lỗi hoặc trường hợp chưa được xử lí."
  ],
  "15": [
    "Bài toán tin học xác định dữ liệu vào và kết quả cần đạt.",
    "Input là dữ liệu được cung cấp cho bài toán.",
    "Output là kết quả cần tạo ra sau khi xử lí dữ liệu vào.",
    "Cần xác định rõ yêu cầu trước khi xây dựng cách giải.",
    "Thuật toán mô tả cách biến đổi Input thành Output.",
    "Một bài toán có thể có nhiều cách giải khác nhau.",
    "Dữ liệu vào cần được xác định đúng kiểu và phạm vi.",
    "Kết quả phải đáp ứng đúng yêu cầu của đề bài.",
    "Ví dụ và dữ liệu thử giúp kiểm tra cách giải.",
    "Phân tích Input và Output là bước quan trọng trước khi lập trình."
  ],
  "16": [
    "Lập chương trình là chuyển thuật toán thành các câu lệnh của ngôn ngữ lập trình.",
    "Cần xác định dữ liệu vào và kết quả trước khi viết chương trình.",
    "Chương trình cần có cấu trúc phù hợp với thuật toán.",
    "Biến được dùng để lưu trữ dữ liệu có thể thay đổi trong quá trình chạy.",
    "Câu lệnh điều kiện giúp chương trình lựa chọn xử lí theo điều kiện.",
    "Câu lệnh lặp giúp thực hiện một nhóm thao tác nhiều lần khi phù hợp.",
    "Chạy thử giúp quan sát kết quả và phát hiện lỗi.",
    "Lỗi cú pháp có thể khiến chương trình không chạy đúng.",
    "Lỗi logic có thể làm chương trình chạy nhưng cho kết quả sai.",
    "Sửa lỗi cần xác định nguyên nhân và kiểm tra lại bằng dữ liệu thử."
  ],
  "17": [
    "Tin học liên quan đến nhiều nghề như phát triển phần mềm, dữ liệu, mạng và thiết kế số.",
    "Năng lực giải quyết vấn đề có ích trong nhiều nghề nghiệp liên quan đến công nghệ.",
    "Kĩ năng sử dụng công cụ số cần được cập nhật theo sự thay đổi của công nghệ.",
    "Lập trình là một hướng nghề nghiệp nhưng không phải con đường duy nhất của Tin học.",
    "An toàn thông tin là lĩnh vực gắn với bảo vệ dữ liệu và hệ thống.",
    "Phân tích dữ liệu liên quan đến thu thập, xử lí và khai thác dữ liệu.",
    "Thiết kế số cần kết hợp công nghệ với tư duy thẩm mĩ và giao tiếp.",
    "Làm việc trong lĩnh vực công nghệ cần khả năng học tập liên tục.",
    "Giao tiếp và làm việc nhóm cũng quan trọng bên cạnh kĩ năng kĩ thuật.",
    "Tìm hiểu nghề nghiệp giúp học sinh liên hệ sở thích và năng lực với định hướng học tập."
  ]
};

(function buildPerLessonBank(){
  const letters = ["A","B","C","D"];
  const templates = [
    "Phát biểu nào đúng nhất với nội dung trọng tâm của bài?",
    "Trong tình huống học tập liên quan đến bài này, nhận định nào phù hợp?"
  ];
  let qid = 1;
  const questions = [];
  const essays = [];
  T9.lessons.forEach(lesson => {
    const seeds = T9_QUESTION_SEEDS[String(lesson.id)] || [];
    // Mỗi bài luôn có đúng 20 câu: 10 nội dung trọng tâm × 2 dạng hỏi.
    for(let i=0;i<20;i++){
      const correctIndex = i % seeds.length;
      const correct = seeds[correctIndex];
      const distractors = [1,2,3].map(k => seeds[(correctIndex+k)%seeds.length]);
      const pool = [correct, ...distractors];
      // Đảo vị trí đáp án theo quy luật cố định để không phải lúc nào cũng là A.
      const shift = (i * 3 + String(lesson.id).length) % 4;
      const opts = [];
      for(let p=0;p<4;p++) opts.push(pool[(p-shift+4)%4]);
      const ans = opts.indexOf(correct);
      questions.push({
        id:`${lesson.id}-q${i+1}`,
        lesson:String(lesson.id),
        text:`${templates[i%2]} ${correct}`,
        opts,
        ans
      });
    }
    essays.push(
      {id:`${lesson.id}-tl1`, lesson:String(lesson.id), text:`Em hãy giải thích bằng lời của mình một kiến thức quan trọng nhất trong ${lesson.code} – ${lesson.title}. Cho một ví dụ thực tế để minh họa.`},
      {id:`${lesson.id}-tl2`, lesson:String(lesson.id), text:`Hãy mô tả cách em sẽ vận dụng kiến thức của ${lesson.code} – ${lesson.title} để giải quyết một nhiệm vụ học tập hoặc tình huống thực tế.`},
      {id:`${lesson.id}-tl3`, lesson:String(lesson.id), text:`Theo em, lỗi hoặc khó khăn nào dễ gặp khi thực hiện nội dung của ${lesson.code} – ${lesson.title}? Nêu cách kiểm tra và khắc phục.`}
    );
  });
  T9.questions = questions;
  T9.essayQuestions = essays;
})();
