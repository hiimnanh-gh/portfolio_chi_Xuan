export function EducationDescription({ description }) {
  if (!description) return null;

  return (
    <p className="mt-3 text-justify text-sm leading-relaxed text-[var(--color-text-body)]">
      {description}
    </p>
  );
}
