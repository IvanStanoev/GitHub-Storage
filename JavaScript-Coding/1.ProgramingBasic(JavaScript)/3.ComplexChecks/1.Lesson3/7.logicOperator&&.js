function logicOperators(input) {
    
    let a = Number(input[0]);
    
    if (a > 5 && a < 10 && a % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
logicOperators(["6"]);  // = true
logicOperators(["4"]);  // = false

//  a   |   b   | result|  &&
//------------------------------ 
//  1   |   0   |   0   | false
//  0   |   1   |   0   | false
//  0   |   0   |   0   | false
//  1   |   1   |   1   | true
