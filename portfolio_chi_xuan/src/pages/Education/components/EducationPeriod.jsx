import { Badge } from '@/components/ui';

const COLOR_TO_VARIANT = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  neutral: 'neutral',
  slate: 'outline',
};

export function EducationPeriod({ period, color = 'primary' }) {
  if (!period) return null;

  return (
    <Badge variant={COLOR_TO_VARIANT[color] || 'primary'} size="sm" mono>
      {period}
    </Badge>
  );
}
