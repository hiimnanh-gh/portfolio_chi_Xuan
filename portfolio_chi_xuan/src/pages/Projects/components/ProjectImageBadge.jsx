import { Badge } from '@/components/ui';

export function ProjectImageBadge({ text }) {
  if (!text) return null;

  return (
    <Badge
      variant="outline"
      size="sm"
      dot
      mono
      className="bg-[var(--color-bg-surface)]/95 text-[var(--color-text-heading)] shadow-xs"
    >
      {text}
    </Badge>
  );
}
