import { TextArea } from '@/components/ui';

export function MessageField({ label, placeholder, value, error, onChange }) {
  return (
    <TextArea
      id="contact-message"
      name="message"
      label={label}
      placeholder={placeholder}
      required
      rows={5}
      value={value}
      error={error}
      onChange={onChange}
    />
  );
}
