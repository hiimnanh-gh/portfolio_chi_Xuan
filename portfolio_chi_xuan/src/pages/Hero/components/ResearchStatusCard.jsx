import { Cpu } from 'lucide-react';
import { IconBox } from '@/components/ui';
import { cn } from '@/utils';
import styles from '../styles/HeroPage.module.css';

export function ResearchStatusCard({ label = 'R&D STATUS', value, className = '' }) {
  if (!value) return null;

  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3.5 py-2.5',
        styles.floatingCard,
        className,
      )}
    >
      <IconBox variant="primary" size="sm">
        <Cpu className="h-4 w-4" />
      </IconBox>
      <div className="min-w-0 leading-tight">
        <span className="block font-mono-tech text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
          {label}
        </span>
        <span className="block truncate text-xs font-bold text-[var(--color-text-heading)] sm:text-sm">
          {value}
        </span>
      </div>
    </div>
  );
}
