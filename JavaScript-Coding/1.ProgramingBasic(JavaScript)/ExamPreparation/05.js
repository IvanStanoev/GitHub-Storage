function toristShop(input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    let productCounter = 0;
    let sumOfProduct = 0;

    while (command !== "Stop") {

        let productName = input[command];
        index++;
        let productPrice = Number(input[index]);
        productCounter++;

        if (productCounter % 3 == 0) {
            productPrice = productPrice / 2;
        }

        sumOfProduct += productPrice;
        budget = budget - productPrice;

        if (budget < 0) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            break;
        }
        index++;
        command = input[index];

        if (command === "Stop") {
            console.log(`You bought ${productCounter} products for ${sumOfProduct.toFixed(2)} leva.`);
        }

    }

}
toristShop(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"])