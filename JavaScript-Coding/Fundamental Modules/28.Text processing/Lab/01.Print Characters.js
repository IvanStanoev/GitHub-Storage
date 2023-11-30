function printCharacters(input) {

    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }

    for (let char of input) {
        console.log(char);
    }
}


printCharacters('AWord');