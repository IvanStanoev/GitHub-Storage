function sumNumbers(input) {

    let goalNumber = Number(input[0]);
    let sumOfNumbers = 0;
    let index = 1;
    let currentNum = Number(input[index]);

    while (sumOfNumbers < goalNumber) {

        sumOfNumbers += currentNum;

        index++;
        currentNum = Number(input[index]);

    }
    console.log(sumOfNumbers);
}
sumNumbers(["100", "10", "20", "30", "40"]);