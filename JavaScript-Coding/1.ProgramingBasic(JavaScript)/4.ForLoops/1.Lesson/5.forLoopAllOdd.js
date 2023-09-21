function forLoop(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    for (let num = start; num <= end; num++) {
        
        if (num % 2 !== 0) {  // !== Всички нечетни числа.
            console.log(num); //Отпечатва всички четни числа от 14 до 33.
        }
        
    }

}
forLoop(["14", "33"])