function sumNumbers(n, m) {
    
    let result = 0;
    let num1 = Number(n);
    let num2 = Number(m);

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    return result;
}
sumNumbers('1', '5');