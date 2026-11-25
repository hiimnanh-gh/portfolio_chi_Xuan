import { Card } from '@/components/ui';
import { EcosystemImage } from './EcosystemImage';
import { FeatureList } from './FeatureList';

export function EcosystemCard({ ecosystem }) {
  if (!ecosystem) return null;

  return (
    <Card variant="default" padding="lg" className="flex h-full min-w-0 flex-col justify-between">
      {ecosystem.label && (
        <p className="font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
          {ecosystem.label}
        </p>
      )}
      <EcosystemImage
        src={ecosystem.image?.src}
        alt={ecosystem.image?.alt}
        placeholderLabel={ecosystem.image?.placeholderLabel}
      />
      <FeatureList items={ecosystem.features} />
    </Card>
  );
}
