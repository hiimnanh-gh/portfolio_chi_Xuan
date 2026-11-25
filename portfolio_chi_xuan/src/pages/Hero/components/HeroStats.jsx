import { StatCard } from './StatCard';

export function HeroStats({ stats = [] }) {
  if (!stats.length) return null;

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {stats.map((item) => (
        <StatCard
          key={item.id}
          value={item.value}
          label={item.label}
          color={item.color}
        />
      ))}
    </div>
  );
}
