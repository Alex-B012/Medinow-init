// Navigate via links
export const navigateTo = (name, links, navigate) => {
  const link = links.find((item) => item.name === name);
  if (link) navigate(link.path);
};

// Get a required url by name from an array with link objects
export const getUrlByName = (name, arr) => {
  return arr.find((obj) => obj.name === name)?.path;
};

// Get patient age based the dob string
export const getPatientAge = (birthdateStr) => {
  if (!birthdateStr) return null;

  const today = new Date();
  const birthDate = new Date(birthdateStr);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

// Get a formatted date for the records on the All Appointments page
export const getFormattedDate = (dateStr) => {
  if (!dateStr) return "";

  const parts = dateStr.split("_");
  if (parts.length !== 3) return "Invalid date";

  const [day, month, year] = parts.map(Number);

  if (!day || !month || !year || month < 1 || month > 12) {
    return "Invalid date";
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[month - 1]} ${day}, ${year}`;
};

// Get a formatted time for the records on the All Appointments page
export const getFormattedTime = (dateStr) => {
  if (!dateStr) return "";

  return dateStr.replace(/^0(\d:)/, "$1");
};
