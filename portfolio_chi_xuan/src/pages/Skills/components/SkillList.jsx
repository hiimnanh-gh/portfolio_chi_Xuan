import { SkillItem } from './SkillItem';

export function SkillList({ skills = [], color = 'primary' }) {
  if (!skills.length) return null;

  return (
    <ul className="mt-5 space-y-4">
      {skills.map((skill) => (
        <SkillItem key={skill.id} skill={skill} color={color} />
      ))}
    </ul>
  );
}
