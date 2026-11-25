import styles from '../styles/EducationPage.module.css';
import { EducationCard } from './EducationCard';

export function EducationGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className={styles.educationGrid}>
      {items.map((item) => (
        <EducationCard key={item.id} item={item} />
      ))}
    </div>
  );
}
