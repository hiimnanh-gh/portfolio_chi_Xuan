import { Badge } from '@/components/ui';
import { Container, SocialLinks } from '@/components/shared';
import { SITE_CONFIG } from '@/config/site.config';
import { PROFILE_DATA } from '@/data/profile.data';
import { SOCIAL_LINKS } from '@/data/social.data';
import { cn } from '@/utils';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={cn('border-t border-[var(--color-border-subtle)] py-10', styles.footer)}>
      <Container>
        <div className="flex flex-col justify-between gap-6 border-b border-[var(--color-border-subtle)] pb-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-base font-bold text-[var(--color-text-primary)]">
                {SITE_CONFIG.brandName}
              </span>
              <Badge variant="neutral" className="font-mono-tech text-[11px]">
                {SITE_CONFIG.version}
              </Badge>
            </div>
            <p className="mt-2 max-w-md text-xs text-[var(--color-text-muted)]">
              {PROFILE_DATA.shortBio}
            </p>
          </div>

          <SocialLinks links={SOCIAL_LINKS} />
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center">
          <p>{SITE_CONFIG.footer.copyright}</p>
          <p className="font-mono-tech">{SITE_CONFIG.footer.ecosystemNote}</p>
        </div>
      </Container>
    </footer>
  );
}
