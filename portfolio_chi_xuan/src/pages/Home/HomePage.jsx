import { AboutPage } from '@/pages/About';
import { AwardsPage } from '@/pages/Awards';
import { ContactPage } from '@/pages/Contact';
import { EducationPage } from '@/pages/Education';
import { HeroPage } from '@/pages/Hero';
import { ProjectsPage } from '@/pages/Projects';
import { SkillsPage } from '@/pages/Skills';

export function HomePage() {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <EducationPage />
      <SkillsPage />
      <ProjectsPage />
      <AwardsPage />
      <ContactPage />
    </>
  );
}
