function wordTracker(arr) {

    let searchedWord = arr.shift().split(' ');    //  получаваме - this sentence - с .shift(), ['this', 'sentence'] -> като добавим .split(' ')
    let occurrences = {};

    for (let word of searchedWord) {
        occurrences[word] = 0;                 // към момента съвпадението на думата е 0, все още не знам колко голям е текста и колко думи ще съвпаднат
    }

    for (let word of arr) {
        if (word in occurrences) {             // ако думата я има като ключ в обекта occurrences
            occurrences[word]++;               // текущата дума ще се увеличи с 1 съвпадение
        }
    }

    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]); // преобразуваме обекта в масив и сортираме при намаляващ ред b-a, в увеличаващ ред a-b

    for (let [word, repeats] of entries) {
        console.log(`${word} - ${repeats}`);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);