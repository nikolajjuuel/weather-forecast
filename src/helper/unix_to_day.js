const unixToDay = (unix) => {
  const date = new Date(unix * 1000);
  return date.toString().split(' ')[0];
}

export default unixToDay;