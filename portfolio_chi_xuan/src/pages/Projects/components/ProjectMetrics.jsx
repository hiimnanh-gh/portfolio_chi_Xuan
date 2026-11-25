import { ProjectMetricCard } from './ProjectMetricCard';

export function ProjectMetrics({ metrics = [] }) {
  if (!metrics.length) return null;

  return (
    <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
      {metrics.map((metric) => (
        <ProjectMetricCard
          key={metric.id}
          value={metric.value}
          label={metric.label}
        />
      ))}
    </div>
  );
}
