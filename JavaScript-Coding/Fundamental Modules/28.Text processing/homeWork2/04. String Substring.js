function stringSubstring(word, text) {

    text = text.toLowerCase().split(' ');   //текста ве1е ни е масив с думи ['...', '...', '...']

    if (text.includes(word)) {   // ако думата я има
        console.log(word);       // отпечатай я
    } else {                     // ако я няма
        console.log(`${word} not found!`);   // отпечатай (думата not found!)
    }

}

stringSubstring('javascript', 'JavaScript is the best programming language');