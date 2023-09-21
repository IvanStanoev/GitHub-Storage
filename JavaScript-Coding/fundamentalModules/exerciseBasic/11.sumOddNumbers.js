function sumOdd(num) {

    let sum = 0;
    let oddNumber = 1;

    while (num >= 1) {

        console.log(oddNumber);
        sum += oddNumber;
        num--;
        oddNumber += 2; 
        
    }
    console.log(`Sum: ${sum}`);

}
sumOdd(5)