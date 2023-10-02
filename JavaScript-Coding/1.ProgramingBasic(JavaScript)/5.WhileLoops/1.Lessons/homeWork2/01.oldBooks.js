//function oldBooks(input) {
//
//    let favouriteBook = input[0];
//
//    let index = 1;
//    let bookIsFound = false;
//    let nextBookName = input[index];
//    
//    while (nextBookName !== "No More Books") {
//        
//        if (nextBookName === favouriteBook) {
//            bookIsFound = true;
//            break;
//        }
//
//        index++;
//        nextBookName = input[index];
//
//    }
//
//    if (bookIsFound === false) {
//        console.log(`The book you search is not here!`);
//        console.log(`You checked ${index - 1} books.`);
//    } else {
//        console.log(`You checked ${index - 1} books and found it.`);
//    }
//
//}

function oldBooks(input) {

    let searchedBook = input[0];

    let command = input[1];
    let index = 2;
    let booksChecked = 0;

    while (command !== "No More Books") {

        if (command === searchedBook) {
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        }

        booksChecked++;

        command = input[index];
        index++;
    }

    if (command === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksChecked} books.`);
    }
}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])