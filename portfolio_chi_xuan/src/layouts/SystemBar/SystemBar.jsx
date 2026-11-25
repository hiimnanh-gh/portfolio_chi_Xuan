import { Container } from '@/components/shared';
import { cn } from '@/utils';
import { LabFocus } from './components/LabFocus';
import { SystemMetadata } from './components/SystemMetadata';
import { SystemSeparator } from './components/SystemSeparator';
import { SystemStatus } from './components/SystemStatus';
import { TechnologyStack } from './components/TechnologyStack';
import { SYSTEM_BAR_DATA } from './data/system.data';
import styles from './SystemBar.module.css';

export function SystemBar() {
  const { status, labFocus, technologyStack, metadata } = SYSTEM_BAR_DATA;

  return (
    <div
      role="region"
      aria-label="Trạng thái hệ thống"
      className={cn('border-b border-[var(--color-border)] py-2.5', styles.systemBar)}
    >
      <Container>
        <div className="flex flex-col gap-2 font-mono-tech text-[11px] leading-relaxed sm:text-xs lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <SystemStatus label={status.label} isOnline={status.isOnline} />
            <SystemSeparator />
            <LabFocus prefix={labFocus.prefix} value={labFocus.value} />
            <SystemSeparator className="hidden md:inline" />
            <TechnologyStack prefix={technologyStack.prefix} items={technologyStack.items} />
          </div>

          <SystemMetadata items={metadata} />
        </div>
      </Container>
    </div>
  );
}
