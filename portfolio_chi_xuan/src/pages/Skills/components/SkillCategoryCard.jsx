import { Card } from '@/components/ui';
import { SkillCategoryIcon } from './SkillCategoryIcon';
import { SkillCategoryTitle } from './SkillCategoryTitle';
import { SkillList } from './SkillList';

export function SkillCategoryCard({ category }) {
  return (
    <Card variant="default" padding="lg" className="flex h-full flex-col">
      <div className="flex items-center gap-3">
        <SkillCategoryIcon icon={category.icon} color={category.color} />
        <SkillCategoryTitle title={category.title} />
      </div>
      <SkillList skills={category.skills} color={category.color} />
    </Card>
  );
}
