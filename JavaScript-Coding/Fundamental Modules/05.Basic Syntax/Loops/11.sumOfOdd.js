function sumOfOdd(num) {

    let sum = 0;
    let currentNum = 1;
    for (let i = 1; i <= num; i++) {

        console.log(currentNum);

        sum += currentNum;
        currentNum += 2;

    }
    console.log(`Sum: ${sum}`);

}
sumOfOdd(5);