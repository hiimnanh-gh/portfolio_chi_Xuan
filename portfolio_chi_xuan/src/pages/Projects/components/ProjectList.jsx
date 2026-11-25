import { Card } from '@/components/ui';
import { ProjectCard } from './ProjectCard';

export function ProjectList({ projects = [], emptyMessage, onOpenDetail }) {
  if (!projects.length) {
    return (
      <Card variant="default" padding="lg" className="text-center">
        <p className="text-sm text-[var(--color-text-muted)]">{emptyMessage}</p>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onOpenDetail={onOpenDetail}
        />
      ))}
    </div>
  );
}
