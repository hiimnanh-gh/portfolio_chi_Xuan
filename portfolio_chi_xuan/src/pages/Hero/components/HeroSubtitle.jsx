export function HeroSubtitle({ subtitle }) {
  if (!subtitle) return null;

  return (
    <p className="mt-1 text-xl font-semibold text-[var(--color-brand-primary)] sm:text-2xl">
      ({subtitle})
    </p>
  );
}
