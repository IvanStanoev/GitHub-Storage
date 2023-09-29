function agencyProfit(input) {

    let priceForbagAbove20 = Number(input[0]);
    let bagWeith = Number(input[1]);
    let days = Number(input[2]);
    let bagsCount = Number(input[3]);

    let tax = 0;
    let totalCash = 0;

    if (bagWeith < 10) {
        tax = 0.20 * priceForbagAbove20;
    } else if (bagWeith >= 10 && bagWeith <= 20) {
        tax = 0.50 * priceForbagAbove20;
    } else {
        tax = priceForbagAbove20;
    }

    totalCash = bagsCount * tax;

    if (days > 30) {
        totalCash *= 1.10;
    } else if (days > 7 && days <= 30) {
        totalCash *= 1.15;
    } else if (days < 7) {
        totalCash *= 1.40;
    }
    console.log(`The total price of bags is: ${totalCash.toFixed(2)} lv.`);

}
agencyProfit(["25.50", "5", "36", "6"]);