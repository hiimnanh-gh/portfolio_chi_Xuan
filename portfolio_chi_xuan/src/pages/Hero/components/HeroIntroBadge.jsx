import { Cpu } from 'lucide-react';
import { Badge } from '@/components/ui';

export function HeroIntroBadge({ text }) {
  if (!text) return null;

  return (
    <Badge
      variant="primary"
      size="md"
      icon={<Cpu className="h-3.5 w-3.5" />}
      className="uppercase tracking-wider"
    >
      {text}
    </Badge>
  );
}
