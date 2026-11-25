import { CheckCircle2 } from 'lucide-react';

export function FeatureListItem({ text }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-text-body)]">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-text-muted)]" />
      <span>{text}</span>
    </li>
  );
}
