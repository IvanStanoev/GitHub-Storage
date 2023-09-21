function newHouse(input) {

    let typeFlower = input[0];
    let quntity = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;    //Трябва да инициализираме цена.За целта Създаваме price = 0;

    //"Roses","Dahlias","Tulips","Narcissus","Gladiolus".

    switch (typeFlower) {

        case "Roses": price = quntity * 5;

            if (quntity > 80) {
                price = price * 0.90;   //-10% към цената
            }

            break;

        case "Dahlias": price = quntity * 3.80;

            if (quntity > 90) {
                price = price * 0.85;   //-15% към цената
            }

            break;

        case "Tulips": price = quntity * 2.80;

            if (quntity > 80) {
                price = price * 0.85;   //-15% към цената
            }

            break;

        case "Narcissus": price = quntity * 3;

            if (quntity < 120) {
                price = price * 1.15;   // +15% към цената
            }

            break;

        case "Gladiolus": price = quntity * 2.50;

            if (quntity < 80) {
                price = price * 1.20;   // +20% към цената
            }

            break;

    }   let diff = Math.abs(price - budget);  //Създаваме променлива (diff) с помоща на Math.abs(...) за да изчислим разликата в положително число.

    if (budget >= price) {

        console.log(`Hey, you have a great garden with ${quntity} ${typeFlower} and ${diff.toFixed(2)} leva left.`);

    }
    else {

        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);

    }

}
newHouse(["Roses", "55", "250"])