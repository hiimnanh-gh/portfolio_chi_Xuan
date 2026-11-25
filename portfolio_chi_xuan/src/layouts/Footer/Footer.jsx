import { Container } from '@/components/shared';
import { SITE_CONFIG } from '@/config/site.config';
import { PROFILE_DATA } from '@/data/profile.data';
import { SOCIAL_LINKS } from '@/data/social.data';
import { cn } from '@/utils';
import { BackToTopButton } from './components/BackToTopButton';
import { FooterBrand } from './components/FooterBrand';
import { FooterCopyright } from './components/FooterCopyright';
import { FooterDescription } from './components/FooterDescription';
import { FooterSocialLinks } from './components/FooterSocialLinks';
import { FooterTechnologyStack } from './components/FooterTechnologyStack';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={cn('border-t border-[var(--color-border)] py-10 sm:py-12', styles.footer)}>
      <Container>
        <div className="flex flex-col justify-between gap-6 border-b border-[var(--color-border)] pb-8 md:flex-row md:items-center">
          <div className="min-w-0">
            <FooterBrand
              name={SITE_CONFIG.brandName}
              version={SITE_CONFIG.version}
            />
            <FooterDescription description={PROFILE_DATA.shortBio} />
          </div>

          <FooterSocialLinks links={SOCIAL_LINKS} />
        </div>

        <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <FooterCopyright owner={SITE_CONFIG.footer.copyrightOwner} />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:gap-6">
            <FooterTechnologyStack
              ecosystemNote={SITE_CONFIG.footer.ecosystemNote}
              specialtyNote={SITE_CONFIG.footer.specialtyNote}
            />
            <div>
              <BackToTopButton label={SITE_CONFIG.footer.backToTopLabel} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
