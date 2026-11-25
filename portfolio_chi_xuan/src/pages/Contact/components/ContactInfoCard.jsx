import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui';
import { ContactInfoItem } from './ContactInfoItem';

export function ContactInfoCard({ profile, labels }) {
  return (
    <Card variant="default" padding="md" className="space-y-4">
      <ContactInfoItem
        icon={<Mail className="h-4 w-4" />}
        label={labels.email}
        value={profile.email}
        href={profile.email ? `mailto:${profile.email}` : ''}
      />
      <ContactInfoItem
        icon={<Phone className="h-4 w-4" />}
        label={labels.phone}
        value={profile.phone}
        href={profile.phone ? `tel:${profile.phone.replace(/[^+\d]/g, '')}` : ''}
      />
      <ContactInfoItem
        icon={<MapPin className="h-4 w-4" />}
        label={labels.address}
        value={profile.labAddress}
      />
    </Card>
  );
}
