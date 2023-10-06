function triangle(maxRow) {

    for (let num = 1; num <= maxRow; num++) {
        let curRow = "";
        for (count = 1; count <= num; count++) {
            curRow += num + " ";
        }
        console.log(curRow);
    }
}
triangle(3);