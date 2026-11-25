import { Card } from '@/components/ui';

export function StatCard({ value, label, color = 'var(--color-brand-primary)' }) {
  return (
    <Card padding="sm" variant="default" className="flex flex-col justify-between">
      <span className="text-2xl font-bold tracking-tight sm:text-[1.75rem]" style={{ color }}>
        {value}
      </span>
      <span className="mt-1.5 text-xs leading-snug text-[var(--color-text-body)]">
        {label}
      </span>
    </Card>
  );
}
