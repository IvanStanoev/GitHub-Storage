function stringOccurrences(input, str) {

    let words = input.split(' ');

    let count = 0;

    for (let word of words) {
        if (word == str) {
            count++;
        }
    }

    console.log(count);
}

function stringOccurrences(input, str) {

    let words = input.split(' ');
    let matches = words.filter(word => word == str);
    
    console.log(matches.length);
}

stringOccurrences('This is a word and it also is a sentence', 'is');