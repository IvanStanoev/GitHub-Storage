function fruit(type, weight, money) {
    
    let fruitInKg = Number(weight) / 1000;
    let sum = fruitInKg * Number(money);

    console.log(`I need $${sum.toFixed(2)} to buy ${fruitInKg.toFixed(2)} kilograms ${type}.`);
}
fruit('orange', 1563, 2.35);