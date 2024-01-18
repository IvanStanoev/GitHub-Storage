function dates(month, year) {

    const myDate = new Date(year, month); // Year: 2021, Month: 1 (February), Day: 0 (last day of previous month)

// Extracting the number of days in February
const numberOfDaysInMonth = myDate.getDate();

// Displaying the result
console.log(numberOfDaysInMonth);
}
dates(2, 2021);