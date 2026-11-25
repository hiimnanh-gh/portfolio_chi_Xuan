import { SectionHeading, SectionWrapper } from '@/components/shared';
import { Card } from '@/components/ui';
import { SECTION_IDS } from '@/config/navigation.config';
import { PROJECTS_DATA } from './data/projects.data';

export function ProjectsPage() {
  return (
    <SectionWrapper id={SECTION_IDS.PROJECTS}>
      <SectionHeading
        number={PROJECTS_DATA.indexLabel}
        label={PROJECTS_DATA.categoryLabel}
        title={PROJECTS_DATA.title}
      />
      <Card>
        <p className="text-sm text-[var(--color-text-body)]">{PROJECTS_DATA.placeholderNote}</p>
      </Card>
    </SectionWrapper>
  );
}
