export function AwardOrganization({ organization }) {
  if (!organization) return null;

  return (
    <p className="text-xs font-medium text-[var(--color-text-muted)]">
      {organization}
    </p>
  );
}
