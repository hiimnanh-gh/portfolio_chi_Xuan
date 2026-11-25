# Hướng Dẫn Chỉnh Sửa Nội Dung Portfolio (`EDITING_GUIDE.md`)

Tài liệu này hướng dẫn chủ sở hữu website cách cập nhật toàn bộ nội dung, hình ảnh, màu sắc, font chữ và bố cục **mà không cần sửa code giao diện JSX**.

---

## 1. Cách đổi Logo

1. Đặt file logo mới (SVG hoặc PNG) vào thư mục `src/assets/images/brand/` (ví dụ: `my-logo.svg`).
2. Mở file `src/config/site.config.js`, cập nhật đường dẫn `import` và thuộc tính `logo`:

```js
import brandLogo from '@/assets/images/brand/my-logo.svg';

export const SITE_CONFIG = {
  brandName: 'Tên Thương Hiệu Mới',
  brandSubtitle: 'ROBOTICS & EDUCATION LAB',
  logo: {
    src: brandLogo,
    alt: 'Logo Thương Hiệu Mới',
  },
  // ...
};
```

---

## 2. Cách đổi Ảnh Đại Diện & Ảnh Chân Dung

1. Đặt ảnh vào thư mục `src/assets/images/profile/` (ví dụ: `avatar.jpg`, `portrait.jpg`).
2. Mở file `src/data/profile.data.js`, import ảnh và gán vào `avatar.src` và `portrait.src`:

```js
import avatarImg from '@/assets/images/profile/avatar.jpg';
import portraitImg from '@/assets/images/profile/portrait.jpg';

export const PROFILE_DATA = {
  // ...
  avatar: {
    src: avatarImg,
    alt: 'Ảnh đại diện',
  },
  portrait: {
    src: portraitImg,
    alt: 'Ảnh chân dung',
    placeholderLabel: 'Ảnh chân dung',
  },
};
```

---

## 3. Cách sửa Họ Tên và Chức Danh

Mở file `src/data/profile.data.js` (nguồn dữ liệu duy nhất cho thông tin cá nhân) và chỉnh sửa:

```js
export const PROFILE_DATA = {
  fullName: 'Nguyễn Thị Xuân',
  englishName: 'Xuan Nguyen',
  initials: 'XN',
  roleTitle: 'Chuyên Gia Robotics, Engineering, STEM Education & AI',
  tagline: 'CHUYÊN GIA ROBOTICS • STEM PIONEER',
  shortBio: 'Mô tả ngắn về chuyên môn và định hướng nghiên cứu...',
  // ...
};
```

---

## 4. Cách thay File CV

1. Đặt file PDF vào thư mục `public/documents/` (tạo thư mục nếu chưa có), ví dụ: `public/documents/CV_Robotics_STEM.pdf`.
2. Mở file `src/data/profile.data.js` và cập nhật `cv.url` và `cv.fileName`:

```js
  cv: {
    url: '/documents/CV_Robotics_STEM.pdf',
    fileName: 'CV_Robotics_STEM.pdf',
    label: 'Tải CV / Hồ Sơ Năng Lực',
    unavailableLabel: 'CV đang được cập nhật',
  },
```

> Lưu ý: Nếu `url` để rỗng (`''`), nút tải CV tự động chuyển sang trạng thái chờ cập nhật và không tạo liên kết giả.

---

## 5. Cách sửa Nội Dung Giới Thiệu (About)

Mở file `src/pages/About/data/about.data.js`:
- Sửa `heading` (số thứ tự, nhãn, tiêu đề chính).
- Sửa `philosophy.title` và mảng `philosophy.paragraphs`.
- Thêm/sửa/xóa các thẻ giá trị cốt lõi trong mảng `coreValues` (icon hỗ trợ: `'layers'`, `'users'`, `'cpu'`, `'sparkles'`).
- Cập nhật ảnh hệ sinh thái tại `src/assets/images/about/` và import vào `ecosystem.image.src`, cùng danh sách `ecosystem.features`:

```js
import ecosystemImg from '@/assets/images/about/ecosystem.png';

export const ABOUT_DATA = {
  philosophy: {
    title: 'Triết Lý Nghề Nghiệp',
    paragraphs: ['Đoạn 1...', 'Đoạn 2...'],
  },
  coreValues: [
    {
      id: 'value-1',
      icon: 'layers',
      iconVariant: 'primary',
      title: 'Kiến Trúc Mô-Đun Hóa',
      description: 'Mô tả ngắn...',
    },
  ],
  ecosystem: {
    label: 'HỆ SINH THÁI CÔNG NGHỆ',
    image: { src: ecosystemImg, alt: 'Sơ đồ hệ sinh thái', placeholderLabel: '' },
    features: [{ id: 'f-1', text: 'Điểm nổi bật 1' }],
  },
};
```

---

## 6. Cách thêm Bằng Cấp / Chứng Chỉ (Education)

Mở file `src/pages/Education/data/education.data.js` và thêm một object mới với `id` duy nhất vào mảng `EDUCATION_LIST`:

```js
  {
    id: 'edu-new-degree',
    period: '2021 - 2023',
    title: 'Tên Bằng Cấp / Chứng Chỉ',
    institution: 'Tên Trường / Tổ Chức Cấp',
    major: 'Chuyên ngành: Robotics & AI',
    achievement: 'Xuất sắc',
    description: 'Mô tả chi tiết...',
    tags: ['ROS2', 'Computer Vision', 'Embedded C++'],
    certificateUrl: 'https://example.com/certificate', // Để '' nếu không có
    color: 'primary', // 'primary' | 'secondary' | 'neutral' | 'slate'
  },
```

---

## 7. Cách thêm Kỹ Năng

Mở file `src/pages/Skills/data/skills.data.js`, tìm nhóm kỹ năng tương ứng trong `SKILL_CATEGORIES` và thêm phần tử vào mảng `skills`:

```js
      {
        id: 'new-skill-id',
        name: 'Tên Kỹ Năng Mới',
        percentage: 90, // Hoặc để null nếu muốn dùng nhãn chữ bên dưới
        levelLabel: 'Advanced', // 'Beginner' | 'Intermediate' | 'Advanced' | ''
      },
```

---

## 8. Cách thêm Nhóm Kỹ Năng Mới

Mở file `src/pages/Skills/data/skills.data.js` và thêm một object mới vào mảng `SKILL_CATEGORIES`:

```js
  {
    id: 'ai-machine-learning',
    title: 'Trí Tuệ Nhân Tạo & Thị Giác Máy Tính',
    icon: 'cpu', // 'cpu' | 'graduationCap' | 'users'
    color: 'primary', // 'primary' | 'secondary' | 'slate' | 'success'
    skills: [
      { id: 'pytorch', name: 'PyTorch & Edge Inference', percentage: null, levelLabel: 'Advanced' },
    ],
  },
```

---

## 9. Cách thêm Dự Án Mới

1. Đặt ảnh dự án vào `src/assets/images/projects/` và import ở đầu file `src/pages/Projects/data/projects.data.js`.
2. Thêm object dự án mới vào mảng `PROJECTS_LIST` (giá trị `category` khớp với `id` trong `src/pages/Projects/data/projectCategories.data.js`):

```js
import projectCover from '@/assets/images/projects/my-project.jpg';

  {
    id: 'project-new-id',
    slug: 'du-an-moi',
    title: 'Tên Dự Án Mới',
    category: 'robotics', // 'robotics' | 'hardware' | 'stem-education' | 'coding-ai' | 'research'
    categoryLabel: 'ROBOTICS & AI',
    subtitle: 'Phụ đề ngắn gọn',
    description: 'Mô tả ngắn hiển thị trên thẻ dự án.',
    fullDescription: ['Đoạn chi tiết 1 trong modal.', 'Đoạn chi tiết 2 trong modal.'],
    coverImage: { src: projectCover, alt: 'Ảnh dự án', placeholderLabel: '' },
    gallery: [],
    badge: 'R&D 2025',
    status: 'Hoàn thành',
    year: '2025',
    role: 'Trưởng nhóm Kỹ thuật',
    technologies: ['ROS2', 'ESP32-S3', 'Python'],
    metrics: [
      { id: 'm1', value: '0.05s', label: 'Độ trễ phản hồi' },
    ],
    demoUrl: '',
    githubUrl: '',
    documentUrl: '',
    featured: true,
  },
```

---

## 10. Cách thêm Giải Thưởng

Mở file `src/pages/Awards/data/awards.data.js` và thêm object vào mảng `AWARDS_LIST`:

```js
  {
    id: 'award-new-id',
    icon: 'trophy', // 'trophy' | 'medal' | 'award' | 'graduationCap'
    year: '2025',
    level: 'Quốc gia',
    title: 'Tên Giải Thưởng',
    description: 'Mô tả thành tích đạt được...',
    organization: 'Tên Đơn Vị Trao Giải',
    evidenceUrl: '', // Gắn URL minh chứng nếu có
    color: 'primary', // 'primary' | 'secondary' | 'slate' | 'success'
  },
```

---

## 11. Cách sửa Email và Số Điện Thoại

Mở file `src/data/profile.data.js` (dùng chung cho cả Contact Page và tính năng `mailto:`):

```js
export const PROFILE_DATA = {
  // ...
  email: 'ten.cua.ban@domain.com',
  phone: '(+84) 912 345 678',
  labAddress: 'Địa chỉ phòng Lab / Văn phòng làm việc',
};
```

> Lưu ý: Để kích hoạt bản đồ / liên kết Google Maps ở Contact Page, mở `src/pages/Contact/data/contact.data.js` và cập nhật `map.hasVerifiedLocation = true` cùng `map.googleMapsUrl`.

---

## 12. Cách thêm Liên Kết Mạng Xã Hội

Mở file `src/data/social.data.js` và điền `href` hợp lệ (`https://...`). Các mục để trống `href: ''` sẽ tự động được ẩn trên Footer:

```js
export const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/username' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/username' },
  { id: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/...' },
  { id: 'researchgate', label: 'ResearchGate', href: 'https://www.researchgate.net/...' },
];
```

---

## 13. Cách thay đổi Màu Chủ Đạo

Mở file `src/styles/variables.css` và chỉnh các biến CSS trong `:root` (và đồng bộ tại `src/config/theme.config.js` nếu cần):

```css
:root {
  --color-brand-primary: #8D4D58;
  --color-brand-primary-hover: #783F49;
  --color-brand-primary-soft: #F5E4E8;
  --color-brand-secondary: #A33172;
  --color-bg-page: #F7F5F5;
  --color-bg-surface: #FFFFFF;
}
```

---

## 14. Cách thay đổi Font

1. Cập nhật link Google Fonts trong `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

2. Mở `src/styles/variables.css` và đổi giá trị `--font-sans` / `--font-mono`:

```css
:root {
  --font-sans: 'Be Vietnam Pro', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
}
```

---

## 15. Cách ẩn hoặc thay đổi Thứ Tự các Section

1. Mở `src/pages/Home/HomePage.jsx` để sắp xếp lại thứ tự hiển thị hoặc xóa/comment section muốn ẩn:

```jsx
export function HomePage() {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <ProjectsPage />
      <SkillsPage />
      <EducationPage />
      {/* <AwardsPage />  <-- Bỏ comment nếu muốn hiển thị lại */}
      <ContactPage />
    </>
  );
}
```

2. Mở `src/config/navigation.config.js` và cập nhật mảng `NAVIGATION_ITEMS` cho khớp với các section đang hiển thị và thứ tự trên thanh điều hướng:

```js
export const NAVIGATION_ITEMS = [
  { id: SECTION_IDS.ABOUT, label: 'Giới thiệu' },
  { id: SECTION_IDS.PROJECTS, label: 'Dự án' },
  { id: SECTION_IDS.SKILLS, label: 'Kỹ năng' },
  { id: SECTION_IDS.EDUCATION, label: 'Bằng cấp & Học vấn' },
  { id: SECTION_IDS.CONTACT, label: 'Liên hệ' },
];
```
