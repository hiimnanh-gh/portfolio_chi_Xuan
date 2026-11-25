import { Reveal, SectionWrapper } from '@/components/shared';
import { SECTION_IDS } from '@/config/navigation.config';
import { AboutContent } from './components/AboutContent';
import { AboutHeading } from './components/AboutHeading';
import { EcosystemCard } from './components/EcosystemCard';
import { ABOUT_DATA } from './data/about.data';
import styles from './styles/AboutPage.module.css';

export function AboutPage() {
  return (
    <SectionWrapper id={SECTION_IDS.ABOUT}>
      <AboutHeading
        number={ABOUT_DATA.heading.number}
        label={ABOUT_DATA.heading.label}
        title={ABOUT_DATA.heading.title}
      />
      <div className={styles.aboutGrid}>
        <Reveal direction="left" className="h-full">
          <AboutContent
            philosophy={ABOUT_DATA.philosophy}
            coreValues={ABOUT_DATA.coreValues}
          />
        </Reveal>
        <Reveal direction="right" delay={100} className="h-full">
          <EcosystemCard ecosystem={ABOUT_DATA.ecosystem} />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
