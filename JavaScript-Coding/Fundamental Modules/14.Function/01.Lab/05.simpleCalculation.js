function simpleCalculation(a, b, operation) {

    let result = 0;
    switch (operation) {
        case "multiply":
            result = a * b;
            break;
        case "divide":
            result = a / b;
            break;
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
    }
    console.log(result);


}
simpleCalculation(5, 5, 'multiply')