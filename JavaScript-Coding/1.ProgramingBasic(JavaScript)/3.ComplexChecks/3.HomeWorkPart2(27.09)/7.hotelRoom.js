function hotelRoom(input) {


    let month = input[0];  //Вход месец
    let nights = Number(input[1]);  //Бр. нощувки

    let priceStudio = 0;  //Цена студйо
    let priceApartment = 0;  //Цена апартамент


    switch (month) {  //Предлагат се следните отстъпки

        case "May":
        case "October":
            priceStudio = nights * 50;
            priceApartment = nights * 65;

            break;  //Цени на нощувка

        case "June":
        case "September":
            priceStudio = nights * 75.2;
            priceApartment = nights * 68.7;

            break;  //Цени на нощувка

        case "July":
        case "August":
            priceStudio = nights * 76;
            priceApartment = nights * 77;

            break;  //Цени на нощувка

    }
    if ((month === "May" || month === "October") && nights > 7 && nights < 14) {

        priceStudio = priceStudio * 0.95;
        priceApartment = nights * 65;      //5% Отстъпка

    } else if ((month === "May" || month === "October") && nights > 14) {

        priceStudio = priceStudio * 0.7;
        priceApartment = priceApartment * 0.9;  //30% Отстъпка

    } else if ((month === "June" || month === "September") && nights > 14) {

        priceStudio = priceStudio * 0.8;
        priceApartment = priceApartment * 0.9;  //20% Отстъпка

    } else if (nights > 14) {

        priceApartment = priceApartment * 0.9;
        priceStudio = nights * 76;             //10% Без значение от месеца

    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}
hotelRoom(["May",
    "15"])