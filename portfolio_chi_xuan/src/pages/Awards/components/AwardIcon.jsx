import { Award, GraduationCap, Medal, Trophy } from 'lucide-react';
import { IconBox } from '@/components/ui';

const ICON_MAP = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  graduationCap: GraduationCap,
};

export function AwardIcon({ icon = 'trophy', color = 'primary' }) {
  const IconComponent = ICON_MAP[icon] || Trophy;

  return (
    <IconBox variant={color} size="md">
      <IconComponent className="h-5 w-5" />
    </IconBox>
  );
}
