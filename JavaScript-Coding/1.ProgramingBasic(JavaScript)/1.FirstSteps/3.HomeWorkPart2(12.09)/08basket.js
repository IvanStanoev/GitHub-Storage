function basketball(input) {

    let priceYear = Number(input[0]);
    let priceShoes = priceYear - (40 * (priceYear / 100));
    let priceClothes = priceShoes - (20 * (priceShoes / 100));
    let priceBall = 0.25 * priceClothes;
    let priceAccs = 0.20 * priceBall;
    let totalPrice = priceYear + priceShoes + priceClothes + priceBall + priceAccs;

    console.log(totalPrice);

}
basketball(["365"]);