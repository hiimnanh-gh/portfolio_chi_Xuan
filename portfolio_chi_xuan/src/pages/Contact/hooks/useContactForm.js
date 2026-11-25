import { useState } from 'react';
import { submitContactInquiry } from '@/services/contact.service';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Vui lòng nhập họ và tên.';
  }

  if (!values.email.trim()) {
    errors.email = 'Vui lòng nhập địa chỉ email.';
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Địa chỉ email không hợp lệ.';
  }

  if (!values.message.trim()) {
    errors.message = 'Vui lòng nhập nội dung chi tiết.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Nội dung chi tiết cần tối thiểu 10 ký tự.';
  }

  return errors;
}

/**
 * Controlled form hook for ContactPage: manages values, validation, submission and feedback.
 */
export function useContactForm({ purposes = [], recipientEmail = '' } = {}) {
  const defaultPurpose = purposes[0]?.value || '';

  const [values, setValues] = useState({
    name: '',
    email: '',
    organization: '',
    purpose: defaultPurpose,
    message: '',
    isConfidential: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (field) => (event) => {
    const nextValue =
      event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setValues((prev) => ({ ...prev, [field]: nextValue }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
    if (feedback) {
      setFeedback(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateFields(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFeedback({
        type: 'error',
        message: 'Vui lòng kiểm tra lại các trường thông tin bắt buộc.',
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    const selectedPurpose = purposes.find((item) => item.value === values.purpose);

    const result = await submitContactInquiry(values, {
      recipientEmail,
      purposeLabel: selectedPurpose?.label || '',
    });

    setIsSubmitting(false);

    if (result.ok) {
      setFeedback({ type: 'success', message: result.message });
      setValues({
        name: '',
        email: '',
        organization: '',
        purpose: defaultPurpose,
        message: '',
        isConfidential: false,
      });
      return;
    }

    setFeedback({
      type: result.status === 'unconfigured' ? 'warning' : 'error',
      message: result.message,
      mailtoUrl: result.mailtoUrl || '',
    });
  };

  return {
    values,
    errors,
    isSubmitting,
    feedback,
    handleChange,
    handleSubmit,
  };
}
