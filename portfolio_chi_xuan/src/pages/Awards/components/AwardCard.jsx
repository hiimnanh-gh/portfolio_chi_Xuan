import { Card } from '@/components/ui';
import { AwardDescription } from './AwardDescription';
import { AwardEvidenceLink } from './AwardEvidenceLink';
import { AwardIcon } from './AwardIcon';
import { AwardMetadata } from './AwardMetadata';
import { AwardOrganization } from './AwardOrganization';
import { AwardTitle } from './AwardTitle';

export function AwardCard({ award }) {
  return (
    <Card variant="default" padding="lg" className="flex h-full flex-col">
      <AwardIcon icon={award.icon} color={award.color} />
      <AwardMetadata year={award.year} level={award.level} />
      <AwardTitle title={award.title} />
      <AwardDescription description={award.description} />

      <div className="mt-auto pt-5">
        <AwardOrganization organization={award.organization} />
        <AwardEvidenceLink url={award.evidenceUrl} />
      </div>
    </Card>
  );
}
