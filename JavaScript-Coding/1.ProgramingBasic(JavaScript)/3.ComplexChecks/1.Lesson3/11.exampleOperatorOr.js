function opreratorOr(input) {

    let word = input[0];

    if (word == "Example") {
        console.log(true);
    } else if (word == "Demo") {
        console.log(false);
    } // Вложени проверки
    
    if (word == "Example" || word == "Demo"){
        console.log(true);
    } // Логически оператор ||
}
opreratorOr(["Example"]);
opreratorOr(["Demo"]);

//  a  |  b  | result  ||
//-------------------    
//  1  |  0  |  true
//  0  |  1  |  true
//  0  |  0  |  false
//  1  |  1  |  true