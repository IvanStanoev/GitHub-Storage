function supplies(input) {

    let plastick = Number(input[0]);
    let litres = Number(input[1]);
    let mix = Number(input[2]);
    let hours = Number(input[3]);

    let pricePlastick = (plastick + 2) * 1.50;
    let priceLitres = (litres + 10 * (litres / 100)) * 14.50;
    let priceMix = mix * 5.00;

    let bags = 0.40;

    let priceMaterias = pricePlastick + priceLitres + priceMix + bags;
    let percentWorkers = 30 * (priceMaterias / 100) * hours;
    let salary = priceMaterias + percentWorkers;
    
    console.log(salary);

}
supplies(["10 ","11 ","4 ","8 "]);