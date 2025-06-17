export function trimContent(content: string) {

  let trimLength: number;
  const splitContent = content.split("\n");

  if (splitContent[0].trim() !== "") {
    return content;
  }

  const trimmedContent = splitContent
    .slice(1)
    .map((line, index) => {
      if (index === 0) {
        trimLength = line.length - line.trimStart().length;
        return line.trimStart();
      }
      return line.slice(trimLength);
    }).join("\n");

  return trimmedContent;
}