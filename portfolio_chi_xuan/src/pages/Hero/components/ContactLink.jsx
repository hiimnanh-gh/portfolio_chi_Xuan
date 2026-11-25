import { ArrowRight } from 'lucide-react';
import { SECTION_IDS } from '@/config/navigation.config';
import { useScrollToSection } from '@/hooks';

export function ContactLink({ label = 'Liên Hệ Hợp Tác' }) {
  const scrollToSection = useScrollToSection();

  const handleClick = (event) => {
    event.preventDefault();
    scrollToSection(SECTION_IDS.CONTACT);
  };

  return (
    <a
      href={`#${SECTION_IDS.CONTACT}`}
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-heading)] transition-colors hover:text-[var(--color-brand-primary)]"
    >
      <span>{label}</span>
      <ArrowRight className="h-3.5 w-3.5" />
    </a>
  );
}
