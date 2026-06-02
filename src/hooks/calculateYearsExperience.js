export function useCalculateExperience(initialDate) {
  const today = new Date();
  const startDate = new Date(initialDate);
  let years = today.getFullYear() - startDate.getFullYear();
  const months = today.getMonth() - startDate.getMonth();
  if (months< 0 || (months === 0 && today.getDate() < startDate.getDate())) years--;
  return years < 1 ? "<1" : years;
}
