function solve1(input) {

    let paint = Number(input[0]);
    let tapets = Number(input[1]);
    let gloves = Number(input[2]);
    let brush = Number(input[3]);

    priceForPaint = paint * 21.50;
    priceForTapets = tapets * 5.20;
    neededGloves = Math.ceil(tapets * 0.35);
    neededBrushes = Math.floor(paint * 0.48);

    priceForGloves = neededGloves * gloves;
    priceForBrushes = neededBrushes * brush;

    totalPrice = priceForPaint + priceForTapets + priceForGloves + priceForBrushes;
    discount = totalPrice / 15;
    console.log(`This delivery will cost ${discount.toFixed(2)} lv.`);
}
solve1(["21", "18", "5", "2.2"]);