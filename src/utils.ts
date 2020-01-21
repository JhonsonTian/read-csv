export function stringDateToDate(date: string): Date {
  const dateParts = date.split('/');
  const year = parseInt(dateParts[2], 0);
  const month = parseInt(dateParts[1], 0) - 1;
  const day = parseInt(dateParts[0], 0);
  return new Date(year, month, day);
}
