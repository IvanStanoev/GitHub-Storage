function multiplication() {

    let result = 0;
    for (let n = 1; n <= 10; n++) {
        for (let x = 1; x <= 10; x++) {
            result = n * x;
            console.log(`${n} * ${x} = ${result}`);
        }
    }
}
multiplication();