import { HeroActions } from './HeroActions';
import { HeroDescription } from './HeroDescription';
import { HeroIntroBadge } from './HeroIntroBadge';
import { HeroJobTitle } from './HeroJobTitle';
import { HeroName } from './HeroName';
import { HeroStats } from './HeroStats';
import { HeroSubtitle } from './HeroSubtitle';

export function HeroContent({ profile, heroData }) {
  return (
    <div className="min-w-0">
      <HeroIntroBadge text={profile.tagline} />
      <HeroName name={profile.fullName} />
      <HeroSubtitle subtitle={profile.englishName} />
      <HeroJobTitle title={profile.roleTitle} />
      <HeroDescription description={profile.shortBio} />
      <HeroActions
        cv={profile.cv}
        exploreProjectsLabel={heroData.actions.exploreProjectsLabel}
        contactLinkLabel={heroData.actions.contactLinkLabel}
      />
      <HeroStats stats={heroData.stats} />
    </div>
  );
}
