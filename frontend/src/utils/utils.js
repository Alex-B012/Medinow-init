import { toast } from "react-toastify";

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

// Get a required url by name from an array with link objects
export const getUrlByName = (name, arr) => {
  return arr.find((obj) => obj.name === name)?.path;
};

// Get extract error message from a server or axios error response
export const getErrorMessage = (error, text = "Something went wrong") => {
  return error.response?.data?.message || error.message || text;
};

// Display an error message in the catch(error) block
export const displayErrorMessage = (error, text) => {
  console.error("ERROR:", error);
  toast.error(getErrorMessage(error, text));
};
