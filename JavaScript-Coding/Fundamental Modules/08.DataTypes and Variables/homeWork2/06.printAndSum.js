function demo(num, num2) {

    let sum = "";
    let count = 0;
    for (let i = num; i <= num2; i++) {
        sum += i + " ";
        count += i;
    }
    console.log(sum);
    console.log(`Sum: ${count}`);
}
demo(5, 10);