export const parseDatesFromContent = (
  content: string
): { dates: string[]; content: string } => {
  const regex = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;
  const matches = content.match(regex) || [];
  const updatedContent = matches.reduce(
    (acc, date) => acc.replace(`${date}, `, '').replace(date, ''),
    content
  );
  return { dates: matches, content: updatedContent };
};
