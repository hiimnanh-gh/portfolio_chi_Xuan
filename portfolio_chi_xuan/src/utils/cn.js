/**
 * Joins truthy class names into a single space-delimited string.
 * @param {...(string | false | null | undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
