function signCheck(numOne, numTwo, numThree) {

    let sum1 = numOne * numTwo;
    let result = sum1 * numThree;

    if (result > 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);