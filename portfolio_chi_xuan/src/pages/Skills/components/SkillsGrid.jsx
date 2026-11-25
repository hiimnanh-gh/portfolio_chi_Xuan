import styles from '../styles/SkillsPage.module.css';
import { SkillCategoryCard } from './SkillCategoryCard';

export function SkillsGrid({ categories = [] }) {
  if (!categories.length) return null;

  return (
    <div className={styles.skillsGrid}>
      {categories.map((category) => (
        <SkillCategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
