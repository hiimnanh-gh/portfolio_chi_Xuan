import { ContactLink } from './ContactLink';
import { DownloadCVButton } from './DownloadCVButton';
import { ExploreProjectsButton } from './ExploreProjectsButton';

export function HeroActions({ cv, exploreProjectsLabel, contactLinkLabel }) {
  return (
    <div className="mt-6 flex flex-col items-stretch gap-3.5 sm:items-start">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <DownloadCVButton
          url={cv?.url}
          fileName={cv?.fileName}
          label={cv?.label}
          unavailableLabel={cv?.unavailableLabel}
        />
        <ExploreProjectsButton label={exploreProjectsLabel} />
      </div>
      <div className="flex justify-center sm:justify-start">
        <ContactLink label={contactLinkLabel} />
      </div>
    </div>
  );
}
