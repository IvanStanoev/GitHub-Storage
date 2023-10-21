function combination(input) {

    let num = Number(input);
    let result = 0;
    let counter = 0;

    for (let x1 = 0; x1 <= num; x1++) {
        for (let x2 = 0; x2 <= num; x2++) {
            for (let x3 = 0; x3 <= num; x3++) {
                result = x1 + x2 + x3;
                if (result == num) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
combination("25");