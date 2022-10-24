export const getFileName = (fileName) => {
  return fileName.length > 14
    ? fileName.substr(0, 7) + "..." + fileName.substr(-7)
    : fileName;
};
