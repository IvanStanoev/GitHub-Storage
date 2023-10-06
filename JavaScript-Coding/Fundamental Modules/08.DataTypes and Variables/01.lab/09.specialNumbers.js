function solve(num) {

    let sum = 0;
    for(let i = 0; i < num; i++) {

    sum += Number(num[i]);
    
    console.log(sum ?
    `${num} Amazing? True` : `${num} Amazing? False`);
    }

}
solve(15);