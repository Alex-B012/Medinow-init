//Format the doctor's specialty
export const formatSpecialty = (str = "") => {
  const withSpace = str.replace("-", " ").toLowerCase();
  return withSpace.charAt(0).toUpperCase() + withSpace.slice(1);
};

//Format the date value a dob in My Profile
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

// Navigate via links
export const navigateTo = (name, links, navigate) => {
  const link = links.find((item) => item.name === name);
  if (link) navigate(link.path);
};
