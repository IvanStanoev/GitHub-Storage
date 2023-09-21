function numInRoad() {

    let output = ``;
    
    for (let a = 1; a <= 5; a++) {
        
      //output += `${a},`;
      //output = output + `${a}`;
      
        if (a === 5) {
            output += `${a}`
        } else {
            output = output + `${a},`
        }

    }
    console.log(output);

}
numInRoad()

// Без запетая след последната стойност.
