import { OptimizedImage } from '@/components/shared';
import { cn } from '@/utils';
import styles from '../styles/HeroPage.module.css';
import { ProfileIdentityCard } from './ProfileIdentityCard';
import { ResearchStatusCard } from './ResearchStatusCard';

export function HeroPortrait({ profile, researchStatus, identityCard }) {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        className={cn(
          'relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-surface)]',
          styles.portraitFrame,
        )}
      >
        <OptimizedImage
          src={profile.portrait?.src}
          alt={profile.portrait?.alt || profile.fullName}
          fallbackText={profile.portrait?.placeholderLabel}
          aspectRatio="4/5"
          rounded="none"
          loading="eager"
          className="w-full"
        />

        <ResearchStatusCard
          label={researchStatus.label}
          value={researchStatus.value}
          className="absolute top-3 right-3 max-w-[calc(100%-1.5rem)] sm:top-4 sm:right-4"
        />

        <ProfileIdentityCard
          displayName={profile.fullName}
          specialty={identityCard.specialty}
          statusLabel={identityCard.statusLabel}
          isActive={identityCard.isActive}
          tags={identityCard.tags}
          className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4"
        />
      </div>
    </div>
  );
}
