import { SectionWrapper } from '@/components/shared';
import { SECTION_IDS } from '@/config/navigation.config';
import { PROFILE_DATA } from '@/data/profile.data';
import { HeroContent } from './components/HeroContent';
import { HeroPortrait } from './components/HeroPortrait';
import { HERO_DATA } from './data/hero.data';
import styles from './styles/HeroPage.module.css';

export function HeroPage() {
  return (
    <SectionWrapper id={SECTION_IDS.HOME} spacing="lg">
      <div className={styles.heroGrid}>
        <HeroContent profile={PROFILE_DATA} heroData={HERO_DATA} />
        <HeroPortrait
          profile={PROFILE_DATA}
          researchStatus={HERO_DATA.researchStatus}
          identityCard={HERO_DATA.identityCard}
        />
      </div>
    </SectionWrapper>
  );
}
