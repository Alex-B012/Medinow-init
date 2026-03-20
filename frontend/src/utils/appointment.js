// Get date and time according to the My appointment page format
export const getAppointmentDateAndTime = (dateStr, time) => {
  if (!dateStr) return time || "";

  const [day, month, year] = dateStr.split("_").map(Number);
  const date = new Date(year, month - 1, day);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  let formattedTime = "";

  if (time) {
    formattedTime = time.replace(/^0(\d:)/, "$1");
  }

  return `${formattedDate}${formattedTime ? ` | ${formattedTime}` : ""}`;
};
