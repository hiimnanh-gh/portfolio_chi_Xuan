import { FeatureListItem } from './FeatureListItem';

export function FeatureList({ items = [] }) {
  if (!items.length) return null;

  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <FeatureListItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}
