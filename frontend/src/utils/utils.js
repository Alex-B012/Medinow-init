export const formatSpecialty = (str = "") => {
  const withSpace = str.replace("-", " ").toLowerCase();
  return withSpace.charAt(0).toUpperCase() + withSpace.slice(1);
};

export const formatDate = (dateString) => {
  if (!dateString) return "";

  return new Date(dateString)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/(\d{2} \w{3})( )/, "$1, ");
};
