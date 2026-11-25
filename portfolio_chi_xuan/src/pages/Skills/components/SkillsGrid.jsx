import { Reveal } from '@/components/shared';
import styles from '../styles/SkillsPage.module.css';
import { SkillCategoryCard } from './SkillCategoryCard';

export function SkillsGrid({ categories = [] }) {
  if (!categories.length) return null;

  return (
    <div className={styles.skillsGrid}>
      {categories.map((category, index) => (
        <Reveal key={category.id} direction="up" delay={index * 100} className="h-full">
          <SkillCategoryCard category={category} />
        </Reveal>
      ))}
    </div>
  );
}
