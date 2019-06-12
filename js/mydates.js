function diff(a, b) { // format mm-dd-yyyy (arreglar diferencia para años bisiestos)
	[monthA, dayA, yearA] = a.split('-');
	[monthB, dayB, yearB] = b.split('-');
	dayA = Number(dayA);
	monthA = Number(monthA);
	yearA = Number(yearA);
	dayB = Number(dayB);
	monthB = Number(monthB);
	yearB = Number(yearB);
	let daysA = getDaysInYear(dayA, monthA, yearA);
	let daysB = getDaysInYear(dayB, monthB, yearB);

	return Math.abs(yearA - yearB) * 365 + Math.abs(daysA - daysB);
}

function isLeapYear(year) {
	return (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0));
}

function getMonthDays(month, year) { // retorna los días de un mes
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
		return 31;
	else if (month == 4 || month == 6 || month == 9 || month == 11)
		return 30;
	else if (month == 2) {
		if (isLeapYear(year))
			return 29;
		return 28;
	}
	else
		return null;
}

function getDaysInYear(day, month, year) {
	let days = 0;
	for (let i = 0; i < month; i++)
		days += getMonthDays(i, year)
	return days + day
}