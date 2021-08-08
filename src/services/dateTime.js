const to12HrFormat = (timestamp) => {
  const date_time = new Date(1000 * timestamp);
  const hours = date_time.getHours();
  const minutes = date_time.getMinutes();
  const AmOrPm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours} : ${minutes} ${AmOrPm}`;
};

export default to12HrFormat;
