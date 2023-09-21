function sum(number) {

    let sum = 0;
    let neededNumber = 1;

    for (let counter = 1; counter <= number; counter++) {

        sum += neededNumber;
        console.log(neededNumber);
        neededNumber += 2;
    }
    console.log(`Sum: ${sum}`);
}
sum(5);