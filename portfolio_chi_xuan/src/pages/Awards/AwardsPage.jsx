import { SectionHeading, SectionWrapper } from '@/components/shared';
import { Card } from '@/components/ui';
import { SECTION_IDS } from '@/config/navigation.config';
import { AWARDS_DATA } from './data/awards.data';

export function AwardsPage() {
  return (
    <SectionWrapper id={SECTION_IDS.AWARDS}>
      <SectionHeading
        number={AWARDS_DATA.indexLabel}
        label={AWARDS_DATA.categoryLabel}
        title={AWARDS_DATA.title}
      />
      <Card>
        <p className="text-sm text-[var(--color-text-body)]">{AWARDS_DATA.placeholderNote}</p>
      </Card>
    </SectionWrapper>
  );
}
