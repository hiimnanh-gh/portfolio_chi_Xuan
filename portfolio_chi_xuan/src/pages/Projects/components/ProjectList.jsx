import { Reveal } from '@/components/shared';
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
        <Reveal
          key={project.id}
          direction={index % 2 === 0 ? 'left' : 'right'}
          delay={80}
        >
          <ProjectCard
            project={project}
            index={index}
            onOpenDetail={onOpenDetail}
          />
        </Reveal>
      ))}
    </div>
  );
}
