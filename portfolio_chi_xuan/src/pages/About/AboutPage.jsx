import { SectionHeading, SectionWrapper } from '@/components/shared';
import { Card } from '@/components/ui';
import { SECTION_IDS } from '@/config/navigation.config';
import { ABOUT_DATA } from './data/about.data';

export function AboutPage() {
  return (
    <SectionWrapper id={SECTION_IDS.ABOUT}>
      <SectionHeading
        number={ABOUT_DATA.indexLabel}
        label={ABOUT_DATA.categoryLabel}
        title={ABOUT_DATA.title}
      />
      <Card>
        <p className="text-sm text-[var(--color-text-body)]">{ABOUT_DATA.placeholderNote}</p>
      </Card>
    </SectionWrapper>
  );
}
