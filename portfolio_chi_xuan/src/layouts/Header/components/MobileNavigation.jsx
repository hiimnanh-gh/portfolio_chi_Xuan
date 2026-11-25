import { AvailabilityStatus } from './AvailabilityStatus';
import { NavigationItem } from './NavigationItem';

export function MobileNavigation({
  isOpen = false,
  items = [],
  activeSection = '',
  onNavigate,
  availability,
}) {
  if (!isOpen) return null;

  return (
    <nav
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-surface)] py-3 lg:hidden"
      aria-label="Điều hướng di động"
    >
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <NavigationItem
            key={item.id}
            id={item.id}
            label={item.label}
            isActive={activeSection === item.id}
            onSelect={onNavigate}
            variant="mobile"
          />
        ))}
      </div>

      {availability && (
        <div className="mt-3 border-t border-[var(--color-border)] pt-3 sm:hidden">
          <AvailabilityStatus
            text={availability.text}
            isAvailable={availability.isAvailable}
            className="w-full justify-center"
          />
        </div>
      )}
    </nav>
  );
}
