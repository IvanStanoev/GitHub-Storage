function salary(days, hours, food) {

    let currentCountryFood = 20;
    let moneyForFood = food * currentCountryFood;
    let totalHours = hours * days;
    let moneyPerHour = 6;
    
    let currentSalary = moneyForFood + totalHours * moneyPerHour;
    
    totalSum = currentSalary.toFixed(2);
    
    if (moneyForFood > 0) {
        console.log(`Получаваш: ${currentCountryFood} euro - храноден.`);
        console.log(`Парите за храноден: ${days} дни по ${currentCountryFood} еuro = ${moneyForFood.toFixed(2)} euro.`);
        console.log(`Заплата без храноден: ${currentSalary.toFixed(2)} euro.`);
        console.log(`${(currentSalary * 1.95).toFixed(2)}`);
    }
    
    console.log(`Общия бр. часове: ${totalHours.toFixed(2)} часа.`);
    console.log(`Получаваш на час: ${moneyPerHour} euro.`);
    
    sum = moneyForFood + currentSalary;

    console.log(`Общо : ${sum.toFixed(2)} euro.`);
    moneyBg = sum * 1.95;

    console.log(`Пари обърнати в лева: ${moneyBg.toFixed(2)} лева.`);

    let bgMoney = 170;

    let bg = days * bgMoney;
    console.log(`Ако работиш в България на фиксирана надница (${bgMoney} лева): ${bg} лева за ${days} дни.`);


}
salary(26, 8, 26);