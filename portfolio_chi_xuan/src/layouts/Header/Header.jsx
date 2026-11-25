import { Container } from "@/components/shared";
import { NAVIGATION_ITEMS, SECTION_IDS } from "@/config/navigation.config";
import { SITE_CONFIG } from "@/config/site.config";
import { PROFILE_DATA } from "@/data/profile.data";
import { useActiveSection, useMobileMenu, useScrollToSection } from "@/hooks";
import { cn } from "@/utils";
import { AvailabilityStatus } from "./components/AvailabilityStatus";
import { BrandIdentity } from "./components/BrandIdentity";
import { DesktopNavigation } from "./components/DesktopNavigation";
import { HeaderAvatar } from "./components/HeaderAvatar";
import { Logo } from "./components/Logo";
import { MobileMenuButton } from "./components/MobileMenuButton";
import { MobileNavigation } from "./components/MobileNavigation";
import styles from "./Header.module.css";

const ORDERED_SECTION_IDS = [
  SECTION_IDS.HOME,
  ...NAVIGATION_ITEMS.map((item) => item.id),
];

export function Header() {
  const activeSection = useActiveSection(ORDERED_SECTION_IDS);
  const scrollToSection = useScrollToSection();
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  const handleNavigate = (sectionId) => {
    if (sectionId === SECTION_IDS.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(sectionId);
    }
    closeMenu();
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-[var(--color-border)]",
        styles.header,
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <a
            href={`#${SECTION_IDS.HOME}`}
            onClick={(event) => {
              event.preventDefault();
              handleNavigate(SECTION_IDS.HOME);
            }}
            className="flex shrink-0 items-center gap-2.5"
          >
            <Logo src={SITE_CONFIG.logo.src} alt={SITE_CONFIG.logo.alt} />
            <BrandIdentity
              name={SITE_CONFIG.brandName}
              subtitle={SITE_CONFIG.brandSubtitle}
            />
          </a>

          <DesktopNavigation
            items={NAVIGATION_ITEMS}
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />

          <div className="flex shrink-0 items-center gap-2.5">
            <AvailabilityStatus
              text={SITE_CONFIG.availability.text}
              shortText={SITE_CONFIG.availability.shortText}
              isAvailable={SITE_CONFIG.availability.isAvailable}
              className="hidden sm:inline-flex"
            />
            <HeaderAvatar
              src={PROFILE_DATA.avatar.src}
              alt={PROFILE_DATA.avatar.alt}
              initials={PROFILE_DATA.initials}
            />
            <MobileMenuButton isOpen={isOpen} onToggle={toggleMenu} />
          </div>
        </div>

        <MobileNavigation
          isOpen={isOpen}
          items={NAVIGATION_ITEMS}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          availability={SITE_CONFIG.availability}
        />
      </Container>
    </header>
  );
}
