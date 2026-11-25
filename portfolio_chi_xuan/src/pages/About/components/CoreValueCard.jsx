import { Cpu, Layers, Sparkles, Users } from 'lucide-react';
import { Card, IconBox } from '@/components/ui';

const ICON_MAP = {
  layers: Layers,
  users: Users,
  cpu: Cpu,
  sparkles: Sparkles,
};

export function CoreValueCard({
  icon = 'layers',
  iconVariant = 'primary',
  title,
  description,
}) {
  const IconComponent = ICON_MAP[icon] || Layers;

  return (
    <Card variant="default" padding="md" className="h-full">
      <IconBox variant={iconVariant} size="md">
        <IconComponent className="h-5 w-5" />
      </IconBox>
      <h4 className="mt-4 text-base font-bold text-[var(--color-text-heading)]">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-body)]">
        {description}
      </p>
    </Card>
  );
}
