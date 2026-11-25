import { SkillName } from './SkillName';
import { SkillPercentage } from './SkillPercentage';
import { SkillProgress } from './SkillProgress';

export function SkillItem({ skill, color }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-2">
        <SkillName name={skill.name} />
        <SkillPercentage
          percentage={skill.percentage}
          levelLabel={skill.levelLabel}
        />
      </div>
      <SkillProgress
        percentage={skill.percentage}
        levelLabel={skill.levelLabel}
        color={color}
      />
    </li>
  );
}
