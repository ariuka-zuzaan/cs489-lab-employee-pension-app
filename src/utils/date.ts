const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;

const quarters = [
  { start: 1, end: 3 },
  { start: 4, end: 6 },
  { start: 7, end: 9 },
  { start: 10, end: 12 },
];

const nextQuarter = quarters[Math.floor(currentMonth / 3) > 4 ? 1 : Math.floor(currentMonth / 3) + 1];
export const upcomingDateStart =
  nextQuarter.start == 1 ? new Date(currentDate.getFullYear() + 1, 1, 1) : new Date(currentDate.getFullYear(), nextQuarter.start, 1);

export function getYearsDiff(d1: Date, d2: Date) {
  let years = d2.getFullYear() - d1.getFullYear();
  let months = d2.getMonth() - d1.getMonth();
  let days = d2.getDate() - d1.getDate();

  if (days < 0) {
    months--;
    let lastMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  return years;
}
