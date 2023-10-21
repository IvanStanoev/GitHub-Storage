function familyTrip(input) {

    let budget = Number(input[0]);
    let nigths = Number(input[1]);
    let priceNigth = Number(input[2]);
    let percent = Number(input[3]) / 100;

    if (nigths > 7) {
        priceNigth = priceNigth * 0.95;
    }

    cashForSleep = nigths * priceNigth;
    discount = budget * percent;
    total = cashForSleep + discount;

    if (budget >= total) {
        console.log(`Ivanovi will be left with ${(budget - total).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(total - budget).toFixed(2)} leva needed.`);
    }

}
familyTrip(["800.50", "8", "100", "2"]);