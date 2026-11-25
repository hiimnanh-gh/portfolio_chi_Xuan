export function HeroName({ name }) {
  if (!name) return null;

  return (
    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--color-text-heading)] sm:text-4xl lg:text-[2.75rem]">
      {name}
    </h1>
  );
}
