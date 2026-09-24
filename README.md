# TIN9 PHÚ THÀNH 3.0

Phiên bản nền tảng cho hướng phát triển quy mô lớn.

## Chạy ngay
Mở `index.html` hoặc triển khai repository lên GitHub Pages.

## Các mô-đun đã có
- Hồ sơ thử nghiệm học sinh/giáo viên.
- Khảo sát đầu vào và phân nhóm Cần hỗ trợ / Đạt chuẩn / Khá giỏi.
- 6 chủ đề, hệ thống 17 bài và nhánh 9a/9b.
- Theo dõi tiến độ.
- Luyện tập và chấm tự động.
- Trợ lý học tập gợi mở.
- Dashboard giáo viên phiên bản thử nghiệm.

## Kiến trúc triển khai thật
GitHub Pages chỉ nên là frontend. Khi triển khai nhiều trường:
Browser → Frontend → API Gateway → Backend → Database
                         ↘ AI Gateway

Không đặt API key AI trong frontend công khai.

## Dữ liệu
Bản 3.0 dùng localStorage để thử nghiệm. Không dùng cơ chế này để thu thập dữ liệu học sinh toàn tỉnh.

## Sáng kiến
Tính mới cần chứng minh bằng quy trình thiết kế, nhật ký phiên bản, minh chứng thử nghiệm, khảo sát và số liệu trước/sau; không nên cam kết tuyệt đối rằng không có ý tưởng tương tự trên Internet.
