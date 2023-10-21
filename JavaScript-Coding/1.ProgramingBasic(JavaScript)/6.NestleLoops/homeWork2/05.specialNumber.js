function specialNumber(input) {

    let specialNum = Number(input[0]);
    let startNum = 1111;
    let endNum = 9999;

    let printLine = "";

    for (let i = startNum; i <= endNum; i++) {

        let curStrNum = "" + i;
        let stringNumber = "";

        for (let j = 0; j < curStrNum.length; j++) {

            let currentDigit = Number(curStrNum.charAt(j));

            if (specialNum % currentDigit === 0) {
                stringNumber += currentDigit;
            }

        }
        if (stringNumber.length === curStrNum.length) {
            printLine += stringNumber + " ";
        }

    }
    console.log(printLine);

}
specialNumber(["3"]);