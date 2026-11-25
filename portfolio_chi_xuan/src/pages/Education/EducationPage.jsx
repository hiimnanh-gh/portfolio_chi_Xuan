import { SectionWrapper } from '@/components/shared';
import { SECTION_IDS } from '@/config/navigation.config';
import { EducationGrid } from './components/EducationGrid';
import { EducationHeading } from './components/EducationHeading';
import { EDUCATION_HEADING, EDUCATION_LIST } from './data/education.data';

export function EducationPage() {
  return (
    <SectionWrapper id={SECTION_IDS.EDUCATION}>
      <EducationHeading
        number={EDUCATION_HEADING.number}
        label={EDUCATION_HEADING.label}
        title={EDUCATION_HEADING.title}
      />
      <EducationGrid items={EDUCATION_LIST} />
    </SectionWrapper>
  );
}
