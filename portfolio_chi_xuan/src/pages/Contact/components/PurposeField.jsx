import { Select } from '@/components/ui';

export function PurposeField({ label, options = [], value, onChange }) {
  return (
    <Select
      id="contact-purpose"
      name="purpose"
      label={label}
      options={options}
      value={value}
      onChange={onChange}
    />
  );
}
