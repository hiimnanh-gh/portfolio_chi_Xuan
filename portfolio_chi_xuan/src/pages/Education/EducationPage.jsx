import { SectionHeading, SectionWrapper } from '@/components/shared';
import { Card } from '@/components/ui';
import { SECTION_IDS } from '@/config/navigation.config';
import { EDUCATION_DATA } from './data/education.data';

export function EducationPage() {
  return (
    <SectionWrapper id={SECTION_IDS.EDUCATION}>
      <SectionHeading
        number={EDUCATION_DATA.indexLabel}
        label={EDUCATION_DATA.categoryLabel}
        title={EDUCATION_DATA.title}
      />
      <Card>
        <p className="text-sm text-[var(--color-text-body)]">{EDUCATION_DATA.placeholderNote}</p>
      </Card>
    </SectionWrapper>
  );
}
