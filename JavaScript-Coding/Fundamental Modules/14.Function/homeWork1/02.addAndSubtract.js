function addAndSubtract(n1, n2, n3) {

    let sum = (n1, n2) => n1 + n2;
    let subtract = (n1, n2) => n1 - n2;
    
    let result1 = sum(n1, n2);
    let result2 = subtract(result1, n3);

    console.log(result2);

    //function sum(n1, n2) {
    //    return n1 + n2;
    //}

    //function subtract(n1, n2) {
    //    return n1 - n2;
    //}
}
addAndSubtract(23, 6, 10)