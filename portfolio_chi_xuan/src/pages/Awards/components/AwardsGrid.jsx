import styles from '../styles/AwardsPage.module.css';
import { AwardCard } from './AwardCard';

export function AwardsGrid({ awards = [] }) {
  if (!awards.length) return null;

  return (
    <div className={styles.awardsGrid}>
      {awards.map((award) => (
        <AwardCard key={award.id} award={award} />
      ))}
    </div>
  );
}
