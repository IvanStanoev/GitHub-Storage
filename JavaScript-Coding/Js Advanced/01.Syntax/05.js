function mathOperations(n1, n2, operator) {
    
    let result;

    switch (operator) {
        case '+': result = n1 + n2;
        break;
        case '-': result = n1 - n2;
        break;
        case '/': result = n1 / n2;
        break;
        case '*': result = n1 * n2;
        break;
        case '%': result = n1 % n2;
        break;
        case '**': result = n1 ** n2;
        break;
    }

    console.log(result);

}
mathOperations(5, 6, '+')