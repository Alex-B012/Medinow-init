export const formatSpecialty = (str = "") => {
  const withSpace = str.replace("-", " ").toLowerCase();
  return withSpace.charAt(0).toUpperCase() + withSpace.slice(1);
};
