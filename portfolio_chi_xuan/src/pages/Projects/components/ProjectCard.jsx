import { Card } from '@/components/ui';
import { cn } from '@/utils';
import styles from '../styles/ProjectsPage.module.css';
import { ProjectContent } from './ProjectContent';
import { ProjectImage } from './ProjectImage';

export function ProjectCard({ project, index = 0, onOpenDetail }) {
  const isImageRight = index % 2 === 1;

  return (
    <Card variant="default" padding="lg">
      <div className={styles.projectCardGrid}>
        <ProjectImage
          image={project.coverImage}
          badge={project.badge}
          title={project.title}
          className={cn(
            'lg:col-span-6',
            isImageRight ? 'lg:order-2' : 'lg:order-1',
          )}
        />
        <ProjectContent
          project={project}
          onOpenDetail={onOpenDetail}
          className={cn(
            'lg:col-span-6',
            isImageRight ? 'lg:order-1' : 'lg:order-2',
          )}
        />
      </div>
    </Card>
  );
}
