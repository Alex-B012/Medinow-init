export const handleServerError = (
  res,
  error,
  defaultMessage = "Something went wrong",
) => {
  console.error("ERROR:", error);

  res.status(500).json({
    success: false,
    message: error?.message || defaultMessage,
  });
};
