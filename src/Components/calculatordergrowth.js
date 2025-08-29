
export const calculateOrdersGrowth = (quotes) => {
  if (quotes.length === 0) return { percent: 0, current: 0, last: 0 };

  const now = new Date();
  const currentMonth = now.getMonth();
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const currentYear = now.getFullYear();
  const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  const currentMonthOrders = quotes.filter((q) => {
    const d = new Date(q.createdAt);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  }).length;

  const lastMonthOrders = quotes.filter((q) => {
    const d = new Date(q.createdAt);
    return d.getMonth() === lastMonth && d.getFullYear() === lastMonthYear;
  }).length;

  let percent = 0;
  if (lastMonthOrders > 0) {
    percent = ((currentMonthOrders - lastMonthOrders) / lastMonthOrders) * 100;
  } else if (currentMonthOrders > 0) {
    percent = 100;
  }

  return { percent: percent.toFixed(1), current: currentMonthOrders, last: lastMonthOrders };
};
