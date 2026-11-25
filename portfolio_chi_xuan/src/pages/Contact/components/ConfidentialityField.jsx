import { Checkbox } from '@/components/ui';

export function ConfidentialityField({ label, checked, onChange }) {
  return (
    <Checkbox
      id="contact-confidential"
      name="isConfidential"
      label={label}
      checked={checked}
      onChange={onChange}
    />
  );
}
