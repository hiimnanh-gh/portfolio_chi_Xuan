import { Download } from 'lucide-react';
import { Button } from '@/components/ui';

export function DownloadCVButton({
  url = '',
  fileName = '',
  label = 'Tải CV / Hồ Sơ Năng Lực',
  unavailableLabel = 'CV đang được cập nhật',
}) {
  if (!url) {
    return (
      <Button
        variant="primary"
        size="md"
        disabled
        title={unavailableLabel}
        leftIcon={<Download className="h-4 w-4" />}
      >
        {unavailableLabel}
      </Button>
    );
  }

  return (
    <a
      href={url}
      download={fileName || true}
      className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-brand-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[var(--color-brand-primary-hover)]"
    >
      <Download className="h-4 w-4 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
