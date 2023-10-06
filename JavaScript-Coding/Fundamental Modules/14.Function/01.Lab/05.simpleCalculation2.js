function solve(a, b, operator) {

    let operas = {
        "add": (a, b) => a + b,
        "subtract": (a, b) => a - b,
        "multiply": (a, b) => a * b,
        "divide": (a, b) => a / b,
        "power": (a, b) => a ** b,
    };

    let operation = operas[operator]
    console.log(operation(a, b));
}
solve(5, 3, "add");