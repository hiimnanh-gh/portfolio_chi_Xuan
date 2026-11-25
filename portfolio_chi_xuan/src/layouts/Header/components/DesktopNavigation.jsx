import { NavigationItem } from './NavigationItem';

export function DesktopNavigation({ items = [], activeSection = '', onNavigate }) {
  return (
    <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Điều hướng chính">
      {items.map((item) => (
        <NavigationItem
          key={item.id}
          id={item.id}
          label={item.label}
          isActive={activeSection === item.id}
          onSelect={onNavigate}
          variant="desktop"
        />
      ))}
    </nav>
  );
}
