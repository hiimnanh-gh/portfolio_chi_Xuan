/**
 * Dữ liệu dự án cho Projects Section (Section 04).
 * Hỗ trợ đầy đủ các trường mở rộng và có thể tách mỗi dự án thành file riêng
 * trong `data/items/` rồi import vào mảng `PROJECTS_LIST` khi số lượng dự án tăng.
 *
 * Lưu ý: Các dự án dưới đây là dữ liệu mẫu (placeholder), không chứa liên kết giả
 * hay thông số thương mại chưa xác thực.
 */
export const PROJECTS_HEADING = {
  number: '04',
  label: 'DỰ ÁN TIÊU BIỂU',
  title: 'Những Đột Phá Phần Cứng, Robotics & Giáo Dục STEM',
  filterLabel: 'Lọc theo:',
  emptyMessage: 'Chưa có dự án nào thuộc danh mục này.',
};

export const PROJECTS_LIST = [
  {
    id: 'project-sample-1',
    slug: 'he-thong-tay-gap-robot-mo-dun',
    title: 'Hệ Thống Tay Gắp Robot Mô-Đun [Mẫu]',
    category: 'robotics',
    categoryLabel: 'ROBOTICS & HARDWARE',
    subtitle: 'Nghiên cứu cơ cấu chấp hành mềm & điều khiển nhúng',
    description:
      'Mô tả tóm tắt dự án nghiên cứu và chế tạo tay gắp robot mô-đun kết hợp cảm biến phản hồi và điều khiển thời gian thực. [Nội dung mẫu]',
    fullDescription: [
      'Đoạn chi tiết 1: Trình bày bối cảnh bài toán, kiến trúc phần cứng và phương pháp điều khiển được áp dụng trong dự án. [Nội dung mẫu]',
      'Đoạn chi tiết 2: Kết quả thử nghiệm trong phòng thí nghiệm và định hướng tích hợp vào các hệ thống tự động hóa hoặc giảng dạy. [Nội dung mẫu]',
    ],
    coverImage: {
      src: '',
      alt: 'Hình ảnh dự án Tay gắp Robot Mô-đun',
      placeholderLabel: 'Ảnh dự án Robotics (src/assets/images/projects)',
    },
    gallery: [],
    badge: 'R&D PROTOTYPE [MẪU]',
    status: 'Đang nghiên cứu [Mẫu]',
    year: '2025',
    role: 'Trưởng nhóm Nghiên cứu & Thiết kế Hệ thống [Mẫu]',
    technologies: ['ESP32-S3', 'ROS2 Control', 'Embedded C++', 'CAD 3D'],
    metrics: [
      { id: 'm1', value: '--', label: 'Thời gian đáp ứng [Mẫu]' },
      { id: 'm2', value: '--', label: 'Độ lặp lại [Mẫu]' },
      { id: 'm3', value: '--', label: 'Chu kỳ thử nghiệm [Mẫu]' },
    ],
    demoUrl: '',
    githubUrl: '',
    documentUrl: '',
    featured: true,
  },
  {
    id: 'project-sample-2',
    slug: 'bo-kit-hoc-tap-stem-robotics',
    title: 'Bộ Kit Học Tập STEM Robotics Mô-Đun [Mẫu]',
    category: 'stem-education',
    categoryLabel: 'STEM EDUCATION',
    subtitle: 'Giải pháp học tập lắp ghép nhanh cho học sinh K-12',
    description:
      'Mô tả hệ sinh thái bộ kit học tập kết nối mô-đun giúp học sinh dễ dàng lắp ghép nhiều cấu hình robot và lập trình trực quan. [Nội dung mẫu]',
    fullDescription: [
      'Đoạn chi tiết 1: Thiết kế cơ khí an toàn, kết nối chuẩn hóa giúp rút ngắn thời gian chuẩn bị phần cứng trong lớp học STEM. [Nội dung mẫu]',
      'Đoạn chi tiết 2: Đi kèm tài liệu hướng dẫn thực hành theo dự án và giao diện lập trình kéo thả hoặc Python. [Nội dung mẫu]',
    ],
    coverImage: {
      src: '',
      alt: 'Hình ảnh bộ kit học tập STEM Robotics',
      placeholderLabel: 'Ảnh bộ kit STEM (src/assets/images/projects)',
    },
    gallery: [],
    badge: 'GIẢI PHÁP STEM K-12 [MẪU]',
    status: 'Thử nghiệm giảng dạy [Mẫu]',
    year: '2024',
    role: 'Thiết kế Sản phẩm & Chương trình Đào tạo [Mẫu]',
    technologies: ['Microcontroller', 'Blockly / Scratch', 'Python', 'K-12 Curriculum'],
    metrics: [
      { id: 'm1', value: '--', label: 'Cấu hình lắp ghép [Mẫu]' },
      { id: 'm2', value: '--', label: 'Thời gian lắp ráp [Mẫu]' },
      { id: 'm3', value: '--', label: 'Điện áp an toàn [Mẫu]' },
    ],
    demoUrl: '',
    githubUrl: '',
    documentUrl: '',
    featured: true,
  },
  {
    id: 'project-sample-3',
    slug: 'robot-tu-hanh-ai-edge-vision',
    title: 'Robot Tự Hành Tích Hợp Edge AI Vision [Mẫu]',
    category: 'coding-ai',
    categoryLabel: 'CODING & AI • RESEARCH',
    subtitle: 'Điều hướng tự hành & nhận diện đối tượng tại biên',
    description:
      'Mô tả nền tảng xe robot tự hành sử dụng cảm biến quét môi trường kết hợp camera thị giác AI phục vụ nghiên cứu điều hướng và kiểm tra tự động. [Nội dung mẫu]',
    fullDescription: [
      'Đoạn chi tiết 1: Tích hợp thuật toán SLAM định vị bản đồ và xử lý suy luận thị giác trên thiết bị nhúng hiệu năng cao. [Nội dung mẫu]',
      'Đoạn chi tiết 2: Khung gầm mô-đun cho phép gắn thêm các cảm biến môi trường hoặc tay gắp phục vụ nhiều kịch bản nghiên cứu. [Nội dung mẫu]',
    ],
    coverImage: {
      src: '',
      alt: 'Hình ảnh Robot tự hành Edge AI',
      placeholderLabel: 'Ảnh Robot tự hành AI (src/assets/images/projects)',
    },
    gallery: [],
    badge: 'AI & AUTONOMOUS NAV [MẪU]',
    status: 'Lab R&D [Mẫu]',
    year: '2025',
    role: 'Kỹ sư Robotics & AI [Mẫu]',
    technologies: ['ROS2', 'SLAM', 'Edge AI', 'Computer Vision'],
    metrics: [
      { id: 'm1', value: '--', label: 'Phạm vi cảm biến [Mẫu]' },
      { id: 'm2', value: '--', label: 'Thời lượng hoạt động [Mẫu]' },
      { id: 'm3', value: '--', label: 'Nền tảng di chuyển [Mẫu]' },
    ],
    demoUrl: '',
    githubUrl: '',
    documentUrl: '',
    featured: true,
  },
];
