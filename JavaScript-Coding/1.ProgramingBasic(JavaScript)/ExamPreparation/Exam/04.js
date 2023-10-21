function solve4(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let currentNum = "";
    let checkNum = 0;

    for (let i = m; i >= n; i--) {

        checkNum = i

        if (i % 2 === 0 && i % 3 === 0) {

            if (checkNum == s) {
                break;
            }
            currentNum += i + " ";
            checkNum = i;
        }

    }
    console.log(currentNum);
}
solve4(["1", "1000", "36"]);