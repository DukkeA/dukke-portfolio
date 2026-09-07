// First professional role: Nevato, October 2021.
export function getExperienceYears(date = new Date()): number {
  const years = date.getUTCFullYear() - 2021;
  return Math.max(0, years - (date.getUTCMonth() < 9 ? 1 : 0));
}
