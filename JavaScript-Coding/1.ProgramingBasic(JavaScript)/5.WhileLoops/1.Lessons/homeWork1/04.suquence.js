function sequence(input) {

    let counter = 1;

    while (counter <= input) {

        console.log(counter);
        counter = (counter * 2) + 1;
    }
}
sequence("8")