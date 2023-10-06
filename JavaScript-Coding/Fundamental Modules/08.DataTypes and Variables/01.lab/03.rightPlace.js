// function place(word, symbol, match) {

//     let result = "";

//     for (let i = 0; i < word.length; i++) {

//         if (word[i] == "_") {
//             result += symbol;
//         } else {
//             result += word[i];
//         }
//     }

//     if (result == match) {
//         console.log("Matched");
//     } else {
//         console.log("Not Matched");
//     }
// }
function place(str,char,result) {
    let res = str.replace("_",char);
    let output = res === result ? "Matched" : "Not Matched";
    console.log(output);
}
place("Str_ng", "I", "String");
place("Str_ng", "i", "String");