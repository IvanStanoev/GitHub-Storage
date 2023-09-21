function priorityCondition() {

    let a = 110;
    let b = 200;
    let c = 300;

    if ((a >= 100 && b <= 200) || (c + b >= 300 && c <= 400)) {
        console.log("Yes");  // Yes
    }
    if (a >= 100 && (b <= 200 || c + b >= 300) && c <= 400) {
        console.log("Yes");  // No output
    }
}
priorityCondition();

//  a  |  b  | result  ||
//-------------------    
//  1  |  0  |  true
//  0  |  1  |  true
//  0  |  0  |  false
//  1  |  1  |  true