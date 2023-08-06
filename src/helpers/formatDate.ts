export const formatDate = (date: Date): string => {
  const options = {
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const,
  };
  return date.toLocaleDateString('en-US', options);
};
