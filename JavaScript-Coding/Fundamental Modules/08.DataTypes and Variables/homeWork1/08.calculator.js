function calculator(num, operator, num2) {

    let operation = operator;
    let sum = 0;

    if (operation == "+") {
        sum = num + num2;
    } else if (operation == "-") {
        sum = num - num2;
    } else if (operation == "/") {
        sum = num / num2;
    } else if (operation == "*") {
        sum = num * num2;
    }
    console.log(sum.toFixed(2));
}
calculator(25.5, "-", 3);