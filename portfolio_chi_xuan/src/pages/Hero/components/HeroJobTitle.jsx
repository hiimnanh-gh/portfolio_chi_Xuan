export function HeroJobTitle({ title }) {
  if (!title) return null;

  return (
    <p className="mt-3 text-base font-semibold text-[var(--color-text-heading)] sm:text-lg">
      {title}
    </p>
  );
}
