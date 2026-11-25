import { Card } from '@/components/ui';

export function PhilosophyCard({ title, paragraphs = [] }) {
  return (
    <Card variant="default" padding="lg">
      {title && (
        <h3 className="text-lg font-bold text-[var(--color-text-heading)] sm:text-xl">
          {title}
        </h3>
      )}
      <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-[var(--color-text-body)] sm:text-[15px]">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Card>
  );
}
