import { Badge } from '@/components/ui';

export function EducationTags({ tags = [] }) {
  if (!tags.length) return null;

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="neutral" size="sm" mono>
          {tag}
        </Badge>
      ))}
    </div>
  );
}
