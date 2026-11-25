import { FooterSocialItem } from './FooterSocialItem';

function isValidUrl(href) {
  if (!href || typeof href !== 'string') return false;
  return href.startsWith('https://') || href.startsWith('http://');
}

export function FooterSocialLinks({ links = [] }) {
  const validLinks = links.filter((item) => isValidUrl(item.href));

  if (!validLinks.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {validLinks.map((item) => (
        <FooterSocialItem key={item.id} label={item.label} href={item.href} />
      ))}
    </div>
  );
}
