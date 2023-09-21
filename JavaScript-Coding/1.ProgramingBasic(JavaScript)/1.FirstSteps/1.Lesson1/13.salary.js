function salary(input) {

    let bags = Number(input[0]);
    let hours = Number(input[1]);

    let totalCut = bags * 200;
    let priceForCut = totalCut * 0.027;
    let hoursPrice = hours * 3.5;

    let salary = (hoursPrice + priceForCut);
    let bruto = 2351.00;
    let bonus = salary - bruto;
    let total = bruto - ((349 + 364) - (237 + 165));
    let cash = total + bonus;
    let netto = total - 93;
    
    console.log(`Нарязани ${totalCut} бр. за месец.`);
    console.log(`Пари от рязане:${priceForCut.toFixed(2)} евро.`);
    console.log(`Пари от часове:${hoursPrice.toFixed(2)} евро.`);
    console.log(`Общо:${cash.toFixed(2)} евро, след спиране.`);
    console.log(`Преведени:${netto.toFixed(2)} евро.`);
    console.log(`Бонус:${bonus.toFixed(2)} евро.`);
    console.log(`Бонус:${salary.toFixed(2)} евро.`);
}
salary(["357",   // Брой кисийки за месец.  (357)кисийки
"224"])          // Брой часове за месец.   (224)часове
