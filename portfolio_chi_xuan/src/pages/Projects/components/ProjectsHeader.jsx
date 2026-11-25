import { SectionHeading } from '@/components/shared';
import { ProjectFilter } from './ProjectFilter';

export function ProjectsHeader({
  heading,
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <SectionHeading
      number={heading.number}
      label={heading.label}
      title={heading.title}
      action={
        <ProjectFilter
          label={heading.filterLabel}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      }
    />
  );
}
