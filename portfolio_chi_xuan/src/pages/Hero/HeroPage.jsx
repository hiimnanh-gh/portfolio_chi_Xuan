import { SectionWrapper } from '@/components/shared';
import { Badge, Card } from '@/components/ui';
import { SECTION_IDS } from '@/config/navigation.config';
import { HERO_DATA } from './data/hero.data';

export function HeroPage() {
  return (
    <SectionWrapper id={SECTION_IDS.HERO}>
      <Card>
        <Badge>{HERO_DATA.badge}</Badge>
        <h1 className="mt-4 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">
          {HERO_DATA.heading}
        </h1>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          {HERO_DATA.description}
        </p>
      </Card>
    </SectionWrapper>
  );
}
