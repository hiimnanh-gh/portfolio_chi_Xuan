import { cn } from '@/utils';
import { ProjectActions } from './ProjectActions';
import { ProjectDescription } from './ProjectDescription';
import { ProjectMetadata } from './ProjectMetadata';
import { ProjectMetrics } from './ProjectMetrics';
import { ProjectTechnologyTags } from './ProjectTechnologyTags';
import { ProjectTitle } from './ProjectTitle';

export function ProjectContent({ project, onOpenDetail, className = '' }) {
  return (
    <div className={cn('min-w-0', className)}>
      <ProjectMetadata
        categoryLabel={project.categoryLabel}
        status={project.status}
        year={project.year}
      />
      <ProjectTitle title={project.title} subtitle={project.subtitle} />
      <ProjectDescription description={project.description} />
      <ProjectMetrics metrics={project.metrics} />
      <ProjectTechnologyTags technologies={project.technologies} />
      <ProjectActions
        demoUrl={project.demoUrl}
        githubUrl={project.githubUrl}
        documentUrl={project.documentUrl}
        onOpenDetail={() => onOpenDetail(project)}
      />
    </div>
  );
}
