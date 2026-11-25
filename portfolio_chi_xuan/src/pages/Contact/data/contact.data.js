/**
 * Dữ liệu riêng cho Contact Section (Section 06).
 * Thông tin email, điện thoại và địa chỉ dùng chung lấy từ profile.data.js.
 */
export const CONTACT_DATA = {
  heading: {
    number: '06',
    label: 'LIÊN HỆ & HỢP TÁC',
    title: 'Sẵn Sàng Cho Các Dự Án Robotics & Giáo Dục Mới',
    description:
      'Quý đối tác, trường học, viện nghiên cứu hoặc doanh nghiệp quan tâm đến giải pháp Robotics, STEM Education & AI có thể liên hệ trực tiếp qua biểu mẫu hoặc thông tin bên dưới.',
  },
  infoLabels: {
    email: 'Email Học Thuật & R&D',
    phone: 'Điện thoại / Hotline',
    address: 'Địa điểm Làm việc / Lab',
  },
  map: {
    hasVerifiedLocation: false,
    title: 'Vị trí phòng Lab / Văn phòng',
    googleMapsUrl: '',
    placeholderText:
      'Chưa cấu hình địa chỉ bản đồ cụ thể. Sẽ hiển thị bản đồ khi cập nhật địa điểm làm việc thực tế.',
  },
  form: {
    title: 'Gửi Tin Nhắn / Đề Xuất Hợp Tác',
    description: 'Điền thông tin vào mẫu bên dưới để trao đổi chi tiết về nhu cầu hợp tác.',
    submitLabel: 'Gửi Thông Điệp Hợp Tác',
    submittingLabel: 'Đang gửi...',
    confidentialLabel: 'Yêu cầu bảo mật thông tin đề tài / NDA',
    fields: {
      name: {
        label: 'Họ & Tên của bạn',
        placeholder: 'Nguyễn Văn A',
      },
      email: {
        label: 'Địa chỉ Email',
        placeholder: 'example@org.edu.vn',
      },
      organization: {
        label: 'Đơn vị / Trường học / Công ty',
        placeholder: 'Đại học / Viện nghiên cứu / Doanh nghiệp...',
      },
      purpose: {
        label: 'Mục đích liên hệ',
      },
      message: {
        label: 'Nội dung chi tiết',
        placeholder: 'Mô tả tóm tắt ý tưởng, nhu cầu triển khai hoặc câu hỏi của bạn...',
      },
    },
    purposes: [
      { value: 'research-collab', label: 'Hợp tác nghiên cứu' },
      { value: 'stem-program', label: 'Triển khai chương trình STEM' },
      { value: 'robotics-ai-consulting', label: 'Tư vấn Robotics và AI' },
      { value: 'teacher-training', label: 'Đào tạo giáo viên' },
      { value: 'project-development', label: 'Hợp tác phát triển dự án' },
      { value: 'other', label: 'Khác' },
    ],
  },
};
