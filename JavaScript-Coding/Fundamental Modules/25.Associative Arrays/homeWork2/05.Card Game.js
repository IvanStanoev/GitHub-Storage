// { Peter: ['2C', '4H', '9H', 'AS', 'QS'], Tomas: ['3H', '10S', 'JC',...]}

function cardGameSolve(arr) {

    let playersCards = {};
    let powerValues = {           // помощен обект за да намерим каква е силата на картата като стойност от 1-вия ел на дадена карта
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }
    let typeValues = {                 // // помощен обект за да намерим каква е силата на картата като стойност от 2-вия ел на дадена карта
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }

    for (let playerDeck of arr) {

        let [playerName, cardsStr] = playerDeck.split(': ');    // сплитваме първоначалния масив (arr) и отделяме имената от картите - playerDeck.split(': ')
        let cards = cardsStr.split(', ');             // сплитваме картите от [cardStr]-String към cards = [масив от картите по отделно]

        if (playerName in playersCards) {             // ako името го има като ключ в (playerCards)
            playersCards[playerName].push(...cards);  // метода .push() комбиниран с метода (...) разбива и пушва всички ел. като отделни [елементи в общ масив]

            //for (let card of cards) {                 // обхождаме по cards пушваме свяка карта като нов масив
            //    cards.push();                         // пушваме свяка карта като нов масив
            //}                                         // прави същото като for цикъла

        } else {                                      // ако го няма името 
            playersCards[playerName] = cards;         //създай ключ(свойство) със съответното име и стойността (cards) с неговите карти
        }
    }

    let entries = Object.entries(playersCards);      // преобразуваме обекта в масив за да го обхождаме

    for (let [name, deck] of entries) {              // обхождаме entries и създаваме масиви ['Peter'],['2C', '4H', '9H',...]
        let uniqueDeck = new Set(deck);              // тези който се повтарят вече не присъстват (uniqueDeck = всички карти без повтарящите се)
        let deckValue = 0;                           // тук ще се сумират стойностите на всички карти 

        for (let card of uniqueDeck) {
            let power = card.slice(0, card.length - 1);  // за power вземаме ел от [0] индекс до дължината на масива т.е взима всички ел преди последния
            let type = card[card.length - 1];        // взимаме винаги последния елемент

            let cardValue = powerValues[power] * typeValues[type];  // умножаваме стойностите power и type от след като сме сравнили power и type
            deckValue += cardValue;
        }

        console.log(`${name}: ${deckValue}`);
    }

}
cardGameSolve([

    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'

])