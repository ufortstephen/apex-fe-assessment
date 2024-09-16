export const formatDate = (date: any) => {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1),
    day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const formatDateDisplay = (date: any) => {
  const formattedDate = new Date(date).toISOString().split("T")[0];
  return formattedDate;
};

export const formatDateByMonth = (date: any) => {
  const newDate = new Date(date);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    newDate
  );
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(
    newDate
  );
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(newDate);
  return `${month} ${day},  ${year}`;
};
export const formatDateByMonthAndYear = (date: any) => {
  const newDate = new Date(date);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    newDate
  );
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(
    newDate
  );
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(newDate);
  return `${month}  ${year}`;
};



export const formatCurrency = (amount: number, symbol: string) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: symbol,
  }).format(amount);



export const formatDateTime = (date: any) => {
  const newDate = new Date(date);
  const time = newDate.toLocaleTimeString()

  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    newDate
  );
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(
    newDate
  );
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(newDate);
  return `${month} ${day},  ${year}, ${time}`;
};

export const trimText = (text: string, length: number) => {
  return `${text?.length > length ? text?.substring(0, length) + '..' : text}`
}

export const userStatus = [
  { name: "All", id: "1" },
  { name: "Active", id: "2", classNames: 'text-[#0CAF60]', isDotted: true, dotClasses: 'bg-[#0CAF60]' },
  { name: "Inactive", id: "3", classNames: 'text-[#FE964A]', isDotted: true, dotClasses: 'bg-[#FE964A]' }
];
export const paymentStatus = [
  { name: "All", id: "1", clasNames: 'text-[#111827]' },
  { name: "Paid", id: "2", classNames: 'text-[#8C62FF]', isDotted: true, dotClasses: 'bg-[#8C62FF]' },
  { name: "Unpaid", id: "3", classNames: 'text-[#D4A701]', isDotted: true, dotClasses: 'bg-[#D4A701]' },
  { name: "Overdue", id: "3", classNames: 'text-[#FD6A6A]', isDotted: true, dotClasses: 'bg-[#FD6A6A]' }
];
export const perPageList = [
  { name: "1", id: "1" },
  { name: "2", id: "2" },
  { name: "3", id: "3" },
  { name: "4", id: "4" },
  { name: "5", id: "5" },
  { name: "6", id: "6" },
  { name: "7", id: "7" },
  { name: "8", id: "8" },
  { name: "9", id: "9" },
  { name: "10", id: "10" },
];


