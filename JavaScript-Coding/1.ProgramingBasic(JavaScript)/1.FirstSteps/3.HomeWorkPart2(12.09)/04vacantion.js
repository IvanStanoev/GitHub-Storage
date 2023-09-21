function vacantionBooksList(input) {

    let bookPages = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);

    let totalTime = bookPages / pages;
    let totalHours = totalTime / days;

    console.log(totalHours);

}
vacantionBooksList(["212 ","20 ","2 "])