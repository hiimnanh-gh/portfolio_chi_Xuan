import { Reveal } from '@/components/shared';
import styles from '../styles/AwardsPage.module.css';
import { AwardCard } from './AwardCard';

export function AwardsGrid({ awards = [] }) {
  if (!awards.length) return null;

  return (
    <div className={styles.awardsGrid}>
      {awards.map((award, index) => (
        <Reveal key={award.id} direction="up" delay={index * 90} className="h-full">
          <AwardCard award={award} />
        </Reveal>
      ))}
    </div>
  );
}
