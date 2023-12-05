function revealWords(wordsStr, text) {

    let words = wordsStr.split(', ');

    for (let word of words) {
        let len = word.length;
        let startTempate = '*'.repeat(len);
        
        text = text.replace(startTempate, word);
    }

    console.log(text);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');