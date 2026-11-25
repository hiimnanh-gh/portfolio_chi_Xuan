import { AlertCircle, CheckCircle2, Info, Mail } from 'lucide-react';
import { cn } from '@/utils';

const FEEDBACK_STYLES = {
  success: 'border-[var(--color-status-success)] bg-[var(--color-status-success-soft)] text-[var(--color-status-success)]',
  warning: 'border-[var(--color-border-strong)] bg-[var(--color-bg-page)] text-[var(--color-text-heading)]',
  error: 'border-[var(--color-status-error)] bg-[var(--color-status-error-soft)] text-[var(--color-status-error)]',
};

const ICON_MAP = {
  success: CheckCircle2,
  warning: Info,
  error: AlertCircle,
};

export function FormFeedback({ feedback }) {
  if (!feedback) return null;

  const IconComponent = ICON_MAP[feedback.type] || Info;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'mt-4 rounded-[var(--radius-sm)] border p-3.5 text-xs leading-relaxed sm:text-sm',
        FEEDBACK_STYLES[feedback.type] || FEEDBACK_STYLES.warning,
      )}
    >
      <div className="flex items-start gap-2.5">
        <IconComponent className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="space-y-2">
          <p>{feedback.message}</p>
          {feedback.mailtoUrl && (
            <a
              href={feedback.mailtoUrl}
              className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-brand-primary)] underline underline-offset-2"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Mở ứng dụng email để gửi trực tiếp</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
