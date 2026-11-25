import { Reveal } from '@/components/shared';
import styles from '../styles/EducationPage.module.css';
import { EducationCard } from './EducationCard';

export function EducationGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className={styles.educationGrid}>
      {items.map((item, index) => (
        <Reveal key={item.id} direction="up" delay={index * 90} className="h-full">
          <EducationCard item={item} />
        </Reveal>
      ))}
    </div>
  );
}
