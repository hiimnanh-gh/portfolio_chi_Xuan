import { Cpu, GraduationCap, Users } from 'lucide-react';
import { IconBox } from '@/components/ui';

const ICON_MAP = {
  cpu: Cpu,
  graduationCap: GraduationCap,
  users: Users,
};

export function SkillCategoryIcon({ icon = 'cpu', color = 'primary' }) {
  const IconComponent = ICON_MAP[icon] || Cpu;

  return (
    <IconBox variant={color} size="md">
      <IconComponent className="h-5 w-5" />
    </IconBox>
  );
}
