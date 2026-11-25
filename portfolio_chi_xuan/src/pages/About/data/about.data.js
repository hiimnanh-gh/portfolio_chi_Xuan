import ecosystemDiagram from '@/assets/images/about/stem-ecosystem.jpg';

/**
 * Dữ liệu riêng cho About Section (Section 01).
 */
export const ABOUT_DATA = {
  heading: {
    number: '01',
    label: 'GIỚI THIỆU BẢN THÂN',
    title: 'Kết Nối Sư Phạm Công Nghệ, Robotics & AI Trong Giáo Dục STEM',
  },
  philosophy: {
    title: 'Triết Lý: "Human-centric Robotics & Accessible STEM Innovation"',
    paragraphs: [
      'Được đào tạo chuyên sâu ngành Sư phạm Công nghệ - Giáo dục STEM tại Trường Đại học Sư phạm Hà Nội, tôi định hướng kết hợp nền tảng sư phạm hiện đại với công nghệ Robotics, IoT và Trí tuệ nhân tạo để biến các khái niệm kỹ thuật thành trải nghiệm học tập trực quan và dễ tiếp cận.',
      'Trong quá trình giảng dạy và nghiên cứu từ năm 2024 đến nay, tôi đã trực tiếp đồng hành cùng hơn 1.000 học sinh (từ 4 đến 16 tuổi), xây dựng hơn 300 học liệu STEM Robotics và bài giảng số, đồng thời huấn luyện các đội tuyển học sinh tham gia những sân chơi Robotics như ROBOG.',
    ],
  },
  coreValues: [
    {
      id: 'stem-pedagogy',
      icon: 'layers',
      iconVariant: 'primary',
      title: 'Học Liệu & Sư Phạm Trực Quan',
      description:
        'Xây dựng hệ thống bài giảng và học liệu STEM Robotics khoa học, phù hợp từng lứa tuổi để học sinh chủ động khám phá và hình thành tư duy kỹ thuật.',
    },
    {
      id: 'community-impact',
      icon: 'users',
      iconVariant: 'secondary',
      title: 'Thực Hành & Thi Đấu Robotics',
      description:
        'Ứng dụng đa dạng nền tảng phần cứng và lập trình để học sinh rèn luyện kỹ năng thiết kế, chế tạo, giải quyết vấn đề và phối hợp làm việc nhóm.',
    },
  ],
  ecosystem: {
    label: 'KIẾN TRÚC HỆ SINH THÁI STEM ROBOTICS & AI',
    image: {
      src: ecosystemDiagram,
      alt: 'Kiến trúc 3 tầng hệ sinh thái STEM Robotics & AI: Phần cứng STM32/ESP32, ROS 2/AI Nodes và Blockly/Robotic Arm',
      placeholderLabel: 'Ảnh hoạt động / mô hình STEM Robotics (src/assets/images/about)',
    },
    features: [
      {
        id: 'feature-1',
        text: "Tầng Phần cứng & Vi điều khiển: Tích hợp cảm biến, STM32 MCU, ESP32 (Wi-Fi/BT) và chân kết nối từ tính Stick'em.",
      },
      {
        id: 'feature-2',
        text: 'Tầng Trung gian & Tính toán thông minh: Điều phối qua ROS 2, các nút xử lý AI (AI Nodes) và Edge Computing.',
      },
      {
        id: 'feature-3',
        text: 'Tầng Ứng dụng & Trải nghiệm STEM: Điều khiển cánh tay robot / tay gắp trực quan qua giao diện Blockly / Node Canvas.',
      },
    ],
  },
};
