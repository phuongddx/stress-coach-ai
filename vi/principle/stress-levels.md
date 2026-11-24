# Cấp độ căng thẳng

StressMonitor chuyển mỗi lần đo thành điểm căng thẳng từ 0 đến 100 và xếp vào một trong năm cấp độ. Ripple, chú rái cá huấn luyện viên trong ứng dụng, đổi nét mặt theo từng cấp độ để bạn nhìn là biết mình đang ở đâu.

<div class="level-table">

| Ripple | Cấp độ | Điểm | Ý nghĩa |
|--------|--------|------|---------|
| <img class="level-face" src="/img/ripple/relaxed-head.svg" width="48" height="48" alt="Ripple mỉm cười, mắt nhắm thư thái"> | <span class="level-name"><span class="level-dot" style="background:#8CC12A"></span>**Thư giãn**</span><br>(Relaxed) | 0–25 | HRV cao, nhịp tim lúc nghỉ thấp — áp lực cơ thể rất thấp |
| <img class="level-face" src="/img/ripple/mild-head.svg" width="48" height="48" alt="Ripple mỉm cười nhẹ, bình thản"> | <span class="level-name"><span class="level-dot" style="background:#4FA89D"></span>**Nhẹ**</span><br>(Mild) | 25–50 | HRV và nhịp tim bình thường — áp lực trong tầm kiểm soát |
| <img class="level-face" src="/img/ripple/elevated-head.svg" width="48" height="48" alt="Ripple hơi bồn chồn, lấm tấm mồ hôi"> | <span class="level-name"><span class="level-dot" style="background:#F2BC50"></span>**Tăng cao**</span><br>(Elevated) | 50–75 | HRV thấp hơn hoặc nhịp tim lúc nghỉ tăng — cần điều chỉnh lối sống |
| <img class="level-face" src="/img/ripple/high-head.svg" width="48" height="48" alt="Ripple lo lắng, nhíu mày, lấm tấm mồ hôi"> | <span class="level-name"><span class="level-dot" style="background:#E2683C"></span>**Cao**</span><br>(High) | 75–90 | HRV giảm rõ, nhịp tim lúc nghỉ cao hơn — nên nghỉ ngơi hoặc tập thở một lúc |
| <img class="level-face" src="/img/ripple/severe-head.svg" width="48" height="48" alt="Ripple lo lắng, rưng rưng nước mắt"> | <span class="level-name"><span class="level-dot" style="background:#E46A80"></span>**Nghiêm trọng**</span><br>(Severe) | 90–100 | HRV giảm mạnh, nhịp tim tăng đáng kể — nguy cơ quá tải cao |

</div>

Tên trong ngoặc là tên cấp độ hiển thị trong ứng dụng. Điểm nằm đúng ranh giới thuộc cấp độ cao hơn, ví dụ 25 là Nhẹ và 90 là Nghiêm trọng.

Điểm căng thẳng được cá nhân hóa theo lịch sử của bạn — không dựa trên giá trị cố định chung. Cùng một con số HRV tuyệt đối có thể cho điểm "Thư giãn" với người này nhưng "Tăng cao" với người khác.

## Cách tính cấp độ

Điểm căng thẳng kết hợp:
- **Thành phần HRV** (trọng số 70%) — độ lệch so với đường cơ sở cá nhân
- **Thành phần nhịp tim lúc nghỉ** (trọng số 30%) — độ lệch so với nhịp tim lúc nghỉ cá nhân

Điểm 0–100 kết hợp được ánh xạ sang năm cấp độ trên.

## Tại sao cá nhân hóa quan trọng

StressMonitor đánh giá mỗi lần đo so với lịch sử **30 ngày của bạn**, không phải trung bình dân số. Điều này có nghĩa:

- Người dùng mới có thể nhận kết quả kém chính xác trong 7–30 ngày đầu khi đường cơ sở đang xây dựng
- Sau 30 ngày, ứng dụng có tham chiếu cá nhân ổn định để so sánh có ý nghĩa
- Thay đổi lối sống đột ngột (chế độ tập mới, bệnh tật, du lịch) tạm thời làm lệch đường cơ sở
