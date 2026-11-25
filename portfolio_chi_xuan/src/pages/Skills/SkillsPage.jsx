import { SectionHeading, SectionWrapper } from '@/components/shared';
import { Card } from '@/components/ui';
import { SECTION_IDS } from '@/config/navigation.config';
import { SKILLS_DATA } from './data/skills.data';

export function SkillsPage() {
  return (
    <SectionWrapper id={SECTION_IDS.SKILLS}>
      <SectionHeading
        number={SKILLS_DATA.indexLabel}
        label={SKILLS_DATA.categoryLabel}
        title={SKILLS_DATA.title}
      />
      <Card>
        <p className="text-sm text-[var(--color-text-body)]">{SKILLS_DATA.placeholderNote}</p>
      </Card>
    </SectionWrapper>
  );
}
