function smallestTwo(arr) {

    let result = arr.sort((a, b) => a - b).slice(0, 2).join(" ");
    console.log(result);
    
    // arr => arr.sort((a, b) => a - b).slice(0, 2).join(" ");
    // faster runtimearr => arr.sort((a, b) => a - b).slice(0, 2).join(" ");

}
smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]); 