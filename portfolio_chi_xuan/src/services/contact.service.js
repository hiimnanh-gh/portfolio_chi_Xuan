/**
 * Placeholder service for submitting collaboration/contact messages.
 * Will be connected to an email/API endpoint in the Contact feature phase.
 * @param {Record<string, unknown>} payload
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
export async function submitContactInquiry(payload) {
  if (!payload || !payload.email) {
    return { ok: false, message: 'Vui lòng cung cấp email hợp lệ.' };
  }

  return {
    ok: true,
    message: 'Đã ghi nhận yêu cầu hợp tác.',
  };
}
