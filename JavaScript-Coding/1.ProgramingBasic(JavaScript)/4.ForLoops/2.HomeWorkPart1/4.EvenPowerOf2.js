function power(input) {

    let power = input;

    for (let num = 0; num <= power; num += 2) {
        console.log(Math.pow(2,num));
    }

}
power(["3"])