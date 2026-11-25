import { Badge } from '@/components/ui';

export function FooterVersion({ version }) {
  if (!version) return null;

  return (
    <Badge variant="neutral" size="sm" mono>
      {version}
    </Badge>
  );
}
