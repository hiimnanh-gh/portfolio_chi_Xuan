import { Card } from '@/components/ui';
import { CertificateLink } from './CertificateLink';
import { EducationAchievement } from './EducationAchievement';
import { EducationDescription } from './EducationDescription';
import { EducationInstitution } from './EducationInstitution';
import { EducationPeriod } from './EducationPeriod';
import { EducationTags } from './EducationTags';
import { EducationTitle } from './EducationTitle';

export function EducationCard({ item }) {
  return (
    <Card variant="default" padding="lg" className="flex h-full flex-col">
      {(item.period || item.achievement) && (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <EducationPeriod period={item.period} color={item.color} />
          <EducationAchievement achievement={item.achievement} />
        </div>
      )}

      <EducationTitle title={item.title} />
      <EducationInstitution institution={item.institution} major={item.major} />
      <EducationDescription description={item.description} />

      <div className="mt-auto">
        <EducationTags tags={item.tags} />
        <CertificateLink url={item.certificateUrl} />
      </div>
    </Card>
  );
}
