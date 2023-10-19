function sumDigits(num) {

    let newNum = "" + num;
    let sum = 0;

    for (let i = 0; i < newNum.length; i++) {

        sum += Number(newNum[i]);
    }
    console.log(sum);
}
sumDigits(543);