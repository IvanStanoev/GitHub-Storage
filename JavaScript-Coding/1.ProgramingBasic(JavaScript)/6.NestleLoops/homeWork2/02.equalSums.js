function equalsSums(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let printLine = "";

    for (let i = startNum; i <= endNum; i++) {

        let sumEven = 0;
        let sumOdd = 0;
        let currentNum = "" + i;

        for (let j = 0; j <= currentNum.length; j++) {

            let currentDigit = Number(currentNum.charAt(j));

            if (j % 2 == 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if (sumOdd === sumEven) {
            printLine += `${i} `;
        }

    }
    console.log(printLine);
}
equalsSums(["100000", "100050"]);