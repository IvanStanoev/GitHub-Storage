// function oddAndEven(num) {

//     let evenSum = 0;
//     let oddSum = 0;

//     let numAsStr = num.toString();          //String(num);

//     for (let char of numAsStr) {

//         let digit = Number(char);

//         if (digit % 2 == 0) {
//             evenSum += digit;
//         } else {
//             oddSum += digit;
//         }
//     }

//     console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

// }



function oddAndEven(num) {
    
    let numAsStr = num.toString();          //String(num);
    let evenOddSum = calcEvenOddSum(numAsStr);

    console.log(`Odd sum = ${evenOddSum[1]}, Even sum = ${evenOddSum[0]}`);

    function calcEvenOddSum(str) {

        let evenSum = 0;
        let oddSum = 0;
    
        for (let char of numAsStr) {
    
            let digit = Number(char);
    
            if (digit % 2 == 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
    
        return [evenSum, oddSum];

    }


}
oddAndEven(1000435);