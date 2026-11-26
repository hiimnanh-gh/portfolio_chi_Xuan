/**
 * Dữ liệu dự án cho Projects Section (Section 04).
 * Tổng hợp dựa trên các công trình nghiên cứu, học liệu và dự án STEM Robotics thực tế.
 */
export const PROJECTS_HEADING = {
  number: "04",
  label: "DỰ ÁN TIÊU BIỂU",
  title: "Những Công Trình Nghiên Cứu, IoT & Giải Pháp Giáo Dục STEM",
  filterLabel: "Lọc theo:",
  emptyMessage: "Chưa có dự án nào thuộc danh mục này.",
};

export const PROJECTS_LIST = [
  {
    id: "project-iot-smart-classroom",
    slug: "he-thong-iot-canh-bao-chay-va-phong-hoc-thong-minh",
    title: "Hệ Thống Cảnh Báo Cháy & Phòng Học Thông Minh Ứng Dụng IoT",
    category: "hardware",
    categoryLabel: "IOT APPLICATION • HARDWARE",
    subtitle:
      "Giải pháp Internet vạn vật phục vụ an toàn và tối ưu không gian lớp học",
    description:
      "Nghiên cứu và phát triển các giải pháp ứng dụng Internet vạn vật (IoT) trong hệ thống cảnh báo cháy sớm và mô hình phòng học thông minh, hướng đến giải quyết các bài toán an toàn và quản lý lớp học thực tiễn bằng công nghệ.",
    fullDescription: [
      "Dự án tập trung xây dựng mô hình thu thập dữ liệu môi trường từ hệ thống cảm biến kết hợp bộ điều khiển nhúng và kết nối mạng IoT để giám sát, cảnh báo kịp thời các nguy cơ cháy nổ trong không gian học tập.",
      "Song song với đó, hệ thống phòng học thông minh hỗ trợ tự động hóa thiết bị và theo dõi điều kiện lớp học, góp phần nâng cao trải nghiệm dạy và học theo hướng hiện đại.",
    ],
    coverImage: {
      src: "",
      alt: "Mô hình hệ thống IoT cảnh báo cháy và phòng học thông minh",
      placeholderLabel: "Ảnh dự án IoT (src/assets/images/projects)",
    },
    gallery: [],
    badge: "IOT APPLICATION",
    status: "2 năm liên tiếp đạt giải",
    year: "2024 - 2026",
    role: "Nghiên cứu & Phát triển Giải pháp IoT",
    technologies: [
      "IoT Sensors",
      "Embedded Systems",
      "Wi-Fi / Cloud",
      "Smart Classroom",
    ],
    metrics: [
      { id: "m1", value: "2 năm", label: "Liên tiếp đạt giải cấp Khoa" },
      { id: "m2", value: "IoT", label: "Cảnh báo & Giám sát tự động" },
      { id: "m3", value: "ĐHSP HN", label: "Khoa Kỹ thuật & Công nghệ" },
    ],
    demoUrl: "",
    githubUrl: "",
    documentUrl: "",
    featured: true,
  },
  {
    id: "project-stem-technology-grade3",
    slug: "mo-hinh-stem-day-hoc-mon-cong-nghe-tieu-hoc",
    title: "Thiết Kế Mô Hình STEM Trong Dạy Học Môn Công Nghệ",
    category: "stem-education",
    categoryLabel: "STEM EDUCATION • RESEARCH",
    subtitle: "Nghiên cứu khoa học sư phạm ứng dụng cho học sinh tiểu học",
    description:
      "Nghiên cứu thiết kế và sử dụng mô hình học cụ STEM trong dạy học môn Công nghệ lớp 3, giúp học sinh tiếp cận kiến thức kỹ thuật một cách trực quan, nâng cao hiệu quả dạy học và phát triển năng lực công nghệ thông qua trải nghiệm thực tiễn.",
    fullDescription: [
      "Đề tài phân tích chương trình môn Công nghệ lớp 3 theo định hướng giáo dục STEM, từ đó thiết kế các mô hình thực hành an toàn, gần gũi và phù hợp với tâm lý lứa tuổi tiểu học.",
      "Công trình đã đạt Giải Nhì Nghiên cứu Khoa học cấp Khoa tại Khoa Kỹ thuật và Công nghệ - Trường Đại học Sư phạm Hà Nội.",
    ],
    coverImage: {
      src: "",
      alt: "Mô hình STEM trong dạy học môn Công nghệ",
      placeholderLabel:
        "Ảnh mô hình STEM Công nghệ (src/assets/images/projects)",
    },
    gallery: [],
    badge: "GIẢI NHÌ NCKH CẤP KHOA",
    status: "Công trình Nghiên cứu",
    year: "2022 - 2023",
    role: "Tác giả Nghiên cứu & Thiết kế Mô hình",
    technologies: [
      "STEM Pedagogy",
      "Học cụ trực quan",
      "Công nghệ Tiểu học",
      "Thực hành trải nghiệm",
    ],
    metrics: [
      { id: "m1", value: "Giải Nhì", label: "Nghiên cứu Khoa học cấp Khoa" },
      { id: "m2", value: "Tiểu học", label: "Đối tượng môn Công nghệ" },
      { id: "m3", value: "STEM", label: "Dạy học trải nghiệm thực tiễn" },
    ],
    demoUrl: "",
    githubUrl: "",
    documentUrl: "",
    featured: true,
  },
  {
    id: "project-stem-robotics-ecosystem",
    slug: "he-thong-hoc-lieu-va-dao-tao-robotics-stem",
    title: "Hệ Thống Học Liệu & Đào Tạo STEM-AI Robotics (4–16 Tuổi)",
    category: "robotics",
    categoryLabel: "ROBOTICS • STEM & AI",
    subtitle:
      "Phát triển học liệu trực quan và huấn luyện đội tuyển thi đấu Robotics",
    description:
      "Xây dựng hơn 200+ học liệu STEM Robotics và 100+ học liệu số, trực tiếp giảng dạy cho hơn 1.000+ học sinh tại Hà Nội và các tỉnh lân cận, đồng thời đào tạo đội tuyển đạt Giải Ba cuộc thi ROBOG miền Bắc.",
    fullDescription: [
      "Chương trình triển khai trên đa dạng nền tảng phần cứng như Robotics Stick'EM, UBTECH (UGOT/UKIT), VEX Robotics và Lego WeDo 2.0, kết hợp thiết kế học liệu số bằng Canva và PowerPoint.",
      "Quá trình đào tạo chú trọng phát triển tư duy kỹ thuật, kỹ năng lập trình, năng lực giải quyết vấn đề và phối hợp làm việc nhóm cho học sinh từ lứa tuổi mầm non đến trung học.",
    ],
    coverImage: {
      src: "",
      alt: "Giảng dạy và huấn luyện đội tuyển STEM Robotics",
      placeholderLabel:
        "Ảnh lớp học & thi đấu Robotics (src/assets/images/projects)",
    },
    gallery: [],
    badge: "GIẢI BA ROBOG MIỀN BẮC",
    status: "Đang triển khai",
    year: "2024 - Now",
    role: "Giảng viên Robotics & Phát triển Học liệu",
    technologies: [
      "Stick'EM",
      "UBTECH UGOT/UKIT",
      "VEX Robotics",
      "Lego WeDo 2.0",
    ],
    metrics: [
      { id: "m1", value: "1.000+", label: "Học sinh đã giảng dạy" },
      { id: "m2", value: "300+", label: "Học liệu Robotics & Số" },
      { id: "m3", value: "Giải Ba", label: "ROBOG miền Bắc 2026" },
    ],
    demoUrl: "",
    githubUrl: "",
    documentUrl: "",
    featured: true,
  },
];
