function maxNumber(input) {

    let inputElement = input[0];
    let index = 1;
    let maxNum = Number.MAX_SAFE_INTEGER;

    while (inputElement !== "Stop") {
        let num = Number(inputElement);
        if (num < maxNum) {
            maxNum = num;
        }
        inputElement = input[index];
        index++;
    }
    console.log(maxNum);
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])