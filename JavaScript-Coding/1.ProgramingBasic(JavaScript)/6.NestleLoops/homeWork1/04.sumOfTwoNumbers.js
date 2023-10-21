function sumOfTwoNumbers(input) {

    let beginNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let result = 0;
    let combination = 0;


    for (let x1 = beginNum; x1 <= endNum; x1++) {
        for (let x2 = beginNum; x2 <= endNum; x2++) {
            result = x1 + x2;
            combination++;
            if (result == magicNum) {
                console.log(`Combination N:${combination} (${x1} + ${x2} = ${result})`);
                return;
            }
        }
    }
    console.log(`${combination} combinations - neither equals ${magicNum}`);
}
sumOfTwoNumbers(["23", "24", "20"]);