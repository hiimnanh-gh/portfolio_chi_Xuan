import { ContactHeading } from './ContactHeading';
import { ContactInfoCard } from './ContactInfoCard';
import { ContactMap } from './ContactMap';

export function ContactInformation({ heading, infoLabels, mapData, profile }) {
  return (
    <div className="flex min-w-0 flex-col gap-5">
      <ContactHeading
        number={heading.number}
        label={heading.label}
        title={heading.title}
        description={heading.description}
      />
      <ContactInfoCard profile={profile} labels={infoLabels} />
      <ContactMap mapData={mapData} address={profile.labAddress} />
    </div>
  );
}
