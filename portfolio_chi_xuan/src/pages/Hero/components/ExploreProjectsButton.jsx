import { Compass } from 'lucide-react';
import { Button } from '@/components/ui';
import { SECTION_IDS } from '@/config/navigation.config';
import { useScrollToSection } from '@/hooks';

export function ExploreProjectsButton({ label = 'Khám Phá Dự Án' }) {
  const scrollToSection = useScrollToSection();

  return (
    <Button
      variant="secondary"
      size="md"
      leftIcon={<Compass className="h-4 w-4 text-[var(--color-brand-primary)]" />}
      onClick={() => scrollToSection(SECTION_IDS.PROJECTS)}
    >
      {label}
    </Button>
  );
}
