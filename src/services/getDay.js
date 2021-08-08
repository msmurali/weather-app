const getDay = (timestamp) => {
  const date_time = new Date(1000 * timestamp);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return days[date_time.getDay()];
};

export default getDay;
