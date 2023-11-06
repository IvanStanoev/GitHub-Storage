let arr = [3, 5, 1, 7, 0, 11];

console.log(arr);

arr.sort((a, b) => a - b);  // from down to up
arr.sort((a, b) => b - a);  // from up to down


// arr.sort(compare);  //function compare fix the positions

console.log(arr);

// function compare(a, b) {

//     return a - b;.
//     //return b - a; // sort from ent to start

//     // if (a > b) {
//     //     return 1;
//     // } else if (a < b) {
//     //     return -1;
//     // } else {
//     //     return 0;
//     // }
// }