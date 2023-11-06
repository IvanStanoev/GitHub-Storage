// function negativeOrPositive(arr) {

//     let result = [];

//     for (let numAsString of arr) {
//         let num = Number(numAsString);

//         if (num < 0) {
//             result.unshift(num);
//         } else {
//             result.push(num);
//         }
//     }

//     for (let num of result) {
//         console.log(num);
//     }

// }
function negativeOrPositive(arr) {

    let result = [];

    for (let numAsString of arr) {
        let num = Number(numAsString);

        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join("\n"));

}
negativeOrPositive(["7", "-2", "8", "9"]);