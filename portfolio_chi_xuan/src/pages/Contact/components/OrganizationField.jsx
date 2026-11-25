import { Input } from '@/components/ui';

export function OrganizationField({ label, placeholder, value, onChange }) {
  return (
    <Input
      id="contact-organization"
      name="organization"
      type="text"
      label={label}
      placeholder={placeholder}
      autoComplete="organization"
      value={value}
      onChange={onChange}
    />
  );
}
