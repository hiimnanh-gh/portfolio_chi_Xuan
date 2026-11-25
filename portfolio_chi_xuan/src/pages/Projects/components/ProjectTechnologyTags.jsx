import { Badge } from '@/components/ui';

export function ProjectTechnologyTags({ technologies = [] }) {
  if (!technologies.length) return null;

  return (
    <div className="mt-4 flex flex-wrap items-center gap-1.5">
      {technologies.map((tech) => (
        <Badge key={tech} variant="neutral" size="sm" mono>
          {tech}
        </Badge>
      ))}
    </div>
  );
}
