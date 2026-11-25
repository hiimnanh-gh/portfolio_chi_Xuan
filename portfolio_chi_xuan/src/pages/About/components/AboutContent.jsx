import { CoreValuesGrid } from './CoreValuesGrid';
import { PhilosophyCard } from './PhilosophyCard';

export function AboutContent({ philosophy, coreValues }) {
  return (
    <div className="flex min-w-0 flex-col gap-5">
      <PhilosophyCard
        title={philosophy?.title}
        paragraphs={philosophy?.paragraphs}
      />
      <CoreValuesGrid values={coreValues} />
    </div>
  );
}
