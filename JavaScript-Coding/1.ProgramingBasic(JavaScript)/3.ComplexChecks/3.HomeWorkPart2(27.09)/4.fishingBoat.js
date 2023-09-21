function fishingBoat(input) {
 
    let budget = Number(input[0]); 
    let season = input[1];
    let fisherCount = Number(input[2]);
 
    let discount = 0;
    let finalPrice = 0;
 
    switch (season) {  //Цена за сезона.
 
        case 'Spring': boatPrice = 3000;

            break;
 
        case 'Summer': boatPrice = 4200;
 
            break;
 
        case 'Autumn': boatPrice = 4200;
 
            break;
 
        case 'Winter': boatPrice = 2600;
 
            break;
 
        default: ; break;
 
    } 
    
    if (fisherCount <= 6) {  //Отстъпка за бр. рибари. 
        discount = 0.10;
    
    } else if (fisherCount <= 11) { 
        discount = 0.15;
 
    } else {
        discount = 0.25;
 
    }

    finalPrice = boatPrice - (boatPrice * discount);  //Допълнителна отстъпка, ако са четен бр. освен ако не е есен.
 
    if (fisherCount % 2 == 0 && season !== 'Autumn') { 
        finalPrice *= 0.95; 
    
    }
 
    if (budget >= finalPrice) {  //Цената спрямо сезона и бр. на рибарите.
        console.log(`Yes! You have ${(budget - finalPrice).toFixed(2)} leva left.`) 
    
    } else {
        console.log(`Not enough money! You need ${Math.abs(budget - finalPrice).toFixed(2)} leva.`) 
    
    }

}
fishingBoat(["3000",
"Summer",
"11"])