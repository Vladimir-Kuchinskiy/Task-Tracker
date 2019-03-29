export const capitalizeString = string => {
  return (string.charAt(0).toUpperCase() + string.slice(1)).match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
};

export const isPathFor = (string, pathPart) => {
  string.includes(pathPart);
};
