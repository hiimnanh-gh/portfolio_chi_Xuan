import { SectionHeading } from '@/components/shared';

export function ContactHeading({ number, label, title, description }) {
  return (
    <SectionHeading
      number={number}
      label={label}
      title={title}
      description={description}
      className="mb-6"
    />
  );
}
