import { Input } from '@/components/ui';

export function EmailField({ label, placeholder, value, error, onChange }) {
  return (
    <Input
      id="contact-email"
      name="email"
      type="email"
      label={label}
      placeholder={placeholder}
      required
      autoComplete="email"
      value={value}
      error={error}
      onChange={onChange}
    />
  );
}
