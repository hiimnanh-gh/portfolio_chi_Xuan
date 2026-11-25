import { FooterVersion } from './FooterVersion';

export function FooterBrand({ name, version }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="text-base font-bold text-[var(--color-text-heading)] sm:text-lg">
        {name}
      </span>
      <FooterVersion version={version} />
    </div>
  );
}
