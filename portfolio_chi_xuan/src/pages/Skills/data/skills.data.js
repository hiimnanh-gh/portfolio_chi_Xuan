/**
 * Dữ liệu riêng cho Skills Section (Section 03).
 * Lưu ý: Phần trăm là mức tự đánh giá nếu người dùng cung cấp.
 * Khi `percentage` là null, giao diện hỗ trợ hiển thị `levelLabel`
 * ('Beginner' | 'Intermediate' | 'Advanced') hoặc ẩn nhãn mức độ.
 */
export const SKILLS_HEADING = {
  number: '03',
  label: 'BẢN ĐỒ NĂNG LỰC & KỸ NĂNG',
  title: 'Hệ Thống Kỹ Thuật Liên Ngành & Sư Phạm Hiện Đại',
};

export const SKILL_CATEGORIES = [
  {
    id: 'robotics-embedded',
    title: 'Kỹ Thuật Robotics & Hệ Thống Nhúng',
    icon: 'cpu',
    color: 'primary',
    skills: [
      { id: 'ros-ros2', name: 'ROS / ROS2 Architecture', percentage: null, levelLabel: 'Advanced' },
      { id: 'cpp-python', name: 'C/C++ & Python for Robotics', percentage: null, levelLabel: 'Advanced' },
      { id: 'pcb-design', name: 'Thiết kế vi mạch PCB (Altium / KiCad)', percentage: null, levelLabel: 'Intermediate' },
      { id: 'mcu', name: 'Vi điều khiển (STM32, ESP32, nRF)', percentage: null, levelLabel: 'Advanced' },
      { id: 'cad-3d', name: 'SolidWorks & In 3D Rapid Prototyping', percentage: null, levelLabel: 'Intermediate' },
      { id: 'computer-vision', name: 'OpenCV & Edge Computer Vision', percentage: null, levelLabel: 'Intermediate' },
    ],
  },
  {
    id: 'stem-coding-ai',
    title: 'Giáo Dục STEM, Coding & AI',
    icon: 'graduationCap',
    color: 'secondary',
    skills: [
      { id: 'stem-kit', name: 'Thiết kế Kit Giáo dục Module Hóa', percentage: null, levelLabel: 'Advanced' },
      { id: 'k12-curriculum', name: 'Xây dựng Giáo trình K-12 STEM & AI', percentage: null, levelLabel: 'Advanced' },
      { id: 'lab-ops', name: 'Vận hành & Quản lý Lab Robotics', percentage: null, levelLabel: 'Advanced' },
      { id: 'coaching', name: 'Huấn luyện Đội tuyển Robotics', percentage: null, levelLabel: 'Intermediate' },
      { id: 'digital-materials', name: 'Học liệu Số hóa & Hướng dẫn Thực hành', percentage: null, levelLabel: 'Intermediate' },
      { id: 'stem-assessment', name: 'Phương pháp Đánh giá Năng lực STEM', percentage: null, levelLabel: 'Advanced' },
    ],
  },
  {
    id: 'management-leadership',
    title: 'Kỹ Năng Quản Lý & Lãnh Đạo',
    icon: 'users',
    color: 'slate',
    skills: [
      { id: 'critical-thinking', name: 'Tư duy Giải quyết Vấn đề Phản biện', percentage: null, levelLabel: 'Advanced' },
      { id: 'agile-scrum', name: 'Quản lý Dự án Agile / Scrum', percentage: null, levelLabel: 'Intermediate' },
      { id: 'presentation', name: 'Thuyết trình & Báo cáo Khoa học', percentage: null, levelLabel: 'Advanced' },
      { id: 'team-lead', name: 'Lãnh đạo Nhóm Kỹ sư Đa ngành', percentage: null, levelLabel: 'Intermediate' },
      { id: 'rd-collab', name: 'Hợp tác Nghiên cứu & Chuyển giao', percentage: null, levelLabel: 'Intermediate' },
      { id: 'stem-inspiration', name: 'Giao tiếp & Truyền cảm hứng STEM', percentage: null, levelLabel: 'Advanced' },
    ],
  },
];
