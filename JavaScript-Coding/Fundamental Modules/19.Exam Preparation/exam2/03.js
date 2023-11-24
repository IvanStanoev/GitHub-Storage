function numbers(str) {
    
    let nums = str.split(' ').map(Number);                                 // сплитваме по 'space'
    
    let avg = nums.reduce((acc, val) => acc + val) / nums.length;

    console.log(avg);


}
numbers("10, 20, 30, 40, 50");