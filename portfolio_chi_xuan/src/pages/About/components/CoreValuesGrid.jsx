import { CoreValueCard } from './CoreValueCard';

export function CoreValuesGrid({ values = [] }) {
  if (!values.length) return null;

  return (
    <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
      {values.map((item) => (
        <CoreValueCard
          key={item.id}
          icon={item.icon}
          iconVariant={item.iconVariant}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
