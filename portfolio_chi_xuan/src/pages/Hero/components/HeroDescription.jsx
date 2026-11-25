export function HeroDescription({ description }) {
  if (!description) return null;

  return (
    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-text-body)] sm:text-base">
      {description}
    </p>
  );
}
