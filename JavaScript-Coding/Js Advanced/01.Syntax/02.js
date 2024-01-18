function stringLength(word1, word2, word3) {

    let sumLength;
    let averageLength;

    let firstArgumentLength = word1.length;
    let secondArgumentLength = word2.length;
    let thirtArgumentLength = word3.length;

    sumLength = firstArgumentLength + secondArgumentLength + thirtArgumentLength;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake');