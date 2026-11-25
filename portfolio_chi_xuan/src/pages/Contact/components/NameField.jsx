import { Input } from '@/components/ui';

export function NameField({ label, placeholder, value, error, onChange }) {
  return (
    <Input
      id="contact-name"
      name="name"
      type="text"
      label={label}
      placeholder={placeholder}
      required
      autoComplete="name"
      value={value}
      error={error}
      onChange={onChange}
    />
  );
}
