function supplies(input){

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litres = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pricePens = pens * 5.80;
    let priceMarkers = markers * 7.20;
    let priceLitres = litres * 1.20;
    let totalMaterials = pricePens + priceMarkers + priceLitres;
    let totalDiscount = percentDiscount / 100;
    let totalCoast = totalMaterials - (totalMaterials * totalDiscount);

    console.log(totalCoast);

}
supplies(["4 ","2 ","5 ","13 "]);