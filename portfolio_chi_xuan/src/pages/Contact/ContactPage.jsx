import { SectionHeading, SectionWrapper } from '@/components/shared';
import { Card } from '@/components/ui';
import { SECTION_IDS } from '@/config/navigation.config';
import { CONTACT_DATA } from './data/contact.data';

export function ContactPage() {
  return (
    <SectionWrapper id={SECTION_IDS.CONTACT}>
      <SectionHeading
        number={CONTACT_DATA.indexLabel}
        label={CONTACT_DATA.categoryLabel}
        title={CONTACT_DATA.title}
      />
      <Card>
        <p className="text-sm text-[var(--color-text-body)]">{CONTACT_DATA.placeholderNote}</p>
      </Card>
    </SectionWrapper>
  );
}
