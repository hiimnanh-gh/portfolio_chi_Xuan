import { SectionWrapper } from '@/components/shared';
import { SECTION_IDS } from '@/config/navigation.config';
import { AwardsGrid } from './components/AwardsGrid';
import { AwardsHeading } from './components/AwardsHeading';
import { AWARDS_HEADING, AWARDS_LIST } from './data/awards.data';

export function AwardsPage() {
  return (
    <SectionWrapper id={SECTION_IDS.AWARDS}>
      <AwardsHeading
        number={AWARDS_HEADING.number}
        label={AWARDS_HEADING.label}
        title={AWARDS_HEADING.title}
      />
      <AwardsGrid awards={AWARDS_LIST} />
    </SectionWrapper>
  );
}
