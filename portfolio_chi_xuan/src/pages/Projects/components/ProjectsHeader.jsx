import { SectionHeading } from '@/components/shared';

export function ProjectsHeader({ heading }) {
  return (
    <SectionHeading
      number={heading.number}
      label={heading.label}
      title={heading.title}
      singleLine
    />
  );
}
