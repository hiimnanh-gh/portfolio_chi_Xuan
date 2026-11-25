import { FilterButton } from './FilterButton';

export function ProjectFilter({
  label = 'Lọc theo:',
  categories = [],
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={label}>
      <span className="mr-1 text-xs font-medium text-[var(--color-text-muted)]">{label}</span>
      {categories.map((category) => (
        <FilterButton
          key={category.id}
          label={category.label}
          isActive={selectedCategory === category.id}
          onClick={() => onSelectCategory(category.id)}
        />
      ))}
    </div>
  );
}
