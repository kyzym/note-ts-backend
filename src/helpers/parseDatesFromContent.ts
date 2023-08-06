export const findDatesInContent = (content: string): string[] => {
  const regex = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;
  return content.match(regex) || [];
};

export const removeDatesFromContent = (content: string): string => {
  const regex = /\b\d{1,2}\/\d{1,2}\/\d{4}(, )?\b/g;
  return content.replace(regex, '').trim();
};
