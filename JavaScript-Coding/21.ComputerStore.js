function solve(input) {

    let sumWithOutTax = 0;
    let tax = 0;
    let command = '';
    let discount = 0;

    for (let i = 0; i < input.length; i++) {

        if (input[i] == "special" || input[i] == "regular") {
            command = input[i];
            break;
        }

        let curPrice = Number(input[i]);

        if (curPrice <= 0) {
            console.log('Invalid price!');
        } else {
            tax += 0.2 * curPrice;
            sumWithOutTax += curPrice;
        }

    }

    if (sumWithOutTax == 0) {
        console.log('Invalid order!');
        return;
    }

    if (command == "special") {
        discount = (sumWithOutTax + tax) * 0.10;
    }
    let sumAfterTax = (sumWithOutTax + tax) - discount;

    console.log(`Congratulations you\'ve just bought a new computer!`);
    console.log(`Price without taxes: ${sumWithOutTax}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${(sumAfterTax).toFixed(2)}$`);

}
solve([
    "1050",
    "200",
    "450",
    "2",
    "18.50",
    "16.86",
    "special"
])
solve([
    "1023",
    "15",
    "-20",
    "-5.50",
    "450",
    "20",
    "17.66",
    "19.30",
    "regular"
])
solve([
    "regular"
])