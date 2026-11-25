export function EducationTitle({ title }) {
  if (!title) return null;

  return (
    <h3 className="mt-4 text-lg font-bold text-[var(--color-text-heading)] sm:text-xl">
      {title}
    </h3>
  );
}
