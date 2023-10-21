function movieProfit(input) {

    let name = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let priceForTickets = Number(input[3]);
    let percent = Number(input[4]) / 100;

    sumOfTicketsForDay = tickets * priceForTickets;
    totalIncome = days * sumOfTicketsForDay;
    discount = totalIncome * percent;

    totalCash = totalIncome - discount;

    console.log(`The profit from the movie ${name} is ${totalCash.toFixed(2)} lv.`);

}
movieProfit(["The Programmer", "20", "500", "7.50", "7"]);