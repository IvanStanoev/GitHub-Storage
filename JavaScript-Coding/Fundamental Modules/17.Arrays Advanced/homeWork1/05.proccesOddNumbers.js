function proccesOddNumbers(arr) {

    console.log(
        arr
            .filter((x, i) => i % 2 != 0)
            .map(x => x * 2)
            .reverse()
            .join(' ')
    );

}
proccesOddNumbers([10, 15, 20, 25]);

function proccesOddNumbers(arr) {

    let oddIndex = arr.filter((x, i) => i % 2 != 0);
    //console.log(oddIndex);

    let doubled = oddIndex.map(x => x * 2);
    //console.log(doubled);

    let reversed = doubled.reverse();
    let result = reversed.join(' ');
    console.log(result);
}
proccesOddNumbers([3, 0, 10, 4, 7, 3]);