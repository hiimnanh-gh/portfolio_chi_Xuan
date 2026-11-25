import { SectionWrapper } from '@/components/shared';
import { SECTION_IDS } from '@/config/navigation.config';
import { SkillsGrid } from './components/SkillsGrid';
import { SkillsHeading } from './components/SkillsHeading';
import { SKILL_CATEGORIES, SKILLS_HEADING } from './data/skills.data';

export function SkillsPage() {
  return (
    <SectionWrapper id={SECTION_IDS.SKILLS}>
      <SkillsHeading
        number={SKILLS_HEADING.number}
        label={SKILLS_HEADING.label}
        title={SKILLS_HEADING.title}
      />
      <SkillsGrid categories={SKILL_CATEGORIES} />
    </SectionWrapper>
  );
}
