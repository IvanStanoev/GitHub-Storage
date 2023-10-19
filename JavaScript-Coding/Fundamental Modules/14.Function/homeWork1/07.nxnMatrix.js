function nxnMatrix(num) {

    for (let rowNum = 1; rowNum <= num; rowNum++) {
        let curRow = `${num} `.repeat(num);
        console.log(curRow);
    }
}
nxnMatrix(3);