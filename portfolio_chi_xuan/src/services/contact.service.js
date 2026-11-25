/**
 * Contact service chịu trách nhiệm xử lý gửi yêu cầu liên hệ.
 * Hỗ trợ cấu hình endpoint qua biến môi trường Vite (ví dụ: VITE_CONTACT_ENDPOINT
 * cho API backend hoặc Formspree) và không lưu secret key trong source code frontend.
 */

function buildMailtoUrl(recipientEmail, payload) {
  if (!recipientEmail || recipientEmail.includes('robotics-stem.io')) {
    return '';
  }

  const subject = encodeURIComponent(
    `[Portfolio Contact] ${payload.purposeLabel || payload.purpose || 'Liên hệ hợp tác'} - ${payload.name}`,
  );
  const bodyLines = [
    `Họ và tên: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.organization ? `Đơn vị: ${payload.organization}` : '',
    `Mục đích: ${payload.purposeLabel || payload.purpose || ''}`,
    payload.isConfidential ? 'Yêu cầu bảo mật thông tin / NDA: Có' : '',
    '',
    'Nội dung chi tiết:',
    payload.message,
  ].filter(Boolean);

  return `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
}

/**
 * Gửi dữ liệu liên hệ qua endpoint đã cấu hình, hoặc trả về trạng thái chưa cấu hình.
 * @param {Record<string, unknown>} payload
 * @param {{ recipientEmail?: string, purposeLabel?: string }} options
 * @returns {Promise<{ ok: boolean, status: 'sent' | 'unconfigured' | 'error', message: string, mailtoUrl?: string }>}
 */
export async function submitContactInquiry(payload, options = {}) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  if (!endpoint) {
    const mailtoUrl = buildMailtoUrl(options.recipientEmail, {
      ...payload,
      purposeLabel: options.purposeLabel,
    });

    return {
      ok: false,
      status: 'unconfigured',
      message:
        'Dịch vụ gửi biểu mẫu trực tuyến chưa được cấu hình. Vui lòng liên hệ trực tiếp qua email hoặc cấu hình biến môi trường VITE_CONTACT_ENDPOINT.',
      mailtoUrl,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        ok: false,
        status: 'error',
        message: 'Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau.',
      };
    }

    return {
      ok: true,
      status: 'sent',
      message: 'Yêu cầu hợp tác của bạn đã được gửi thành công.',
    };
  } catch {
    return {
      ok: false,
      status: 'error',
      message: 'Có lỗi kết nối khi gửi biểu mẫu. Vui lòng thử lại sau.',
    };
  }
}
