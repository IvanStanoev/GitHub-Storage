function stringSubstring(word, text) {
    
    text = text.toLowerCase().split(' ');   //текста ве1е ни е масив с думи ['...', '...', '...']

    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found.`);
    }

}


stringSubstring('javascript', 'JavaScript is the best programming language');