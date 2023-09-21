function exampleOperator() {

    let num = 6;

    if (num > 5 && num < 10 && num % 2 == 0) {  //if checks less than 3
        console.log("Correct number");
    }

    if (num > 5) {
        if (num < 10) {
            if (num % 2 === 0) {
                console.log("Correct number");  //if checks more than 3
            }
        }
    }

}
exampleOperator();
// if check are more then 3