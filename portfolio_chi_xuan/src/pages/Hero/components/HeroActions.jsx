import { ContactLink } from './ContactLink';
import { DownloadCVButton } from './DownloadCVButton';
import { ExploreProjectsButton } from './ExploreProjectsButton';

export function HeroActions({ cv, exploreProjectsLabel, contactLinkLabel }) {
  return (
    <div className="mt-6 flex flex-col items-start gap-3.5">
      <div className="flex flex-wrap items-center gap-3">
        <DownloadCVButton
          url={cv?.url}
          fileName={cv?.fileName}
          label={cv?.label}
          unavailableLabel={cv?.unavailableLabel}
        />
        <ExploreProjectsButton label={exploreProjectsLabel} />
      </div>
      <ContactLink label={contactLinkLabel} />
    </div>
  );
}
